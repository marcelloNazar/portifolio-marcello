"use client";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        href={"/projects"}
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        href={"/about"}
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiFillLinkedin />
      </Link>

      <Link
        href={"/contact"}
        className="hover:text-accent hover:scale-110 transition-all duration-300"
      >
        <AiOutlineWhatsApp />
      </Link>
    </div>
  );
};

export default Socials;
