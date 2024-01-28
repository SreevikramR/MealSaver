"use client"
import React, { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import logo from '@/app/favicon.ico';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import PageWrapper from '@/components/wrappers/pageWrapper';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || '' 
const supabase = createClient(supabaseUrl, supabaseKey)

interface Event {
    id: string,
    eventName: string,
    description: string,
    date: string,
    time: string,
    location: string,
    roomNumber: string,
    items: string
    clubName: string,
    latitude: number,
    longitude: number
}

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

const Page = () => {
    const router = useRouter();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isClubsSelected, setIsClubsSelected] = useState(true); 
    const [restaurantsList, setRestaurantsList] = useState<Restaurant[]>([]);
    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [restaurantIsSelected, setRestaurantIsSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [name, setName] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [confirmDisabled, setConfirmDisabled] = useState(false);
    const [maybeDisabled, setMaybeDisabled] = useState(false);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session == null) {
                    router.push('/')
                } else {
                    setIsLogged(true)
                }
        })

        return () => {
            data.subscription.unsubscribe()
          };
    }, [])

    useEffect(() => {
        getName()
        getData()
    }, [isLogged])

    const getName = async () => {
        const userUUID = (await supabase.auth.getUser()).data.user?.id
        const { data, error } = await supabase
            .from('users')
            .select('name')
            .eq('id', userUUID)
        if (error) {
            console.log(error)
        } else {
            if (data) {
                console.log(data)
                setName(data[0].name)
            }
        }
    }

    const getData = async () => {
        const { data: events, error } = await supabase
            .from('clubs')
            .select('*')
        if (error) {
            console.log(error)
        } else {
            if (events) {
                console.log(events)
                setEventsList(events)
            }
        }

        const { data: restaurants, error: error2 } = await supabase
            .from('restaurants')
            .select('*')
        if (error2) {
            console.log(error2)
        }
        else {
            if (restaurants) {
                console.log(restaurants)
                setRestaurantsList(restaurants)
            }
        }
    }
    
    const _card = (event:Event) => {
        return (
            <div className='mt-4 ml-14 w-5/6 border-2 border-slate-300 hover:border-black items-center justify-between rounded-xl p-3 flex flex-row hover:cursor-pointer' onClick={() => {setRestaurantIsSelected(false); setSelectedEvent(event)}}>
                <div className='w-3/4 flex flex-col 'onClick={() => setIsPopUpOpen(true)}>
                    <div className='text-xl font-bold'>{event.clubName}</div>
                    <div className='font-semibold '>{event.items}</div>
                    <div className='font-light'>{event.location} - {event.roomNumber}</div>
                </div>
                <div className='text-right h-fill flex-end flex flex-col flex-wrap'>
                    <div className='text-xl font-bold'>{event.time}</div>
                    <div className='font-light'>{event.date}</div>
                </div>
            </div>
        );
    }

    const _restaurantCard = (restaurant:Restaurant) => {
        return (
            <div className='mt-4 ml-14 w-5/6 border-2 border-slate-300 hover:border-black items-center justify-between rounded-xl p-3 flex flex-row hover:cursor-pointer' onClick={() => {setRestaurantIsSelected(true); setSelectedRestaurant(restaurant)}}>
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
        if (!restaurantIsSelected) {
            return (
                <div className='fixed z-10 w-[45%] h-3/5 border-2 mt-20 bg-white  border-black mb-2 flex flex-col justify-center items-center rounded-r-xl'>
                    <div className='w-full h-full bg-zinc-100 rounded-xl flex flex-col justify-center items-center'>
                        <div className='top-0 right-0 absolute mr-5 mt-3 font-extrabold text-xl hover:cursor-pointer' onClick={() => setIsPopUpOpen(false)}>X</div>
                        <div className='text-3xl font-bold'>{selectedEvent?.clubName}</div>
                        <div className='text-xl font-medium pb-5'>{selectedEvent?.eventName}</div>
                        <div className='text-2xl font-semibold'>{selectedEvent?.items}</div>
                        <div className='text-lg font-light pb-5 px-4'>{selectedEvent?.description}</div>
                        <div className='text-2xl font-medium'>{selectedEvent?.date} - {selectedEvent?.time}</div>
                        <div className='text-lg font-light pb-5'>{selectedEvent?.location} - {selectedEvent?.roomNumber}</div>
                        <div className='flex flex-row mt-6'>
                            <div className='text-2xl font-medium p-2 px-4 mr-4 text-white bg-green-600 rounded-xl hover:cursor-pointer hover:bg-green-700'>Yes, I plan on attending!</div>
                            <div className='text-2xl font-medium p-2 px-4 border-2 ml-4 bg-black rounded-xl text-white hover:cursor-pointer hover:bg-slate-800'>Maybe...</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='fixed z-10 w-[45%] h-3/5 border-2 mt-20 bg-white  border-black mb-2 flex flex-col justify-center items-center rounded-r-xl'>
                    <div className='w-full h-full bg-zinc-100 rounded-xl flex flex-col justify-center items-center'>
                        <div className='top-0 right-0 absolute mr-5 mt-3 font-extrabold text-xl hover:cursor-pointer' onClick={() => setIsPopUpOpen(false)}>X</div>
                        <div className='text-3xl font-bold'>{selectedRestaurant?.restaurantName}</div>
                        <div className='text-xl font-medium pb-5'>{selectedRestaurant?.couponTitle}</div>
                        <div className='text-2xl font-semibold'>{selectedRestaurant?.items}</div>
                        <div className='text-lg font-light pb-5'>{selectedRestaurant?.description}</div>
                        <div className='text-2xl font-medium'>{selectedRestaurant?.date} - {selectedRestaurant?.time}</div>
                        <div className='text-lg font-light pb-5'>{selectedRestaurant?.location}</div>
                    </div>
                </div>
            );
        }
    }

    const Map = useMemo(() => dynamic(
        () => import('@/components/map/mapComponent'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
    ), [])

    return (
        <PageWrapper>
            <div className='bg-black text-white pl-4 pt-2 pb-2 text-3xl font-medium tracking-wider flex flex-row w-screen fixed '>
                <Image src={logo} width={50} height={50} alt='logo' className='hover:cursor-pointer' onClick={() => router.push("/")}/>
                <div className='h-full pt-2 pl-3 hover:cursor-pointer ' onClick={() => router.push("/")}>MealSaver</div>
                <div className='pt-2 right-0 absolute mr-6'>Hi {name}!</div>
            </div>
            <div className='flex flex-row pt-16'>
                <div className='w-1/2'>
                {isPopUpOpen && <_popUp/>}
                    <div className='ml-14 pt-10 mb-8 flex flex-row border-b-2 border-black w-fit'>
                        <div className={'text-2xl pb-1 border-black cursor-pointer ' + (isClubsSelected ? 'border-b-8' : '')} onClick={() => setIsClubsSelected(true)}>Clubs and Organizations</div>
                        <div className={'text-2xl ml-5 pb-1 border-black cursor-pointer ' + (!isClubsSelected ? 'border-b-8' : '')} onClick={() => setIsClubsSelected(false)}>Restaurants</div>
                    </div>
                    {isClubsSelected && eventsList.map((event) => {
                        return <_card {...event} key={event.id}/>
                    })}
                    {!isClubsSelected && restaurantsList.map((restaurant) => {
                        return <_restaurantCard {...restaurant} key={restaurant.id}/>
                    })}
                </div>
                <div className='h-[80vh] w-1/2 flex flex-wrap align-middle mt-10 mr-6 fixed right-0'>
                    <div className='border-2 border-black h-full w-full'>
                        <Map markers={eventsList}/>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Page