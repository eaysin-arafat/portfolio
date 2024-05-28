import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  const socialData = [
    {
      name: "LinkedIn",
      bgColor: "#2679cd",
      url: "https://www.linkedin.com/in/eaysin-arafat/",
      icon: <FaLinkedin size={32} />,
    },
    {
      name: "GitHub",
      bgColor: "#232323",
      url: "https://github.com/eaysin-arafat",
      icon: <FaGithub size={32} />,
    },
    {
      name: "Facebook",
      bgColor: "#0866ff",
      url: "https://www.facebook.com/eaysin.arafat.j/",
      icon: <FaFacebook size={32} />,
    },
  ];
  return (
    <section id="social" className="px-1.5 pt-10 bg-bgColor">
      <div className="grid md:grid-cols-3 text-white">
        {socialData.map((item, index) => (
          <Link
            href={item?.url}
            key={index}
            style={{ backgroundColor: item?.bgColor }}
            className={`bg-${item?.bgColor} flex items-start gap-3 py-16 px-10 hover:bg-bgColor hover:text-textColor transition duration-1000 ease-in-out`}
          >
            <div className="text-white">{item?.icon}</div>
            <div className="">
              <h4 className="uppercase font-bold text-white">Follow me on</h4>
              <h3 className="capitalize font-semibold text-white">
                {item?.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
