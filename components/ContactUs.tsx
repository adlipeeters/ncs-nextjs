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
                            alt="logo"
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
                    <div className='grid grid-cols-1 lg:grid-cols-2 w-full mt-12'>
                        <div className='border-[1px] border-gray-300 dark:border-gray-700 p-2 rounded-tl-[3.75rem] flex flex-col gap-4'>
                            <Image
                                className="object-contain w-full h-auto rounded-tl-[3.75rem]"
                                width={1000}
                                height={1000}
                                loading="lazy"
                                alt="suport-clienți"
                                src={'/contact-customer-service.png'}
                            />
                            {/* <BiSupport className='text-[#7367f0] text-2xl' /> */}
                            <div className='flex justify-between pb-2'>
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
                                        <HiOutlineMail className='text-[#7367f0] text-2xl w-8 h-8' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Suport</p>
                                        <Link target='_blank' href={"https://suport.leelo.ro"} className='duration-300 transition-all hover:text-[#7367f0]'>suport.leelo.ro</Link>
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