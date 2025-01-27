import useGridStore from '../useGridStore'; // تأكد من استيراد حالة Zustand

export default function SolveBottom() {
  const solve = useGridStore((state) => state.solve); // الحصول على دالة solve

  return (
    <div className="mt-10 mb-10 text-right" dir="rtl">
      <button
        onClick={solve} // ربط دالة solve بالزر
        className="flex justify-center content-center items-center text-center w-full px-6 py-4 text-white transition-all rounded-md shadow-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-150 hover:shadow-blue-100 hover:-tranneutral-y-px"
      >
        <svg
          style={{ width: '30px', height: '30px', marginLeft: '10px' }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Uploaded to svgrepo.com"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <path
            style={{ fill: '#fff' }}
            className="linesandangles_een"
            d="M16,4c-4.963,0-9,4.038-9,9c0,3.186,1.781,5.278,3.212,6.959C11.172,21.085,12,22.059,12,23v5h3 v1h2v-1h3v-5c0-0.941,0.828-1.915,1.788-3.041C23.219,18.278,25,16.186,25,13C25,8.038,20.963,4,16,4z M18,26h-4v-2h4V26z M20.265,18.662c-0.923,1.084-1.805,2.12-2.132,3.338h-4.266c-0.327-1.218-1.209-2.254-2.132-3.338C10.391,17.083,9,15.45,9,13 c0-3.86,3.141-7,7-7s7,3.14,7,7C23,15.45,21.609,17.083,20.265,18.662z M16,7v2c-2.206,0-4,1.794-4,4h-2C10,9.691,12.691,7,16,7z"
          />
        </svg>
        حل النظام
      </button>
    </div>
  );
}
