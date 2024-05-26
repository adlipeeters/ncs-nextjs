import React from 'react'
import { RxDesktop } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
// import { CgPerformance } from "react-icons/cg";
import { RxSketchLogo } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";

const Features = () => {
    return (
        <div className='container flex justify-center mt-20'>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className='flex flex-col items-center justify-center border-[1px] border-[#7267f03a] aspect-video gap-2 p-4 rounded-md'>
                    <RxDesktop className='text-[#7367f0] w-10 xl:w-16 h-10 xl:h-16 font-light' />
                    <h4 className='text-3xl font-medium'>Pretutindeni</h4>
                    <div className='flex flex-col'>
                        <p className='font-medium text-center'>Disponibil</p>
                        <p>pe toate dispozitivele</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center border-[1px] border-green-500 aspect-video gap-2 p-4 rounded-md'>
                    <RxAvatar className='text-green-500 w-10 xl:w-16 h-10 xl:h-16 font-light' />
                    <h4 className='text-3xl font-medium'>4,8/5</h4>
                    <div className='flex flex-col'>
                        <p className='font-medium text-center'>Feedback din partea</p>
                        <p className='font-medium text-center'>clienților</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center border-[1px] border-blue-300 aspect-video gap-2 p-4 rounded-md'>
                    <RxSketchLogo className='text-blue-300 w-10 xl:w-16 h-10 xl:h-16 font-light' />
                    <h4 className='text-3xl font-medium'>99,97</h4>
                    <div className='flex flex-col'>
                        <p className='font-medium text-center'>Șlefuit pentru</p>
                        <p className='font-medium text-center'>performanță</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center border-[1px] border-orange-300 aspect-video gap-2 p-4 rounded-md'>
                    <RxCheckCircled className='text-orange-300 w-10 xl:w-16 h-10 xl:h-16 font-light' />
                    <h4 className='text-3xl font-medium'>14 zile</h4>
                    <div className='flex flex-col'>
                        <p className='font-medium text-center'>Banii înapoi</p>
                        <p className='font-medium text-center'>garantat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features