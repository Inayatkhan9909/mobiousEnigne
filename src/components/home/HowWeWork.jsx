import React from 'react'

const HowWeWork = () => {
    const workData = {
        title: "How we work?",
        content: [
            {
                id: 1,
                text: 'Submit Intake Form'
            },
            {
                id: 2,
                text: 'We do the search and curation for a list of jobs'
            },
            {
                id: 3,
                text: 'You approve, we do the tedious part (applying)'
            },
            {
                id: 4,
                text: 'You get the interviews'
            },
        ]
    }

    return (
        <section className='w-full py-10'>
            <div className='w-[70%] m-auto flex flex-col gap-6'>
                <h1 className='w-full  text-h3 text-primary'>{workData.title}</h1>
                <div className='flex lg:flex-nowrap flex-wrap  justify-center items-start gap-10'>
                    {
                        workData.content.map((content) => (
                            <div key={content.id} className=' p-4 flex flex-col  gap-3'>
                                {/* Circle */}
                                <span className='w-12 h-12 flex items-center justify-center border-2 border-secondary rounded-full text-custom-black text-h2'>
                                    {content.id}
                                </span>
                                {/* Line */}
                                <div className='w-full h-1 bg-secondary'></div>
                                {/* Text */}
                                <p className='w-[260px]  text-p1 text-primary text-wrap'>{content.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowWeWork
