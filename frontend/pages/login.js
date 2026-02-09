// src/pages/login.js
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-semibold text-gray-800">CareBridge</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/">Home</a>
          <a href="#">Citizen Access</a>
          <a href="#">Transparency</a>
        </div>
      </nav>

      {/* Center Content */}
      <section className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md text-center">

          {/* Icon */}
          <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-orange-400 flex items-center justify-center text-white text-xl font-bold">
            🛡️
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-gray-800">
            Welcome to CareBridge
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your mobile number to login
          </p>

          {/* Login Card */}
          <div className="mt-8 bg-white border rounded-xl shadow-sm p-6 text-left">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              📞 Mobile Number
            </label>

            <div className="mt-2 flex items-center border rounded-lg px-3 py-2">
              <span className="text-gray-500 text-sm mr-2">+91</span>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                className="w-full outline-none text-sm"
              />
            </div>

            
           <a href="/citizen-access" className="block mt-4">
    <button className="w-full bg-orange-300 hover:bg-orange-400 text-white py-2 rounded-lg text-sm font-medium">
      LOGIN!
    </button>
  </a>
          </div>

          {/* Info Box */}
          <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-left flex gap-3">
            <div className="text-indigo-600">🔒</div>
            <div>
              <p className="text-sm font-medium text-indigo-700">
                Secure Authentication
              </p>
              <p className="text-xs text-indigo-600 mt-1">
                Your phone number will be verified via OTP. We’ll also check if
                it’s linked to your Aadhaar for accessing welfare schemes.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
