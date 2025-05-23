import React, { useState, useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";
import bg1 from "../assets/img-1-1.avif";
import bg2 from "../assets/img-1-1.2.avif";
import bg3 from "../assets/img-1-1.3.avif";
import c1 from "../assets/c-1.avif";
import c2 from "../assets/c-2.avif";
import con1 from "../assets/con-1.avif";
import "../components/Navbar.css";

function Home() {
  const [openpop,setopenpop]= useState(false)
  const imges = [bg1, bg2, bg3];
  const [showfirst, setshowfirst] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setshowfirst((prev) => (prev + 1) % imges.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="w-full h-[50vh] pt-5 md:h-[80vh] relative">
        <div className="flex flex-col text-[12vw] md:text-[13vw] py-10 px-4 md:px-10 font-bold">
          <h1>KAY VAN</h1>
        </div>
        <span className="absolute top-50 left-4 md:left-10 text-[12vw] md:text-[13vw] font-bold">
          HANS
        </span>

      </section>

      {/* About Section */}
      <section id="about" className="w-full min-h-[90vh]">
        <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-10">
          <div className="w-full md:w-[50%] h-full flex flex-col md:pl-[20vw] text-[5vw] md:text-[1.9vw]">
            <p>SAN FRANCISCO BASED</p>
            <p>CONTEMPORARY ARTIST.</p>
            <IoMdArrowDown className="rotate-315 text-4xl md:text-6xl font-extrabold" />
          </div>
          <div className="w-full md:w-[50%] h-full flex justify-center md:justify-end pt-[5vw] md:pt-[10vw]">
            <img
              className="w-[80%] md:w-[35%] h-[40vh] md:h-[50vh] object-cover"
              src={imges[showfirst]}
              alt={`Slide ${showfirst + 1}`}
            />
          </div>
        </div>
      </section>

      {/* Current Exhibitions Section */}
      <section id="exhibitions" className="w-full min-h-[30vh] md:min-h-[30rem] flex justify-center pl-4 md:pl-[20vw] flex-col text-[8vw] md:text-[7vw] font-bold">
        <p className="relative top-10">CURRENT</p>
        <p className="flex items-center">
          EXHIBITIONS{" "}
          <IoMdArrowDown className="rotate-315 text-[10vw] md:text-[9vw] relative top-10" />
        </p>
      </section>

      {/* Gallery Section */}                                                                              
      <section id="gallery" className="w-full min-h-[170vh] justify-center items-center gap-5 py-10 flex flex-col md:flex-row">
        <div className="w-[90%] md:w-[35%] h-full">
          <div className="relative top-0 md:top-103 left-0 md:left-27">
            <img src={c1} className="w-full md:w-[75%] h-[60vh] md:h-[80vh] object-cover" alt="" />
            <div className="flex justify-between  md:gap-30 text-[4vw] md:text-[1.4vw] pt-5">
              <p>THIRTY THREE</p>
              <button id="nav-link" onClick={pophandler} className="py-1 px-3 realtive right-30 border-1 uppercase rounded-xl">
                show
              </button>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[55%] h-full">
          <div>
            <img
              src={c2}
              className="relative top-0 left-0 md:left-18 w-full md:w-[80%] h-[70vh] md:h-[110vh] object-cover"
              alt=""
            />
            <div className="flex justify-between md:justify-center md:gap-70 text-[4vw] md:text-[1.4vw] pt-5">
              <p>THIRTY THREE</p>
              <button id="nav-link" className="py-1 px-3 border-1 uppercase rounded-xl">
                show
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="w-full min-h-[130vh] pt-60 flex justify-center items-center">
        <div className="w-[90%] md:w-[44%] h-[60vh] md:h-[95vh]">
          <img className="w-full h-full object-cover" src={con1} alt="" />
          <div className="flex justify-between md:flex-row md:gap-60 text-[4vw] md:text-[1.3vw] pt-6">
            <p>FRAGILE CONCRETE</p>
            <button id="nav-link" className="uppercase py-1 px-3 border-1 rounded-xl">
              show
            </button>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="w-full min-h-[40vh] relative top-50 md:min-h-[60vh]">
        <div className="w-full h-[50%]"></div>
        <div className="w-full h-[50%] flex items-center justify-center md:pl-[55.8rem]">
          <h1 className="text-[8vw] md:text-[7vw] font-bold uppercase">Buy</h1>
          <IoMdArrowDown className="text-[10vw] md:text-[10vw] font-bolder rotate-315" />
        </div>
      </section>

      {/* Products Section */}
      <section id="store" className="w-full flex flex-col md:flex-row justify-center items-center gap-6 min-h-[120vh] p-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-[90%] md:w-[30%] h-[60vh] md:h-[90vh] mb-8 md:mb-0">
            <img
              className="w-full h-full object-cover"
              src={`https://static.wixstatic.com/media/c22c23_${index === 0 ? '10469f2753e84bb08a825bd35688431a' : index === 1 ? '75ed5ed2cfbc4187b79796f87b17f4bc' : 'e15e408f8b8148708e94aaa36210396e'}~mv2.jpg/v1/fill/w_748,h_997,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_${index === 0 ? '10469f2753e84bb08a825bd35688431a' : index === 1 ? '75ed5ed2cfbc4187b79796f87b17f4bc' : 'e15e408f8b8148708e94aaa36210396e'}~mv2.jpg`}
              alt=""
            />
            <div className="text-[4vw] md:text-[1.6vw] flex justify-between md:gap-20 uppercase pt-2">
              <div>
                <h2>I'm a product</h2>
                <p>$930.00</p>
              </div>
              <div>
                <button id="nav-link" className="px-3 py-2 border-1 rounded-xl">
                  Quick view
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
