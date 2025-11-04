import React from "react";
import useGridStore from "../useGridStore";

const StepViewer: React.FC = () => {
  const { steps, currentStep, nextStep, prevStep, setCurrentStep } =
    useGridStore();

  if (steps.length === 0) return null;

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const MatrixBracket: React.FC<{ type: "left" | "right"; rows: number }> = ({
    type,
    rows,
  }) => (
    <div className="flex flex-col justify-center">
      <svg
        width="20"
        height={Math.max(100, rows * 45)}
        viewBox={`0 0 20 ${Math.max(100, rows * 45)}`}
      >
        {type === "left" ? (
          <>
            <path
              d="M18 0 L6 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d={`M18 ${Math.max(100, rows * 45)} L6 ${Math.max(
                100,
                rows * 45
              )}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d={`M6 0 L6 ${Math.max(100, rows * 45)}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </>
        ) : (
          <>
            <path
              d="M2 0 L14 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d={`M2 ${Math.max(100, rows * 45)} L14 ${Math.max(
                100,
                rows * 45
              )}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d={`M14 0 L14 ${Math.max(100, rows * 45)}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </>
        )}
      </svg>
    </div>
  );

  return (
    <div className="mt-10 mb-10 w-full" dir="rtl">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-700">
            الخطوة {currentStep + 1} من {steps.length}
          </span>
          <span className="text-sm font-medium text-blue-700">
            {progress.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Description */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-r-4 border-blue-500 rounded-lg p-6 mb-6 shadow-md">
        <div className="flex items-start">
          <div className="flex-shrink-0 ml-3">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white text-xl font-bold shadow-lg">
              {currentStep + 1}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              شرح الخطوة:
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {currentStepData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Matrix Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          المصفوفة الحالية
        </h3>
        <div
          className="flex justify-center items-center gap-1 overflow-x-auto"
          dir="ltr"
        >
          <MatrixBracket type="left" rows={currentStepData.matrix.length} />
          <div className="px-2">
            <table className="border-collapse">
              <tbody>
                {currentStepData.matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => {
                      const isHighlighted =
                        currentStepData.highlight &&
                        rowIndex === currentStepData.highlight.row &&
                        (currentStepData.highlight.col === undefined ||
                          colIndex === currentStepData.highlight.col);
                      

                      return (
                        <td
                          key={colIndex}
                          className={`p-1`}
                        >
                          <div
                            className={`
                              w-16 h-12 flex items-center justify-center text-center font-medium rounded-md
                              transition-all duration-300 transform
                              ${
                                isHighlighted
                                  ? "bg-gradient-to-br from-yellow-200 to-yellow-300 border-2 border-yellow-500 scale-110 shadow-lg text-gray-900 font-bold"
                                  : "bg-gray-50 border border-gray-200 text-gray-700"
                              }
                            `}
                          >
                            {Math.abs(cell) < 1e-10 ? "0.00" : cell.toFixed(2)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MatrixBracket type="right" rows={currentStepData.matrix.length} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col gap-4">
        {/* Buttons */}
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 hover:shadow-lg hover:-translate-y-0.5"
              }
            `}
          >
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            الخطوة السابقة
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${
                currentStep === steps.length - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:-translate-y-0.5"
              }
            `}
          >
            الخطوة التالية
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="flex gap-2 justify-center items-center flex-wrap">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`
                w-10 h-10 rounded-full font-semibold transition-all duration-200
                ${
                  index === currentStep
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-110"
                    : index < currentStep
                    ? "bg-green-100 text-green-700 hover:bg-green-200 border border-green-300"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 border border-gray-300"
                }
              `}
              title={`الانتقال إلى الخطوة ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Completion Message */}
      {currentStep === steps.length - 1 && (
        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-r-4 border-green-500 rounded-lg p-6 shadow-md animate-pulse">
          <div className="flex items-center">
            <div className="flex-shrink-0 ml-3">
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
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-800">
                تم إكمال جميع الخطوات! 🎉
              </h3>
              <p className="text-green-700 mt-1">
                لقد وصلت إلى نهاية عملية الحل. يمكنك مراجعة أي خطوة سابقة بالضغط
                على الأزرار أعلاه.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepViewer;
