"use client";

import Image from "next/image";
import Heading from "../core/heading/heading";
import { portfolio } from "@/data/portfolio";
import { useState } from "react";
import Modal from "../core/modal/modal";
import PortfolioModal from "../project-modal/project-modal";

type Category = "ALL" | "REACTJS" | "NEXTJS" | "LIBRARY";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  // Filter the portfolio items based on the selected category
  const filteredPortfolio = portfolio.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  const handleOpenModal = (projectId: number) => {
    setSelectedProjectId(projectId);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <section
      id="projects"
      className="section-content section-container pb-24 section-padding bg-bgWhiteColor"
    >
      <div className="">
        <Heading title={{ lastText: "Projects" }} className="!pb-11" />

        <div className="">
          <ul className="filter-wrapper flex flex-wrap items-center justify-start lg:justify-center md:text-center gap-2 pb-7">
            <li>
              <button
                onClick={() => setSelectedCategory("ALL")}
                className={`${selectedCategory === "ALL" ? "selected" : ""}`}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`${
                  selectedCategory === "REACTJS" ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory("REACTJS")}
              >
                React Js
              </button>
            </li>
            <li>
              <button
                className={`${selectedCategory === "NEXTJS" ? "selected" : ""}`}
                onClick={() => setSelectedCategory("NEXTJS")}
              >
                Next Js
              </button>
            </li>
            <li>
              <button
                className={`${
                  selectedCategory === "LIBRARY" ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory("LIBRARY")}
              >
                Library
              </button>
            </li>
          </ul>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
            {filteredPortfolio?.map((item, index) => (
              <div
                key={index}
                className="font-bold m-0 relative cursor-pointer border border-borderColor"
              >
                {item?.image?.length ? (
                  <Image
                    src={item?.image[0]?.url}
                    className="fluid-img "
                    alt="portfolio img"
                    width={1910}
                    height={920}
                  />
                ) : (
                  <div className="flex flex-col justify-center w-full h-full px-10 text-center min-h-[200px]">
                    <h3 className="font-bold mt-2.5 uppercase text-grayTextColor">
                      {item?.title}
                    </h3>
                    <p className="text-grayTextColor">{item?.subtitle}</p>
                  </div>
                )}

                <div
                  className="absolute inset-0 flex flex-col justify-center bg-[#eb5424] w-full h-full px-10 text-center opacity-0 transition-opacity duration-400 ease-in-out transform scale-95 hover:opacity-80 hover:scale-100"
                  onClick={() => handleOpenModal(item?.id)}
                >
                  <h3 className="font-bold mt-2.5 uppercase text-grayTextColor text-white">
                    {item?.title}
                  </h3>
                  <p className="text-[#f1f5f9]">{item?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openModal && (
        <Modal
          handleClose={handleClose}
          isOpen={openModal}
          setOpenModal={setOpenModal}
        >
          <PortfolioModal projectId={selectedProjectId} />
        </Modal>
      )}
    </section>
  );
}
