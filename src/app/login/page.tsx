"use client"
import React, { useState } from 'react'
import { AuthClient } from '@supabase/supabase-js'

const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                        <button className='w-full border-2 border-black bg-black text-white p-2 rounded-lg'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page