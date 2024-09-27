import Heading from "../ui/heading/heading";

export default function Work() {
  return (
    <section
      id="work"
      className="section-container section-padding bg-[#f4f4f4]"
    >
      <Heading title={{ lastText: "Work" }} />

      <div className="border border-[#666] rounded-[2px] text-center py-14 px-10 transition-all ease-in duration-500 hover:border hover:border-orangeColor">
        <h3 className="uppercase text-orangeColor text-lg font-bold tracking-wider">
          Web Development
        </h3>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet. Dolore magna.
        </p>
      </div>
    </section>
  );
}
