import React, { useEffect } from "react";
import useGridStore from "../useGridStore";

const Matrix: React.FC = () => {
  const { rows, columns, matrix, setMatrix, resetSolution } = useGridStore();

  useEffect(() => {
    const initialMatrix = Array.from({ length: rows }, () =>
      Array(columns).fill(0)
    );
    setMatrix(initialMatrix);
  }, [rows, columns, setMatrix]);

  const handleMatrixChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newValue = Number(value);
    const newMatrix = matrix.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? newValue : cell
      )
    );
    setMatrix(newMatrix);
    resetSolution();
  };

  const MatrixBracket: React.FC<{ type: "left" | "right" }> = ({ type }) => (
    <div className="flex flex-col justify-center">
      <svg
        width="25"
        height={Math.max(100, rows * 50)}
        viewBox={`0 0 25 ${Math.max(100, rows * 50)}`}
      >
        {type === "left" ? (
          <>
            <path d="M22 0 L8 0" fill="none" stroke="#1e40af" strokeWidth="4" />
            <path
              d={`M22 ${Math.max(100, rows * 50)} L8 ${Math.max(
                100,
                rows * 50
              )}`}
              fill="none"
              stroke="#1e40af"
              strokeWidth="4"
            />
            <path
              d={`M8 0 L8 ${Math.max(100, rows * 50)}`}
              fill="none"
              stroke="#1e40af"
              strokeWidth="4"
            />
          </>
        ) : (
          <>
            <path d="M3 0 L17 0" fill="none" stroke="#1e40af" strokeWidth="4" />
            <path
              d={`M3 ${Math.max(100, rows * 50)} L17 ${Math.max(
                100,
                rows * 50
              )}`}
              fill="none"
              stroke="#1e40af"
              strokeWidth="4"
            />
            <path
              d={`M17 0 L17 ${Math.max(100, rows * 50)}`}
              fill="none"
              stroke="#1e40af"
              strokeWidth="4"
            />
          </>
        )}
      </svg>
    </div>
  );

  return (
    <div
      className="w-full bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 text-left"
      dir="ltr"
    >
      <div className="p-8">
        <div className="mb-4 text-center" dir="rtl">
          <h3 className="text-xl font-bold text-gray-800">
            أدخل قيم المصفوفة الموسعة
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            العمود الأخير يمثل الحدود الثابتة (النتائج)
          </p>
        </div>
        <div className="flex justify-center items-center gap-0">
          <MatrixBracket type="left" />
          <div className="px-3 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-300 hover:[&::-webkit-scrollbar-thumb]:bg-blue-400">
            <table className="border-collapse">
              <tbody>
                {matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => {
                      const isLastColumn = colIndex === columns - 1;

                      return (
                        <td key={colIndex} className="p-1.5 relative">
                          <input
                            type="number"
                            value={cell}
                            onChange={(e) =>
                              handleMatrixChange(
                                rowIndex,
                                colIndex,
                                e.target.value
                              )
                            }
                            className={`
                              w-20 h-12 text-center font-semibold rounded-lg border-2 
                              transition-all duration-200 focus:outline-none focus:ring-4
                              ${
                                isLastColumn
                                  ? "bg-blue-50 border-blue-300 text-blue-800 hover:bg-blue-100 focus:ring-blue-200 focus:border-blue-500"
                                  : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-blue-200 focus:border-blue-500"
                              }
                            `}
                            placeholder="0"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MatrixBracket type="right" />
        </div>
        <div className="mt-4 text-center text-xs text-gray-500" dir="rtl">
          <p>💡 نصيحة: يمكنك استخدام الأرقام العشرية والسالبة</p>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
