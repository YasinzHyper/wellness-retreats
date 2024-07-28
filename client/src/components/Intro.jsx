export default function Intro() {
  return (
    <section id="intro" className="relative bg-[url(https://hips.hearstapps.com/hmg-prod/images/shawellness-1606923821.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Welcome to
            <strong className="block font-extrabold text-emerald-600">
              {" "}
              Wellness Retreats{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            We offer relaxing and stress-free wellness retreats where you can
            unwind, rejuvenate and connect with nature and yourself.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-emerald-600 shadow hover:text-emerald-700 focus:outline-none focus:ring active:text-emerald-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
