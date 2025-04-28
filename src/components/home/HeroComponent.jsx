import React from "react";
import hiringImage from "../../assets/images/hiringTrendImage.png";
import GetStarted from "../common/GetStarted";
import { RxArrowBottomLeft } from "react-icons/rx";

const HeroComponent = () => {
    return (
        <section className="w-2/3 h-screen m-auto flex justify-center items-center text-custom-white bg-transparent">
            <div className="flex justify-center items-center ">
                <div className="">
                    <h1 className="text-h1 font-sora">
                        Land job interviews <span className="text-secondary">10x</span> faster
                    </h1>
                    <h2 className="text-p1 font-dm-sans">
                        Custom-built resumes that match your goals, keywords, and recruiter expectations.
                    </h2>
                    <div className="mt-4">
                        <GetStarted bgColor="bg-custom-white" textColor="text-secondary" />
                    </div>
                </div>
                <div className="">
                    <img src={hiringImage} alt="Hiring Trends" />
                    <div className="relative flex justify-center items-center ">
                        <div className="absolute bottom-6 -right-7 w-20 h-20  m-auto flex justify-center items-center  bg-elipse-bg rounded-full border-2 backdrop-blur-sm   border-custom-white ">
                           <div className="relative p-4">
                           <span className="text-h2">📖</span>
                            <span className="absolute left-2 bottom-0"><RxArrowBottomLeft className="text-secondary p-1 rounded-full bg-custom-white" /></span>
                       
                           </div>
                        </div>
                        <p className="text-p2 mt-4">Download Free E-Book</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroComponent;
