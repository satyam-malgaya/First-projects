import React from "react";

function Biography() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full flex items-left justify-center pl-4 md:pl-[2vw] text-[12vw] md:text-[9vw] font-bold flex-col h-[50vh] md:h-[75vh]">
        <p>KAY VAN HANS,</p>
        <p className="relative bottom-4 md:bottom-9">BORN IN 1980</p>
      </div>

      {/* Education Section */}
      <div className="w-full flex flex-col md:flex-row min-h-[100vh]">
        <div className="w-full md:w-[30%] px-4 md:px-10 py-6 md:py-10">
          <a href="/" className="uppercase underline text-[4vw] md:text-[2vw] relative">
            Education
          </a>
        </div>
        <div className="w-full md:w-[70%] text-[3.5vw] md:text-[1.7vw] flex flex-col gap-6 md:gap-10 justify-start items-start px-4 md:px-25 py-6 md:py-10">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I'm a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>

      {/* Exhibitions Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start min-h-[70vh]">
        <div className="w-full md:w-[30%] px-4 md:px-10 py-6 md:py-10">
          <p className="underline uppercase text-[4vw] md:text-[2vw]">EXHIBITIONS</p>
        </div>
        <div className="w-full md:w-[70%] px-4 md:px-25 py-6 md:py-10">
          <p className="text-[3.5vw] md:text-[1.7vw]">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>

      {/* Featured On Section */}
      <div className="w-full flex flex-col md:flex-row min-h-[140vh]">
        <div className="w-full md:w-[30%] px-4 md:px-10 py-6 md:py-10">
          <h1 className="uppercase underline text-[4vw] md:text-[2vw]">FEATURED ON</h1>
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-6 md:gap-10 px-4 md:px-25 py-6 md:py-10 text-[3.5vw] md:text-[1.7vw]">
          <div className="flex flex-col gap-6 md:gap-10">
            <a href="/" className="underline">
              Schwarze Blume, 2035
            </a>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            <a href="/" className="underline">
              Selvlysende Magazine, 2035
            </a>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            <a href="/" className="underline">
              Black Canvas Magazine, 2035
            </a>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biography;
