import React from 'react';
import GetStarted from '../common/GetStarted';

const ResumeBuildingPlans = () => {
    const plans = [
        {
            title: "Resume Rebuild",
            priceOneTime: "$1000 ",
            description:"Crafted for senior to VP-level professionals ready for their next big step.",
            features: [
                "3× 30-min coaching ",
                "Focused on storytelling, not just formatting",
                "Analyst + full application team on Pacific hours",
                "Tailored to your target industry, company, or role",
                "Direct work with our co-founder (ex-Google, JP Morgan)",
                "Executive coaching from UC Berkeley alum with 10+ yrs experience",
                "Resume Rebuild portfolio available upon request",
            ],
        },
        {
            title: "Interview Prep",
            description:"Two sessions to sharpen your story, confidence, and clarity — fast.",
            priceOneTime: "$500",
            features: [
                "2× 45-min live coaching with our co-founder",
                "Real-time, practical feedback",
                "Build clarity, empathy & executive presence",
                "For senior and leadership roles — technical & non-technical",
            ],
        }
    ];

    return (
        <div className=" py-12 font-dm-sans">
            <div className="max-w-6xl mx-auto px-6 text-center text-primary">
              <div className='lg:w-1/2 flex flex-col justify-start items-start text-start gap-2 my-14'>
              <h1 className="text-h3 font-bold ">
                Resume Building & Coaching
                </h1>
                <p className='text-p2'>Let’s talk about where you’re headed — and how your resume can get you there.Schedule a call to get started.</p>

              </div>
                {/* Pricing Plans */}
                <div className="w-[70%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.slice(0, 2).map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between gap-5 h-full rounded-rounded-corners shadow-lg p-6  bg-custom-white border-2 border-primary"
                        >
                            <div>
                                <div className="flex justify-between items-center p-4">
                                    <h2 className="text-primary text-h4 mb-4 p-2">
                                        {plan.title}
                                    </h2>
                                    {plan.speciality && (
                                        <span className="bg-soft-blue text-primary text-p2 p-2 px-3 border-primary border-[1px] rounded-full">
                                            {plan.speciality}
                                        </span>
                                    )}
                                </div>
                                <div className="text-primary lg:w-1/2 mb-4">
                                    <span className="font-extrabold text-h2">{plan.priceOneTime}</span>
                                    <span className="text-btn font-bold">/one time</span>
                                </div>

                                <div className="h-[2px] bg-custom-grey mb-4"></div>

                                <ul className="flex flex-col text-left text-p2 gap-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="10" cy="10" r="10" fill="#4AD257" />
                                                    <path
                                                        d="M5 11L7.5 13.5L15 6"
                                                        stroke="#FEFEFE"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <GetStarted bgColor="bg-primary" textColor="text-custom-white" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ResumeBuildingPlans;


