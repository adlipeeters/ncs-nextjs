import React from 'react'
import PricingCards from './PricingCards'

const Pricing = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full landing-hero mt-20 py-20 rounded-b-xl'>
                <div className="container flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center max-w-3xl">
                        <h1 className='hero-title text-3xl lg:text-5xl font-bold'>Prețuri abonamente</h1>
                        <div className='flex flex-col gap-6 mt-6 font-medium text-lg'>
                            <p className='text-center'>Prin Leelo, îți oferim nu doar un serviciu, ci și promisiunea unui partener de încredere în digitalizarea afacerii tale! Suntem aici să te susținem în fiecare pas și să ne asigurăm că ai toate instrumentele necesare pentru a reuși!</p>
                            <p className='text-center'>Leelo este un serviciu prepaid, așadar poți fi liniștit știind că nu vor exista costuri ascunse sau surprize neplăcute. Totul este simplu și transparent, fix cum ai nevoie!</p>
                        </div>
                    </div>
                </div>
            </div>
            <PricingCards />
        </div>
    )
}

export default Pricing