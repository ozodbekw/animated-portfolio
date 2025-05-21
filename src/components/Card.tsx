import graintImage from "@/assets/images/grain.jpg";
import Image from "next/image";

function Card() {
  return (
    <div className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-50">
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${graintImage.src})`,
        }}
      ></div>
    </div>
  );
}

export default Card;
