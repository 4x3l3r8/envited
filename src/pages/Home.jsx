import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LandingPageImage } from "../assets/Landing_page_image.svg";

const Home = () => {
  const navigate = useNavigate();

  const goToCreatePage = () => {
    navigate("/create");
  };

  return (
    <div className="md:h-screen w-screen lg:w-full bg-[#fff]">
      <div className="flex flex-col-reverse justify-between w-full h-full py-10 space-y-3 text-center lg:flex-row lg:px-36 lg:py-20 lg:text-right">
        <div className="flex justify-center lg:hidden">
          <button
            onClick={goToCreatePage}
            className="w-4/6 h-16 p-4 text-lg font-bold text-center text-white rounded-md bg-gradient-to-r from-primary3 to-primary4"
          >
            🎉Create my event
          </button>
        </div>
        <div className="flex justify-center w-5/6 mx-auto h-1/2 lg:w-1/4">
          <LandingPageImage className="flex lg:mx-auto sm:h-[292px] md:h-[600.27px] lg:h-[700px]" />
        </div>
        <div className="flex flex-col justify-center px-4 space-y-4 lg:w-1/2">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-primary1">
            Imagine if <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary3 to-primary4">Snapchat</span>
            <br /> had events
          </h1>
          <h5 className="text-[#4f4f4f] text-xl">Easily host and share events with your friends across any social media</h5>
          <div className="hidden mt-4 lg:flex lg:justify-end">
            <button
              onClick={goToCreatePage}
              className="w-3/6 p-4 font-bold text-center text-white rounded-md bg-gradient-to-r from-primary3 to-primary4"
            >
              🎉Create my event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
