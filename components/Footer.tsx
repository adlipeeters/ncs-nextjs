import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { Button } from './ui/button';
const Footer = () => {
    const { resolvedTheme } = useTheme()
    const [logoUrl, setLogoUrl] = useState<string>('/logo_white.png');
    useEffect(() => {
        setLogoUrl(resolvedTheme === 'light' ? '/logo_white.png' : '/logo.png');
    }, [resolvedTheme]);
    return (
        <div className='bg-[#25293c] rounded-t-[3.75rem] overflow-hidden'>
            <div className='footer-bg'>
                <div className="container grid grid-cols-1 md:grid-cols-2 py-12">
                    <div className='flex flex-col gap-5'>
                        <Link href="/">
                            <Image
                                className=""
                                width={150}
                                height={40}
                                // loading="eager"
                                alt="logo"
                                src={logoUrl}
                            />
                        </Link>
                        <p className='text-gray-300'>Abonați-vă la newsletter-ul informativ <br /> săptămânal pentru a fi la curent.</p>
                        <div className='flex flex-col gap-[2px]'>
                            <label htmlFor="newsletter-input" className='text-sm font-medium'>Abonați-vă la newsletter</label>
                            <div className='flex'>
                                <input type="email" id="newsletter-input" placeholder="Email" className='bg-[#25293c] outline-none ring-0 px-4 rounded-l-md'/>
                                <button className='rounded-r-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Trimite</button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="container">
                <div className='py-5 flex justify-between items-center'>
                    <div>
                        <p className='text-sm font-medium text-gray-300'>© 2024 Made with ❤️ and 🍵 by <span className='font-bold'>NecSys</span> for a better future!</p>
                    </div>
                    <div className='flex'>
                        <Link className='transition-all duration-300 hover:-translate-y-[1px]' href='https://www.facebook.com/people/Leelo/100082975010219/'>
                            <LiaFacebookF className='text-gray-300 w-5 h-5' />
                        </Link>
                        <Link className='transition-all duration-300 hover:-translate-y-[1px]' href='https://ro.linkedin.com/company/leelo-asistent-de-business'>
                            <LiaLinkedin className='text-gray-300 w-5 h-5' />
                        </Link>
                        <Link className='transition-all duration-300 hover:-translate-y-[1px]' href='https://www.instagram.com/necsys.technology/'>
                            <LiaInstagram className='text-gray-300 w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer