"use client"
import React, { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import logo from '@/app/favicon.ico';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ''  
const supabase = createClient(supabaseUrl, supabaseKey)

interface MarkerData {
    name: string,
    description: string,
    location: [number, number]
}
async function name() {
    const { data, error } = await supabase
  .from('clubs')
  .select('*')
  console.log(data)
}



const Page = () => {
    const router = useRouter();
    const [isPopUpOpen, setIsPopUpOpen] = useState(true);
    const [isClubsSelected, setIsClubsSelected] = useState(false); 
    
    const _card = () => {
        return (
            <div className='mt-4 ml-14 w-5/6 border-2 border-slate-300 hover:border-black rounded-xl p-3 flex flex-row hover:cursor-pointer'>
                <div className='w-3/4 flex flex-col 'onClick={() => setIsPopUpOpen(true)}>
                    <div className='text-xl font-bold'>ABC Club</div>
                    <div className='font-semibold '>Free Pizza and Drinks</div>
                    <div className='font-light'>ILCB 100</div>
                </div>
                <div className='text-center justify-end flex content-center flex-wrap'>
                    <div className='text-2xl font-bold	'>7:00 PM</div>
                    <div className='font-light'>1st February 2024</div>
                </div>
            </div>
        );
    }
    
    const _popUp = () => {
        return (
            <div className='fixed z-10 w-[45%] h-3/5 border-2 mt-20 bg-white  border-black mb-2 flex flex-col justify-center items-center rounded-r-xl'>
                <div className='w-full h-full bg-zinc-100 rounded-xl flex flex-col justify-center items-center'>
                    <div className='top-0 right-0 absolute mr-5 mt-3 font-extrabold text-xl hover:cursor-pointer' onClick={() => setIsPopUpOpen(false)}>X</div>
                    <div className='text-3xl font-bold'>Club ABC</div>
                    <div className='text-xl font-medium pb-5'>Event Name</div>
                    <div className='text-2xl font-semibold'>Free Pizza and Drinks</div>
                    <div className='text-lg font-light pb-5'>Description</div>
                    <div className='text-2xl font-medium'>1st February 2024 - 7:00 PM</div>
                    <div className='text-lg font-light pb-5'>ILCB 100</div>
                    <div className='flex flex-row mt-6'>
                        <div className='text-2xl font-medium p-2 px-4 mr-4 text-white bg-green-600 rounded-xl hover:cursor-pointer hover:bg-green-700'>Yes, I plan on attending!</div>
                        <div className='text-2xl font-medium p-2 px-4 border-2 ml-4 bg-black rounded-xl text-white hover:cursor-pointer hover:bg-slate-800'>Maybe...</div>
                    </div>
                </div>
            </div>
        );
    }

    const Map = useMemo(() => dynamic(
        () => import('@/components/map/mapComponent'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])

    const data:MarkerData[] = [{"name":"Club ABC", "description":"Free Pizza and Drinks", "location":[30.616131817894647, -96.34003360046086]}, {"name":"Club ABC", "description":"Free Pizza and Drinks", "location":[30.6123018, -96.3417165]}, {"name":"Club ABC", "description":"Free Pizza and Drinks", "location":[30.615173429343546, -96.34390437249968]}]
    

    return (
        <div>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed '>
                <Image src={logo} width={50} height={50} alt='logo' className='hover:cursor-pointer' onClick={() => router.push("/")}/>
                <div className='h-full pt-2 pl-3 hover:cursor-pointer ' onClick={() => router.push("/")}>MealSaver</div>
            </div>
            <div className='flex flex-row pt-16'>
                <div className='w-1/2'>
                {isPopUpOpen && <_popUp/>}
                    <div className='ml-14 pt-10 mb-8 flex flex-row border-b-2 border-black w-fit'>
                        <div className={'text-2xl pb-1 border-black cursor-pointer ' + (isClubsSelected ? 'border-b-8' : '')} onClick={() => setIsClubsSelected(true)}>Clubs and Organizations</div>
                        <div className={'text-2xl ml-5 pb-1 border-black cursor-pointer ' + (!isClubsSelected ? 'border-b-8' : '')} onClick={() => setIsClubsSelected(false)}>Restaurants</div>
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
                        <Map markers={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page