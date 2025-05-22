import graintImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Card({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content[''] after:absolute ater:inset-0 after:bg-red-500 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/80 after:pointer-events-none p-6",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${graintImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}

export default Card;
