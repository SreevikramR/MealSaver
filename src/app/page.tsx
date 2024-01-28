"use client"
import Image from 'next/image'
import saveMoneyImg from '../../public/save_money.png'
import restaurantImg from '../../public/restaurant.jpg'
import clubImg from '../../public/club.png'

export default function Home() {
    return (
      
		<div className="background-image: back; topHeight-screen">
			<div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
				<div className="text-5xl font-bold text-gray-800 mt-16">Meal Saver</div>
				<div className="text-lg text-gray-600 mb-16">Savor Savings, Satisfy Cravings: Your Ultimate Food Coupon and Free Food Finder</div>
        
      <div className="flex flex-row "><a href="login" className="flex-row pr-10"> <button className="bg-black hover:bg-gray-600 text-white font-bold py-4 px-7 rounded-full " >Login</button>
</a>
        <a href="signup"><button className="bg-black hover:bg-gray-600 text-white font-bold py-4 px-7 rounded-full">Sign Up</button>
      </a></div></div>
      <div className='flex justify-center items-center h-screen bg-gray-100'>
    <div className='flex flex-col justify-center items-center text-xl pt-3'>
        <div className='flex flex-col justify-center items-center mb-8'>
            <div className='mr-8 rounded-xl flex flex-wrap flex-col justify-center place-items-center mb-4'>
                <div className='flex relative mb-4 h-40 w-40'>
                    <Image src={saveMoneyImg} alt='Save Money' layout='contain' className='h-full w-full object-contain'/>
                </div>
                <div className='font-semibold text-2xl flex relative mb-4 '>Just want to save some money! You get locations for free food and Coupons for restaurants</div>
            </div>
            <div className='mr-8 rounded-xl flex flex-wrap flex-col justify-center place-items-center mb-4'>
                <div className='flex relative mb-4 h-40 w-40'>
                    <Image src={clubImg} alt='Save Money' layout='contain' className='h-full w-full object-contain'/>
                </div>
                <div className='font-semibold text-2xl'>Bring more people to Your Club / Organization Events and make them a part of it! Promote your club here!</div>
            </div>
            <div className='rounded-xl flex flex-wrap flex-col justify-center place-items-center'>
                <div className='flex relative mb-4 h-40 w-40'>
                    <Image src={restaurantImg} alt='Save Money' layout='contain' className='h-full w-full object-contain'/>
                </div>
                <div className='font-semibold text-2xl'>Promote Your Restaurant By sharing your Discounts and deals!</div>
            </div>
        </div>
    </div>
</div>

            
</div> 

		
    );
}
