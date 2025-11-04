import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Matrix from "./components/Matrix";
import SolveBottom from "./components/Solve-bottom";
import Steppers from "./components/Steppers";
import StepViewer from "./components/StepViewer";
import QuickExamples from "./components/QuickExamples";
import Footer from "./components/Footer";
import useGridStore from "./useGridStore";

export default function Home() {
  const { solved, solveText, steps } = useGridStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div dir="rtl" className="container mx-auto px-4 py-8 text-right">
        <Header />
        {!solved && <QuickExamples />}
        <Steppers />
        <Matrix />
        <SolveBottom />
        {solved && steps.length > 0 && <StepViewer />}
        {solved && steps.length === 0 && <Board solveText={solveText} />}
        <Footer />
      </div>
    </div>
  );
}
