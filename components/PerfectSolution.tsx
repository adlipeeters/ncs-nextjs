import React from 'react'
import { Bars3Icon, XMarkIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const PerfectSolution = () => {
    return (
        <div className='bg-white py-20 flex justify-center'>
            <div className='container flex flex-col justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl lg:tex-3xl xl:text-4xl font-bold text-gray-700'>Soluția completă pentru gestionarea afacerii tale!</h1>
                    <p className='text-gray-700'>Orice ai nevoie pentru managementul afacerii tale, centralizat într-o singură platformă.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                        <div key={idx} className='flex flex-col items-center text-gray-700 gap-3 shadow-md border-[1px] border-gray-200 p-6 rounded-md duration-300 hover:shadow-lg'>
                            <UserGroupIcon className='text-gray-700 w-[50px]' />
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