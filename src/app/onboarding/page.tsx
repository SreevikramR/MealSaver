"use client"
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import saveMoneyImg from '../../../public/save_money.png'
import restaurantImg from '../../../public/restaurant.jpg'
import clubImg from '../../../public/club.png'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

const Page = () => {
    const [whatbringsPage, setWhatbringsPage] = useState(true)
    const [isIndividual, setIsIndividual] = useState(false)
    const [isClub, setIsClub] = useState(false)
    const [isRestaurant, setIsRestaurant] = useState(false)
    const [individualName, setIndividualName] = useState('')
    const [clubName, setClubName] = useState('')
    const [restaurantName, setRestaurantName] = useState('')
    const [restaurantLocation, setRestaurantLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const submitIndividual = async () => {
        setIsLoading(true)
        const { data, error } = await supabase
        .from('users')
        .insert([
            { name: individualName, isIndividual: true }
        ])
        console.log(data)
        if (!error) {
            router.push('/dashboard')
        } else {
            setIsLoading(false)
            alert(error)
        }
    }

    const submitClub = async () => {
        setIsLoading(true)
        const { data, error } = await supabase
        .from('users')
        .insert([
            { name: clubName, isClub: true }
        ])
        console.log(data)
        if (!error) {
            router.push('/admin-club')
        } else {
            setIsLoading(false)
            alert(error)
        }
    }

    const submitRestaurant = async () => {
        setIsLoading(true)
        const { data, error } = await supabase
        .from('users')
        .insert([
            { name: restaurantName, location: restaurantLocation, isRestaurant: true }
        ])
        console.log(data)
        if (!error) {
            router.push('/admin-restaurant')
        } else {
            setIsLoading(false)
            alert(error)
        }
    }

    return (
        <div className='h-screen flex pt-24 items-center flex-col'>
                {whatbringsPage && 
                    <div className='w-4/5 h-2/5'>
                        <div className='pt-2 font-semibold text-3xl text-center mb-10'>What brings you to MealSaver?</div>
                        <div className='flex justify-center items-center flex-row text-xl pt-3 h-full'>
                            <div className='w-3/4 border-2 border-slate-300 text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center hover:border-black hover:cursor-pointer' onClick={() => {setWhatbringsPage(false); setIsIndividual(true)}}>
                                <div className='flex relative w-2/5 justify-center mb-8'>
                                    <Image src={saveMoneyImg} alt='Save Money' layout='contain'/>
                                </div>
                                <div className='font-semibold text-2xl h-1/6'>Just want to save some money!</div>
                            </div>
                            <div className='w-3/4 border-2 border-slate-300 text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center hover:border-black hover:cursor-pointer' onClick={() => {setWhatbringsPage(false); setIsClub(true)}}>
                                <div className='flex relative w-2/5 justify-center mb-8'>
                                    <Image src={clubImg} alt='Save Money' layout='contain'/>
                                </div>
                                <div className='font-semibold text-2xl h-1/6'>Bring more people to my Club / Organization Events</div>
                            </div>
                            <div className='w-3/4 border-2 border-slate-300 text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center hover:border-black hover:cursor-pointer' onClick={() => {setWhatbringsPage(false); setIsRestaurant(true)}}>
                                <div className='flex relative w-2/5 justify-center mb-8'>
                                    <Image src={restaurantImg} alt='Save Money' layout='contain'/>
                                </div>
                                <div className='font-semibold text-2xl h-1/6'>Promote my Restaurant</div>
                            </div>
                        </div>
                    </div>
                }
                {!whatbringsPage && isIndividual &&
                    <div className='w-4/5 h-2/5 flex flex-col items-center'>
                        <div className='w-1/2'>
                            <div className='pt-2 font-semibold text-3xl text-center mb-10'>Tell us More!</div>
                            <div className='flex justify-center items-center flex-col text-xl pt-3'>
                                <div className='w-3/4'>
                                    <div className='text-2xl'>What&apos;s your name?</div>
                                    <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={individualName} onChange={(e) => setIndividualName(e.target.value)} />
                                </div>
                                <div className='w-3/4 pt-10'>
                                    <button className={'w-full border-2 border-black bg-black text-white p-2 rounded-lg ' + (isLoading ? ' cursor-not-allowed bg-gray-800' : '')} onClick={submitIndividual}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {!whatbringsPage && isClub &&
                    <div className='w-4/5 h-2/5 flex flex-col items-center'>
                        <div className='w-1/2'>
                            <div className='pt-2 font-semibold text-3xl text-center mb-10'>Tell us More!</div>
                            <div className='flex justify-center items-center flex-col text-xl pt-3'>
                                <div className='w-3/4'>
                                    <div className='text-xl'>What&apos;s the name of your Club / Organization?</div>
                                    <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={clubName} onChange={(e) => setClubName(e.target.value)} />
                                </div>
                                <div className='w-3/4 pt-10'>
                                    <button className={'w-full border-2 border-black bg-black text-white p-2 rounded-lg ' + (isLoading ? ' cursor-not-allowed bg-gray-800' : '')} onClick={submitClub}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {!whatbringsPage && isRestaurant &&
                <div className='w-4/5 h-2/5 flex flex-col items-center'>
                    <div className='w-1/2'>
                        <div className='pt-2 font-semibold text-3xl text-center mb-10'>Tell us More!</div>
                        <div className='flex justify-center items-center flex-col text-xl pt-3'>
                            <div className='w-3/4'>
                                <div className='text-2xl'>What&apos;s the name of your Restaurant?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
                            </div>
                            <div className='w-3/4 pt-4'>
                                <div className='text-2xl'>Where are you located?</div>
                                <input className='w-full border-2 border-black rounded-lg p-2' type='text' value={restaurantLocation} onChange={(e) => setRestaurantLocation(e.target.value)} />
                            </div>
                            <div className='w-3/4 pt-10'>
                                <button className={'w-full border-2 border-black bg-black text-white p-2 rounded-lg ' + (isLoading ? ' cursor-not-allowed bg-gray-800' : '')} onClick={submitRestaurant}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
                
        </div>
    )
}

export default Page