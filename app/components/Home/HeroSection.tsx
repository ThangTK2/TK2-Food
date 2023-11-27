import Image from 'next/image'
import React from 'react'
import { HiStar } from 'react-icons/hi2'
import RestaurantDetailsModal from './RestaurantDetailsModal'

const HeroSection = () => {
  const bannerImg = "/img/banner.jpg"
  
  return (
    <section className="relative h-72 md:h-96">
      <div className="relative h-48 md:h-72 bg-no-repeat bg-cover w-full" style={{backgroundImage: `url(${bannerImg})`}}></div>

      <div className="absolute bottom-2 left-1 rounded-full w-28 h-28 p-1 overflow-hidden bg-white ring-2 ring-white">
        <Image src='/img/logo.png' width={100} height={100} className='w-full object-contain' alt='logo' />
      </div>
      <div className="absolute bottom-4 left-[130px]">
        <div className="flex flex-col">
          <div>
            <h1>TK2-Food</h1>
          </div>
          <div className="flex items-center">
            <HiStar />
            <p className="mx-1">5 rating</p>
          </div>
          <div>
            <RestaurantDetailsModal />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection