import { useState, useRef } from "react";

export default function VoiceAssistantPage() {
  const [language, setLanguage] = useState("en-IN");
  const [status, setStatus] = useState("Select language, then click to speak");
  const [output, setOutput] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const startListening = () => {
    if (typeof window === "undefined") return;

    if (recognitionRef.current) {
      recognitionRef.current.onresult = null;
      recognitionRef.current.onerror = null;
      recognitionRef.current.onend = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setStatus("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognitionRef.current = recognition;

    recognition.start();
    setListening(true);
    setStatus("Speak now…");

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setOutput("You said: " + text);
    };

    recognition.onend = () => {
      setListening(false);
      setStatus("Select language or click to speak again");
    };

    recognition.onerror = () => {
      setListening(false);
      setStatus("Could not hear clearly. Try again.");
    };
  };

  return (
    <div style={styles.container}>
      <h2>🎙️ CareBridge Voice Assistant</h2>

      <label>Select Language:</label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={styles.input}
      >
        <option value="en-IN">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="bn-IN">Bengali</option>
        <option value="kn-IN">Kannada</option>
      </select>

      <button
        onClick={startListening}
        style={{
          ...styles.button,
          backgroundColor: listening ? "red" : "#0070f3",
        }}
      >
        {listening ? "🎙️ Listening…" : "🎤 Click to Speak"}
      </button>

      <p style={{ fontWeight: "bold" }}>{status}</p>

      <div style={styles.output}>{output}</div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "10px",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  output: {
    marginTop: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    minHeight: "40px",
  },
};
