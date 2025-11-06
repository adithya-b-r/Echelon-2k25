import AnimatedCityBg from "./components/AnimatedCityBg";
import Logo from "./assets/logo.png"
import Sidebars from "./components/Sidebars";

function App() {
  return (
    <div className="relative w-full h-screen">
      <AnimatedCityBg />
      <Sidebars />
      <div className="absolute inset-0 z-50 flex items-center justify-center text-white">
        <div className="">
          <img src={Logo} alt="Logo" className="backdrop-blur-xs w-[400px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
