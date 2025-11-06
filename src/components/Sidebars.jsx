import React from "react";
import {
  Home,
  CalendarDays,
  Phone,
  Users,
  Gem,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  MessageCircle,
  Gamepad2,
} from "lucide-react";
import GlassSurface from "./GlassSurface";

const navItems = [
  { icon: <Home size={22} />, label: "HOME" },
  { icon: <CalendarDays size={22} />, label: "EVENTS" },
  { icon: <Phone size={22} />, label: "CONTACT" },
  { icon: <Users size={22} />, label: "ABOUT US" },
  { icon: <Gem size={22} />, label: "SPONSORS" },
];

const socialItems = [
  { icon: <Instagram size={22} /> },
  { icon: <Linkedin size={22} /> },
  { icon: <Youtube size={22} /> },
  { icon: <Twitter size={22} /> },
  { icon: <Facebook size={22} /> },
  { icon: <Gamepad2 size={22} /> },
  { icon: <MessageCircle size={22} /> },
];

const Sidebars = () => {
  return (
    <>
      {/* === Left Navigation Sidebar === */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <GlassSurface
          width={70}
          height={420}
          borderRadius={30}
          blur={20}
          className="flex flex-col items-center justify-center space-y-6 text-white"
        >
          {navItems.map((item, i) => (
            <button
              key={i}
              className="flex flex-col items-center hover:text-pink-400 transition-all duration-200 group"
            >
              <div
                className="group-hover:scale-110 transition-transform flex items-center justify-center w-10 h-10
                rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
                shadow-[0_0_10px_rgba(255,0,255,0)] group-hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]"
              >
                {item.icon}
              </div>
              <span className="text-[10px] mt-1 tracking-wider">{item.label}</span>
            </button>
          ))}
        </GlassSurface>
      </div>

      {/* === Right Social Sidebar === */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <GlassSurface
          width={70}
          height={420}
          borderRadius={30}
          blur={20}
          className="flex flex-col items-center justify-center space-y-6 text-white"
        >
          {socialItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-cyan-400 transition-all duration-200 group"
            >
              <div
                className="group-hover:scale-110 transition-transform flex items-center justify-center w-10 h-10
                rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
                shadow-[0_0_10px_rgba(0,200,255,0)] group-hover:shadow-[0_0_15px_rgba(0,200,255,0.5)]"
              >
                {item.icon}
              </div>
            </a>
          ))}
        </GlassSurface>
      </div>

      {/* === Bottom Navigation Bar (for Mobile) === */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden
        w-[92%] bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.2)]
         flex items-center justify-around py-3 shadow-[0_0_25px_rgba(255,0,255,0.2)]"
      >
        {navItems.map((item, i) => (
          <button
            key={i}
            className="flex flex-col items-center text-white hover:text-pink-400 transition-all duration-200"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
              bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
              shadow-[0_0_10px_rgba(255,0,255,0)] hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]"
            >
              {item.icon}
            </div>
            <span className="text-[9px] mt-1 tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebars;
