import React from "react";
import Heading from "../core/heading/heading";
import { skills } from "@/data/skill";
import { personal } from "@/data/personal";

export default function Resume() {
  return (
    <section id="resume" className="section-container pb-24">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Heading
            title={{ lastText: "Profile" }}
            className="pb-7 !text-start !text-5xl"
          />

          <div className="space-y-2 md:space-y-0">
            <p className="tm-parent-label">
              <span className="tm-info-label">Name</span> Eaysin Arafat
            </p>
            <p className="tm-parent-label">
              <span className="tm-info-label">Birthday</span> February 03, 1998
            </p>
            <p className="tm-parent-label">
              <span className="tm-info-label">Address</span> Sayed Nagar, East
              Vatara, Gulshan, Dhaka 1212
            </p>
            <p className="tm-parent-label">
              <span className="tm-info-label">Phone</span> +880 164 226078
            </p>
            <p className="tm-parent-label">
              <span className="tm-info-label">Email</span>{" "}
              eaysinarafat@gmail.com
            </p>
            <p className="tm-parent-label">
              <span className="tm-info-label">My Resume</span>{" "}
              <a
                href={personal?.resumeLink}
                className="text-orangeColor underline text-sm"
                target="_blank"
              >
                Click here
              </a>
            </p>
          </div>
        </div>

        <div>
          <Heading
            title={{ lastText: "Skills" }}
            className="pb-7 !text-start !text-5xl"
          />

          <div className="flex flex-col gap-2 md:gap-1">
            {skills?.map((skills, index) => (
              <p
                key={index}
                className="flex md:block flex-col gap-1 text-textColor"
              >
                <span className="text-sm font-bold inline-block w-44 text-grayTextColor">
                  {skills?.name}
                </span>{" "}
                {skills?.skills?.map((skill) => skill).join(", ")}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
