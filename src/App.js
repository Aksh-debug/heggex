import Container from "./components/Container";
import Navbar from "./components/Navbar";
import plus from "./assets/plus.svg";
import clip from "./assets/Clip path group.svg";
import hygenXLogo from "./assets/Component 40.svg";

const App=()=>{
  return (
    <div className="">
      <p className="w-[676px] h-[39px] absolute top-[233px] left-[105px] font-Montserrat font-bold text-[32px] leading-[39.01px] text-center bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">Relations and Functions ( Mathematics )</p>
      <Navbar/>
      <Container/>
      <div className="w-[217px] h-[80.6px] flex items-center absolute top-[955px] left-[106px] gap-[21.26px]">
          <div className="w-[80.6px] flex items-center justify-center h-[80.6px] backdrop-blur-sm shadow-2xl shadow-[#08389966] rounded-full">
            <img src={clip}/>
          </div>
          <div className="w-[115.14px] h-[60.17px] gap-[10.63px]">
              <p className="w-[79px] h-[15px] font-sans font-bold text-[12.4px] leading-[15.01px] text-[#696671]">Published by</p>
              <div className="w-[115.14px] h-[34.54px]">
                <img src={hygenXLogo}/>
              </div>
          </div>
      </div>
      <div className="absolute w-[299px] h-[60px] top-[965px] left-[1039px] gap-[8px] flex items-center">
        <div className="w-[60px] h-[60px]">
          <img className="absolute top-[5px] left-[5px]" src={plus}/>
        </div>
        <p className="w-[231px] h-[34px] font-sans font-semibold text-[28px] leading-[33.89px] bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">Create Flashcard</p>
      </div>
    </div>
  )
};

export default App;