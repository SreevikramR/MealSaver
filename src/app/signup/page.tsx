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

    const handleSignUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })
        if (error) {
            alert(error.message)
        } else {
            router.push('/dashboard')
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div className='w-1/3 h-4/5'>
                <div className='pt-2 font-semibold text-3xl text-center'>Sign Up</div>
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
                        <button className='w-full border-2 border-black bg-black text-white p-2 rounded-lg' onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page