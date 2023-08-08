import Image from 'next/image'

export default function Home() {
  return (
    <>


<header className="h-auto shadow-md py-3 font-[Roboto]">
        <nav className="flex items-center justify-between  px-4 py-2">
            <div className=" lg:px-4 pl-10 w-96 ">
                <img src="/image/logo.svg" alt="">
            </div>
            <div className="nav-links md:static bg-white md:min-h-fit absolute min-h-[25vh] left-0 top-[-100%]  md:w-auto w-full flex items-center px-5 ">
             <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-5  ">
                <a href="#">Inter & TV</a>
                <a href="#">Providers</a>
                <a href="#">Resources & Tools</a> 
                <div className="items-center gap-3 text-blue-600 flex ">
               <i className="fa-solid fa-phone "></i>
               <p className="">855-512-0491</p>
           </div>
             </ul>
             
            </div>
            
            <div className="flex items-center">
                <ion-icon onclick="onToggleMenu(this)" name="menu-outline" className="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
        </nav>
    </header>

<!-- ////hero/// -->
<div className="flex justify-center mt-10 ">
  <div className="w-full xl:h-auto  bg-[#F3FAFF] shadow-xl xl:w-[80vw] md:w-[170vh]  rounded-3xl  px-10 grid lg:grid-cols-2  items-center lg:absolute">
    <div className="mt-5">
        <h1 className="font-[Roboto] text-[45px]">Find <span className="text-[#039b8e]">Internet & TV Providers</span> in Your Area</h1>
        <div className="w-full py-5 mt-6 bg-white border md:h-52 rounded-3xl md:w-full">
            <div className="relative flex items-center w-full px-12 mt-6 md:mt-10">
                <i className="absolute ml-3 fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Enter Zip Code" className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
                <button className="px-4 py-[13px] font-semibold text-white bg-blue-500 border-zinc-400 rounded-r-md">Search</button>
            </div>
              
            <div className="flex px-4 mt-6 md:gap-3 md:mt-5 md:px-10 font-[Roboto]">
              <input type="radio" name="" id="" className="w-10 h-7" />
              <h5>Internet</h5>
              <input type="radio" name="" id="" className="w-10 h-7" />
              <h5>TV</h5>
              <input type="radio" name="" id="" className="w-10 h-7" />
              <h5>Bundle</h5>
            </div>
          </div>
     </div>
     <div className="">
        <img src="/image/hso-background-1.webp" alt="" className="float-right h-[85vh] " />
     </div>
  </div>
</div>

<div className="w-full h-auto pb-10 lg:mt-[70vh] bg-[#F3FAFF]">
    <div className="relative grid gap-5 px-5 xl:grid-cols-3 lg:px-32 lg:grid-cols-3 ">
      <div className="w-full h-auto py-5 mt-10 bg-white lg:w-80
       rounded-3xl lg:mt-40">
        <div className="mt-5">
          <img src="/image/LaptopIcon.svg" alt="" className="h-20 mx-auto">
          <h2 className="mt-5 text-center text-xl lg:text-2xl font-[Roboto]">Compare Top Providers</h2>
          <div>
            <p className="px-5 mt-5 text-sm text-center">
              Don’t pay for more than you need! Use our <span className="text-blue-500">Internet Speed Calculator</span> to determine the best internet speed for your lifestyle.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-5 mt-10 bg-white lg:w-80 rounded-3xl lg:mt-40">
        <div className="mt-5">
          <img src="/image/LaptopIcon.svg" alt="" className="h-20 mx-auto">
          <h2 className="mt-5 text-center text-xl lg:text-2xl font-[Roboto]">Compare Top Providers</h2>
          <div>
            <p className="px-5 mt-5 text-sm text-center">
              Dont pay for more than you need! Use our <span className="text-blue-500">Internet Speed Calculator</span> to determine the best internet speed for your lifestyle.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-5 mt-10 bg-white lg:w-80 rounded-3xl lg:mt-40 ">
        <div className="mt-5">
          <img src="/image/LaptopIcon.svg" alt="" className="h-20 mx-auto">
          <h2 className="mt-5 text-center text-xl lg:text-2xl font-[Roboto]">Compare Top Providers</h2>
          <div>
            <p className="px-5 mt-5 text-sm text-center">
              Dont pay for more than you need! Use our <span className="text-blue-500">Internet Speed Calculator</span> to determine the best internet speed for your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
          

<div>
    <div className="text-center text-3xl mt-10 font-[Roboto]">
        <h2>Compare Internet Providers in Major Cities</h2>
    </div>

    <div className="grid justify-center gap-4 px-10 mt-10 lg:px-28 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        <div className=" bg-[#F5F5F5] rounded-2xl w-60 px-4 py-4 text-blue-500 font-[Roboto] hover:drop-shadow-2xl hover:shadow-bg-[#f5f5f5]">
         <div className="flex justify-between">
            <h3 className="text-xl">Denver</h3>
            <i className="items-center text-right fa-solid fa-arrow-right"></i>
         </div>
           <div> 
              <p className="text-blue-400">Internet Providers</p>
           </div>
        </div>
        
        



         </div>
    </div>


    <!-- <div className="grid lg:grid-cols-[60vh_auto] mt-10 px-20 gap-20">
       <dir className="mx-auto ">
        <img src="/image/girl.jpg" alt="" className="h-screen mt-4 shadow-md rounded-3xl shadow-gray-500">
       </dir>
       <div className="mt-5">
        <h2 className="text-2xl font-[Roboto]">Why Compare with HighSpeedOptions</h2>
        <a href="https://www.highspeedoptions.com/disclosure" className="text-blue-600 font-[Rob] ">Advertiser Disclosure</a>

        <div className="grid gap-10 mt-5 lg:grid-cols-2">
            <div className="">
            <h2 className="font-[Roboto] text-xl mb-3">Save Time</h2>
            <p className="font-[Rob]  lg:w-72">Discover top providers near you in seconds by using our zip search tool. Filter plans based on internet, TV, bundles, and more.</p>
            </div>
            <div className="px-5">
                <h2 className="font-[Roboto] text-xl mb-3">Save Money</h2>
                <p className="font-[Rob]  lg:w-72">Compare prices in real-time and find the best deals available to fit your budget and digital needs.</p>
            </div>
            <div className="">
                <h2 className="font-[Roboto] text-xl mb-3">Helpful Tools</h2>
                <p className="font-[Rob] lg:w-72">Our <span className="text-blue-500">Resource Center</span> offers helpful insights and advice from subject matter experts to help you get the most out of your services.</p>
            </div>
            <div className="px-5">
                <h2 className="font-[Roboto] text-xl mb-3">Get Expert Advice</h2>
                <p className="font-[Rob]  lg:w-72">Our <span className="text-blue-500">team of experts</span> reviews providers on various criteria like performance and price to recommend the best options near you.</p>
            </div>
        </div>
        <div className="bg-[#F3FAFF] py-5 px-10 mt-10 rounded-2xl">
          <div>
            <h2 className="font-[Roboto] text-2xl ">How Much Speed Do I Need?</h2>
            <p className="font-[Rob] mt-2">Answer a few quick questions with our Speed Calculator to figure out the best internet speed for your lifestyle. Results are calculated based on the number of people and devices are in your household as well as your online habits.</p>
            <button className="px-8 py-2 bg-blue-700 mt-5 rounded-xl text-white font-[Roboto]">Find Your Speed</button>
          </div>
        </div>
       </div>
    </div> 
    <div className="grid lg:grid-cols-[60vh_auto] mt-10 px-20 gap-20">
      <dir className=" bg-[url('/image/dots2.svg')] bg-no-repeat mx-auto ">
       <img src="/image/girl.jpg" alt="" className="h-screen mt-10 ml-8 shadow rounded-3xl shadow-gray-500" />
      </dir>
      <div className="mt-10">
       <h2 className="text-2xl font-[Roboto]">Why Compare with HighSpeedOptions</h2>
       <a href="https://www.highspeedoptions.com/disclosure" className="text-blue-600 font-[Rob] ">Advertiser Disclosure</a>

       <div className="grid gap-10 mt-5 lg:grid-cols-2">
           <div className="">
           <h2 className="font-[Roboto] text-xl mb-3">Save Time</h2>
           <p className="font-[Rob]  lg:w-72">Discover top providers near you in seconds by using our zip search tool. Filter plans based on internet, TV, bundles, and more.</p>
           </div>
           <div className="px-5">
               <h2 className="font-[Roboto] text-xl mb-3">Save Money</h2>
               <p className="font-[Rob]  lg:w-72">Compare prices in real-time and find the best deals available to fit your budget and digital needs.</p>
           </div>
           <div className="">
               <h2 className="font-[Roboto] text-xl mb-3">Helpful Tools</h2>
               <p className="font-[Rob] lg:w-72">Our <span className="text-blue-500">Resource Center</span> offers helpful insights and advice from subject matter experts to help you get the most out of your services.</p>
           </div>
           <div className="px-5">
               <h2 className="font-[Roboto] text-xl mb-3">Get Expert Advice</h2>
               <p className="font-[Rob]  lg:w-72">Our <span className="text-blue-500">team of experts</span> reviews providers on various criteria like performance and price to recommend the best options near you.</p>
           </div>
       </div>
       <div className="bg-[#F3FAFF] py-5 px-10 mt-10 rounded-2xl">
         <div>
           <h2 className="font-[Roboto] text-2xl ">How Much Speed Do I Need?</h2>
           <p className="font-[Rob] mt-2">Answer a few quick questions with our Speed Calculator to figure out the best internet speed for your lifestyle. Results are calculated based on the number of people and devices are in your household as well as your online habits.</p>
           <button className="px-8 py-2 bg-blue-700 mt-5 rounded-xl text-white font-[Roboto]">Find Your Speed</button>
         </div>
       </div>
      </div>
   </div>















    
    </>

  );
}
