import useGridStore from "../useGridStore";

export default function SolveBottom() {
  const { solve, solved, resetSolution } = useGridStore();

  return (
    <div className="mt-10 mb-10 text-right" dir="rtl">
      {!solved ? (
        <button
          onClick={solve}
          className="group relative flex justify-center content-center items-center text-center w-full px-8 py-5 text-white text-lg font-bold transition-all duration-300 rounded-xl shadow-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 hover:shadow-blue-500/50 hover:-translate-y-1 transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <svg
            className="relative ml-3 group-hover:rotate-12 transition-transform duration-300"
            style={{ width: "32px", height: "32px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="#fff"
              d="M16,4c-4.963,0-9,4.038-9,9c0,3.186,1.781,5.278,3.212,6.959C11.172,21.085,12,22.059,12,23v5h3 v1h2v-1h3v-5c0-0.941,0.828-1.915,1.788-3.041C23.219,18.278,25,16.186,25,13C25,8.038,20.963,4,16,4z M18,26h-4v-2h4V26z M20.265,18.662c-0.923,1.084-1.805,2.12-2.132,3.338h-4.266c-0.327-1.218-1.209-2.254-2.132-3.338C10.391,17.083,9,15.45,9,13 c0-3.86,3.141-7,7-7s7,3.14,7,7C23,15.45,21.609,17.083,20.265,18.662z M16,7v2c-2.206,0-4,1.794-4,4h-2C10,9.691,12.691,7,16,7z"
            />
          </svg>
          <span className="relative">حل النظام خطوة بخطوة</span>
          <div className="absolute left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-6 h-6 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-r-4 border-green-500 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-800">
                    تم حل النظام بنجاح! ✨
                  </h3>
                  <p className="text-green-700 text-sm mt-1">
                    استخدم الأزرار أدناه للتنقل بين الخطوات
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={resetSolution}
            className="group flex justify-center items-center w-full px-6 py-4 text-gray-700 font-semibold transition-all duration-300 rounded-xl border-2 border-gray-300 bg-white hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            حل مصفوفة جديدة
          </button>
        </div>
      )}
    </div>
  );
}
