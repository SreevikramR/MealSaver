"use client"
import React, { useState, useMemo } from 'react'
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

const _card = () => {
    return (
        <div className='mt-4 ml-10 w-5/6 border-2 border-slate-300 hover:border-black rounded-xl p-3 flex flex-row'>
            <div className='w-3/4 flex flex-col 'onClick={() => name()}>
                <div className='text-xl font-bold'>Coupon Title</div>
                <div className='font-semibold '>Discount Amoun</div>
                <div className='font-light'>Location</div>
            </div>
            <div className='text-center justify-end flex content-center flex-wrap'>
                <div className='text-2xl font-bold	'>7:00 PM</div>
                <div className='font-light'>1st February 2024</div>
            </div>
        </div>
    );
}

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isClubsSelected, setIsClubsSelected] = useState(true);

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
            <div className='flex flex-row ml-4 pt-16'>
                <div className='w-1/2'>
                    <div className='ml-10 pt-10 mb-2 flex flex-row w-fit text-2xl'>My Coupons</div>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                </div>
                <div className='w-1/2'>
                    <div className='pt-10 mb-2 w-full text-2xl text-center'>Create New Coupon</div>
                    <div className='flex justify-center items-center flex-col text-xl pt-3'>
                        <div className='w-3/4'>
                            <div className='text-2xl'>What's the title for the Coupon?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>What items does it apply to?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>What is the Room number?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex flex-row w-3/4 pt-3'>
                            <div className='w-1/2 mr-2'>
                                <div className='text-xl'>Till when is the coupon available?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='w-1/2 ml-2'>
                                <div className='text-xl pt-7'>What time is it available till?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className='w-3/4 pt-10'>
                            <button className='w-full border-2 border-black bg-black text-white p-2 rounded-lg'>Create Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page