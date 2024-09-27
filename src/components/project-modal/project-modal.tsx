"use client";

import { portfolio } from "@/data/portfolio";
import { styles } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type PortfolioModalProps = {
  projectId: string; // Accept null as a valid value
};

export default function PortfolioModal({ projectId }: PortfolioModalProps) {
  const [currentImage, setCurrentImage] = React.useState<number>(0);

  if (projectId === null) {
    // Handle the case where projectId is null
    return <div>Project ID not provided.</div>;
  }

  const project = portfolio.find((p) => p.id === projectId);
  const goToPreviousImage = () => {
    const newIndex =
      (currentImage - 1 + (project?.image?.length || 0)) %
      (project?.image?.length || 1);
    setCurrentImage(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (currentImage + 1) % (project?.image?.length || 1);
    setCurrentImage(newIndex);
  };

  return (
    <section className="px-5 md:px-8 pt-0 pb-0">
      <div>
        <h1 className="!text-start font-bold tracking-tight !pb-8 text-5xl text-textColor">
          {project?.title}
        </h1>

        {project?.image?.length ? (
          <div className="w-full h-auto md:h-auto overflow-hidden lg:px-36 2xl:px-0 object-cover relative">
            <div className="aspect-w-2 aspect-h-1">
              <Image
                src={project?.image[currentImage]?.url || ""}
                height={912}
                width={1909}
                alt=""
                className="h-full w-full object-contain border border-gray-200"
              />
            </div>

            <div
              className="absolute top-1/2 left-5 lg:left-40 2xl:left-5 transform -translate-y-1/2 text-gray-600 text-3xl z-10 cursor-pointer"
              onClick={goToPreviousImage}
            >
              <MdOutlineKeyboardArrowLeft size={40} />
            </div>

            <div
              className="absolute top-1/2 right-5 lg:right-40 2xl:right-5 transform -translate-y-1/2 text-gray-600 text-3xl z-10 cursor-pointer"
              onClick={goToNextImage}
            >
              <MdOutlineKeyboardArrowRight size={40} />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles("pt-8", { "!pt-2": !project?.image?.length })}>
          <h1 className="font-bold text-2xl text-textColor capitalize">
            {project?.subtitle}
          </h1>

          <div className="pt-4 font-light text-grayTextColor">
            {project?.description?.map((desc, index) => (
              <React.Fragment key={index}>
                <p>{desc}</p>
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-1">
            <h2 className="font-extrabold text-sm uppercase text-textColor">
              Technologies
            </h2>{" "}
            <span className="font-medium text-sm text-grayTextColor">
              {project?.technologies?.map((tech) => tech)?.join(", ")}
            </span>
          </div>

          <div className="pt-6 flex flex-col md:flex-row gap-4 md:gap-20">
            <div className="">
              <h2 className="font-extrabold uppercase text-textColor">
                Client
              </h2>{" "}
              <span className="text-sm text-grayTextColor">
                {project?.client}
              </span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-textColor">
                Author
              </h2>{" "}
              <span className="text-sm text-grayTextColor">Eaysin Arafat</span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-textColor">Date</h2>{" "}
              <span className="text-sm text-grayTextColor">
                {project?.date
                  ? project?.date
                  : "Under Development & Open for Contribution"}
              </span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-textColor">
                Resource
              </h2>{" "}
              <div className="text-sm flex items-center gap-4">
                <a
                  href={project?.githubLink || ""}
                  target="_blank"
                  className="text-textColor"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  className="text-textColor"
                  href={project?.liveLink || ""}
                  target="_blank"
                >
                  <FaExternalLinkAlt size={17} />
                </a>

                {project?.externalProjectDetailLink && (
                  <Link
                    className="text-textColor"
                    href={project?.externalProjectDetailLink}
                  >
                    <FaYoutube size={21} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
