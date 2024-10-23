import './App.css';
import Board from './components/Board';
import Header from "./components/Header";
import Matrix from './components/Matrix';
import SolveBottom from './components/Solve-bottom';
import Steppers from './components/Steppers';
import useGridStore from './useGridStore'; // استيراد حالة Zustand

export default function Home() {
  const { solved, solveText } = useGridStore(); // الحصول على solved من Zustand

  return (
    <div>
      <div dir='rtl' className="container mx-auto px-4 text-right">
        <Header />
        <Steppers />
        <Matrix />
        <SolveBottom />
        {solved && <Board solveText={solveText} />}
      </div>
    </div>
  );
}
