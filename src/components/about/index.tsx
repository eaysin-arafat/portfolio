"use client";
import Heading from "../ui/heading/heading";
import Resume from "./resume";

export default function About() {
  return (
    <section
      id="about"
      className="section-content section-padding bg-bgColor !pb-0"
    >
      <Resume />

      <section className="pt-[50px] pb-[100px] section-container bg-bgWhiteColor">
        <div>
          <div className="text-grayTextColor py-3 pt-6">
            <Heading
              title={{ firstText: "I'm", lastText: "React Developer" }}
              className="!text-start !pb-1.5 !text-[45px]"
            />

            <h5 className="text-orangeColor text-[30px] uppercase">
              <span className="font-light">specializing in</span>{" "}
              <span className="font-medium">Frontend Development.</span>
            </h5>
          </div>
          <div className="space-y-2 text-grayTextColor">
            Proficient in leveraging React.js, TypeScript, Redux Toolkit, and
            Tailwind CSS to deliver high-performing web applications.
            Demonstrated ability to architect and implement complex frontend
            solutions while adhering to best practices.
            <p>
              Currently, I am studying clean code, data structures, algorithms,
              and backend development.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
