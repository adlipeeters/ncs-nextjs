import * as React from "react"
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { HiMiniStar } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

import { TESTIMONIALS } from "@/content/testimonials"

export function Testimonials() {
    const [api, setApi] = React.useState<CarouselApi>()
    return (
        <div className="flex flex-col 2xl:flex-row gap-16 justify-center container">
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-3xl lg:text-5xl font-bold">Testimoniale</h1>
                    <Image
                        className="object-contain w-full h-auto"
                        width={200}
                        height={50}
                        // loading="eager"
                        alt="logo"
                        src={'/section-title-icon.png'}
                    />
                    <p>Vezi ce au de spus clienții noștridespre experiența lor cu asistentul lor de business.</p>
                    <div className="flex justify-center 2xl:justify-start gap-4 w-full">
                        <button className="bg-[#7267f03a] p-3 rounded-md transition-all duration-300 hover:opacity-75" onClick={() => api?.scrollPrev()}>
                            <HiChevronLeft className="text-[#7367f0]" />
                        </button>
                        <button className="bg-[#7267f03a] p-3 rounded-md transition-all duration-300 hover:opacity-75" onClick={() => api?.scrollNext()}>
                            <HiChevronRight className="text-[#7367f0]" />
                        </button>
                    </div>
                </div>
            </div>
            <Carousel
                setApi={setApi}
                opts={{
                    align: "center",
                }}
                className="w-full max-w-7xl"
            // className="w-full"
            >
                <CarouselContent className="p-1">
                    {TESTIMONIALS.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="">
                                <Card className="border-0 dark:border-[1px] dark:border-gray-700 dark:bg-transparent">
                                    <CardContent className="flex flex-col aspect-squar items-center justify-between gap-12 py-8 px-6">
                                        <Image
                                            className="object-contain w-full max-w-[250px] h-auto"
                                            width={100}
                                            height={50}
                                            // loading="eager"
                                            alt="logo"
                                            src={item?.image}
                                        />
                                        <p className="text-center">{`"${item?.review}"`}</p>
                                        <div className="flex justify-center">
                                            {
                                                Array.from({ length: item?.stars }).map((_, _i) => (
                                                    <HiMiniStar key={_i} className="text-yellow-500 w-8 h-8" />
                                                ))
                                            }
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <Avatar>
                                                <AvatarImage src="" alt="@shadcn" />
                                                <AvatarFallback>SV</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <p>{item?.reviewer}</p>
                                                <p className="opacity-75">{item?.position}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    )
}