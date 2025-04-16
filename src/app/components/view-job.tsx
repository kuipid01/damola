import React from "react";
import clsx from "clsx";
import Image from "next/image";

const ViewJob = ({
  setImageState,
  imageUrl
}: {
  setImageState: React.Dispatch<React.SetStateAction<string | null>>;
  imageUrl: string | null;
}) => {
  console.log(imageUrl);
  return (
    <div
      className={clsx(
        "transition-opacity  right-0 bottom-0 h-screen justify-center items-center bg-black/60 backdrop-blur-xl",
        imageUrl
          ? "opacity-100  fixed top-0 left-0  z-50"
          : "opacity-0 z-0 hidden"
      )}
    >
      <div
        onClick={() => {
          setImageState(null);
        }}
        className=" text-4xl cursor-pointer font-bold text-white absolute right-10 top-10"
      >
        {" "}
        x{" "}
      </div>
      <div className=" bg-red-100 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-1/2 w-[80%] h-[80%] ">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Selected Job"
            fill
            className="w-[900px] object-center object-cover h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ViewJob;
