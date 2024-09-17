import { blogs } from "@/data/blog";
import Image from "next/image";
import Heading from "../core/heading/heading";

export default function Blog() {
  return (
    <section
      id="blogs"
      className="section-content section-container section-padding bg-bgWhiteColor"
    >
      <Heading title={{ lastText: "Blogs" }} className="md:pb-36" />

      <div className="grid md:grid-cols-2 2xl:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <div className="relative" key={index}>
            <Image
              src={blog?.cover_image}
              className="fluid-img object-fill"
              alt="portfolio img"
              height={250}
              width={439}
            />
            <div className="absolute top-0 p-6 pb-8 flex flex-col justify-between h-full w-full overlay z-0">
              <div className="text-white">
                <h3 className="text-xs flex font-semibold">
                  {blog?.category}/{" "}
                  <span className="font-light">&nbsp;{blog?.date}</span>
                </h3>

                <p className="font-base text-sm pt-2.5">{blog?.title}</p>
              </div>

              <div>
                <a
                  href={blog?.blogUrl}
                  target="_blank"
                  className="main-btn font-medium"
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
