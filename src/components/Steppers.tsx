import React from 'react';
import useGridStore from '../useGridStore'; // تأكد من تحديث المسار الصحيح

const GridInput: React.FC = () => {
    const { rows, columns, setRows, setColumns } = useGridStore(); // جلب القيم والدوال من المتجر

    const handleIncrement = (setter: (value: number) => void, value: number) => {
        setter(value + 1);
    };

    const handleDecrement = (setter: (value: number) => void, value: number) => {
        setter(Math.max(value - 1, 1)); // نضمن أن القيم لا تقل عن 1
    };

    return (
        <div className="mt-20 mb-10">
            <form className="mx-auto grid gap-6 mb-6 md:grid-cols-2">
                {/* Rows Input */}
                <div>
                    <label htmlFor="rows-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عدد الصفوف</label>
                    <div className="relative flex items-center text-right" dir='ltr'>
                        <button 
                            type="button" 
                            onClick={() => handleDecrement(setRows, rows)} 
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input 
                            type="number" 
                            id="rows-input" 
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={rows} 
                            readOnly 
                        />
                        <div className="absolute bottom-1 left-[49%] transform -translate-x-1/2 flex items-center text-xs text-gray-400">
                            <span>صفوف</span>
                        </div>
                        <button 
                            type="button" 
                            onClick={() => handleIncrement(setRows, rows)} 
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">تعديل عدد الصفوف في الشبكة.</p>
                </div>

                {/* Columns Input */}
                <div>
                    <label htmlFor="columns-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عدد الأعمدة</label>
                    <div className="relative flex items-center text-right" dir='ltr'>
                        <button 
                            type="button" 
                            onClick={() => handleDecrement(setColumns, columns)} 
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input 
                            type="number" 
                            id="columns-input" 
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={columns} 
                            readOnly 
                        />
                        <div className="absolute bottom-1 left-[49%] transform -translate-x-1/2 flex items-center text-xs text-gray-400">
                            <span>أعمدة</span>
                        </div>
                        <button 
                            type="button" 
                            onClick={() => handleIncrement(setColumns, columns)} 
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">تعديل عدد الأعمدة في الشبكة.</p>
                </div>
            </form>
        </div>
    );
};

export default GridInput;
