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

async function name() {
    const { data, error } = await supabase
  .from('clubs')
  .select('*')
  console.log(data)
}


const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPopUpOpen, setIsPopUpOpen] = useState(true);
    
    const _card = () => {
        return (
            <div className='mt-4 ml-10 w-5/6 border-2 border-slate-300 hover:border-black hover:cursor-pointer rounded-xl p-3 flex flex-row justify-between'>
                <div className='w-3/4 flex flex-col 'onClick={() => setIsPopUpOpen(true)}>
                    <div className='text-xl font-bold'>Event Name</div>
                    <div className='font-semibold '>Free Pizza and Drinks</div>
                    <div className='font-light'>ILCB 100</div>
                </div>
                <div className='text-center items-center pt-3 flex content-center flex-wrap flex-row h-full center'>
                    <div className='flex flex-col mr-3'>
                        <div className='text-2xl font-bold'>23</div>
                        <div className='font-light'>Confirmed</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-bold'>10</div>
                        <div className='font-light'>Maybe</div>
                    </div>
                </div>
            </div>
        );
    }

    const _popUp = () => {
        return (
            <div className='fixed z-10 w-[45%] h-4/5 border-2 right-0 mt-20 bg-white  border-black mb-2 flex flex-col justify-center items-center rounded-l-xl'>
                <div className='w-full h-full bg-zinc-100 rounded-xl flex flex-col justify-center items-center'>
                    <div className='top-0 left-0 absolute ml-5 mt-3 font-extrabold text-xl hover:cursor-pointer' onClick={() => setIsPopUpOpen(false)}>X</div>
                    <div className='text-3xl font-bold'>Club ABC</div>
                    <div className='text-xl font-medium pb-5'>Event Name</div>
                    <div className='text-2xl font-semibold'>Free Pizza and Drinks</div>
                    <div className='text-lg font-light pb-5'>Description</div>
                    <div className='text-2xl font-medium'>1st February 2024 - 7:00 PM</div>
                    <div className='text-lg font-light pb-5'>ILCB 100</div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col text-center mr-4'>
                            <div className='text-xl font-semibold'>23</div>
                            <div className='text-thin'>Confirmed</div>
                        </div>
                        <div className='flex flex-col text-center ml-4'>
                            <div className='text-xl font-semibold'>10</div>
                            <div className='text-thin'>Maybe</div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-6'>
                        <div className='text-2xl font-medium p-2 px-4 mr-4 text-white bg-black rounded-xl hover:cursor-pointer hover:bg-slate-800'>Edit</div>
                        <div className='text-2xl font-medium p-2 px-4 border-2 ml-4 bg-red-600 rounded-xl text-white hover:cursor-pointer hover:bg-red-700'>Delete</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed '>
                <Image src={logo} width={50} height={50} alt='logo' className='hover:cursor-pointer' onClick={() => router.push("/")}/>
                <div className='h-full pt-2 pl-3 hover:cursor-pointer ' onClick={() => router.push("/")}>MealSaver</div>
            </div>
            <div className='flex flex-row ml-4 pt-16'>
                <div className='w-1/2'>
                    <div className='ml-10 pt-10 mb-2 flex flex-row w-fit text-2xl'>My Scheduled Events</div>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                    <_card/>
                </div>
                <div className='w-1/2'>
                    {isPopUpOpen && <_popUp/>}
                    <div className='pt-10 mb-2 w-full text-2xl text-center'>Create New Event</div>
                    <div className='flex justify-center items-center flex-col text-xl pt-3'>
                        <div className='w-3/4'>
                            <div className='text-2xl'>What's the name of your event?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>What food are you offering?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>Where is the event?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>What is the Room number?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex flex-row w-3/4 pt-3'>
                            <div className='w-1/2 mr-2'>
                                <div className='text-xl'>What is the date for the event?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='w-1/2 ml-2'>
                                <div className='text-xl'>What time is the event?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className='w-3/4 pt-10'>
                            <button className='w-full border-2 border-black bg-black text-white p-2 rounded-lg'>Create Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page