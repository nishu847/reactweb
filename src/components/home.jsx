import React from "react";

const Home = () => {

   
  return (
    <>
      <div className="relative bg-[#F7F5F9]">
        <div className="md:h-[578px] md:w-[707px] absolute top-[32px] left-[24px] md:absolute md:top-[100px] md:left-[100px] ">
          <div className="h-[131px] w-[312px] md:h-[282px] md:w-[707px] ">
            <div
              className="italic text-[18px] leading-[27px] md:h-[54px] md:w-[580px] md:italic md:text-[36px] md:leading-[54px] "
              style={{ fontWeight: "600" }}
            >
              Explore your <span className=" text-[#0096C8]">hobby</span> or{" "}
              <span className=" text-[#8064A2]">passion</span>
            </div>

            <div
              className="leading-[22px] text-[12px] md:text-[14px] md:leading-[30px] text-black"
              style={{ fontWeight: "300" }}
            >
              <p className="h-[88px] w-[312px] md:h-[120px] md:w-[706px] mt-[32px]">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className="hidden md:block md:h-[60px] md:w-[706px]">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride
              </p>
            </div>
          </div>

          <div className="absolute top-[600px] left-[0px] h-[96.74px] w-[312px] md:h-[216px] md:absolute md:top-[310px] md:left-[0px] md:w-[697.07px] md:mt-[80px]">
            <img src="src/assets/images/group.png" alt="" />
          </div>
        </div>

        <div className="hidden md:block">
          <form className='md:h-[432px]  md:w-[410px] md:absolute md:top-[40px] md:left-[930px] md:gap-[32px] ' action="">
            <div class="inline-flex md:h-[34px] ">
              <button class="bg-white outline-none md:text-[20px] md:leading-[30px] text-[#939CA3] font-bold   underline" >
                Sign In
              </button>
              <button class="bg-white outline-none md:text-[20px] md:leading-[30px] text-[#939CA3] font-bold ml-[32px] underline  " >
                Join In
              </button>
            </div>
            <div className="md:absolute md:top-[66px]  md:h-[96px] md:w-[410px]" >
                <button className="md:flex justify-between md:w-[410px] md:h-[40px] md:rounded-lg md:pt-[12px] md:pb-[12px] md:pr-[128px] md:pl-[24px] md:text-[14px] md:leading-[16px] mt-4" style={{border:'1px solid #8064A2', borderRadius:'8px',fontWeight:'600'}}> <img src="src/assets/images/go.png" alt="" />Continue with Google</button>
                <button className="md:flex justify-between md:w-[410px] md:h-[40px] md:rounded-lg md:pt-[12px] md:pb-[12px] md:pr-[128px] md:pl-[24px] md:text-[14px] md:leading-[16px] mt-3" style={{border:'1px solid #8064A2', borderRadius:'8px',fontWeight:'600'}}><img src="src/assets/images/fb.png" alt=""   />Continue with Facebook</button>
            </div>

            <div className="mt-[150px]">
<div class="flex items-center  ">
    <div class="grow border-b border-gray-400"></div>
    <span class="shrink px-1 pb-1 text-black text-[12px] leading-[16px]" style={{fontWeight:'600'}}>Or Connect with</span>
    <div class="grow border-b border-gray-400"></div>
</div>
            </div>
            <input type="email" name="email"  placeholder="Email" className="md:h-[40px] md:w-[410px] rounded-lg md:pt-[12px] md:pr-[360px] mt-5 md:pb-[12px] md:pl-[12px]  bg-[#FFFFFF] " style={{border:'1px solid #EBEDF0'}}/>
            <input type="password" name=""  placeholder="Password" className="md:h-[40px] md:w-[410px] rounded-lg md:pt-[12px] md:pr-[300px] md:pb-[12px] md:pl-[12px] bg-[#FFFFFF] mt-2" style={{border:'1px solid #EBEDF0'}}/>

            <div className="md:h-[18px] md:w-[402px] md:text-[13px] mt-2 md:leading-[18px] text-[#6D747A]">By continuing, you agree to our <span className="text-[#08090A]">Terms of Service</span> and <span className="text-[#08090A]">
            Privacy Policy </span></div>

            
                <button className="md:h-[40px] md:w-[410px] text-white rounded-lg gap-3 md:pt-[8px] md:pr-[133.5px] pb-[12px] md:pl-[133.5px] bg-[#8064A2] mt-[30px]">Agree and Continue</button>
            
          </form>
        </div>



        <div className="md:hidden">
            <form action="" className='h-[364px] w-[312px] absolute top-[230px] left-[24px] gap-[32px] '>

            <div class="flex justify-center h-[28px] w-[149px] ">
              <button className="bg-white outline-none text-[16px] leading-[24px] text-[#939CA3] font-bold   underline" >
                Sign In
              </button>
              <button className="bg-white outline-none text-[16px] leading-[24px] text-[#939CA3] font-bold   underline ml-5">
                Join In
              </button>
            </div>


            <input type="email" name="email"  placeholder="Email" className="h-[32px] w-[312px] rounded-lg   bg-[#FFFFFF]  mt-4" style={{border:'1px solid #EBEDF0'}}/>
            <input type="password" name=""  placeholder="Password" className="h-[32px] w-[312px] rounded-lg mt-3  bg-[#FFFFFF] " style={{border:'1px solid #EBEDF0'}}/>

            <div className="h-[14px] w-[302px] text-[10px] leading-[13.5px] text-[#6D747A] mt-3">By continuing, you agree to our <span className="text-[#08090A]">Terms of Service</span> and <span className="text-[#08090A]">
            Privacy Policy </span></div>

            
                <button className="h-[32px] w-[312px] text-white rounded-lg gap-3 pt-[3px] pr-[85px] pb-[4px] pl-[80px] bg-[#8064A2] mt-[30px]">Agree and Continue</button>
            
                <div class="flex items-center h-[16px] w-[312px] mt-3 ">
    <div class="grow border-b border-gray-400"></div>
    <span class="shrink px-1 pb-1 text-black text-[12px] leading-[16px]" style={{fontWeight:'600'}}>Or Connect with</span>
    <div class="grow border-b border-gray-400"></div>
</div>


<div className="md:absolute md:top-[66px]  md:h-[96px] md:w-[410px]" >
                <button className="flex justify-between w-[312px] h-[32px] rounded-lg pt-[7px] pb-[5px] pr-[100px] pl-[24px] text-[12px] leading-[16px] mt-4" style={{border:'1px solid #8064A2', borderRadius:'8px',fontWeight:'600'}}> <img src="src/assets/images/go.png" alt="" />Continue with Google</button>


                <button className="flex justify-between w-[312px] h-[32px] rounded-lg pt-[7px] pb-[5px] pr-[100px] pl-[24px] text-[12px] leading-[16px] mt-2" style={{border:'1px solid #8064A2', borderRadius:'8px',fontWeight:'600'}}><img src="src/assets/images/fb.png" alt=""   />Continue with Facebook</button>
            </div>


            </form>
        </div>
      </div>
    </>
  );
};

export default Home;
