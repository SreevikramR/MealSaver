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
      
    
    
    <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">Join Meal Saver Today!</h1>
        
        <div className="  rounded-lg shadow-md shadow-zinc-200 mb-8 bg-gray-100">
            <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4 bg-gray-100">Why Join Meal Saver?</h2>
            <ul className="list-disc list-inside bg-gray-100">
                <li className="text-center text-gray-700 mb-2">Save Money: Get locations for free food and coupons for restaurants.</li>
                <li className="text-center text-gray-700 mb-2">Community Engagement: Bring more people to your club/organization events and make them a part of it!</li>
                <li className="text-center text-gray-700 mb-2">Promote Your Club: Showcase your club or organization's events here.</li>
                <li className="text-center flex-col text-gray-700 mb-2">Promote Your Restaurant: Share your discounts and deals to attract more customers.</li>
            </ul>
        </div>

        <footer className="text-center mt-8 text-gray-500 text-sm">
            &copy; 2024 Meal Saver. All rights reserved.
        </footer>
    </div>
    
</div>

            


		
    );
}
