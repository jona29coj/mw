import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LoginPage = () => {
  return (
    <div className={`flex h-screen ${geistSans.variable}`}>
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16">
        <Image
          src="/images/loginlogo.png"
          alt="Elements Energy Logo"
          width={128}
          height={128}
          className="mb-6"
        />
        <h2 className="text-3xl font-semibold text-gray-900">Elements Dashboard</h2>
        <p className="text-gray-500 mb-6">Sign in to continue</p>

        {/* Login Form */}
        <form className="w-full max-w-sm space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@reallygreatsite.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="*******"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
            LOGIN
          </button>
        </form>
      </div>

      {/* Right Section - Background & Text */}
      <div className="w-1/2 relative flex justify-center items-center bg-green-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bglogin.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Overlay */}
        <div className="text-center z-10 px-10">
          <h2 className="text-4xl font-bold text-white leading-snug">
            Saving our planet <span className="text-green-300">together</span>,
            <br />
            one challenge at a time.
          </h2>
          <p className="text-white mt-4 text-lg">
            Taking the lead to preserve, protect, and heal nature begins together under one planet.
          </p>
        </div>
      </div>

      {/* Register Button */}
      <Link href="/register">
        <button className="absolute top-6 right-6 bg-gray-900 text-white px-5 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-700 transition">
          <span className="mr-2">REGISTER</span>
          <span>🔄</span>
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
