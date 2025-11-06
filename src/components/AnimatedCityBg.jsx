import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import far from "../assets/buildings_far.png";
import near from "../assets/buildings_near.png";
import shadow from "../assets/shadow.png";
import scooter from "../assets/scooter.png"

const AnimatedCityBg = () => {

  const infiniteScroll = (speed) => ({
    animate: { x: ["0%", "-33.3333%"] }, 
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: speed,
    },
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* === Fixed Background === */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover blur-[2px] scale-105"
          style={{}}
        />
      </div>

      {/* === Far Buildings (Perfect Infinite Loop) === */}
      <div
        className="absolute bottom-26 left-0 z-10 overflow-hidden w-full h-[55vh]"
        style={{
          transform: "translateZ(-150px)",
        }}
      >
        {/* First strip */}
        <motion.div
          className="absolute top-0 left-0 flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // adjust speed
          }}
        >
          <img src={far} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={far} alt="" className="object-cover h-[55vh] w-screen" />
        </motion.div>

        {/* Second strip (starts halfway through) */}
        <motion.div
          className="absolute top-0 left-0 flex"
          animate={{ x: ["100%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // same speed as above
          }}
        >
          <img src={far} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={far} alt="" className="object-cover h-[55vh] w-screen" />
        </motion.div>
      </div>

      {/* === Near Buildings (faster) === */}
      <div
        className="absolute bottom-29 left-0 z-20 overflow-hidden w-[300%] flex"
        style={{
          transform: "translateZ(-60px) translateX(-850px) scale(1.4)",
        }}
      >
        <motion.div className="flex w-full scale-75" {...infiniteScroll(20)}>
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
          <img src={near} alt="" className="object-cover h-[55vh] w-screen" />
        </motion.div>
      </div>

      {/* === Glowing Road Layer === */}
      <div
        className="absolute bg-pink-400/70 bottom-0 left-0 z-25 w-full h-[15vh] pointer-events-none"
        style={{
          filter: "blur(10px)",
          mixBlendMode: "screen",
        }}
      />
      {/* === Car on glowing road === */}
      <div
        className="absolute bottom-[5vh] md:left-80 left-[120px] z-28 md:w-[15vw] w-50 max-w-[250px] pointer-events-none"
        style={{
          transform: "translateX(-50%) translateZ(120px) scale(1.1)", // slight 3D forward depth
        }}
      >
        <motion.img
          src={scooter}
          alt="scooter"
          className="w-[70%] h-auto select-none drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }} // subtle hover motion
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* === Shadow base (closest & biggest) === */}
      <div
        className="absolute bottom-[-83vh] h-full left-0 z-30 overflow-x-hidden w-[300%] flex"
        style={{
          transform: "translateZ(100px)",
        }}
      >
        <motion.div className="flex w-full" {...infiniteScroll(3)}>
          <img src={shadow} alt="" className="object-cover w-screen" />
          <img src={shadow} alt="" className="object-cover w-screen" />
          <img src={shadow} alt="" className="object-cover w-screen" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCityBg;
