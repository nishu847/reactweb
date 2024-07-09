import React from 'react'

const Started = () => {
  return (
    <div className='h-[267px] w-[360px] relative top-[1965px] md:h-[662px] md:w-[1440px] bg-[#F7FDFF] md:relative md:top-[1153px]'>
        <div className='absolute left-[24px] md:h-[130px] md:w-[565px] md:absolute md:left-[100px] md:top-[100px]'>
            <p className="mt-[48px] h-[27px] w-[283px] italic text-[18px] leading-[27px] md:h-[54px] md:w-[565px] md:mt-0 md:italic md:text-[36px] md:leading-[54px] "
              style={{ fontWeight: "500" }}>Your <span className='text-[rgb(128,100,162)]'>Hobby</span>, Your <span className=' text-[#0096C8]'>Community...</span></p>

              <button className='mt-[24px] h-[28px] mb-[48px] w-[104px] rounded-lg md:h-[46px] md:w-[147px] md:pt-2 md:pr-4 md:pb-2 md:pl-4 text-white bg-[#8064A2] md:mt-7'>Get Started</button>
        </div>
        <div>
            <img src="src/assets/images/group2.png" alt="" className='h-[76px] w-[312.05px] absolute top-[175px] left-[24px] md:h-[302px] md:w-[1240px] md:absolute md:top-[330px] md:left-[100px]' />
        </div>
    </div>
  )
}

export default Started