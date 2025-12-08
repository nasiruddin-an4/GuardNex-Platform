import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../config/api";



const DetectionForm = ({ onDetectionResult }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("email");
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef(null);

  // Update character count when message changes
  useEffect(() => {
    setCharCount(message.length);
  }, [message]);



  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Please enter a message to check");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // Get stored token

      const response = await axios.post(
        `${API_URL}/predict`,
        {
          message,
          type: messageType,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Detection response:", response.data);

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      onDetectionResult({
        message,
        type: messageType,
        isSpam: response.data.isSpam,
        confidence: response.data.confidence,
        language: response.data.language,
        indicators: response.data.indicators,
        timestamp: new Date().toISOString(),
      });

      toast.success("Detection completed successfully");
    } catch (error) {
      console.error("Detection error:", error);
      
      // Check for language support error (400 status from axios)
      if (error.response?.status === 400 && error.response?.data?.error?.includes("language isn't supported")) {
        const errorData = error.response.data;
        toast.error(errorData.error);
        onDetectionResult({
          message,
          type: messageType,
          isSpam: null,
          confidence: 0,
          language: errorData.language,
          unsupportedLanguage: true,
          error: errorData.error,
          timestamp: new Date().toISOString(),
        });
        setLoading(false);
        return;
      }

      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Error detecting spam. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setMessage("");
    textareaRef.current.focus();
  };

  const insertExampleMessage = () => {
    // Use a generic spam example
    const genericExample = "Congratulations! You've won a $1000 gift card! Click here now to claim your prize: http://claim-prize.com. Limited time offer!";
    setMessage(genericExample);
  };

  const autoResize = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-up overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Message Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter your message (Email/SMS/Social Media) to check if it's spam.
            </p>
          </div>



          {/* Message Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="message" className="label">
                Message Content
              </label>
              <div className="text-xs text-gray-500">
                {charCount} characters
              </div>
            </div>
            <div className="relative">
              <textarea
                id="message"
                ref={textareaRef}
                rows="6"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  autoResize(e);
                }}
                onInput={autoResize}
                placeholder="Enter your message here (Email, SMS, or Social Media)..."
                className="input font-mono text-sm resize-none custom-scrollbar bg-gray-50 min-h-[144px]"
                style={{
                  backgroundColor: "#f9fafb",
                  overflow: "hidden",
                }}
              />
              {message && (
                <button
                  type="button"
                  onClick={clearForm}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear message"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={insertExampleMessage}
              className="text-sm text-primary-600 hover:text-primary-800 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Insert example
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={clearForm}
                className="btn-outline text-sm py-1.5"
              >
                Clear
              </button>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 py-1.5"
                disabled={loading || !message.trim()}
              >
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span>Detect Spam</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetectionForm;
