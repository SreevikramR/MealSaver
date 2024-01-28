"use client"

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
      <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex justify-center items-center flex-row text-xl pt-3 h-full'>
                    <div className='  text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center '>
                        
                        <div className='font-semibold text-2xl h-1/6'>Just want to save some money! You get locations for free food and Coupons for resaurants</div>
                    </div>
                    <div className=' text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center '>
                        
                        <div className='font-semibold text-2xl h-1/6'>Bring more people to Your Club / Organization Events and make them a part of of it! Promote your club here!</div>
                    </div>
                    <div className=' text-center mr-8 h-full rounded-xl flex flex-wrap flex-col justify-center place-items-center '>
                        
                        <div className='font-semibold text-2xl h-1/6'>Promote Your Restaurant By sharing your Discounts and deals!</div>
                    </div>
                </div>
                
            </div>
</div> 
		
    );
}
