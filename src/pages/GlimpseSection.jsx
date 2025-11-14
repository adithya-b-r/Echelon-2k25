import React from "react";
import CircularGallery from "@/components/CircularGallery";
import GradientText from "@/components/GradientText";

const GlimpseSection = () => {
  const items = [
    {
      image: "Glimpse1.JPG",
    },
    {
      image: "Glimpse2.JPG",
    },
    {
      image: "Glimpse3.JPG",
    },
    {
      image: "Glimpse4.JPG",
    },
    {
      image: "Glimpse5.JPG",
    },
    {
      image: "Glimpse6.JPG",
    },
    {
      image: "Glimpse7.JPG",
    },
    {
      image: "Glimpse8.jpg",
    },
    {
      image: "Glimpse9.JPG",
    },
    {
      image: "Glimpse10.JPG",
    },
    {
      image: "Glimpse11.JPG",
    },
  ];

  return (
    <div
      className="relative h-screen bg-black/80 backdrop-blur-xl border-t border-white/10 flex flex-col items-center justify-center py-16 md:py-24"
      style={{
        height: "700px",
        zIndex: 50,
      }}
    >
      <div className="mb-12 md:mb-20 z-10 text-center px-4 bg-transparent">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-3xl md:text-5xl font-bold leading-tight block bg-transparent"
        >
          <span className="block md:hidden">
            Glimpse of MBA <br /> Department
          </span>
          <span className="hidden md:block">Glimpse of MBA Department</span>
        </GradientText>
      </div>

      {/* Circular Gallery */}
      <div className="w-full h-full flex justify-center">
        <CircularGallery
          items={items}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.15}
          scrollSpeed={5}
        />
      </div>
    </div>
  );
};

export default GlimpseSection;
