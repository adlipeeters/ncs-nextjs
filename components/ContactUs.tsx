import React from 'react'
import { Badge } from './ui/badge'
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import Link from 'next/link';

const ContactUs = () => {
    return (
        <div>
            <div className="container flex flex-col items-center py-16">
                <div className='flex flex-col items-center gap-4 w-full'>
                    <div>
                        <Badge className='bg-[#7267f03a] text-[#7367f0] rounded-md'>Contactează-ne</Badge>
                    </div>
                    <div>
                        <h1 className="text-3xl font-medium text-center"><span className='font-bold'>Te contactăm noi </span>în cel mai scurt timp.</h1>
                        <Image
                            className="object-contain w-full h-auto max-h-[10px]"
                            width={200}
                            height={30}
                            // loading="eager"
                            alt="underline"
                            src={'/section-title-icon.png'}
                        />
                        <p>Alătură-te acum noilor tehnologii și achiziționează unul dintre asistenții tăi personali!</p>
                    </div>
                    {/* <Image
                            className="object-contain w-full h-auto"
                            width={200}
                            height={30}
                            // loading="eager"
                            alt="logo"
                            src={'/contact-border.png'}
                        /> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 w-full mt-12 gap-y-4 gap-x-6'>
                        <div className='border-[1px] border-gray-300 dark:border-gray-700 p-2 rounded-tl-[3.75rem] rounded-tr-md rounded-b-md flex flex-col gap-4'>
                            <Image
                                className="object-contain w-full h-auto rounded-tl-[3.75rem]"
                                width={1000}
                                height={500}
                                loading="lazy"
                                alt="suport-clienți"
                                src={'/contact-customer-service.png'}
                            />
                            <div className='flex flex-col gap-4 md:flex-row md:justify-around pb-2'>
                                <div className='flex gap-2'>
                                    <div className='bg-[#7267f03a] p-2 rounded-md'>
                                        <HiOutlineMail className='text-[#7367f0] text-2xl w-8 h-8' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Email</p>
                                        <p>office@leelo.ro</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='bg-[#7267f03a] p-2 rounded-md'>
                                        <BiSupport className='text-[#7367f0] text-2xl w-8 h-8' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Suport</p>
                                        <Link target='_blank' href={"https://suport.leelo.ro"} className='duration-300 transition-all hover:text-[#7367f0]'>suport.leelo.ro</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-md dark:bg-[var(--blue-secondary)] flex flex-col gap-4 p-6 rounded-md'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-2'>
                                    <p className='text-2xl font-bold'>Trimite un mesaj</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor='fullname'>Nume Prenume</label>
                                        <input type="text" id="fullname" placeholder="Popescu Ioan" className='py-2 bg-transparent border-[1px] border-gray-300 dark:border-gray-700 outline-none ring-0 px-4 rounded-md text-gray-300 dark:text-inherit transition-all duration-300 hover:border-[#7367f0] dark:hover:border-[#7367f0]' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor='email'>Email</label>
                                        <input type="email" id="email" placeholder="popescu.ioan@email.com" className='py-2 bg-transparent border-[1px] border-gray-300 dark:border-gray-700 outline-none ring-0 px-4 rounded-md text-gray-300 dark:text-inherit transition-all duration-300 hover:border-[#7367f0] dark:hover:border-[#7367f0]' />
                                    </div>
                                    <div className='flex flex-col gap-1 md:col-span-2'>
                                        <label htmlFor='subject'>Subiect</label>
                                        <input type="text" id="subject" placeholder="Subiectul mesajului" className='py-2 bg-transparent border-[1px] border-gray-300 dark:border-gray-700 outline-none ring-0 px-4 rounded-md text-gray-300 dark:text-inherit transition-all duration-300 hover:border-[#7367f0] dark:hover:border-[#7367f0]' />
                                    </div>
                                    <div className='flex flex-col gap-1 md:col-span-2'>
                                        <label htmlFor='textarea'>Mesaj</label>
                                        <textarea rows={6} id="textarea" placeholder="Scrie un mesaj" className='py-2 bg-transparent border-[1px] border-gray-300 dark:border-gray-700 outline-none ring-0 px-4 rounded-md text-gray-300 dark:text-inherit transition-all duration-300 hover:border-[#7367f0] dark:hover:border-[#7367f0]'></textarea>
                                    </div>
                                    <div className='flex flex-col gap-1 md:col-span-2 mt-6'>
                                        <button type='button' className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Trimite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs