"use client"
import Image from 'next/image'
import saveMoneyImg from '../../public/save_money.png'
import restaurantImg from '../../public/restaurant.jpg'
import clubImg from '../../public/club.png'

export default function Home() {
    return (
      
		<div className="">
			<div className="bg-white flex flex-col justify-center items-center h-screen">
				<div className="text-5xl font-bold text-gray-800 mt-16">MealSaver</div>
				<div className="text-lg text-gray-600 mb-16">Savor Savings, Satisfy Cravings: Your Ultimate Food Coupon and Free Food Finder</div>
                <div className='text-4xl mb-48 bottom-0 absolute'>&#129147;</div>
                <div className="flex flex-row mb-10 justify-center absolute bottom-0">
                    <a href="login" className="flex-row pr-10">
                        <button className="bg-black hover:bg-gray-600 text-white font-bold py-3 px-14 rounded-xl " >Login</button>
                    </a>
                    <a href="signup"><button className="bg-black hover:bg-gray-600 text-white font-bold py-3 px-14 rounded-xl">Sign Up</button></a>
                </div>
            </div>

            <div className="container mx-auto mt-20 px-4 py-8 bg-white">
                {/* <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">Join Meal Saver Today!</h1> */}
                
                {/* <div className="  rounded-lg shadow-md shadow-zinc-200 mb-8 bg-white">
                    <h2 className="text-2xl text-center text-gray-800 font-semibold mb-4 bg-white">Why Join Meal Saver?</h2>
                    <ul className="list-disc list-inside bg-white">
                        <li className="text-center text-gray-700 mb-2">Save Money: Get locations for free food and coupons for restaurants.</li>
                        <li className="text-center text-gray-700 mb-2">Community Engagement: Bring more people to your club/organization events and make them a part of it!</li>
                        <li className="text-center text-gray-700 mb-2">Promote Your Club: Showcase your club or organization's events here.</li>
                        <li className="text-center flex-col text-gray-700 mb-2">Promote Your Restaurant: Share your discounts and deals to attract more customers.</li>
                    </ul>
                </div> */}

                <div className='w-full text-right pr-10 text-4xl font-bold mt-20'>MealSaver for students</div>
                <div className='w-full text-right pr-10 pt-6 mb-60'>By using MealSaver, students get to save money by finding locations for <br/> free food and coupons for restaurants. The Clubs and Organizations feature <br /> helps students find social groups while keeping their budget for food low</div>
                
                <div className='w-full text-left pr-10 text-4xl font-bold mt-80'>Community Engagement</div>
                <div className='w-full text-left pr-10 pt-6 mb-40'>Bring more people to your club / organization events and make them a part of it! <br/> Connect directly with students eager to engage in your events, expanding your influence <br/> and creating memorable experiences. Join now to effortlessly promote your club <br/> gatherings and enhance your impact on campus</div>

                <div className='w-full text-right pr-10 text-4xl font-bold mt-60'>Discover More Diners</div>
                <div className='w-full text-right pr-10 pt-6 mb-60'>Maximize your restaurant's visibility and attract a hungry student audience <br/> through MealSaver. Showcase your special offers, events, and promotions to a targeted <br/> market, ensuring increased foot traffic and a growing customer base</div>
                
                <div className="flex flex-row mb-10 justify-center">
                    <a href="login" className="flex-row pr-10">
                        <button className="bg-black hover:bg-gray-600 text-white font-bold py-3 px-14 rounded-xl " >Login</button>
                    </a>
                    <a href="signup"><button className="bg-black hover:bg-gray-600 text-white font-bold py-3 px-14 rounded-xl">Sign Up</button></a>
                </div>

                <div className="text-xl text-gray-800 font-semibold mb-4 text-center">Sign Up for Our Notification System</div>
                <form className="flex flex-col md:flex-row md:justify-center items-right">
                    <input type="email" placeholder="Your Email Address" className="w-full md:w-auto px-4 py-2 mb-2 md:mb-0 md:mr-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:border-gray-500"/>
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Subscribe</button>
                </form>
                
            </div>
            <footer className="text-center mb-1 text-gray-500 text-sm">
                &copy; 2024 Meal Saver. All rights reserved.
            </footer>
        </div>		
    );
}
