import React from "react";
import useGridStore from "../useGridStore";

const QuickExamples: React.FC = () => {
  const { setRows, setColumns, setMatrix, resetSolution } = useGridStore();

  const examples = [
    {
      name: "مثال بسيط 2×3",
      description: "معادلتان بمتغيرين",
      rows: 2,
      cols: 3,
      matrix: [
        [2, 1, 5],
        [1, -1, 1],
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
    {
      name: "مثال متوسط 3×4",
      description: "ثلاث معادلات بثلاثة متغيرات",
      rows: 3,
      cols: 4,
      matrix: [
        [2, -1, 1, 8],
        [-3, -1, 2, -11],
        [-2, 1, 2, -3],
      ],
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      name: "مثال كلاسيكي 3×4",
      description: "نظام خطي كلاسيكي",
      rows: 3,
      cols: 4,
      matrix: [
        [1, 2, -1, 3],
        [2, -1, 1, 1],
        [3, 1, -1, 4],
      ],
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
  ];

  const loadExample = (example: (typeof examples)[0]) => {
    resetSolution();
    setRows(example.rows);
    setColumns(example.cols);
    setTimeout(() => {
      setMatrix(example.matrix);
    }, 100);
  };

  return (
    <div className="mt-10 mb-10" dir="rtl">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
          <div>
            <h3 className="text-lg font-bold text-gray-900">أمثلة سريعة</h3>
            <p className="text-sm text-gray-600">
              جرب أحد هذه الأمثلة للبدء بسرعة
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="group bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 text-right"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 rounded-lg flex items-center justify-center text-purple-600 transition-colors duration-300">
                  {example.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                    {example.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    {example.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-purple-600 font-medium">
                    <span>تحميل المثال</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickExamples;
