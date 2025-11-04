import React from "react";
import useGridStore from "../useGridStore";

const GridInput: React.FC = () => {
  const { rows, columns, setRows, setColumns } = useGridStore();

  const handleIncrement = (setter: (value: number) => void, value: number) => {
    setter(value + 1);
  };

  const handleDecrement = (setter: (value: number) => void, value: number) => {
    setter(Math.max(value - 1, 2));
  };

  return (
    <div className="mt-10 mb-10">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">حدد حجم المصفوفة</h3>
        <p className="text-sm text-gray-600 mt-1">
          اختر عدد المعادلات والمتغيرات في النظام
        </p>
      </div>
      <form className="mx-auto grid gap-6 mb-6 md:grid-cols-2">
        {/* Rows Input */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 transition-all duration-200 hover:shadow-xl">
          <label
            htmlFor="rows-input"
            className="block mb-3 text-base font-semibold text-gray-900"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              عدد الصفوف (المعادلات)
            </div>
          </label>
          <div className="relative flex items-center text-right" dir="ltr">
            <button
              type="button"
              onClick={() => handleDecrement(setRows, rows)}
              className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-l-xl p-3 h-14 transition-all duration-200 hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
              disabled={rows <= 2}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <div className="relative flex-1">
              <input
                type="number"
                id="rows-input"
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 h-14 font-bold text-center text-gray-900 text-2xl focus:ring-4 focus:ring-blue-300 block w-full"
                value={rows}
                readOnly
              />
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600">
                معادلات
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleIncrement(setRows, rows)}
              className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-r-xl p-3 h-14 transition-all duration-200 hover:shadow-lg"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-600 text-center">
            📊 {rows} معادلة خطية
          </p>
        </div>

        {/* Columns Input */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 transition-all duration-200 hover:shadow-xl">
          <label
            htmlFor="columns-input"
            className="block mb-3 text-base font-semibold text-gray-900"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-3M9 4v16M9 4l12 0m0 0v7m0-7l-5 5"
                />
              </svg>
              عدد الأعمدة (المتغيرات + النتيجة)
            </div>
          </label>
          <div className="relative flex items-center text-right" dir="ltr">
            <button
              type="button"
              onClick={() => handleDecrement(setColumns, columns)}
              className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-l-xl p-3 h-14 transition-all duration-200 hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
              disabled={columns <= 2}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <div className="relative flex-1">
              <input
                type="number"
                id="columns-input"
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 h-14 font-bold text-center text-gray-900 text-2xl focus:ring-4 focus:ring-blue-300 block w-full"
                value={columns}
                readOnly
              />
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600">
                متغيرات
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleIncrement(setColumns, columns)}
              className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-r-xl p-3 h-14 transition-all duration-200 hover:shadow-lg"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-600 text-center">
            🔢 {columns - 1} متغير + النتيجة
          </p>
        </div>
      </form>
    </div>
  );
};

export default GridInput;
