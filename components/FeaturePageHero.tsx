import Image from 'next/image'
import React from 'react'

const FeaturePageHero = ({ title, paragraph1, paragraph2 }: { title?: string, paragraph1?: string, paragraph2?: string }) => {
    return (
        <div className='w-full landing-hero pt-40 pb-20 rounded-b-[3.5rem]'>
            <div className="container flex flex-col items-center">
                <div className="flex flex-col items-center justify-center max-w-3xl">
                    <h1 className='hero-title text-3xl lg:text-5xl font-bold'>{title}</h1>
                    <div className='flex flex-col gap-6 mt-6 font-medium text-lg relative'>
                        <p className='text-center'>{paragraph1}</p>
                        <p className='text-center'>{paragraph2}</p>
                        <div className='flex justify-center'>
                            <button type='button' className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Încearcă acum</button>
                        </div>
                        <div className='min-h-[200px]'>
                            <Image className='absolute object-contain max-h-[400px] md:max-h-[600px]' width={1000} height={1000} alt='header-img' src={'/leelo-head-page.svg'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturePageHero