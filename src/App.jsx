import React from "react";
import SplitText from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import RotatingText from "./components/RotatingText";
import GooeyNav from './components/Navbar'
import "atropos/css"; 
import AtroposCard from "./components/AtroposCard"


function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const items = [
    { label: "Home", href: "#" },
    { label: "Project", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Certifications", href: "#" },
  ];

  return (
    <div className="m-0 p-0">
      <div className="navbar flex justify-center items-center mt-2 h-20 ml-4 mr-4 bg-black bg-opacity-95">
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
      <div className="main h-screen lg:items-start lg:min-h-screen md:px-5 relative">

        {/* Particles as Background */}
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          particleColors={["#5825b6", "#570987", "#7D0DC3"]}
          className="absolute inset-0 z-0"
        />

        {/* SplitText Overlaying Particles, but allowing hover effects */}
        <div className="font-semibold text-6xl font-poppins absolute inset-0 flex flex-col mt-40  items-center   text-white z-10 pointer-events-none">
          <SplitText
            text="Hello, I'm Vidit Shah"
            className="  text-center"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="flex flex-row justify-center items-center mt-3 p-5">
            <div className="mr-4">Passionate</div>
            <RotatingText
              texts={['Software Engineer', 'Frontend Developer', 'Backend Developer']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      <div className="projects">
          {/* <AtroposCard /> */}

      </div>

      </div>
    </div>
  );
}

export default App;
