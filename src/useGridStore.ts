import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GridStore {
    rows: number;
    columns: number;
    matrix: number[][];
    solveText: string;
    solved: boolean; // إضافة خاصية solved
    setRows: (rows: number) => void;
    setColumns: (columns: number) => void;
    setMatrix: (matrix: number[][]) => void;
    setSolved: (solved: boolean) => void; // دالة لتحديث solved
    solve: () => void; // دالة لحل النظام
}

const useGridStore = create<GridStore>()(
    persist(
        (set) => ({
            rows: 3,
            columns: 3,
            matrix: Array.from({ length: 3 }, () => Array(3).fill(0)),
            solved: false,
            solveText: `حل النظام:`,
            setRows: (rows) => set((state) => ({
                rows,
                matrix: Array.from({ length: rows }, () => Array(state.columns).fill(0)),
            })),
            setColumns: (columns) => set((state) => ({
                columns,
                matrix: Array.from({ length: state.rows }, () => Array(columns).fill(0)),
            })),
            setMatrix: (matrix) => set({ matrix }),
            setSolved: (solved) => set({ solved }), // تحديث solved
            solve: () => {
    set((state) => {
        const { matrix } = state; // الحصول على المصفوفة الحالية
        const rows = matrix.length; // عدد الصفوف
        const columns = matrix[0].length; // عدد الأعمدة

        // التحقق من صحة النظام قبل البدء
        let inconsistentSystem = false; // متغير للتأكد إذا كان النظام غير متسق

        // فحص الصفوف التي تحتوي على جميع الأصفار ما عدا العمود الأخير
        for (let i = 0; i < rows; i++) {
            const allZeros = matrix[i].slice(0, columns - 1).every(val => val === 0); // التأكد من أن كل العناصر قبل العمود الأخير هي أصفار
            if (allZeros && matrix[i][columns - 1] !== 0) { // إذا كانت النتيجة النهائية غير صفرية
                inconsistentSystem = true; // النظام غير متسق
                break;
            }
        }

        // إذا تم اكتشاف نظام غير متسق (لا يوجد حل)
        if (inconsistentSystem) {
            return { solveText: "لا يوجد حل لأن النظام يحتوي على تناقض (صف يحتوي على أصفار ولكن النتيجة غير صفرية).<br>", solved: true };
        }

        // التحقق من أن عدد المعادلات كافٍ لحل النظام
        if (rows < columns - 1) { // إذا كان عدد الصفوف أقل من عدد المتغيرات
            return { solveText: "النظام غير صالح لأنه يحتوي على عدد معادلات أقل من عدد المتغيرات.<br>", solved: true };
        }

        // نص لعرض الحل
        let text = "حل النظام باستخدام تحويل الصفوف (Row Echelon Form):<br><br>";
        
        let leadingRow = 0; // عدد الصفوف التي تم تحويلها
        for (let col = 0; col < columns - 1; col++) {
            // البحث عن صف يحتوي على عنصر غير صفري في هذا العمود
            let pivotRow = leadingRow;
            while (pivotRow < rows && matrix[pivotRow][col] === 0) { // التحقق من وجود عنصر رئيسي غير صفري
                pivotRow++;
            }

            if (pivotRow === rows) {
                // إذا لم يتم العثور على عنصر غير صفري، ننتقل للعمود التالي
                continue;
            }

            // تبديل الصفوف بحيث يصبح الصف الحالي هو الصف الذي يحتوي على الليدنج
            if (pivotRow !== leadingRow) { // التبديل بين الصفوف إذا لزم الأمر
                [matrix[leadingRow], matrix[pivotRow]] = [matrix[pivotRow], matrix[leadingRow]];
                text += `تم تبديل الصف ${leadingRow + 1} مع الصف ${pivotRow + 1}<br><br>`;
            }

            // جعل العنصر الرئيسي (leading element) يساوي 1
            const leadElement = matrix[leadingRow][col];
            if (leadElement !== 0) { // جعل العنصر الرئيسي يساوي 1
                for (let k = col; k < columns; k++) {
                    matrix[leadingRow][k] /= leadElement;
                }
                text += `تم قسمة جميع عناصر الصف ${leadingRow + 1} على ${leadElement.toFixed(2)} لجعل العنصر الرئيسي في العمود ${col + 1} يساوي 1<br><br>`;
            }

            // جعل كل العناصر تحت الليدنج تساوي صفر
            for (let i = leadingRow + 1; i < rows; i++) {
                const factor = matrix[i][col]; // العامل لتصفير العناصر أسفل العنصر الرئيسي
                for (let k = col; k < columns; k++) {
                    matrix[i][k] -= factor * matrix[leadingRow][k];
                }
                if (factor !== 0) {
                    text += `تم ضرب جميع عناصر الصف ${leadingRow + 1} في ${factor.toFixed(2)} وطرحها من الصف ${i + 1} لتصفير العنصر في العمود ${col + 1}<br><br>`;
                }
            }

            leadingRow++; // الانتقال للصف التالي
        }

        // التحقق من الصفوف غير الممكنة (حل غير موجود)
        for (let i = 0; i < rows; i++) {
            const allZeros = matrix[i].slice(0, columns - 1).every(val => val === 0); // التحقق من الصفوف التي تحتوي على أصفار
            if (allZeros && matrix[i][columns - 1] !== 0) { // التحقق إذا كانت النتيجة النهائية غير صفرية
                text += "لا يوجد حل لأن هناك صفًا يحتوي على أصفار ولكن النتيجة غير صفرية.<br>";
                return { solveText: text, solved: true };
            }
        }

        // تصفير العناصر أعلى الليدنج
        for (let col = columns - 2; col >= 0; col--) {
            let row = -1;
            for (let i = 0; i < rows; i++) {
                if (matrix[i][col] === 1) {
                    row = i; // العثور على الصف الذي يحتوي على العنصر الرئيسي
                    break;
                }
            }
            if (row !== -1) {
                for (let i = 0; i < row; i++) {
                    const factor = matrix[i][col]; // العامل لتصفير العناصر أعلى العنصر الرئيسي
                    for (let k = 0; k < columns; k++) {
                        matrix[i][k] -= factor * matrix[row][k];
                    }
                    if (factor !== 0) {
                        text += `تم ضرب جميع عناصر الصف ${row + 1} في ${factor.toFixed(2)} وطرحها من الصف ${i + 1} لتصفير العنصر في العمود ${col + 1}<br><br>`;
                    }
                }
            }
        }

        // نقل الصفوف الصفرية إلى أسفل
        matrix.sort((a, b) => {
            const isAZero = a.every(val => val === 0); // التحقق إذا كان الصف يحتوي على أصفار
            const isBZero = b.every(val => val === 0);
            return Number(isAZero) - Number(isBZero); // إعادة ترتيب الصفوف بحيث تكون الصفوف الصفرية في الأسفل
        });

        // استخراج قيم المتغيرات باستخدام التعويض الخلفي
        const solutions = Array(columns - 1).fill(0);
        for (let i = rows - 1; i >= 0; i--) {
            if (matrix[i].slice(0, columns - 1).every(val => val === 0)) {
                continue; // تخطي الصفوف الصفرية
            }
            let sum = matrix[i][columns - 1]; // البدء من القيمة الثابتة
            for (let j = i + 1; j < columns - 1; j++) {
                sum -= matrix[i][j] * solutions[j]; // التعويض بالمتغيرات المحسوبة
            }
            solutions[i] = sum / matrix[i][i]; // استخراج قيمة المتغير
        }

        // إضافة الحلول النهائية للنص
        text += "<br>الحلول النهائية:<br>";
        solutions.forEach((sol, index) => {
            text += `x${index + 1} = ${sol.toFixed(2)}<br>`;
        });

        return { solveText: text, solved: true }; // إرجاع النص النهائي مع الحل
    });
},
            
                       
        }),
        {
            name: 'grid-store',
        }
    )
);

export default useGridStore;
