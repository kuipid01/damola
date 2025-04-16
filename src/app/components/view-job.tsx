import React from "react";
import Image from "next/image";

const ViewJob = ({
  setImageState,
  imageUrl
}: {
  setImageState: React.Dispatch<React.SetStateAction<string | null>>;
  imageUrl: string | null;
}) => {
  return (
    <div
      className={`transition-opacity  duration-300 right-0 bottom-0 h-screen w-full justify-center items-center bg-black/60 backdrop-blur-xl ${
        imageUrl
          ? "opacity-100 fixed top-0 left-0 z-50 flex"
          : "opacity-0 z-0 hidden"
      }`}
    >
      <div
        onClick={() => setImageState(null)}
        className="text-4xl cursor-pointer font-bold text-white absolute right-10 top-10"
      >
        x
      </div>

      <div className="bg-white rounded-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[90vh] overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Selected Job"
            fill
            className="object-cover object-center"
          />
        )}
      </div>
    </div>
  );
};

export default ViewJob;
