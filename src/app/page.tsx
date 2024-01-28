"use client"

export default function Home() {
    return (
      
		<div>
			<div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
				<div className="text-5xl font-bold text-gray-800 mt-16">Meal Saver</div>
				<div className="text-lg text-gray-600 mb-16">Savor Savings, Satisfy Cravings: Your Ultimate Food Coupon and Free Food Finder</div>
        
      <div className="flex flex-row "><a href="login" className="flex-row pr-10"> <button className="bg-black hover:bg-gray-600 text-white font-bold py-4 px-7 rounded-full " >Login</button>
</a>
        <a href="signup"><button className="bg-black hover:bg-gray-600 text-white font-bold py-4 px-7 rounded-full">Sign Up</button>
      </a></div>
</div> 
		</div>
    );
}
