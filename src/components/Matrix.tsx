import React, { useEffect } from 'react';
import useGridStore from '../useGridStore'; // قم بتحديث المسار إلى ملف zustand

const Matrix: React.FC = () => {
  const { rows, columns, matrix, setMatrix } = useGridStore();

  // تأكد من أن المصفوفة تتوافق مع عدد الصفوف والأعمدة عند التعديل
  useEffect(() => {
    const initialMatrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    setMatrix(initialMatrix);
  }, [rows, columns, setMatrix]);

  const handleMatrixChange = (rowIndex: number, colIndex: number, value: string) => {
    const newValue = Number(value);
    const newMatrix = matrix.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? newValue : cell
      )
    );
    setMatrix(newMatrix);
  };

  const MatrixBracket: React.FC<{ type: 'left' | 'right' }> = ({ type }) => (
    <div className="flex flex-col justify-center">
      <svg width="25" height={Math.max(100, rows * 40)} viewBox={`0 0 25 ${Math.max(100, rows * 40)}`}>
        {type === 'left' ? (
          <>
            <path d="M22 0 L8 0" fill="none" stroke="black" strokeWidth="4" />
            <path d={`M22 ${Math.max(100, rows * 40)} L8 ${Math.max(100, rows * 40)}`} fill="none" stroke="black" strokeWidth="4" />
            <path d={`M8 0 L8 ${Math.max(100, rows * 40)}`} fill="none" stroke="black" strokeWidth="4" />
          </>
        ) : (
          <>
            <path d="M3 0 L17 0" fill="none" stroke="black" strokeWidth="4" />
            <path d={`M3 ${Math.max(100, rows * 40)} L17 ${Math.max(100, rows * 40)}`} fill="none" stroke="black" strokeWidth="4" />
            <path d={`M17 0 L17 ${Math.max(100, rows * 40)}`} fill="none" stroke="black" strokeWidth="4" />
          </>
        )}
      </svg>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-lg text-left" dir='ltr' >
      <div className="p-6">
        <div className="flex justify-center items-center gap-0">
          <MatrixBracket type="left" />
          <div className="px-2">
            <table className="border-collapse">
              <tbody>
                {matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={colIndex} 
                        className={`p-1 relative ${colIndex === columns - 2 ? ' border-solid border-r-[2px] border-gray-600' : ''}`}
                      >
                        <input
                          type="number"
                          value={cell}
                          onChange={(e) => handleMatrixChange(rowIndex, colIndex, e.target.value)}
                          className="w-16 h-10 text-center bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MatrixBracket type="right" />
        </div>
      </div>
    </div>
  );
};

export default Matrix;
