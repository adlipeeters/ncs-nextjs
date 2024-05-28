import React from 'react'
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from './ui/icons'
// import { Icons } from "@/components/icons"

const PricingCards = () => {
    return (
        <>
            <section className="container w-full flex flex-col  gap-6 py-8 md:max-w-[64rem]">
                {/* <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Simple, transparent pricing
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Unlock all features including unlimited posts for your blog.
                </p>
            </div> */}
                <div className="grid w-full items-start gap-10 rounded-lg border shadow-md p-10  bg-white dark:bg-[var(--blue-secondary)]">
                    <div className="grid gap-6 w-full">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            Leelo Start e-Factura
                        </h3>
                        <div className='grid gap-x-3 gap-y-6 grid-cols-2 sm:grid-cols-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base font-bold'>Nomenclatoare</p>
                                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Produse
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Servicii
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Conturi bancare
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Tipuri de venit
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base font-bold'>CRM</p>
                                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Clienți
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Profil Client
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Grup clienți
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Oferte
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base font-bold'>Vanzari</p>
                                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Facturi electronice
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Avize
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Proforme
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Facturi recurente
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Incasări
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Plăți online
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base font-bold'>Rapoarte</p>
                                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Extrase de cont
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Vânzări pe client
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Evoluție preț
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-base font-bold'>Cheltuieli</p>
                                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Facturi furnizori
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4" /> Furnizori
                                    </li>
                                </ul>
                            </div>
                            <div className='hidden md:flex flex-col gap-2'>
                                <div className="flex flex-col gap-4 text-center">
                                    <div>
                                        <h4 className="text-6xl font-bold">Lei 25</h4>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            Lunar
                                        </p>
                                    </div>
                                    <button type='button' className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Începe acum</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center md:hidden">
                        <div>
                            <h4 className="text-6xl font-bold">Lei 25</h4>
                            <p className="text-sm font-medium text-muted-foreground">
                                Lunar
                            </p>
                        </div>
                        <button type='button' className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Începe acum</button>
                    </div>
                </div>
                {/* <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
                        Taxonomy is a demo app.{" "}
                        <strong>You can test the upgrade and won&apos;t be charged.</strong>
                    </p>
                </div> */}
            </section>
            <section className="container flex flex-col gap-6 md:max-w-[64rem]">
                <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] shadow-md dark:bg-[var(--blue-secondary)]">
                    <div className="grid gap-6">
                        <h3 className="text-xl font-bold sm:text-2xl">
                        Leelo Enterprise
                        </h3>
                        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
                            </li>

                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Custom domain
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
                            </li>
                            <li className="flex items-center">
                                <Icons.check className="mr-2 h-4 w-4" /> Premium Support
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <div>
                            <h4 className="text-7xl font-bold">$19</h4>
                            <p className="text-sm font-medium text-muted-foreground">
                                Billed Monthly
                            </p>
                        </div>
                        <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
                        Taxonomy is a demo app.{" "}
                        <strong>You can test the upgrade and won&apos;t be charged.</strong>
                    </p>
                </div>
            </section>
        </>
    )
}

export default PricingCards