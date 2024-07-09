import React from 'react'

const Test = () => {
  return (
    <>
        <div className='flex justify-center items-center h-[332px] w-[360px] absolute top-[1800px] md:h-[484px] md:w-[100%] bg-[#F7FDFF] md:absolute md:top-[1576px]'>
        <div className='relative h-[236px] w-[312px]  md:h-[282px] md:w-[1240px] rounded-lg  bg-white' style={{border:'1px solid #CED4DA'}}>


            <div className='md:h-[204px] md:w-[1160px] md:absolute md:left-[40px] md:top-[40px]'>
            <div className='' >
                <button className='absolute  top-[24px] left-[72px] md:absolute md:top-[0px] md:left-[0px] flex justify-center items-center h-[32px] w-[166px]  md:h-[40px] md:w-[232px] ' style={{fontWeight:'600'}}><img src="src/public/images/Add.png" className='h-[32px] w-[32px] md:h-[40px] md:w-[40px] mr-2 md:mr-[24px]' alt="" /><span className='h-[27px] w-[126px] text-[18px] md:h-[36px] md:w-[168px] md:text-2xl '>Add your own</span></button>
            </div>

            <div className='absolute top-[68px] left-[10px] md:absolute md:top-[72px] text-center md:text-justify'>
            <p className='leading-[20px] text-[12px] md:text-[18px] md:leading-7 ' style={{fontWeight:'300'}}>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
            </div>

            <button className='bg-white text-[#8064A2] rounded-lg gap-3 pt-2 pb-2 pl-[100px] pr-[100px] absolute top-[180px] left-[24px] md:pt-5px md:pb-[5px] md:pr-[29px] md:pl-[29px] md:absolute md:top-[164px]' style={{border:'1px solid #8064A2'}}>Add new</button>
            </div>
           
           
           
        </div>
    </div>
    </>
  )
}

export default Test