import React from "react";
import GetStarted from "../common/GetStarted";
import { GoArrowUpRight } from "react-icons/go";

const ClientReview = () => {
    const clientReviewData = {
        title: "What our clients have to say",
        reviews: [
            {
                text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
            },
            {
                text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
            },
            {
                text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
            },
        ],
    };

    return (
        <section className="py-12 ">
            <div className="w-[70%] mx-auto ">
                <h2 className="text-2xl font-bold text-primary mb-8">
                    {clientReviewData.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {clientReviewData.reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-primary rounded-rounded-corners border-[1px] border-primary shadow-lg  flex flex-col justify-between "
                        >
                      
                            <div className="flex justify-center items-center bg-custom-white text-custom-white h-[210px] py-6 rounded-rounded-corners">
                                <button
                                    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-custom-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.752 11.168l-4.717-3.248A1 1 0 009 8.825v6.35a1 1 0 001.035.905l4.717-3.248a1 1 0 000-1.664z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="bg-primary flex flex-col justify-end items-end gap-3 text-custom-white p-4 rounded-b-2xl">
                                <p className="text-p2">
                                    {review.text}
                                </p>

                                <button
                                    className=" w-10 h-10 text-p1  bg-custom-white text-primary hover:text-custom-white hover:bg-secondary rounded-full flex justify-center items-center shadow-lg"
                                >
                                    <GoArrowUpRight/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Actions */}
                <div className="mt-12 flex justify-center gap-10">
                    <button className="text-primary border border-primary px-4 py-2 font-semibold rounded-full hover:text-custom-white hover:bg-secondary">
                        More customer testimonials →
                    </button>
                    <GetStarted bgColor="bg-primary" textColor="text-custom-white" />
                </div>
            </div>
        </section>
    );
};

export default ClientReview;
