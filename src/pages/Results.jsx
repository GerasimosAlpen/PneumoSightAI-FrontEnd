import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();

  // Nanti backend akan mengirim data di sini:
  const { imageURL, prediction, confidence } = location.state || {
    imageURL: null,
    prediction: "No data",
    confidence: 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#101A2C] to-[#0F2238] text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Diagnosis Result</h1>

      {/* Jika belum ada data */}
      {!imageURL ? (
        <div className="text-center text-gray-300">
          <p>No image data available.</p>
          <Link
            to="/upload"
            className="mt-4 inline-block px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            Back to Upload
          </Link>
        </div>
      ) : (
        <>
          {/* Image preview */}
          <div className="relative">
            <img
              src={imageURL}
              alt="Uploaded X-ray"
              className="max-w-[480px] rounded-xl shadow-xl mb-6"
            />

            {/* Placeholder bounding box */}
            <div
              className="
              absolute
              top-[20%]
              left-[15%]
              w-[60%]
              h-[40%]
              border-4 border-red-400
              rounded-md
              pointer-events-none
            "
            ></div>
          </div>

          {/* Diagnosis Info */}
          <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg text-center w-[480px]">
            <h2 className="text-2xl font-semibold mb-2">
              {prediction || "Pneumonia Detected"}
            </h2>
            <p className="text-gray-300">
              Confidence:{" "}
              <span className="font-bold text-white">
                {confidence || "0.92"}
              </span>
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/upload"
            className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-90 transition"
          >
            Back to Upload
          </Link>
        </>
      )}
    </div>
  );
}
