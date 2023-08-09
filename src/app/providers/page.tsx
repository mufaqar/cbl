'use client'
import { useParams } from 'next/navigation'

import Image from 'next/image'

export default function Providers() {
  const params = useParams()
  console.log(params);
  return (
    <>

      <section className="whole container mx-auto   max-w-full">


        <header className="flex justify-between items-center lg:px-14 px-4">
          <div className="logo w-40 lg:w-40 p-2">
            <img src="./images/logoo.png" alt="logo" className="w-full h-auto" />
          </div>
          <div className="manu lg:flex lg:items-center lg:space-x-10 capitalize  lg:visible invisible">
            <ul className="flex flex-wrap space-x-10">
              <li className="hover:text-[red] text-[#151515] cursor-pointer text-[14px] font-[abc]">tv</li>
              <li className="hover:text-[red] cursor-pointer text-[#151515] text-[14px] font-[abc]">internet</li>
              <li className="hover:text-[red] cursor-pointer text-[#151515] text-[14px] font-[abc]">streaming</li>
              <li className="hover:text-[red] cursor-pointer text-[#151515] text-[14px] font-[abc]">what to watch</li>
              <li className="hover:text-[red] cursor-pointer text-[#151515] text-[14px] font-[abc]">resources</li>
            </ul>
          </div>
          <div className="relative mt-4 lg:mt-0 lg:visible invisible">
            <input type="search" placeholder="Enter the search term or zip code" className="pl-2 text-sm italic w-full lg:w-64 border-2 text-white rounded-lg py-2 focus:outline-none" />
            <i className="fa-solid fa-magnifying-glass absolute top-4 right-2 tracking-tighter"></i>
          </div>
        </header>



        <div className="hero bg-gradient-to-r from-[#0a0a19] to-[#202050] w-full aspect-auto h-[270px]  text-white px-2">
          <div className="content flex flex-col md:text-center md:h-full justify-center items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-[14px] md:text-[16px] text-sm tracking-tighter xl:text-[20px] font-[abc] text-center mb-[-16px]">TV AND INTERNET PROVIDERS IN</p>

              <h1 className="lg:text-[2.25rem] xl:text-[3rem] font-bold font-[abc] tracking-tighter text-center">AGAWAM TOWN, MASSACHUSETTS</h1>
            </div>
            <div className="location pt-2">
              <a href="" className="border-b-2 capitalize text-xs  ">change location</a>
            </div>
          </div>
        </div>


        <div className=" bg-[#e6e6e6] w-full max-wfull">
          <div>
            <h1 className=" font-extrabold lg:text-[30px] text- text-center mx-auto text-[#151515] lg:leading-[2.5rem]">Internet providers in Agawam Town, Massachusetts</h1>
          </div>
          <div className=" w-full lg:max-w-[1200px]  mx-auto py-4 h-auto ">
            <div className="bg-black text-white flex justify-between px-5 py-1 rounded-t-md">
              <h2 className="font-[abc] text-[18px]">T-Mobile Home Internet</h2>
              <h5 className="font-[abc] font-semibold">99% available in 01001</h5>
            </div>
            <div className="bg-white shadow-md rounded-b-md w-full h-auto grid lg:grid-cols-6 md:grid-cols-3  border py-8 ">
              <div className="border-r ">
                <img src="./images/images.png" alt="" className=" mt-7 px-5" />
                <hr className="lg:invisible visible mt-5" />
              </div>

              <div className="border-r px-2 mt-8 pl-4">
                <figure>
                  <img src="./images/images.jpg" alt="" className="w-[120px] h-[20px]" />
                </figure>
                <span className="text-[#5050b9]  hover:border-[#5050b9] text-sm  hover:text-red-600 border-b-[#5050b9] ">Customer Rating</span>
                <hr className="lg:invisible visible mt-5" />
              </div>


              <div className="text-center border-r">
                <h4 className="mt-12 font-[abc] font-bold">Speeds up to 245 Mbps</h4>
                <hr className="lg:invisible visible mt-5" />
              </div>
              <div className="px-5 text-[12px] border-r  ">
                <div className="flex gap-3 pl-2">
                  <svg className="lg:w-12 w-6 h-8  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" ></path>
                  </svg>
                  <p>15-day free trial to see how well T-Mobile 5G operates in your home.</p>
                </div>
                <br />
                <div className="flex gap-3">
                  <svg className="w-6 h-4  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>No contract required!</p>
                </div>
                <hr className="md:invisible visible mt-5" />
                <div className="flex gap-3">
                  <svg className="w-6 h-4  text-[#5050b9] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="">Your price is locked in.</p>
                </div>
                <hr className="md:invisible visible mt-5" />
              </div>
              <div className="text-center px-5 border-r">
                <h5 className="mt-10 ">Price starting from <br /> <span className="font-extrabold text-blue-950 font-[abc] text-xl">$50.00</span> /mo.</h5>
                <hr className="lg:invisible visible mt-5" />
              </div>
              <div className="justify-center items-center flex lg:border-l-2">
                <button className="text-white whitespace-nowrap font-[abc] flex justify-between uppercase items-center px-[20px] py-[10px] bg-[#ff2128] hover:bg-[#cf2e2e]">View Plans</button>
              </div>
            </div>
          </div>





          <section className="container mx-auto max-w-full mt-6 mb-6 overflow-x-scroll">
            <table className="table-auto overflow-scroll w-full lg:w-[1200px] text-black  border-2 border-gray-300 mx-auto">
              <thead className="bg-[#1d253c] text-center">
                <tr className="text-[#f3f3f3]">
                  <th className="md:p-2 text-[#f3f3f3]">Provider</th>
                  <th className="md:p-2 text-[#f3f3f3]">Prices
                    starting at*</th>
                  <th className="md:p-2  text-[#f3f3f3]">Max download
                    speeds up to</th>
                  <th className="md:p-2  text-[#f3f3f3]">Features</th>
                  <th className="md:p-2  text-[#f3f3f3]">Area
                    availability*</th>
                  <th className="md:p-2 whitespace-pre"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#fefefe]  pl-2">
                  <td className="border     font-[abc] text underline  hover:text-[#ff2128] text-[#5050b9]">T-Mobile</td>
                  <td className="border ">$50.00/mo.</td>
                  <td className="border ">	245 Mbps</td>
                  <td className="border ">15-day free trial to see how well T-Mobile 5G operates in your home</td>
                  <td className="border ">99%</td>
                  <td className="border ">   <button className=" bg-[#ff2128] text-[#fff]  px-[20px] py-[10px] font-[abc] hover:bg-red-600 whitespace-pre ">VIEW PLANS</button></td>
                </tr>
                <tr className="text-[#151515] text-start pl-2">
                  <td className="border   font-[abc] text underline  hover:text-[#ff2128] text-[#5050b9] ">Xfinity</td>
                  <td className="border ">$24.99/mo</td>
                  <td className="border ">1,000 Mbps</td>
                  <td className="border ">Qualify for the Affordable Connectivity Program for an additional $30/mo. Savings</td>
                  <td className="border ">	100%</td>
                  <td className="border ">   <button className=" bg-[#ff2128] text-[#fff]  px-[20px] py-[10px] font-[abc] hover:bg-red-600 whitespace-pre ">VIEW PLANS</button></td>
                </tr>
                <tr className="bg-[#fefefe] text-start pl-2">
                  <td className="border  font-[abc] text underline   hover:text-[#ff2128]  text-[#5050b9]">Verizon</td>
                  <td className="border ">$39.99/mo.</td>
                  <td className="border ">300 Mbps</td>
                  <td className="border ">Fios Internet provides 99.9% network reliability.</td>
                  <td className="border ">100%</td>
                  <td className="border "><button className=" bg-[#ff2128] text-[#fff]  px-[20px] py-[10px] font-[abc] hover:bg-red-600 whitespace-pre ">VIEW PLANS</button></td>
                </tr>
                <tr className="text-start pl-2">
                  <td className="border-2   font-[abc] text underline  hover:text-[#ff2128] text-[#5050b9]">HughesNet</td>
                  <td className="border  ">$64.99/mo</td>
                  <td className="border  ">25 Mbps</td>
                  <td className="border  ">Cheapest residential satellite in the US</td>
                  <td className="border ">	100%</td>
                  <td className="border ">
                    <button className=" bg-[#ff2128] text-[#fff]  px-[20px] py-[10px] font-[abc] hover:bg-red-600 whitespace-pre ">VIEW PLANS</button>
                  </td>
                </tr>
                <tr className="bg-[#fefefe] text-start pl-2">
                  <td className="border font-[abc] hover:text-[#ff2128] text underline text-[#5050b9]">Viasat</td>
                  <td className="border  ">	$84.99/mo</td>
                  <td className="border ">100 Mbps</td>
                  <td className="border ">	Quick, simple installation.</td>
                  <td className="border ">100%</td>
                  <td className="border ">
                    <button className=" bg-[#ff2128] text-[#fff] px-[20px] py-[10px] font-[abc] hover:bg-red-600 whitespace-pre ">VIEW PLANS</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>


        </div>

      </section>

    </>

  );
}
