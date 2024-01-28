import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

interface pageWrapperProps {
    children: React.ReactNode
}

const PageWrapper: React.FC<pageWrapperProps> = ({ children }) => {
    const [userSignedIn, setUserSignedIn] = useState<boolean>();
    const router = useRouter()
    const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_API_KEY || '')

    useEffect(() => {
        const subscription = supabaseClient.auth.onAuthStateChange(
            (event, session) => {
                if (session == null) {
                    router.push('/')
                } else {
                    verifyPerms()
                }
        })

        return () => {
            subscription.data.subscription.unsubscribe()
        }
    }, [])

    const verifyPerms = async () => {
        const currentRoute = window.location.pathname
        const userUUID = (await supabaseClient.auth.getUser()).data.user?.id
        const { data, error } = await supabaseClient.from('users').select('*').eq('id', userUUID)
        if (currentRoute == '/admin-club' && data && data[0] && !data[0].isClub) {
            router.push('/login')
        } else if (currentRoute == '/dashboard' && data && data[0] && !data[0].isIndividual) {
            router.push('/login')
        } else if (currentRoute == '/admin-restaurant' && data && data[0] && !data[0].isRestaurant) {
            router.push('/login')
        } else {
            setUserSignedIn(true)
        }
    }

    if (userSignedIn) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return (
            <div className='flex text-center h-screen items-center justify-center'>
                <div>Loading...</div>
            </div>
        )
    }
}

export default PageWrapper