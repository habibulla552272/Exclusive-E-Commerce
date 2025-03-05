import React from 'react'

import SideImage from '../../assets/About/Side Image.png'
import service1 from '../../assets/About/Services (7).png'
import service2 from '../../assets/About/Services (6).png'
import service3 from '../../assets/About/Services (2).png'
import service4 from '../../assets/About/Services (3).png'


import ImageTom from '../../assets/About/image 46.png'
import ImageEma from '../../assets/About/image 47.png'
import ImageSmith from '../../assets/About/image 51.png'


import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import HomeLastSection from '../home/HomeLastSection/HomeLastSection'


const AboutSection1 = () => {
  return (
    <section>
        <div className='container mx-auto'>
            {/* div-1  */}
            <div className='flex flex-col-reverse gap-3 md:flex-row md:justify-between md:items-center'>
                <div className='md:w-[49%] w-[88%] mx-auto'>
                    <h2 className='text-3xl md:text-5xl font-bold '>Out Story</h2>
                    <p className='py-7 '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className='md:w-[49%] w-[88%] mx-auto'>
                    <img src={SideImage} alt="" />
                </div>
            </div>

            {/* div2 */}
            <div className='flex flex-col gap-5 md:flex-row my-14'>
                <div className='text-center border-[1px] border-gray-200 rounded-sm py-3 w-[88%] mx-auto'>
                    <img className='w-fit mx-auto' src={service1} alt="" />
                    <p className='py-3 text-2xl font-bold'>10.5k</p>
                    <p>Sallers active our site</p>
                </div>
                <div className='text-center border-[1px] border-gray-200 rounded-sm py-3 w-[88%] mx-auto bg-[#DB4444] text-white md:flex-wrap'>
                    <img className='w-fit mx-auto' src={service2} alt="" />
                    <p className='py-3 text-2xl font-bold'>10.5k</p>
                    <p>Sallers active our site</p>
                </div>
                <div className='text-center border-[1px] border-gray-200 rounded-sm py-3 w-[88%] mx-auto'>
                    <img className='w-fit mx-auto' src={service3} alt="" />
                    <p className='py-3 text-2xl font-bold'>10.5k</p>
                    <p>Sallers active our site</p>
                </div>
                <div className='text-center border-[1px] border-gray-200 rounded-sm py-3 w-[88%] mx-auto'>
                    <img className='w-fit mx-auto' src={service4} alt="" />
                    <p className='py-3 text-2xl font-bold'>10.5k</p>
                    <p>Sallers active our site</p>
                </div>
            </div>
            {/* div3 */}
              <div className='flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between'>
                  <div className='mx-auto w-[88%] md:w-[32%]'>
                      <div className='bg-gray-200 py-2 px-2  '>

                          <img className='w-fit mx-auto  h-[360px]' src={ImageTom} alt="tom Image" />
                      </div>
                      <div>


                          <h2 className='text-2xl font-bold pt-3'>Tom cruse</h2>
                          <p className=' py-2 font-thin'>Founder & Chairman</p>
                          <div className='flex gap-3 text-xl md:text-2xl'>
                              <FaFacebook />
                              <CiTwitter />
                              <FaInstagram />

                          </div>
                      </div>
                  </div>
                  <div className='mx-auto w-[88%] md:w-[32%]'>
                      <div className='bg-gray-200 py-2 px-2  '>

                          <img className='w-fit mx-auto  h-[360px]' src={ImageEma} alt="tom Image" />
                      </div>
                      <div>


                          <h2 className='text-2xl font-bold pt-3'>Product Designer</h2>
                          <p className=' py-2 font-thin'>Founder & Chairman</p>
                          <div className='flex gap-3 text-xl md:text-2xl'>
                              <FaFacebook />
                              <CiTwitter />
                              <FaInstagram />

                          </div>
                      </div>
                  </div>
                  <div className='mx-auto w-[88%] md:w-[32%]'>
                      <div className='bg-gray-200 py-2 px-2 '>

                          <img className='w-fit mx-auto  h-[360px]' src={ImageSmith} alt="tom Image" />
                      </div>
                      <div>


                          <h2 className='text-2xl font-bold pt-3'>Emma </h2>
                          <p className=' py-2 font-thin'>Managing Director</p>
                          <div className='flex gap-3 text-xl md:text-2xl'>
                              <FaFacebook />
                              <CiTwitter />
                              <FaInstagram />

                          </div>
                      </div>
                  </div>
               

              </div>

              {/* 4 content */}
              <HomeLastSection />
        </div>
    </section>
  )
}

export default AboutSection1
