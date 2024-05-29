import React from 'react'
import PricingCards from '../components/PricingCards'
import Image from 'next/image'
import { Newspaper } from '@/components/Newspaper'
import WhoWeAre from '@/components/WhoWeAre'
import FeaturePageHero from '@/components/FeaturePageHero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

const aboutUs = () => {
  return (
    <main className={`${inter.className}`}>
      <FeaturePageHero
        title={"Despre noi"}
        paragraph1={"Bine ai venit în universul Leelo, unde afacerea ta prinde aripi!"}
      />
      <div className='pt-20 md:pt-60 container'>
        <Newspaper />
        <WhoWeAre />
      </div>
    </main>
  )
}

export default aboutUs