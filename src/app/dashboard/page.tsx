"use client"
import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import logo from '@/app/favicon.ico';
import { useRouter } from 'next/navigation';

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

const Page = () => {
    const router = useRouter();
    const [isClubsSelected, setIsClubsSelected] = useState(true);

    const Map = useMemo(() => dynamic(
        () => import('@/components/map/mapComponent'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])
    

    return (
        <div>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed'>
                <Image src={logo} width={50} height={50} alt='logo' className='hover:cursor-pointer' onClick={() => router.push("/")}/>
                <div className='h-full pt-2 pl-3 hover:cursor-pointer' onClick={() => router.push("/")}>MealSaver</div>
            </div>
            <div className='flex flex-row ml-4 pt-16'>
                <div className='w-1/2'>
                    <div className='ml-10 pt-10 mb-8 flex flex-row border-b-2 border-black w-fit'>
                        <div className={'text-2xl pb-2 border-black cursor-pointer ' + (isClubsSelected ? 'border-b-4' : '')} onClick={() => setIsClubsSelected(true)}>Clubs and Organizations</div>
                        <div className={'text-2xl ml-5 pb-2 border-black cursor-pointer ' + (!isClubsSelected ? 'border-b-4' : '')} onClick={() => setIsClubsSelected(false)}>Restaurants</div>
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
                    <div className='border-2 border-black h-full w-full'>
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page