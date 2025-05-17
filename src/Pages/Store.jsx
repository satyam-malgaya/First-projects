import React from "react";
import { IoMdArrowDown } from "react-icons/io";

function Store() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full min-h-[50vh] md:min-h-[90vh]">
        <div className="uppercase px-4 md:px-10 pt-10 text-[8vw] md:text-[9vw] font-bold">
          <p className="hover:text-zinc-700 transition-transform duration-3000 ease-in-out">BUY STUFF YOU</p>
          <p className="relative bottom-4">DON'T NEED</p>
        </div>
      </div>

      {/* Void Collection */}
      <div className="w-full min-h-[100vh] px-4 md:px-10">
        <div className="w-full h-[15%] flex text-[6vw] md:text-[4vw] uppercase items-center">
          <p>void</p>
          <IoMdArrowDown className="rotate-315 text-[7vw] md:text-[5vw]" />
        </div>
        <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 pt-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-full h-full">
              <div className="w-full aspect-[3/4]">
                <img 
                  className="w-full h-full object-cover" 
                  src={`https://static.wixstatic.com/media/c22c23_${index === 0 ? '638f61b82a1542b99a7703d05dd6f854' : 
                    index === 1 ? 'dbb785ebbe5e4da8bbd3c61d93ae2b19' :
                    index === 2 ? '542491f091a9479f8966c979daecf1c4' :
                    index === 3 ? 'ee010d369c9943a8a79ee558fd91664e' :
                    '10469f2753e84bb08a825bd35688431a'}~mv2.jpg/v1/fill/w_303,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_${index === 0 ? '638f61b82a1542b99a7703d05dd6f854' : 
                    index === 1 ? 'dbb785ebbe5e4da8bbd3c61d93ae2b19' :
                    index === 2 ? '542491f091a9479f8966c979daecf1c4' :
                    index === 3 ? 'ee010d369c9943a8a79ee558fd91664e' :
                    '10469f2753e84bb08a825bd35688431a'}~mv2.jpg`} 
                  alt="Product" 
                />
              </div>
              <div className="p-4">
                <p className="uppercase text-[3.5vw] md:text-[1.2vw]">I'M a product</p>
                <p className="text-zinc-600 text-[3vw] md:text-[1.1vw]">$930.00</p>
                <button className="mt-2 px-3 py-2 border-1 rounded-xl text-[2.5vw] md:text-[1vw] hover:bg-black hover:text-white transition-colors duration-300" id="nav-link">
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thirty Three Collection */}
      <div className="w-full min-h-[100vh] px-4 md:px-10">
        <div className="w-full h-[15%] flex text-[6vw] md:text-[4vw] uppercase items-center">
          <p>THIRTY THREE</p>
          <IoMdArrowDown className="rotate-315 text-[7vw] md:text-[5vw]" />
        </div>
        <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 pt-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-full h-full">
              <div className="w-full aspect-[3/4]">
                <img 
                  className="w-full h-full object-cover" 
                  src={`https://static.wixstatic.com/media/c22c23_${index === 0 ? '0a352f8b588f46429115f6a3eefb537d' : 
                    index === 1 ? '75ed5ed2cfbc4187b79796f87b17f4bc' :
                    index === 2 ? '6d0ce50320d74240841a83d9b0dae734' :
                    index === 3 ? 'e40cb2c2b85d484ea69e9e751c4410c8' :
                    'e15e408f8b8148708e94aaa36210396e'}~mv2.jpg/v1/fill/w_303,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_${index === 0 ? '0a352f8b588f46429115f6a3eefb537d' : 
                    index === 1 ? '75ed5ed2cfbc4187b79796f87b17f4bc' :
                    index === 2 ? '6d0ce50320d74240841a83d9b0dae734' :
                    index === 3 ? 'e40cb2c2b85d484ea69e9e751c4410c8' :
                    'e15e408f8b8148708e94aaa36210396e'}~mv2.jpg`} 
                  alt="Product" 
                />
              </div>
              <div className="p-4">
                <p className="uppercase text-[3.5vw] md:text-[1.2vw]">I'M a product</p>
                <p className="text-zinc-600 text-[3vw] md:text-[1.1vw]">$930.00</p>
                <button className="mt-2 px-3 py-2 border-1 rounded-xl text-[2.5vw] md:text-[1vw] hover:bg-black hover:text-white transition-colors duration-300" id="nav-link">
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
