"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import logo from '@/app/favicon.ico';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import PageWrapper from '@/components/wrappers/pageWrapper';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ''  
const supabase = createClient(supabaseUrl, supabaseKey)

interface Restaurant {
    id: string,
    restraunt: string,
    restaurantName: string,
    couponTitle: string,
    items: string, 
    date: string, 
    time: string, 
    description: string,
    location: string
}

async function name() {
    const { data, error } = await supabase
  .from('clubs')
  .select('*')
  console.log(data)
}

const Page = () => {
    const router = useRouter();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [items, setItems] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [events, setEvents] = useState<any[]>([])

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session == null) {
                    router.push('/')
                } else {
                    setIsLogged(true)
                }
        })

        return () => {
            subscription.data.subscription.unsubscribe()
        }
    }, [])

    useEffect(() => {
        getData()
    }, [isLogged])

    const getData = async () => {
        const userUUID = (await supabase.auth.getUser()).data.user?.id
        const { data, error } = await supabase.from('restaurants').select('*').eq('restaurant', userUUID)
        console.log(error)
        console.log(data)
        if (data) {
            setEvents(data)
        }
    }

    const addCoupon = async () => {
        setIsLoading(true)
        const userUUID = (await supabase.auth.getUser()).data.user?.id
        const { data, error } = await supabase.from('users').select('*').eq('id', userUUID)
        const restaurantName = data && data[0] && data[0].name
        const restaurantLocation = data && data[0] && data[0].location
        const response = await supabase.from('restaurants').insert({ restaurantName: restaurantName, couponTitle: title, items: items, date: date, time: time, description: description, location:restaurantLocation })
        if (response.error) {
            alert('Error adding event')
            console.log(response.error)
        }
        else {
            alert('Event added successfully!')
            setTitle('')
            setItems('')
            setDate('')
            setTime('')
            setDescription('')
        }
        setIsLoading(false)
    }
    
    const _card = (restaurant:Restaurant) => {
        return (
            <div className='mt-4 ml-14 w-5/6 border-2 border-slate-300 hover:border-black items-center justify-between rounded-xl p-3 flex flex-row hover:cursor-pointer' >
                <div className='w-3/4 flex flex-col 'onClick={() => setIsPopUpOpen(true)}>
                    <div className='text-xl font-bold'>{restaurant.restaurantName}</div>
                    <div className='font-semibold '>{restaurant.items}</div>
                    <div className='font-light'>{restaurant.location}</div>
                </div>
                <div className='text-right h-fill flex-end flex flex-col flex-wrap'>
                    <div className='text-xl font-bold'>{restaurant.time}</div>
                    <div className='font-light'>{restaurant.date}</div>
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
                    <div className='flex flex-row mt-6'>
                        <div className='text-2xl font-medium p-2 px-4 border-2 ml-4 bg-red-600 rounded-xl text-white hover:cursor-pointer hover:bg-red-700'>Delete</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <PageWrapper>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed '>
                <Image src={logo} width={50} height={50} alt='logo' className='hover:cursor-pointer' onClick={() => router.push("/")}/>
                <div className='h-full pt-2 pl-3 hover:cursor-pointer ' onClick={() => router.push("/")}>MealSaver</div>
            </div>
            <div className='flex flex-row ml-4 pt-16'>
                <div className='w-1/2'>
                    <div className='ml-10 pt-10 mb-2 flex flex-row w-fit text-2xl'>My Coupons</div>
                    {events.map((event) => {
                        return (
                            <_card {...event} key={event.id}/>
                        )
                    })}
                </div>
                <div className='w-1/2'>
                    {isPopUpOpen && <_popUp/>}
                    <div className='pt-10 mb-2 w-full text-2xl text-center'>Create New Coupon</div>
                    <div className='flex justify-center items-center flex-col text-xl pt-3'>
                        <div className='w-3/4'>
                            <div className='text-2xl'>What's the title for the Coupon?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='email' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>What items does it apply to?</div>
                            <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={items} onChange={(e) => setItems(e.target.value)} />
                        </div>
                        <div className='flex flex-row w-3/4 pt-3'>
                            <div className='w-1/2 mr-2'>
                                <div className='text-xl'>Till when is the coupon available?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className='w-1/2 ml-2'>
                                <div className='text-xl pt-7'>What time is it available till?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                        </div>
                        <div className='w-3/4 pt-3'>
                            <div className='text-2xl'>Please provide a description for the event</div>
                            <textarea className='w-full border-2 border-black rounded-lg p-2' rows={5} value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className='w-3/4 pt-10'>
                            <button className={'w-full border-2 border-black bg-black hover:bg-zinc-800 text-white p-2 rounded-lg ' + (isLoading ? 'hover:cursor-not-allowed' : '')} onClick={addCoupon}>Create Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Page