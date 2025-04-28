import React from 'react';
import HeroComponent from '../components/home/HeroComponent';
import HowWeWork from '../components/home/HowWeWork';
import About from '../components/home/About';
import ClientReview from '../components/home/ClientReview';
import ChooseUs from '../components/home/ChooseUs';
import JobServicePlans from '../components/home/JobServicePlans';
import ResumeBuildingPlans from '../components/home/ResumeBuildingPlans';
import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <section className='mb-10'>
      <header className="bg-gradient-bg bg-no-repeat p- h-screen" >
      <HeroComponent/>
      </header>
      <main className='bg-custom-white py-8'>
             <HowWeWork/>
             <About/>
             <ClientReview/>
             <ChooseUs/>
             <JobServicePlans/>
             <ResumeBuildingPlans/>
             <Contact/>
      </main>
    </section>
  );
};

export default HomePage;
