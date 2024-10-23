
interface BoardProps {
  solveText: string;
}

export default function Board({ solveText }: BoardProps) {
    return (
      <div className="mt-20 mb-10 w-full relative lg:h-[870px] md:h-[655px] h-[250px] md:text-lg font-bold">
        <img src="/board.png" className=" opacity-0 lg:opacity-[1] w-full absolute top-0 left-0" />
        <div className=" absolute top-0 left-0 w-full h-full text-right lg:text-center items-center content-center">
          {/* <pre style={{fontFamily:"Cairo, Sofia, sans-serif"}}> */}
          <div dangerouslySetInnerHTML={{ __html: solveText }} />

            {/* {solveText} */}
          {/* </pre> */}
        </div>     
      </div>
    );
  }
  