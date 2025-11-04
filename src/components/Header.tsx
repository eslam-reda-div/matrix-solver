export default function Header() {
  return (
    <div className="mt-12 mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full mb-6 shadow-md">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="text-blue-800 font-bold text-lg">
            حلول احترافية للمعادلات الخطية
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
            حل أنظمة المعادلات الخطية
          </span>
        </h1>

        <div className="flex justify-center mb-4">
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
        </div>

        <p className="text-lg font-medium text-gray-700 lg:text-xl max-w-4xl mx-auto leading-relaxed">
          باستخدام{" "}
          <span className="text-blue-600 font-bold">
            طريقة جاوس-جوردن (Gauss-Jordan Elimination)
          </span>
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-blue-100">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">حل سريع ودقيق</h3>
              <p className="text-sm text-gray-600">
                خوارزمية متطورة لحل المعادلات بدقة عالية
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">شرح تفصيلي</h3>
              <p className="text-sm text-gray-600">
                تتبع كل خطوة من خطوات الحل مع شرح واضح
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">واجهة تفاعلية</h3>
              <p className="text-sm text-gray-600">
                تصميم عصري وسهل الاستخدام للجميع
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          📚 <span className="font-semibold">كيفية الاستخدام:</span> حدد حجم
          المصفوفة، أدخل القيم، ثم اضغط "حل النظام" للحصول على الحل خطوة بخطوة
        </p>
      </div>
    </div>
  );
}
