#!/usr/bin/env pwsh

# Comprehensive test of language support validation

$token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzY1Mjk2NjY4fQ.IhF4kl6Pkd7qkbWaVniCPH52Nmi-794PNYqTTWEZ0DY"

$testCases = @(
    @{
        name = "English (SUPPORTED)"
        message = "Free money now! Click here immediately!"
        shouldSucceed = $true
    },
    @{
        name = "Bangla (SUPPORTED)"
        message = "আপনি ১ লক্ষ টাকা জিতেছেন! কল করুন"
        shouldSucceed = $true
    },
    @{
        name = "Spanish (SUPPORTED)"
        message = "¡Felicitaciones! Has ganado 1000 euros gratis"
        shouldSucceed = $true
    },
    @{
        name = "French (UNSUPPORTED)"
        message = "Bonjour! Vous avez gagné 1000 euros gratuits"
        shouldSucceed = $false
    },
    @{
        name = "Chinese (UNSUPPORTED)"
        message = "你好，你赢了1000元。请立即点击链接"
        shouldSucceed = $false
    }
)

Write-Host "=" * 70
Write-Host "Language Support Validation - Comprehensive Test"
Write-Host "=" * 70

foreach ($testCase in $testCases) {
    Write-Host "`n$($testCase.name)"
    Write-Host "-" * 70
    Write-Host "Message: $($testCase.message.Substring(0, [Math]::Min(50, $testCase.message.Length)))..."
    
    $predictionData = @{
        "message" = $testCase.message
        "type" = "email"
    } | ConvertTo-Json
    
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/predict" -Method POST -ContentType "application/json" -Headers @{"Authorization" = "Bearer $token"} -Body $predictionData -SkipHttpErrorCheck
    
    $result = $response.Content | ConvertFrom-Json
    $statusCode = $response.StatusCode
    
    if ($testCase.shouldSucceed) {
        if ($statusCode -eq 200 -and -not $result.error) {
            Write-Host "✓ PASS - Detection successful"
            Write-Host "  Language: $($result.language)"
            Write-Host "  Spam: $($result.isSpam)"
            Write-Host "  Confidence: $($result.confidence)"
        } else {
            Write-Host "✗ FAIL - Expected success but got error"
            Write-Host "  Status: $statusCode"
            Write-Host "  Error: $($result.error)"
        }
    } else {
        if ($statusCode -eq 400 -and $result.error -and $result.error.Contains("language isn't supported")) {
            Write-Host "✓ PASS - Unsupported language error shown"
            Write-Host "  Error: $($result.error.Substring(0, 60))..."
            Write-Host "  Detected Language: $($result.language)"
        } else {
            Write-Host "✗ FAIL - Expected unsupported language error"
            Write-Host "  Status: $statusCode"
            if ($result.error) {
                Write-Host "  Error: $($result.error)"
            } else {
                Write-Host "  Language: $($result.language) (incorrectly accepted)"
            }
        }
    }
}

Write-Host "`n" + "=" * 70
Write-Host "Test Complete"
Write-Host "=" * 70
