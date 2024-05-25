"use client";

import React from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";
import { styles } from "@/utils/cn";
import { useRouter } from "next/navigation";

type PortfolioModalProps = {
  projectId: number | null; // Accept null as a valid value
};

export default function PortfolioModal({ projectId }: PortfolioModalProps) {
  const router = useRouter();

  const [currentImage, setCurrentImage] = React.useState<number>(0);

  if (projectId === null) {
    // Handle the case where projectId is null
    return <div>Project ID not provided.</div>;
  }

  const project = portfolio[projectId];
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

  const goToPreviousProject = () => {
    if (projectId == 0) {
      return router.push(`/${portfolio?.length - 1}`);
    }
    return router.push(`/${Number(projectId) - 1}`);
  };

  const goToNextProject = () => {
    if (projectId == portfolio?.length - 1) {
      return router.push(`/${Number(0)}`);
    }

    return router.push(`/${Number(projectId) + 1}`);
  };

  return (
    <section className="px-5 md:px-8 pt-0 pb-0">
      <div>
        <h1 className="!text-start font-bold tracking-tight !pb-8 text-5xl text-black">
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
          <h1 className="font-bold text-2xl text-black capitalize">
            {project?.subtitle}
          </h1>

          <div className="pt-4 font-light">
            {project?.description?.map((desc, index) => (
              <React.Fragment key={index}>
                <p>{desc}</p>
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-1">
            <h2 className="font-extrabold text-sm uppercase text-black">
              Technologies
            </h2>{" "}
            <span className="font-medium text-sm">
              {project?.technologies?.map((tech) => tech)?.join(", ")}
            </span>
          </div>

          <div className="pt-6 flex flex-col md:flex-row gap-4 md:gap-20">
            <div className="">
              <h2 className="font-extrabold uppercase text-black">Client</h2>{" "}
              <span className="text-sm">{project?.client}</span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-black">Author</h2>{" "}
              <span className="text-sm">Eaysin Arafat</span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-black">Date</h2>{" "}
              <span className="text-sm">
                {project?.date
                  ? project?.date
                  : "Under Development & Open for Contribution"}
              </span>
            </div>

            <div className="">
              <h2 className="font-extrabold uppercase text-black">Resource</h2>{" "}
              <div className="text-sm flex items-center gap-4">
                <Link href={project?.githubLink || ""} className="text-black">
                  <FaGithub size={19} />
                </Link>

                <Link href={project?.liveLink || ""}>
                  <FaExternalLinkAlt size={17} />
                </Link>

                {project?.externalProjectDetailLink && (
                  <Link href={project?.externalProjectDetailLink}>
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
