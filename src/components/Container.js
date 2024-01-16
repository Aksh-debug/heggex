import bulb from "../assets/Vector.svg";
import volume from "../assets/volume.svg";
import arrow from "../assets/arrow.svg";
import arrowBack from "../assets/arrowBack.svg";
import arrowForward from "../assets/arrowForward.svg";
import resize from "../assets/resize.svg";

const Container = () => {
  return (
    <div className="absolute w-[712px] h-[485.19px] top-[389px] left-[364px]">
      <div className="w-[712px] h-[393.19px] mb-8">
        <div className="w-[712px] h-[393.19px] rounded-[42.51px]">
            <div className="w-[712px] h-[393.19px]">
                <div className="w-[712px] h-[393.19px] rounded-[42.51px] bg-gradient-to-bl from-[#051A91] via-[#2284F1] to-[#1F80EB]">
                    <p className="w-[313px] h-[46px] absolute top-[174.28px] left-[199.79px] font-lato font-bold text-white text-[38.26px] leading-[45.91px] tracking-[2%] text-center">9 + 6 + 7x - 2x - 3</p>
                    <div className="w-[34.01px] h-[34.01px] absolute left-[34.01px] top-[34.01px]">
                        <img className="absolute top-[2.83px] left-[7.08px]" src={bulb}/>
                    </div>
                    <div className="w-[34.01px] h-[34.01px] absolute left-[643.99px] top-[34.01px]">
                        <img className="absolute top-[4.58px] left-[4.25px]" src={volume}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="w-[612px] h-[60px] gap-[140px] flex items-center mx-auto justify-center">
            <img className="" src={arrow}/>
            <div className="w-[272px] h-[60px] gap-[43px] flex items-center">
                <img src={arrowBack}/>
                <p className="font-sans font-bold text-[24px] leading-[29.05px] w-[66px] h-[17px]">01/10</p>
                <img src={arrowForward}/>
            </div>
            <img src={resize}/>
      </div>
    </div>
  )
}

export default Container
