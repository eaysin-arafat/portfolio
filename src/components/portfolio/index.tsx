"use client";

import Image from "next/image";
import Heading from "../core/heading";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { useState } from "react";

type Category = "ALL" | "REACTJS" | "NEXTJS" | "LIBRARY";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");

  // Filter the portfolio items based on the selected category
  const filteredPortfolio = portfolio.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  return (
    <section
      id="projects"
      className="section-content px-5 pb-24 section-padding bg-white"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {filteredPortfolio?.map((item, index) => (
              <Link
                href={`${item?.id}`}
                key={index}
                className="portfolio-thumb cursor-pointer border border-gray-200"
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
                  <div className="flex flex-col items-center justify-center min-h-[200px] md:h-full mt-1 text-center px-1">
                    <h3 className="portfolio-item-title">{item?.title}</h3>
                    <p>{item?.subtitle}</p>
                  </div>
                )}

                <div className="portfolio-overlay">
                  <h3 className="portfolio-item-title">{item?.title}</h3>
                  <p>{item?.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
