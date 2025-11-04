import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Step {
  description: string;
  matrix: number[][];
  highlight?: { row: number; col?: number };
}

interface GridStore {
  rows: number;
  columns: number;
  matrix: number[][];
  solveText: string;
  solved: boolean;
  steps: Step[];
  currentStep: number;
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
  setMatrix: (matrix: number[][]) => void;
  setSolved: (solved: boolean) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetSolution: () => void;
  solve: () => void;
}

const useGridStore = create<GridStore>()(
  persist(
    (set) => ({
      rows: 3,
      columns: 3,
      matrix: Array.from({ length: 3 }, () => Array(3).fill(0)),
      solved: false,
      solveText: `حل النظام:`,
      steps: [],
      currentStep: 0,
      setRows: (rows) =>
        set((state) => ({
          rows,
          matrix: Array.from({ length: rows }, () =>
            Array(state.columns).fill(0)
          ),
          solved: false,
          steps: [],
          currentStep: 0,
        })),
      setColumns: (columns) =>
        set((state) => ({
          columns,
          matrix: Array.from({ length: state.rows }, () =>
            Array(columns).fill(0)
          ),
          solved: false,
          steps: [],
          currentStep: 0,
        })),
      setMatrix: (matrix) => set({ matrix, solved: false, steps: [], currentStep: 0 }),
      setSolved: (solved) => set({ solved }),
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, state.steps.length - 1),
        })),
      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 0),
        })),
      resetSolution: () =>
        set({
          solved: false,
          steps: [],
          currentStep: 0,
        }),
      solve: () => {
        set((state) => {
          const matrix = state.matrix.map((row) => [...row]);
          const rows = matrix.length;
          const columns = matrix[0].length;
          const steps: Step[] = [];

          // الخطوة الأولى: عرض المصفوفة الأصلية
          steps.push({
            description:
              "📋 المصفوفة الموسعة الأولية (Augmented Matrix): هذه هي المصفوفة التي تمثل نظام المعادلات الخطية. العمود الأخير يمثل الحدود الثابتة (النتائج).",
            matrix: matrix.map((row) => [...row]),
          });

          // التحقق من صحة النظام قبل البدء
          let inconsistentSystem = false;

          for (let i = 0; i < rows; i++) {
            const allZeros = matrix[i]
              .slice(0, columns - 1)
              .every((val) => val === 0);
            if (allZeros && matrix[i][columns - 1] !== 0) {
              inconsistentSystem = true;
              break;
            }
          }

          if (inconsistentSystem) {
            steps.push({
              description:
                "❌ النظام غير متسق! يحتوي على صف بصيغة [0 0 0 | b] حيث b ≠ 0، مما يعني معادلة مستحيلة مثل 0 = 5. لا يوجد حل لهذا النظام.",
              matrix: matrix.map((row) => [...row]),
            });
            return { 
              solveText: "لا يوجد حل - النظام غير متسق", 
              solved: true, 
              steps,
              currentStep: 0 
            };
          }

          if (rows < columns - 1) {
            steps.push({
              description:
                "⚠️ النظام يحتوي على معادلات أقل من المتغيرات. هذا يعني أن النظام قد يكون له حلول لا نهائية أو غير محدد بشكل كامل.",
              matrix: matrix.map((row) => [...row]),
            });
            return { 
              solveText: "النظام غير قابل للحل بشكل فريد", 
              solved: true, 
              steps,
              currentStep: 0 
            };
          }

          // Phase 1: Forward Elimination (تحويل إلى Row Echelon Form)
          steps.push({
            description:
              "🔄 المرحلة الأولى: الحذف الأمامي (Forward Elimination)\nسنحول المصفوفة إلى شكل الدرج (Row Echelon Form) بحيث تكون جميع العناصر أسفل القطر الرئيسي أصفاراً.",
            matrix: matrix.map((row) => [...row]),
          });

          let leadingRow = 0;
          for (let col = 0; col < columns - 1; col++) {
            // البحث عن صف محوري
            let pivotRow = leadingRow;
            while (pivotRow < rows && matrix[pivotRow][col] === 0) {
              pivotRow++;
            }

            if (pivotRow === rows) {
              continue;
            }

            // تبديل الصفوف إذا لزم الأمر
            if (pivotRow !== leadingRow) {
              [matrix[leadingRow], matrix[pivotRow]] = [
                matrix[pivotRow],
                matrix[leadingRow],
              ];
              steps.push({
                description: `🔄 تبديل الصفوف: تم تبديل الصف ${leadingRow + 1} مع الصف ${
                  pivotRow + 1
                } للحصول على عنصر محوري غير صفري في الموضع [${leadingRow + 1}, ${col + 1}].`,
                matrix: matrix.map((row) => [...row]),
                highlight: { row: leadingRow, col },
              });
            }

            // جعل العنصر المحوري يساوي 1
            const leadElement = matrix[leadingRow][col];
            if (leadElement !== 0 && leadElement !== 1) {
              for (let k = col; k < columns; k++) {
                matrix[leadingRow][k] /= leadElement;
              }
              steps.push({
                description: `➗ تطبيع الصف ${
                  leadingRow + 1
                }: قسمة جميع عناصر الصف على ${leadElement.toFixed(
                  2
                )} لجعل العنصر المحوري في العمود ${
                  col + 1
                } يساوي 1.\nالعملية: R${leadingRow + 1} ← R${leadingRow + 1} ÷ ${leadElement.toFixed(2)}`,
                matrix: matrix.map((row) => [...row]),
                highlight: { row: leadingRow, col },
              });
            }

            // تصفير العناصر أسفل المحور
            for (let i = leadingRow + 1; i < rows; i++) {
              const factor = matrix[i][col];
              if (factor !== 0) {
                for (let k = col; k < columns; k++) {
                  matrix[i][k] -= factor * matrix[leadingRow][k];
                }
                const absFactor = Math.abs(factor);
                const operation = factor > 0 ? "طرح" : "جمع";
                const operationSymbol = factor > 0 ? "-" : "+";
                steps.push({
                  description: `🎯 تصفير الصف ${i + 1}: ${operation} ${absFactor.toFixed(
                    2
                  )} × الصف ${leadingRow + 1} ${factor > 0 ? 'من' : 'إلى'} الصف ${
                    i + 1
                  } لجعل العنصر في الموضع [${i + 1}, ${col + 1}] يساوي صفر.\nالعملية: R${i + 1} ← R${i + 1} ${operationSymbol} ${absFactor.toFixed(2)} × R${leadingRow + 1}`,
                  matrix: matrix.map((row) => [...row]),
                  highlight: { row: i, col },
                });
              }
            }

            leadingRow++;
          }

          // التحقق من التناقضات بعد الحذف الأمامي
          for (let i = 0; i < rows; i++) {
            const allZeros = matrix[i]
              .slice(0, columns - 1)
              .every((val) => Math.abs(val) < 1e-10);
            if (allZeros && Math.abs(matrix[i][columns - 1]) > 1e-10) {
              steps.push({
                description:
                  "❌ تم اكتشاف تناقض أثناء الحل! الصف يحتوي على معادلة مستحيلة.",
                matrix: matrix.map((row) => [...row]),
                highlight: { row: i },
              });
              return { 
                solveText: "لا يوجد حل - تم اكتشاف تناقض", 
                solved: true, 
                steps,
                currentStep: 0 
              };
            }
          }

          // Phase 2: Back Substitution (الحذف الخلفي)
          steps.push({
            description:
              "⬆️ المرحلة الثانية: الحذف الخلفي (Back Substitution)\nالآن سنحول المصفوفة إلى شكل الدرج المختزل (Reduced Row Echelon Form) بجعل جميع العناصر فوق المحاور أصفاراً.",
            matrix: matrix.map((row) => [...row]),
          });

          for (let col = columns - 2; col >= 0; col--) {
            let row = -1;
            for (let i = 0; i < rows; i++) {
              if (Math.abs(matrix[i][col] - 1) < 1e-10) {
                row = i;
                break;
              }
            }
            if (row !== -1) {
              for (let i = 0; i < row; i++) {
                const factor = matrix[i][col];
                if (Math.abs(factor) > 1e-10) {
                  for (let k = 0; k < columns; k++) {
                    matrix[i][k] -= factor * matrix[row][k];
                  }
                  const absFactor = Math.abs(factor);
                  const operation = factor > 0 ? "طرح" : "جمع";
                  const operationSymbol = factor > 0 ? "-" : "+";
                  steps.push({
                    description: `⬆️ تصفير الصف ${i + 1}: ${operation} ${absFactor.toFixed(
                      2
                    )} × الصف ${row + 1} ${factor > 0 ? 'من' : 'إلى'} الصف ${
                      i + 1
                    } لجعل العنصر في الموضع [${i + 1}, ${col + 1}] يساوي صفر.\nالعملية: R${i + 1} ← R${i + 1} ${operationSymbol} ${absFactor.toFixed(2)} × R${row + 1}`,
                    matrix: matrix.map((row) => [...row]),
                    highlight: { row: i, col },
                  });
                }
              }
            }
          }

          // استخراج الحلول
          const solutions = Array(columns - 1).fill(0);
          let hasSolution = true;

          for (let i = 0; i < Math.min(rows, columns - 1); i++) {
            if (Math.abs(matrix[i][i] - 1) < 1e-10) {
              solutions[i] = matrix[i][columns - 1];
            } else {
              const allZeros = matrix[i]
                .slice(0, columns - 1)
                .every((val) => Math.abs(val) < 1e-10);
              if (!allZeros) {
                hasSolution = false;
              }
            }
          }

          if (hasSolution) {
            let solutionText = "✅ الحلول النهائية:\n\n";
            solutions.forEach((sol, index) => {
              solutionText += `x${index + 1} = ${
                Math.abs(sol) < 1e-10 ? "0.00" : sol.toFixed(2)
              }\n`;
            });

            steps.push({
              description: solutionText + "\n🎉 تم الحصول على الحل بنجاح! المصفوفة الآن في الشكل المختزل الكامل (Reduced Row Echelon Form).",
              matrix: matrix.map((row) => [...row]),
            });
          }

          return {
            solveText: hasSolution
              ? "تم الحل بنجاح"
              : "لم يتم إيجاد حل",
            solved: true,
            steps,
            currentStep: 0,
          };
        });
      },
    }),
    {
      name: "grid-store",
    }
  )
);

export default useGridStore;
