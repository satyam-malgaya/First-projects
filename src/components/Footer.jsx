import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { IoMdArrowDown } from "react-icons/io";

function Footer() {
  const [Email, setEmail] = useState("");
  const [showeror, setshoweror] = useState(false);

  const handlbur = () => {
    if (!Email || !Email.includes("@")) {
      setshoweror(true);
    } else {
      setshoweror(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[30vh]"></div>
      <div className="w-full px-4 md:px-10 font-bold uppercase flex flex-col text-[8vw] md:text-[11vw]">
        <a href="https://www.instagram.com/wix" className="hover:text-zinc-600">Instagram</a>
        <a
          className="relative bottom-10 hover:text-zinc-600"
          href="https://www.behance.net/thewixstudio"
        >
          behance
        </a>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[25%] px-4 md:px-10 py-5 flex flex-col gap-5 md:gap-10">
            <h3 className="uppercase underline text-[1.5vw] md:text-[1.9vw]">studio</h3>
            <p className="text-[1.2vw] md:text-[1.6vw]">
              500 Terry Francine StSan Francisco, CA 94158
            </p>
          </div>
          <div className="w-full md:w-[25%] px-4 md:px-10 py-5 flex flex-col gap-5 md:gap-10">
            <h3 className="uppercase underline text-[1.5vw] md:text-[1.9vw]">policy</h3>
            <p className="text-[1.2vw] md:text-[1.6vw]">
              Shipping Policy <br /> Return Policy Payment MethodsFAQ
            </p>
          </div>
          <div className="w-full md:w-[45%] px-4 md:px-10 py-5 flex flex-col gap-5 md:gap-10">
            <h3 className="uppercase underline text-[1.5vw] md:text-[1.9vw]">suscribe</h3>
            <form>
              <div className="flex flex-col gap-2">
                <label>Email *</label>
                <input
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handlbur}
                  className="border-b-[1px] pl-2 py-1 w-full"
                  id="Email"
                  type="Email"
                  required
                />
                {showeror && (
                  <div className="text-red-700 flex items-center gap-1 text-sm md:text-base">
                    <FiAlertCircle />
                    <p>Enter an email address like example@mysite.com</p>
                  </div>
                )}
                <label className="flex py-3 items-center gap-2 flex-wrap">
                  <input type="checkbox" onChange={(e) => setEmail(e.target.value)}
                  onBlur={handlbur} value={Email} id="Checkbox" />
                  <span className="text-sm md:text-base">Yes, subscribe me to your newsletter.*</span>
                  {showeror && (
                    <div className="text-red-700 flex items-center gap-1 text-sm md:text-base">
                      <FiAlertCircle />
                      <p>Check the box to continue</p>
                    </div>
                  )}
                </label>
                <button id="nav-link" className="py-2 px-3 border-1 rounded-xl hover:bg-gray-100 transition-colors">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-8">
          <div className="text-[2vw] md:text-[3vw] text-center md:text-left">
            <p>© 2035 BY KAY VAN HANS.</p>
            <p className="relative bottom-3">Powered and secured by <span className="underline">Wix</span></p>
          </div>
          <div className="mt-4 pr-1 md:mt-0">
            <IoMdArrowDown className="rotate-140 text-[11vw] md:text-[16vw] font-extrabold"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
