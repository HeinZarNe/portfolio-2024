export const EventTimeline = () => {
  return (
    <div className="max-w-screen-md">
      <ol class="relative border-s  border-gray-700">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none  text-gray-500">
            March 2020
          </time>
          <h3 class="text-lg font-semibold  text-white">Covid 19 Pandemic</h3>
          <p class="mb-4 text-base font-normal text-gray-500 ">
            When Covid started, school closed, and I didn't know what to do. I
            played games all day for a week straight, but life felt meaningless.
            I wanted to do something meaningful.
          </p>
          <a
            href="https://www.flandersinvestmentandtrade.com/export/nieuws/coronavirus-situation-myanmar"
            class="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium  border  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700   border-gray-600  focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              class="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none  text-gray-500">
            March 2023
          </time>
          <h3 class="text-lg font-semibold  text-white">
            Started Learning Programming
          </h3>
          <p class="text-base font-normal text-gray-500 ">
            I had an old laptop from my dad, which I used to watch Netflix.
            Bored during the pandemic, I searched for part-time online jobs and
            discovered programming. With nothing else to do, I dived in,
            learning from free YouTube classes, the Mimo Code app, and
            FreeCodeCamp, where I even earned a certificate. I also joined a
            free web development class in my town, where I met some of the best
            colleagues (bros) to work with.
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none  text-gray-500">
            Jan 2021
          </time>
          <h3 class="text-lg font-semibold  text-white">
            Founded CoolAsCode with Teammates
          </h3>
          <p class="text-base font-normal text-gray-500 ">
            From that class, I teamed up with three other students to create a
            website called Unit Calculator.
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none  text-gray-500">
            Later 2021
          </time>
          <h3 class="text-lg font-semibold  text-white">
            Began First Freelance Project
          </h3>
          <p class="text-base font-normal text-gray-500 ">
            From that class, I teamed up with three other students to create a
            website called Unit Calculator.
          </p>
        </li>
      </ol>
    </div>
  );
};
