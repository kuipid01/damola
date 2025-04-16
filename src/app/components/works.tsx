"use client";
import Image from "next/image";
import React, { useState } from "react";
import ViewJob from "./view-job";

const Works = () => {
  const [imageState, setImageState] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCF3] flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-7xl">
        <p className="text-[40px] sm:text-[60px] lg:text-[120px] uppercase font-black tracking-[-0.05em] mb-10">
          some WORKS DONE
        </p>

        {/* Grid Section */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <div
              onClick={() => setImageState("/jobs/job1.png")}
              className="h-[300px] sm:h-[400px] md:h-[450px] w-full sm:w-[450px] relative bg-red-300 shadow shadow-gray-300"
            >
              <Image
                src="/jobs/job1.png"
                fill
                className="object-cover object-center cursor-pointer"
                alt="job1"
              />
            </div>
            <div
              onClick={() => setImageState("/jobs/job2.jpg")}
              className="h-[350px] sm:h-[450px] md:h-[550px] w-full sm:w-[450px] relative bg-red-300 shadow shadow-gray-300"
            >
              <Image
                src="/jobs/job2.jpg"
                fill
                className="object-cover object-center cursor-pointer"
                alt="job2"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <div
              onClick={() => setImageState("/jobs/job3.png")}
              className="h-[250px] sm:h-[400px] md:h-[500px] w-full sm:w-[650px] relative bg-red-300 shadow shadow-gray-300"
            >
              <Image
                src="/jobs/job3.png"
                fill
                className="object-cover object-center cursor-pointer"
                alt="job3"
              />
            </div>
            <div
              onClick={() => setImageState("/jobs/job4.png")}
              className="h-[250px] sm:h-[400px] md:h-[500px] w-full sm:w-[650px] relative bg-red-300 shadow shadow-gray-300"
            >
              <Image
                src="/jobs/job4.png"
                fill
                className="object-cover object-center cursor-pointer"
                alt="job4"
              />
            </div>
          </div>
        </div>

        {/* Final Row */}
        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <div
            onClick={() => setImageState("/jobs/jobe5.png")}
            className="h-[350px] md:h-[550px] w-full sm:w-[450px] relative bg-red-300 shadow shadow-gray-300"
          >
            <Image
              src="/jobs/jobe5.png"
              fill
              className="object-cover object-center cursor-pointer"
              alt="job5"
            />
          </div>

          <div
            onClick={() => setImageState("/jobs/job6.png")}
            className="h-[350px] md:h-[550px] w-full sm:w-[650px] relative bg-red-300 shadow shadow-gray-300"
          >
            <Image
              src="/jobs/job6.png"
              fill
              className="object-cover object-center cursor-pointer"
              alt="job6"
            />
          </div>
        </div>
      </div>

      <ViewJob setImageState={setImageState} imageUrl={imageState} />
    </div>
  );
};

export default Works;
