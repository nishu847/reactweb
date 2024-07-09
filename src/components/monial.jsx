import { PlayArrowRounded, PlayCircle, PlayCircleFilledWhite, PlayCircleFilledWhiteRounded } from '@mui/icons-material'
import Slider from '@mui/material/Slider';
import React from 'react'

const Monial = () => {
  return (
    <div className=' h-[708px] w-[360px] relative top-[2132px] md:h-[672px] md:w-[100%] md:relative md:top-[1200px] bg-white '>
        <div className='h-[612px] w-[312px] top-[48px] left-[24px] absolute md:h-[474px] md:w-[1240px] md:absolute md:top-[100px] md:left-[100px] bg-[#f7f5f9] rounded-lg'>

        <div className='flex justify-center items-center md:absolute md:top-[40px] md:left-[40px] absolute  top-[24px] left-[77px]  '>
          <img src="src/public/images/quote.png" alt="" className='h-[32px] w-[32px] mr-1 md:h-[40px] md:w-[40px] md:mr-[24px]'/>
          <p className='h-[27px] w-[118px] text-[18px] md:h-[36px] md:w-[157px] md:text-2xl' style={{fontWeight:'600'}}>Testimonials</p>
        </div>

        <div className='h-[340px] w-[264px] absolute top-[68px] left-[24px] md:h-[180px] md:w-[1160px] md:absolute md:top-[112px] md:left-[40px]'>
          <p className='text-xs align-center leading-6 md:text-lg md:leading-7 text-[#6D747A] font-light'>
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
        </div>

        <div className='bg-[#CCC1DA] h-[64px] w-[264px] absolute top-[524px] left-[24px] md:h-[100px] md:w-[776px] rounded-lg md:absolute md:top-[332px] md:left-[40px] '>
            <PlayArrowRounded className='bg-white rounded-full  h-[24px] w-[24px] absolute top-[20px] left-3
            text-[#8064A2] md:absolute md:top-[37px] md:left-[32px] md:h-[40px] md:w-[40px] '/>
            <div className='text-white h-[2px] w-[123px] top-[10px] left-[72px]  absolute md:left-[118px] md:top-[30px] md:w-[468px]'>
            <Slider
  size="small"
  defaultValue={0}
  aria-label="Small"
  valueLabelDisplay="auto"
  
/>
            </div>
            

<img src="src/public/images/cover.png" alt="" className='h-[40px] w-[40px] absolute top-[12px] left-[208px] md:h-14 md:w-14 md:absolute md:top-[19px] md:left-[650px]'/>

        </div>
        <img src="src/public/images/gp.png" alt="" className='h-[60px] w-[236px] absolute top-[432px] left-[38px] md:absolute md:top-[332px] md:left-[896px] md:h-[100px] md:w-[304px]' />

      </div>
    </div>
  )
}

export default Monial