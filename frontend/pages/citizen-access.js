import { useRouter } from "next/router";
import { useState } from "react";

export default function CitizenAccessPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Top Tricolor Border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-400 via-white to-green-500" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-green-500 to-orange-400 flex items-center justify-center text-white font-bold">
            🛡️
          </div>
          <span className="font-semibold text-gray-800">CareBridge</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="text-orange-500 font-medium">Citizen Access</a>
          <a href="#" className="hover:text-black">Transparency</a>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
          Logout
        </button>
      </nav>

      {/* Content */}
      <section className="flex-1 flex justify-center pt-16">
        <div className="w-full max-w-xl text-center">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800">
            Discover Your{" "}
            <span className="text-green-600">Welfare Benefits</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Upload your government ID and let AI find the schemes you're eligible for
          </p>

          {/* Card */}
          <div className="mt-10 bg-white border rounded-xl shadow-sm p-6 text-left">

            {/* Step 1: Upload File */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                🟠 Step 1: Upload Government ID
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Upload your Aadhaar, PAN, or Voter ID for verification
              </p>

              {/* Upload Box */}
              <label
                className="mt-4 border-2 border-dashed rounded-lg p-8 text-center bg-orange-50 cursor-pointer flex flex-col items-center"
              >
                <div className="text-2xl">⬆️</div>
                <p className="text-sm text-gray-600 mt-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG or PDF (Max 5MB)
                </p>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <p className="mt-2 text-sm text-green-600">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Step 2: Voice Query */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                🟠 Step 2: Voice Query (Optional)
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Tell us what you're looking for in your preferred language
              </p>

              {/* Start Recording Button → Goes to Voice Assistant */}
              <button
                onClick={() => router.push("/voice-assistant")}
                className="mt-3 flex items-center gap-2 border px-4 py-2 rounded-md text-sm hover:bg-gray-50"
              >
                🎙️ Start Recording
              </button>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full bg-orange-300 hover:bg-orange-400 transition text-white py-2 rounded-md text-sm font-medium">
              ✨ Find My Benefits →
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}

