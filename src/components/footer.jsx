import React from 'react'
import { Search } from '@mui/icons-material'
const Footer = () => {
  return (
   <div className='h-[796px] w-[360px] top-[2000px] md:w-[1440px] md:h-[380px]  relative md:top-[1200px]'>
        <div className=' md:h-[182px] md:w-[1217px] absolute md:top-[60px] md:left-[102px]'>
            <div>
                <div className='h-[152px] w-[312px] absolute top-[24px] left-[24px] md:absolute md:top-[0px] md:left-[0px] md:h-[156px] md:w-[90px]'>
                <div className='md:h-[14px] font-bold md:leading-6 md:mb-4'>Hobbycue</div>
                <ul className='md:text-[14px] md:leading-5 font-normal'>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Work with Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
                </div>


                <div className='h-[178px] w-[312px] absolute top-[208px] left-[24px] md:absolute md:top-[0px] md:left-[280px] md:h-[182px] md:w-[110px]'>
                <div className='md:h-[14px] font-bold md:leading-6 md:mb-4'>How Do I</div>
                <ul className='md:text-[14px] md:leading-5 font-normal'>
                    <li>Sign Up</li>
                    <li>Add a Listing</li>
                    <li>Claim Listing</li>
                    <li>Post a Query</li>
                    <li>Add a Blog Post</li>
                    <li>Other Queries</li>
                </ul>
                </div>


                <div className='h-[126px] w-[312px] absolute top-[418px] left-[24px] md:absolute md:top-[0px] md:left-[580px] md:h-[130px] md:w-[87px]'>
                <div className='md:h-[14px] font-bold md:leading-6 md:mb-4'>Quick Links</div>
                <ul className='md:text-[14px] md:leading-5 font-normal'>
                    <li>Listings</li>
                    <li>Blog Posts</li>
                    <li>Shop / Store</li>
                    <li>Community</li>
                </ul>
                </div>
                
                <div className='md:h-[182px] md:w-[360px] absolute md:top-[0px] md:left-[857px]'>
                    <div className='md:absolute md:top-[0px] absolute top-[576px] left-[24px] '>
                    <p className=' md:text-[14px] font-bold md:leading-6 md:mb-4 '>Social Media</p>
                    <div className='flex gap-6'>
                        <img src="public/assets/images/facebook.png" alt="" />
                        <img src="public/assets/images/twitter.png" alt="" />
                        <img src="public/assets/images/insta.png" alt="" />
                        <img src="public/assets/images/pinterest.png" alt="" />
                        <img src="public/assets/images/google.png" alt="" />
                        <img src="public/assets/images/youtube.png" alt="" />
                        <img src="public/assets/images/share.png" alt="" />
                        <img src="public/assets/images/message.png" alt="" />
                    </div>

                    </div>
                   
                    <div className='top-[662px] left-[24px] h-[62px] w-[312px] md:mt-[43px] absolute md:absolute md:top-[50px] md:left-[18px]'>
                        <p className='md:text-[14px] font-bold md:leading-6 md:mb-3'>Invite Friends</p>
                        <div>
    <input className="w-full h-[32px] rounded-md  md:h-[40px] md:w-[300px] text-[#F8F9FA] pl-1 outline" type="search" placeholder="Email ID"/>

    <button className="absolute top-[22px] md:top-[35px] inset-y-0 right-0 text-white bg-[#8064A2] flex items-center h-[32px] w-[59px] md:h-[40px] md:w-[59px] pl-2 rounded-r-md">
        <Search/>
  </button>
        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='h-[40px] w-[360px] absolute top-[756px] md:h-[78px] md:w-[1440px] bg-[#F7F5F9] md:absolute md:top-[302px]  flex items-center justify-center'>
            <p className='md:text-[14px] font-medium md:leading-5 '>© Purple Cues Private Limited</p>
        </div>
   </div>
  )
}

export default Footer