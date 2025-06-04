import React from 'react'
import Header from '../components/Header'
import VSpacer from '../components/VSpacer'
import ButtonWithText from '../components/ButtonWithText'
import HeadingWithBottomBorder from '../components/HeadingWithBottomBorder'
import WhyCard from '../components/WhyCard'
import ServiceCard from '../components/ServiceCard'
import DividerWithBackground from '../components/DividerWithBackground'
import Footer from '../components/Footer';

import services from '../services/services_data.json';
import data from '../services/why_choose_us.json';

function HomePage() {
  return (
    <div className="w-screen h-screen bg-transparent">
      <Header />
      <Banner />
      <div className="-z-40 bg-blue-400 absolute top-2/4 left-2/4 rounded-full blur-3xl" style={{
        width: '50rem',
        height: '50rem',
        transform: 'translate(-50%, -50%)',
      }}
      ></div>

      <DividerWithBackground />
      <WhyChooseUs></WhyChooseUs>
      <DividerWithBackground />
      <OurServices></OurServices>
      <DividerWithBackground/>
      <OurWork></OurWork>
      <DividerWithBackground/>
      <AboutTheFounder></AboutTheFounder>
      <DividerWithBackground/>
      <Testimonials></Testimonials>
      <DividerWithBackground/>
      <HowItWorks></HowItWorks>
      <DividerWithBackground/>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      <DividerWithBackground/>
      <Footer></Footer>
    </div>
  )
}

function Banner() {
  return (
    <main className='container m-auto bg-transparent w-screen h-screen flex flex-col justify-center items-center p-4 pt-20'>
      <h2 className="text-7xl font-semibold text-black text-center leading-20">Empowering Innovation <br />
        <span className='text-white py-5' >with&nbsp;</span>
        Intelligent Tech
      </h2>
      <h4 className='w-2/4 text-2xl text-center mt-10'>
        Build faster, smarter, and bolder with our cutting-edge solutions designed for the future of <br /> digital transformation
      </h4>
      <VSpacer height={5} />
      <ButtonWithText title={'Start you project'} icon={'angles-right'}></ButtonWithText>
      <VSpacer height={2} />
      <h5 className='text-lg'>Looking for pre-build projects? &nbsp;
        <a href="#" className='text-violet-700 hover:text-violet-600 transition-colors'>Get it from here.</a>
      </h5>
      <VSpacer height={5} />
      <i className="text-black text-center text-5xl rotate-180 fas fa-angles-up my-10"></i>
    </main>
  )
}

function WhyChooseUs() {
  return <section className='cursor-default h-screen py-10 flex justify-around items-center flex-col'>
    <HeadingWithBottomBorder heading={'why choose us?'}></HeadingWithBottomBorder>

    <section className="container mx-auto flex justify-around items-center flex-wrap">
      {
        data.map((item) => (
          <WhyCard key={item.id} item={item} isLast={item.id == data.length - 1} />
        ))
      }
    </section>

  </section>
}

function OurServices() {
  return <section className='mx-auto container w-full py-10 h-screen'>
    <div className="flex justify-center items-center flex-col">
      <HeadingWithBottomBorder heading={"our services"}></HeadingWithBottomBorder>
      <h4 className="my-5 font-medium text-black text-2xl">Delivering powerful, custom-built software solutions across platforms.</h4>
    </div>

    <div className="flex justify-around items-center flex-wrap py-10">
      {
        services.map((item) => (
          <ServiceCard service={item} key={item.id} />
        ))
      }
    </div>
    <VSpacer height={5} />
    <div className="grid justify-items-center">
      <ButtonWithText title={'Request a custom service'} icon={''}></ButtonWithText>
    </div>
  </section>
}

function OurWork () {
  return (
    <section className='w-screen h-screen bg-white py-10'>
      <HeadingWithBottomBorder heading={'our work'}></HeadingWithBottomBorder>
    </section>
  )
}
function AboutTheFounder () {
  return (
    <section className='w-screen h-screen py-10'>
      <HeadingWithBottomBorder heading={'about the founder'}></HeadingWithBottomBorder>
    </section>
  )
}
function Testimonials () {
  return (
    <section className='container flex justify-between items-center flex-col mx-auto h-screen py-10'>
      <div className='flex justify-center items-center flex-col'>
        <HeadingWithBottomBorder heading={'client testimonials'}></HeadingWithBottomBorder>
      <h2 className="text-2xl font-semibold mt-10 text-black">What our happy clients say</h2>
      </div>

      <main className='w-full h-2/12 flex justify-center items-center flex-col'>
       {/* <div className="flex justify-center items-center"> */}
         <i className="text-7xl text-violet-600 fas fa-quote-left m-10 self-start"></i>
        <h1 className='text-black text-center text-3xl font-normal text-wrap w-10/12'>The software <span className='font-semibold'>Maive</span> built exceeded my expectations. Everything was explained clearly and delivered on time. </h1>
        <i className="text-7xl text-violet-600 fas fa-quote-right m-10 self-end"></i>
       {/* </div> */}


      </main>
        <div className="flex items-center justify-center text-black self-end">
          <span className='text-4xl font-bold'>-</span>
          <h4 className="text-xl text-end font-semibold w-full"> Dhanush M. MBA, Student.</h4>
        </div>

      <h5 className='font-medium text-black text-lg'>
        Want to be our next happy client?&nbsp;
        <a href="#" className='text-violet-700 hover:text-violet-500 transition-colors'>Let's build something great together.</a>
      </h5>

    </section>
  )
}
function HowItWorks () {
  return (
    <section className='w-screen h-screen bg-white py-10'>
      <HeadingWithBottomBorder heading={'how it works'}></HeadingWithBottomBorder>
    </section>
  )
}

function FrequentlyAskedQuestions () {
  return (
    <section className='w-screen h-screen bg-white py-10'>
      <HeadingWithBottomBorder heading={'frequently asked questions'}></HeadingWithBottomBorder>
    </section>
  )
}

export default HomePage