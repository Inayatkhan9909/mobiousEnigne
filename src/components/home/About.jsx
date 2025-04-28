import React from 'react';
import AshwiniImage from '../../assets/images/AshwiniImage.png';
import NicoleImage from '../../assets/images/NicoleImage.png';
import linkedinIcon from '../../assets/svg/linkedin.svg';

const About = () => {
    const aboutData = {
        title: "About Us",
        content: [
            {
                id: 1,
                about: `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University. \n Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.`,
                image:AshwiniImage
            },
            {
                id: 2,
                about: `Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. \n With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.`,
                image:NicoleImage
            }
        ],
        learnMore: {
            text: `Learn more about our Board of Advisors​ ↗`,
            link: ""
        },
        socialLink: {
            text: `LFollow us on our Linkedin page ↗`,
            link: ""
        }
    }
    return (
        <section className='bg-about-bg bg-no text-custom-white text-p2 font-dm-sans p-10'>
            <div className='w-[60%] m-auto flex flex-col gap-6 '>
                <h1 className='text-h3'>{aboutData.title}</h1>

                <div className='flex flex-col justify-center items-center gap-10'>
                    {
                        aboutData.content.map((content)=>(
                        
                            <div className='flex gap-14  items-center'>
                            
                            <div className='relative'>
                                <div className='w-40 h-40 pt-4 px-4 rounded-full bg-custom-white overflow-hidden'>
                                    <img 
                                        src={content.image} 
                                        alt={content.about.split(' ')[0]} 
                                        className='w-full h-full  object-top object-cover'
                                    />
                                </div>
                                {/* LinkedIn Icon */}
                                <span className='absolute bottom-2 -right-4 w-10 h-10 flex justify-center items-center bg-elipse-bg rounded-full border-2 backdrop-blur-sm border-custom-white'>
                                    <img 
                                        src={linkedinIcon} 
                                        alt="LinkedIn Icon" 
                                        className='w-6 h-6'
                                    />
                                </span>
                            </div>
                        
                           
                            <div className=''>
                                <p className='whitespace-pre-wrap'>{content.about}</p>
                            </div>
                        </div>
                        
                        ))
                    }
                </div>

                <div className='max-w-fit m-auto   flex flex-col  justify-end gap-4'>
                  <a href={aboutData.learnMore.link} className=' hover:text-primary'>{aboutData.learnMore.text}</a>
                  <a href={aboutData.socialLink.link} className=' hover:text-primary'>{aboutData.socialLink.text}</a>
                 
                </div>
            </div>
        </section>
    )
}

export default About