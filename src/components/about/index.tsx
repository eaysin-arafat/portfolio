"use client";
import Heading from "../core/heading";
import Resume from "./resume";

export default function About() {
  return (
    <section id="about" className="section-content section-padding !pb-0">
      <Resume />

      <section className="tm-about section-container">
        {/* <div></div> */}
        <div>
          <div className="text-[#303030] py-3 pt-6">
            <Heading
              title={{ firstText: "I'm", lastText: "React Developer" }}
              className="!text-start !pb-1.5 !text-[45px]"
            />

            <h5 className="text-orangeColor text-[30px] uppercase">
              <span className="font-light">specializing in</span>{" "}
              <span className="font-medium">Frontend Development.</span>
            </h5>
          </div>
          <div className="space-y-2">
            <p>
              In my initial job, I contributed to the development of various
              websites using React JS skills while working part-time at a
              company.
            </p>
            <p>
              Then I shifted to Excel Technologies Ltd., where I have been
              working and have completed several projects. For instance, the
              Healthcare Ecosystem and Helpdesk. The Healthcare Ecosystem is a
              government project that manages all health-related issues, such as
              doctors, patients, doctor-patient relationships, various
              departments, age-wise information, and UI changes based on patient
              data. The Helpdesk project generally resolves all system problems
              through role-based management. These projects utilize technologies
              like TypeScript, React JS, Redux Toolkit, RTK Query, Tailwind CSS,
              and others.
            </p>

            <p>
              Additionally, I have personal projects like an eCommerce project,
              a Hotel Management System, and a JavaScript utility library (which
              hasn&rsquo;t been published anywhere, created for enhancing
              problem-solving skills). I used Javascript in my library project,
              and JavaScript, Redux Toolkit, and Tailwind CSS in other personal
              projects.
            </p>
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
