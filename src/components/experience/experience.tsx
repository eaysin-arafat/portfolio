import Heading from "../core/heading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-content section-container section-padding bg-bgColor pb-36"
    >
      <Heading title={{ lastText: "Experience" }} />

      <div className="grid">
        <div className="rounded-[2px] pb-10 lg:pb-20 lg:py-5 px-0 lg:px-10 transition-all ease-in duration-500 ">
          <h2 className="uppercase text-orangeColor text-3xl font-light tracking-wider">
            Frontend Developer
          </h2>

          <h4 className="py-1 text-2xl text-black font-medium">
            Freelance Corner,{" "}
            <span className="font-normal text-lg">
              Natun Bazar, Sadar, Mymensingh
            </span>
            &nbsp;
            <span className="font-semibold text-lg">
              (October 2022 - April 2023)
            </span>
          </h4>

          <p className="tracking-wider text-base">
            I utilized my expertise in front-end development to contribute
            significantly to multiple websites. These websites were constructed
            using React JS, a framework renowned for its versatility and
            efficiency. My role involved implementing various features and
            ensuring a seamless user experience across these platforms.
          </p>
        </div>

        <div className="rounded-[2px] px-0 lg:px-10 transition-all ease-in duration-500 ">
          <h2 className="uppercase text-orangeColor text-3xl font-light tracking-wider">
            React Developer
          </h2>

          <h4 className="py-1 text-2xl text-black font-medium">
            Excel Technologies Ltd.,{" "}
            <span className="font-normal text-lg">
              House #13, Road #07 Block #F, Banani Dhaka-1213
            </span>
            &nbsp;
            <span className="font-semibold text-lg">
              (October 2022 - April 2023)
            </span>
          </h4>

          <p className="tracking-wider text-base">
            Ive engaged in frontend development across multiple projects,
            employing React.js as the primary framework. Within these endeavors,
            Ive played a pivotal role in contributing to various website
            projects, leveraging my expertise in React.js to enhance
            functionality and user experience. My focus remains steadfast on
            delivering high-quality UI/UX designs while optimizing performance
            for optimal user satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

// import Heading from "./core/heading";

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="section-container section-padding bg-bgColor"
//     >
//       <Heading title={{ lastText: "Experience" }} />

//       <div className="grid gap-10">
//         <div className="border border-[#666] rounded-[2px] py-14 px-10 transition-all ease-in duration-500 hover:border hover:border-orangeColor">
//           <h2 className="uppercase text-orangeColor text-lg font-bold tracking-wider">
//             Frontend Developer
//           </h2>

//           <h4 className="py-1 text-black font-medium">
//             Freelance Corner,{" "}
//             <span className="font-normal">Natun Bazar, Sadar, Mymensingh</span>{" "}
//             &nbsp;
//             <span className="font-semibold">(October 2022 - April 2023)</span>
//           </h4>

//           <p>
//             I utilized my expertise in front-end development to contribute
//             significantly to multiple websites. These websites were constructed
//             using React JS, a framework renowned for its versatility and
//             efficiency. My role involved implementing various features and
//             ensuring a seamless user experience across these platforms.
//           </p>
//         </div>

//         <div className="border border-[#666] rounded-[2px] py-14 px-10 transition-all ease-in duration-500 hover:border hover:border-orangeColor">
//           <h2 className="uppercase text-orangeColor text-lg font-bold tracking-wider">
//             React Developer
//           </h2>

//           <h4 className="py-1 text-black font-medium">
//             Excel Technologies Ltd.,{" "}
//             <span className="font-normal">
//               House #13, Road #07 Block #F, Banani Dhaka-1213
//             </span>{" "}
//             &nbsp;
//             <span className="font-semibold">(October 2022 - April 2023)</span>
//           </h4>

//           <p>
//             Ive engaged in frontend development across multiple projects,
//             employing React.js as the primary framework. Within these endeavors,
//             Ive played a pivotal role in contributing to various website
//             projects, leveraging my expertise in React.js to enhance
//             functionality and user experience. My focus remains steadfast on
//             delivering high-quality UI/UX designs while optimizing performance
//             for optimal user satisfaction.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
