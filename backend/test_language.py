import re
import unicodedata

class MultiLanguagePreprocessor:
    def detect_language(self, text):
        text_lower = text.lower()
        
        # Character ranges for different scripts
        bengali_chars = len(re.findall(r'[\u0980-\u09FF]', text))
        spanish_chars = len(re.findall(r'[áéíóúñüÁÉÍÓÚÑÜ¿¡àèìòù]', text))
        
        # Other language script detection
        chinese_chars = len(re.findall(r'[\u4E00-\u9FFF]', text))
        arabic_chars = len(re.findall(r'[\u0600-\u06FF]', text))
        russian_chars = len(re.findall(r'[\u0400-\u04FF]', text))
        greek_chars = len(re.findall(r'[\u0370-\u03FF]', text))
        
        # Total alphabetic characters (excluding whitespace, digits, and punctuation)
        total_chars = len(re.sub(r'[\s\d\W]', '', text))
        
        if total_chars == 0:
            return 'english'
        
        bengali_ratio = bengali_chars / max(total_chars, 1)
        spanish_ratio = spanish_chars / max(total_chars, 1)
        chinese_ratio = chinese_chars / max(total_chars, 1)
        arabic_ratio = arabic_chars / max(total_chars, 1)
        russian_ratio = russian_chars / max(total_chars, 1)
        greek_ratio = greek_chars / max(total_chars, 1)
        
        # Check for non-Latin scripts first (these are definitely unsupported)
        if chinese_ratio > 0.1:
            return 'chinese'  # Unsupported
        elif arabic_ratio > 0.1:
            return 'arabic'  # Unsupported
        elif russian_ratio > 0.1:
            return 'russian'  # Unsupported
        elif greek_ratio > 0.1:
            return 'greek'  # Unsupported
        
        # Check for Bangla
        if bengali_ratio > 0.1:
            return 'bangla'
        
        # Check for Spanish with more strict criteria
        spanish_indicators = [
            'gratis', 'ganar', 'dinero', 'premio', 'oferta', 'urgente', 'garantía',
            'descuento', 'felicitaciones', 'euros', 'dólares', 'hola', 'cómo',
            'qué', 'sí', 'muy', 'bien', 'gracias', 'usted', 'señor', 'ahora'
        ]
        spanish_word_count = sum(1 for word in spanish_indicators if word in text_lower)
        has_spanish_punctuation = bool(re.search(r'[¿¡]', text))
        
        # Spanish detection: either has Spanish-specific punctuation, or has multiple Spanish keywords
        if has_spanish_punctuation or spanish_word_count >= 2:
            return 'spanish'
        
        # If it has Spanish accent chars or some Spanish words, check more carefully
        if spanish_ratio > 0.01:
            # Check if it's French (similar accents but different words)
            french_words = ['bonjour', 'merci', 'français', 'avec', 'mais', 'être', 'avoir', 'aller', 'pouvoir']
            if any(word in text_lower for word in french_words):
                return 'french'  # Unsupported
            # Otherwise likely Spanish
            if spanish_word_count >= 1:
                return 'spanish'
            return 'french'  # Default to French if has accents but no English/Spanish words
        
        # Default to English for anything else (Latin characters)
        return 'english'

# Test cases
preprocessor = MultiLanguagePreprocessor()

test_messages = {
    'english': "Hello, this is an English message. Free money now!",
    'bangla': "আপনি ১ লক্ষ টাকা জিতেছেন! কল করুন",
    'spanish': "¡Felicitaciones! Has ganado 1000 euros gratis",
    'french': "Bonjour! Vous avez gagné 1000 euros gratuits",
    'german': "Hallo! Sie haben 1000 Euro gewonnen",
    'chinese': "你好，你赢了1000元"
}

print("Testing language detection:")
print("-" * 50)
for lang, message in test_messages.items():
    detected = preprocessor.detect_language(message)
    status = "✓" if detected == lang else "✗"
    print(f"{status} {lang.upper():10} -> Detected: {detected:10} | Message: {message[:40]}...")

print("-" * 50)

# Test with supported languages check
supported_languages = ['bangla', 'english', 'spanish']
print("\nChecking supported languages:")
print("-" * 50)
for lang, message in test_messages.items():
    detected = preprocessor.detect_language(message)
    is_supported = detected in supported_languages
    status = "✓ SUPPORTED" if is_supported else "✗ NOT SUPPORTED"
    print(f"{status:15} - {lang.upper():10} (Detected as: {detected})")
