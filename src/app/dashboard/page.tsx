import React from 'react'
import Image from 'next/image';
import logo from '@/app/favicon.ico';

const _card = () => {
    return (
        <div className='mt-4 ml-10 w-5/6 border-2 border-black rounded-xl p-3 flex flex-row'>
            <div className='w-3/4 flex flex-col'>
                <div>ABC Club</div>
                <div>Free Pizza and Drinks</div>
                <div>ILCB 100</div>
            </div>
            <div className='text-center justify-end flex content-center flex-wrap'>
                <div>7:00 PM</div>
                <div>1st February 2024</div>
            </div>
        </div>
    );
}

const page = () => {
    return (
        <div>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed'>
                <Image src={logo} width={50} height={50} alt='logo'/>
                <div className='h-full pt-2 pl-3'>MealSaver</div>
            </div>
            <div className='flex flex-row ml-4 pt-16'>
                <div className='w-1/2'>
                    <div className='ml-10 pt-10 mb-8 flex flex-row border-b-2 border-black w-fit'>
                        <div className='text-2xl pb-2 '>Clubs and Organizations</div>
                        <div className='text-2xl ml-5 border-b-4 border-black'>Restaurants</div>
                    </div>

                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                </div>
                <div className='h-[80vh] w-1/2 flex flex-wrap align-middle mt-10 mr-6 fixed right-0'>
                    <div className='border-2 border-black h-full w-full'></div>
                </div>
            </div>
        </div>
    )
}

export default page