import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#101A2C] to-[#0F2238] text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* --- Improved X-Ray Decorative BG --- */}
      <img
        src="/src/assets/chest-example.png"
        alt="X-ray"
        className="
          absolute
          left-[-30px]
          bottom-[50px]
          w-[320px]
          opacity-[0.5]
          blur-[1px]
          pointer-events-none
          select-none
          transform
          -rotate-2
        "
      />

      {/* --- LARGE LOGO (Above Title) --- */}
      <div className="flex flex-col items-center z-10 mt-[-40px]">
        {/* Logo Placeholder */}
        <img
          src="/src/assets/logo.png"
          alt="PneumoSight Logo"
          className="w-[300px] h-[200px] object-contain drop-shadow-xl mb-4"
        />

        {/* Large Title */}
        <h1 className="text-6xl font-extrabold tracking-tight mb-3 drop-shadow-lg">
          PneumoSight
        </h1>

        <p className="text-lg text-gray-300 mb-10 max-w-lg text-center">
          AI-Powered Pneumonia Detection for Chest X-Ray Imaging
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/upload"
            className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Upload Chest X-Ray & Diagnose
          </Link>
        </div>
      </div>
    </div>
  );
}
