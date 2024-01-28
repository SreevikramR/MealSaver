"use client"
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ''  
const supabase = createClient(supabaseUrl, supabaseKey)

const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            alert(error.message)
        } else {
            const userUUID = (await supabase.auth.getUser()).data.user?.id
            const { data, error } = await supabase.from('users').select('*').eq('id', userUUID)
            if (data && data[0] && data[0].isClub) {
                router.push('/admin-club')
            } else if (data && data[0] && data[0].isIndividual) {
                router.push('/dashboard')
            } else if (data && data[0] && data[0].isRestaurant) {
                router.push('/admin-restaurant')
            }
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div className='w-1/3 h-4/5'>
                <div className='pt-2 font-semibold text-3xl text-center'>Login</div>
                <div className='flex justify-center items-center flex-col text-xl pt-3'>
                    <div className='w-3/4'>
                        <div className='text-2xl'>Email</div>
                        <input className='w-full border-2 border-black rounded-lg p-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-3/4 pt-3'>
                        <div className='text-2xl'>Password</div>
                        <input className='w-full border-2 border-black rounded-lg p-2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='w-3/4 pt-10'>
                        <button className='w-full border-2 border-black bg-black text-white p-2 rounded-lg' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
            <footer className="text-center mt-8 text-gray-500 text-sm">
            &copy; 2024 Meal Saver. All rights reserved.
        </footer>
        </div>
    )
}

export default Page