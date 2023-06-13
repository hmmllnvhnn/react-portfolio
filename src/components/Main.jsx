import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-red-900">I am Hammillan Vhanne Manlanot</h1>
          <h2 className="flex sm:text-3xl text-2xl font-bold pt-4 text-white justify-center items-center">
            I'm a
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000, 
                "Quality Assurance",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: '10px', color: '#9B1C31'}}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w[200px] w-full ">
            <FaTwitter className="cursor-pointer" size={30} color="9B1C31" />
            <FaFacebookF className="cursor-pointer" size={30} color="9B1C31" />
            <FaInstagram className="cursor-pointer" size={30} color="9B1C31" />
            <FaLinkedin className="cursor-pointer" size={30} color="9B1C31" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
