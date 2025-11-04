export default function Footer() {
  return (
    <footer className="mt-20 mb-8">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 text-white">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
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
              حول الأداة
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              أداة احترافية لحل أنظمة المعادلات الخطية باستخدام طريقة جاوس-جوردن
              (Gauss-Jordan Elimination) مع شرح تفصيلي لكل خطوة.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-400"
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
              المميزات
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                حل دقيق وسريع للأنظمة الخطية
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                عرض الخطوات بشكل تفاعلي
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                شرح تفصيلي لكل عملية
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                أمثلة جاهزة للبدء السريع
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              معلومات تقنية
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">📐</span>
                طريقة الحذف الأمامي والخلفي
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">📊</span>
                تحويل إلى صيغة الدرج المختزل
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">🔍</span>
                كشف الأنظمة غير المتسقة
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✨</span>
                واجهة مستخدم تفاعلية
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} حاسبة المعادلات الخطية. جميع الحقوق
              محفوظة.
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>|</span>
              <span>React + TypeScript + Zustand</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
