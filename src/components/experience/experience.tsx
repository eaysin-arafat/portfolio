import { experience } from "@/data/experience";
import Heading from "../core/heading/heading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-content section-container section-padding bg-bgColor pb-36"
    >
      <Heading title={{ lastText: "Experience" }} />

      <div className="grid">
        {experience?.map((item) => (
          <div
            key={item?.id}
            className="rounded-[2px] pb-10 lg:pb-20 lg:py-5 px-0 lg:px-10 transition-all ease-in duration-500 "
          >
            <h2 className="uppercase text-orangeColor text-3xl font-light tracking-wider">
              {item?.role}
            </h2>

            <h4 className="py-1 text-2xl text-black font-medium text-textColor">
              {item?.company},{" "}
              <span className="font-normal text-lg">{item?.location}</span>
              &nbsp;
              <span className="font-semibold text-lg">({item?.date})</span>
            </h4>

            <p className="tracking-wider text-base text-grayTextColor">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
