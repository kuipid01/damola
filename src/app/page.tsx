import React from "react";
import Works from "./components/works";
import AboutMe from "./components/about-me";

export default function Home() {
  // Option 1: More Detailed & Location Specific
  const description1 =
    "Professional 3D Designer and Modeler based in Abuja, Nigeria. Specializing in crafting detailed assets, immersive environments, and compelling visualizations that bring creative visions to life.";

  const selectedDescription = description1; // <--- CHANGE THIS TO description1, description2, or description3

  return (
    <div>
      <section className="flex flex-col items-center justify-center bg-[#FBE35C] min-h-screen p-8 pb-20 gap-0 sm:gap-0 sm:p-10 text-center">
        {/* Name - Large, stylized font, responsive */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-[family-name:var(--font-satisfy)] font-bold leading-tight">
          Damola Asaolu
        </h1>

        {/* Description - Slightly smaller, clearer font, responsive */}
        <p className="font-[family-name:var(--font-source_serif_4)] text-xl sm:text-2xl md:text-3xl lg:text-[30px] xl:text-[30px] max-w-6xl leading-snug sm:leading-normal">
          {selectedDescription}
        </p>
      </section>
      <Works />
      <AboutMe />
    </div>
  );
}
