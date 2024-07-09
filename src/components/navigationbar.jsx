import { Search } from '@mui/icons-material'
import React from 'react'
import { KeyboardArrowDown, Menu } from '@mui/icons-material'
const Navigationbar = () => {
  return (
    <>
    <div className="w-[100%] h-[48px] relative  md:w-[100%] md:h-[80px] md:relative">
        <div className="w-[156.4px] h-[32px] absolute top-[8px] left-[22px] md:h-[60px] md:w-[292.26px] md:top-[10px] md:left-[97px]">
          <img src="public/assets/images/logo.png" alt="" />
        </div>

        <div className="absolute top-[12px] left-[232px] md:top-[20px] md:left-[425px] ">
    <input className="w-full rounded-md hidden md:block md:h-[40px] md:w-[260px] md:text-[#F8F9FA] md:pl-1" type="search" placeholder="Search Here"/>

    <button className="absolute inset-y-0 right-0 md:text-white md:bg-[#8064A2] flex items-center h-[24px] w-[24px] md:h-[40px] md:w-[40px] bg-white text-[#8064A2] md:pl-2 rounded-r-md">
        <Search/>
  </button>
        </div>


        <div className="md:flex md:absolute md:left-[850px] md:top-[20px] md:justify-center md:items-center  md:w-[525px] md:h-[40px]" >
          <div className="hidden md:flex  md:h-[24px] md:w-[107px] md:absolute md:left-[0px]">
            <img src="public/assets/images/explore.png" alt="" />
            <div className="hidden md:block md:text-[14px] md:font-semibold md:leading-5 ">Explore</div>
            <div className="text-[#939CA3]"><KeyboardArrowDown/></div>
          </div>

          <div className="hidden md:flex md:h-[24px] md:w-[114px] md:absolute md:left-[130px]">
            <img src="public/assets/images/Hobbies.png" alt="" />
            <div className="md:text-[14px] md:font-semibold md:leading-5 ">Hobbies</div>
            <div className="md:text-[#939CA3]"><KeyboardArrowDown/></div>
          </div>

          <div className="hidden md:block md:absolute md:left-[269px]">
            <img src="public/assets/images/save.png" className='h-[24px] w-[24px]' alt="" />
          </div>
          <div className="h-[24px] w-[24px] absolute top-[12px] left-[272px] md:absolute md:left-[317px] md:top-[8px]"> 
          <img src="public/assets/images/notification.png" className='md:h-[24px] md:w-[24px]' alt="" />

          </div>
          <div className="hidden md:block md:absolute md:left-[365px]">
            <img src="public/assets/images/Product 3.png" className='md:h-[24px] md:w-[24px]' alt="" />
          </div>
          <div className="hidden md:block md:absolute md:left-[413px]">
            <button className="md:h-[40px] md:w-[112px] md:rounded-lg md:text-[#8064A2]" style={{border:'1px solid #8064A2'}}>Sign In</button>
          </div>
          <div className="absolute h-[24px] w-[24px ] left-[312px] top-[12px] md:hidden"> 
            <Menu/>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Navigationbar