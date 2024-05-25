"use client";
import { accounts } from "@/data/account-url";
import React from "react";
import { BsStackOverflow } from "react-icons/bs";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <section className="section-container py-11 md:py-10 section-padding bg-white">
      <div className="flex items-center justify-between">
        <p>Eaysin Arafat</p>
        <div className="flex gap-1 md:gap-3">
          <a href={accounts?.github} target="_blank">
            <FaGithub size={23} />
          </a>

          <a href={accounts?.facebook} target="_blank">
            <FaFacebook size={23} />
          </a>

          <a href={accounts?.leetCode} target="_blank">
            <SiLeetcode size={23} />
          </a>

          <a href={accounts?.stackOverflow} target="_blank">
            <BsStackOverflow size={23} />
          </a>

          <a href={accounts?.linkedin} target="_blank">
            <IoLogoLinkedin size={23} />
          </a>

          <a href={accounts?.twitter} target="_blank">
            <FaTwitter size={23} />
          </a>
        </div>
      </div>
    </section>
  );
}
