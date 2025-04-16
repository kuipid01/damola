"use client";
import Image from "next/image";
import React, { useState } from "react";
import ViewJob from "./view-job";

const Works = () => {
  const [imageState, setImageState] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#FDFCF3] flex flex-col items-center justify-center py-10">
      <div>
        <p className="text-[120px] text-left font-black tracking-[-0.13em]">
          WORKS DONE
        </p>

        <div className="flex gap-10 translate-y-[-35px]">
          <div className="flex flex-col gap-10">
            <div
              onClick={() => {
                console.log("clicked");

                setImageState("/jobs/job1.png");
              }}
              className="h-[450px] w-[450px] shadow shadow-gray-300 relative bg-red-300"
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
              className="h-[550px] w-[450px] shadow shadow-gray-300 relative bg-red-300"
            >
              <Image
                src="/jobs/job2.jpg"
                fill
                className="object-cover object-center cursor-pointer"
                alt="job2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div
              onClick={() => setImageState("/jobs/job3.png")}
              className="h-[500px] w-[650px] shadow shadow-gray-300 relative bg-red-300"
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
              className="h-[500px] w-[650px] shadow shadow-gray-300 relative bg-red-300"
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
      </div>

      <ViewJob setImageState={setImageState} imageUrl={imageState} />
    </div>
  );
};

export default Works;
