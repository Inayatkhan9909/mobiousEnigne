import React from "react";
import GetStarted from '../common/GetStarted'

const JobServicePlans = () => {
    const plans = [
        {
            title: "April Promo",
            priceperWeek: "$35",
            features: [
                "Curated jobs from 1M+ listings, refreshed every 48 hours",
                "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
                "Need more? Add extra apps for just $1.5 each",
                "Your own dedicated application analyst",
                "Personalized with up to 10 filters & 5 job titles",
            ],
        },
        {
            title: "Starter",
            priceperWeek: "$50",
            features: [
                "All the perks of the Promo Plan, plus:",
                "Resume review & story-focused feedback",
                "Dedicated search specialist",
                "Up to 50 job apps/week",
                "Extra apps at $1.5 each",
                "Analyst support within 6 hours (SLA/PST hours)",
            ],
            speciality: "Popular",
        },
        {
            title: "Plus",
            priceperWeek: "$100",
            features: [
                "Everything in Starter, with more muscle:",
                "Up to 75 apps/week",
                "Apply to 15 job titles",
                "Analyst + full application team on Pacific hours",
            ],
        },
        {
            title: "Advance",
            priceperWeek: "$150",
            description: "Top-tier support for serious job hunters:",
            features: [
                "Everything in Plus",
                "Custom Resumes & Cover Letters",
                "20 fully customized applications/week",
                "Help with complex job searches",
                "Access to senior resume experts, Founder & Exec Coaches",
            ],
            bottom: true,
            name: "Arpit Singh",
        },
    ];

    return (
        <div className=" py-12 font-dm-sans">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-primary text-h3 font-bold mb-8">
                    Job Application Service Plans
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.slice(0, 3).map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between gap-5 h-full rounded-rounded-corners shadow-lg p-6 relative bg-custom-white border-2 border-primary"
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
                                    <span className="font-extrabold text-h2">{plan.priceperWeek}</span>
                                    <span className="text-btn font-bold">/week</span>
                                </div>

                                <div className="h-[1px] bg-custom-grey mb-4"></div>

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

           
                <div className="mt-12 bg-primary text-custom-white rounded-rounded-corners shadow-lg p-6 py-10">

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h2 className="font-bold text-h3 ">{plans[3].title}</h2>
                            <p className="text-p2 mb-4">{plans[3].description}</p>
                        </div>
                        <div>
                            <span className="font-extrabold text-h2">{plans[3].priceperWeek}</span>
                            <span className="text-btn font-bold">/week</span>
                        </div>
                    </div>

                    <div className="h-[2px] lg:w-1/3 my-6 bg-custom-grey "></div>

                    <div className="flex justify-between items-center">
                        <ul className="w-2/3 flex flex-wrap gap-3  text-p2 ">
                            {plans[3].features.map((feature, idx) => (
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

                        <GetStarted bgColor="bg-custom-white" textColor="text-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobServicePlans;
