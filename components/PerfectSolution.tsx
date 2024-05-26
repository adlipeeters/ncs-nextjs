import React from 'react'
import { Bars3Icon, XMarkIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const PerfectSolution = () => {
    return (
        <div className='py-20 flex justify-center'>
            <div className='container flex flex-col justify-center'>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className='flex flex-col items-center'>
                        <h1 className="text-3xl lg:text-5xl font-bold text-center">Soluția completă pentru gestionarea afacerii tale!</h1>
                        <Image
                            className="w-full object-contain h-auto max-w-[400px]"
                            width={100}
                            height={50}
                            // loading="eager"
                            alt="logo"
                            src={'/section-title-icon.png'}
                        />
                    </div>
                    <p className='text-center'>Orice ai nevoie pentru managementul afacerii tale, centralizat într-o singură platformă.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                        // <div key={idx} className='flex flex-col items-center gap-3 shadow-md border-[1px] border-gray-700 p-6 rounded-md duration-300 hover:shadow-lg'>
                        <div key={idx} className='flex flex-col items-center gap-3 p-6 rounded-md duration-300 hover:shadow-lg cursor-pointer'>
                            <div className='bg-[#7267f03a] py-3 px-6 rounded-md'>
                                <UserGroupIcon className='w-[50px] text-[#7367f0]' />
                            </div>
                            <h4 className='font-bold'>CRM</h4>
                            <p className='px-8 text-center'>Îmbunătățește experiența clienților și crește vânzările cu CRM-ul Leelo - Asistent de Business.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PerfectSolution