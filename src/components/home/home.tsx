export default function HomePage() {
  return (
    <section
      id="home"
      className="section-content templatemo-home !bg-[#ffffff] "
    >
      <div className="mx-auto px-4">
        <div className="flex flex-row items-center justify-center">
          <div className="md:w-2/3 sm:w-5/6">
            <h1 className="text-[40px] md:text-[60px] font-extrabold uppercase">
              Eaysin Arafat{" "}
            </h1>
            <h2 className="text-orangeColor text-[20px] md:text-[28px] pb-5 font-semibold tracking-normal uppercase mt-[-5px]">
              Frontend Developer
            </h2>
            <p className="text-base text-black md:text-xl text-center mb-10 font-extralight">
              I am <strong>React Developer</strong>. Built highly{" "}
              <strong>Responsive</strong> and{" "}
              <strong>Performant user interfaces</strong> for complex{" "}
              <strong>Web applications </strong>
              using <strong> React</strong> and its ecosystem. Let us work
              together. Thank you.
            </p>
            <a
              href="#about"
              className="duration-500 ease-in bg-orangeColor text-white rounded-sm text-lg font-semibold py-3 px-8 hover:bg-white hover:text-orangeColor hover:border-orangeColor border border-transparent"
            >
              Lets Begin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
