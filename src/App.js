import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div>
        <div
          const
          style={{
            position: "fixed",
            zIndex: 9999,
            top: "16px",
            left: "16px",
            right: "16px",
            bottom: "16px",
            pointerEvents: "none",
          }}
        ></div>
      </div>
      <div className="absolute left-0 top-0 z-20 w-full">
        <div className="mx-auto max-w-[128.8rem] overflow-hidden px-3">
          <div className="mt-7 w-full rounded-2xl border border-white border-opacity-20 bg-black-70 backdrop-blur-[26px]">
            <div
              data-name="navbar-clickarea"
              className="flex w-full items-center justify-between px-4 py-3 font-hkGothic md:rounded-3xl md:pl-8 md:pr-4"
            >
              <a
                data-name="navbar-clickarea"
                href="https://www.grahamstephan.com/"
              >
                <h3 className="text-sm md:text-[2rem]">Graham Stephan.</h3>
              </a>
              <ul className="hidden items-center gap-11 text-sm md:flex">
                <li>
                  <a
                    className="text-opacity-80"
                    href="https://www.grahamstephan.com/#project"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-opacity-80"
                    href="https://www.grahamstephan.com/newsletter"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3">
                    <a href="https://www.grahamstephan.com/">Contact Me</a>
                  </button>
                </li>
              </ul>
              <div className="block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  data-name="navbar-clickarea"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-17">
        <div className="pb-14 md:pb-[11rem]">
          <div className="mx-auto max-w-[128.8rem] overflow-hidden">
            <div
              id="contact"
              className="mx-auto flex w-full max-w-[103rem] flex-col px-4 lg:max-h-[63rem] lg:flex-row lg:px-0"
            >
              <div className="relative mt-8 flex-1 text-center">
                <img
                  src="./Graham Stephan_files/home-hero.png"
                  className="mx-auto mt-4 h-full w-full scale-125 object-cover md:mt-8"
                />
                <h1 className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 font-hkGothic text-2xl text-lime sm:text-[4.8rem] md:bottom-3">
                  Graham Stephan
                </h1>
              </div>
              <div className="relative flex flex-col rounded-3xl border border-white border-opacity-20 px-4 py-7 font-dmSans text-sm md:mx-0 md:text-lg lg:ml-10 lg:mt-[8rem] lg:w-[46rem] lg:p-7">
                <h2 className="text-[2rem] font-bold md:text-3xl">
                  Contact Me
                </h2>
                <p className="mt-3">Got any queries or partnership requests?</p>
                <form className="mt-7 flex h-full flex-col gap-4 text-[1.4rem] text-xlGrey md:text-sm">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="rounded-lg border border-white border-opacity-20 bg-slate px-5 py-3 text-xlGrey outline-none placeholder:text-xlGrey disabled:cursor-not-allowed disabled:opacity-50"
                    name="name"
                  />
                  <div className="hidden"></div>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="rounded-lg border border-white border-opacity-20 bg-slate px-5 py-3 text-xlGrey outline-none placeholder:text-xlGrey disabled:cursor-not-allowed disabled:opacity-50"
                    name="email"
                  />
                  <div className="hidden"></div>
                  <textarea
                    className="flex-1 rounded-lg border border-white border-opacity-20 bg-slate px-5 py-3 text-xlGrey outline-none placeholder:text-xlGrey disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Type your message here"
                    name="message"
                  ></textarea>
                  <div className="hidden"></div>
                  <button
                    type="submit"
                    className="font-dmSans font-bold bg-lime text-black px-6 py-3 mr-auto mt-6 rounded-lg font-bold disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div id="project" className="mx-auto mt-[9rem] max-w-[103rem] px-4">
              <h3 className="text-center font-hkGothic text-2xl">Projects</h3>
              <div className="mb-17 mt-7 flex flex-col gap-y-5 font-dmSans">
                <div className="flex w-full flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
                  <div className="relative h-[43rem] w-full overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1 md:w-3/5">
                    <img
                      src="./Graham Stephan_files/grid-1-mobile.png"
                      className="h-full w-full object-cover md:hidden"
                    />
                    <img
                      src="./Graham Stephan_files/grid-1.png"
                      className="hidden h-full w-full object-cover md:block"
                    />
                    <div className="absolute left-6 top-8 max-w-xs font-dmSans md:top-12 md:max-w-lg">
                      <p className="text-2xl font-bold md:text-4xl">Youtube</p>
                      <p className="mt-3 text-xs md:text-sm">
                        With over 5 Million subscribers, I have created this
                        channel break down everything from Real Estate to
                        Personal Finance in an easy to understand way.
                      </p>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/c/GrahamStephan"
                      >
                        <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3 mt-8 text-xs md:text-sm">
                          Subscribe 💚
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="relative h-[43rem] w-full overflow-clip rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1 md:w-2/5">
                    <div className="w-full">
                      <img
                        src="./Graham Stephan_files/grid-2.png"
                        className="mx-auto -mt-17 w-full"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-midGrey p-6 sm:top-2/3 md:top-1/2 lg:top-[55%]">
                      <div className="flex h-full flex-col">
                        <p className="text-[2rem] font-bold md:text-2xl">
                          Real Estate Agent Academy
                        </p>
                        <p className="mt-3 text-[1.6rem]">
                          From someone who has
                          <span className="font-bold">
                            sold $130M+ real estate.
                          </span>
                        </p>
                        <a
                          className="mt-auto"
                          href="https://the-real-estate-agent-academy.teachable.com/p/the-real-estate-agent-academy"
                        >
                          <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3 mr-auto mt-auto text-xs md:text-sm">
                            Enroll Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
                  <div className="relative w-full overflow-hidden rounded-3xl bg-midGrey pt-6 transition-transform duration-300 ease-out hover:-translate-y-1 md:w-1/3">
                    <p className="px-6 font-dmSans text-[2rem] font-bold leading-relaxed md:text-2xl">
                      The Iced Coffee Hour Podcast
                    </p>
                    <p className="mt-3 px-6 text-[1.4rem] leading-relaxed">
                      The Iced Coffee Hour was created to learn from people's
                      unique perspective in life and how they got to where they
                      are now. Each week we interview a new entrepreneur,
                      investor, or creator as we break down their path to
                      success, as well as their personal finance habits
                    </p>
                    <div className="">
                      <img
                        src="./Graham Stephan_files/grid-3-mobile.png"
                        className="mx-auto block w-full md:hidden md:w-auto"
                      />
                      <img
                        src="./Graham Stephan_files/grid-3.png"
                        className="mx-auto hidden w-full md:block md:w-auto"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-3/4 bg-gradient-to-b from-transparent to-midGrey md:via-transparent"></div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/c/TheIcedCoffeeHour/featured"
                    >
                      <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3 absolute bottom-6 left-6 text-xs md:text-sm">
                        Subscribe Now
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-1 flex-col gap-y-5">
                    <div className="flex w-full flex-1 flex-col-reverse overflow-hidden rounded-3xl bg-midGrey transition-transform duration-300 ease-out hover:-translate-y-1 md:flex-row">
                      <div className="relative flex flex-1 flex-col p-6">
                        <p className="text-lg font-bold md:text-2xl">
                          Bank Roll Coffee
                        </p>
                        <p className="mt-3 text-[1.4rem] leading-relaxed md:max-w-[32rem]">
                          The average millennial spends more money on coffee
                          than they do on retirement. Bankroll Coffee is my way
                          to bring you that same cost-saving cup of coffee, at
                          the most competitive price, shipped right to your
                          door!
                        </p>
                        <a
                          target="_blank"
                          href="https://www.bankrollcoffee.com/"
                        >
                          <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3 mr-auto mt-5 text-xs md:absolute md:bottom-6 md:left-6 md:mt-0 md:text-sm">
                            Check it Out
                          </button>
                        </a>
                      </div>
                      <div>
                        <img
                          src="./Graham Stephan_files/grid-4-backup.png"
                          className="w-full md:hidden md:h-full md:w-auto"
                        />
                        <img
                          src="./Graham Stephan_files/grid-4.png"
                          className="hidden w-full md:block md:h-full md:w-auto"
                        />
                      </div>
                    </div>
                    <div className="relative flex min-h-[36.5rem] w-full flex-1 overflow-hidden rounded-3xl bg-midGrey transition-transform duration-300 ease-out hover:-translate-y-1">
                      <div className="relative z-[1] mx-6 mt-6 flex flex-1 flex-col md:ml-[5rem] md:mt-14">
                        <p className="text-lg font-bold md:text-2xl">
                          Graham's Newsletter
                        </p>
                        <p className="mt-3 max-w-[20rem] text-[1.4rem] leading-relaxed md:max-w-[29rem]">
                          Graham's newsletter is my way of sharing actionable
                          ideas about real estate, investing, and personal
                          finance to help you in your journey toward financial
                          success.
                        </p>
                        <a href="https://www.grahamstephan.com/newsletter">
                          <button className="font-dmSans font-bold bg-lime text-black rounded-xl px-6 py-3 mr-auto mt-11 text-xs md:text-sm">
                            Subscribe
                          </button>
                        </a>
                      </div>
                      <div className="absolute bottom-0 right-0 sm:mb-0 md:-mr-12 lg:-mr-6 lg:scale-100">
                        <img
                          src="./Graham Stephan_files/grid-5.png"
                          className="hidden md:block"
                        />
                        <img
                          src="./Graham Stephan_files/grid-5-mobile.png"
                          className="block md:hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 px-4">
              <h3 className="text-center font-hkGothic text-2xl">
                Featured On
              </h3>
              <div className="mt-7 flex w-full flex-col gap-y-5 md:flex-row md:gap-x-6 md:gap-y-0">
                <a
                  href="https://www.businessinsider.com/youtuber-graham-stephan-launching-bankroll-coffee-startup-costs-earnings-interview-2021-9"
                  target="_blank"
                  className="group flex-1"
                >
                  <div className="flex min-h-[17.2rem] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl bg-midGrey">
                    <div className="flex flex-1 items-center justify-center md:group-hover:hidden">
                      <img src="./Graham Stephan_files/business-insider.png" />
                    </div>
                    <div className="flex h-12 w-full items-center justify-center space-x-2 border-t border-lightGrey font-dmSans text-sm font-bold text-white transition-opacity duration-300 md:hidden md:border-none md:text-[2rem] md:text-lime md:opacity-0 md:group-hover:flex md:group-hover:opacity-100">
                      <p className="mt-2">Go to the article</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.businessinsider.com/youtuber-graham-stephan-launching-bankroll-coffee-startup-costs-earnings-interview-2021-9"
                  target="_blank"
                  className="group flex-1"
                >
                  <div className="flex min-h-[17.2rem] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl bg-midGrey">
                    <div className="flex flex-1 items-center justify-center md:group-hover:hidden">
                      <img src="./Graham Stephan_files/cnbc.png" />
                    </div>
                    <div className="flex h-12 w-full items-center justify-center space-x-2 border-t border-lightGrey font-dmSans text-sm font-bold text-white transition-opacity duration-300 md:hidden md:border-none md:text-[2rem] md:text-lime md:opacity-0 md:group-hover:flex md:group-hover:opacity-100">
                      <p>Go to the article</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.forbes.com/sites/jrose/2020/10/28/millennial-cracks-youtube-algorithm---makes-18-million-in-2020-so-far/?sh=1a71c60e714b"
                  target="_blank"
                  className="group flex-1"
                >
                  <div className="flex min-h-[17.2rem] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl bg-midGrey">
                    <div className="flex flex-1 items-center justify-center md:group-hover:hidden">
                      <img src="./Graham Stephan_files/forbes.png" />
                    </div>
                    <div className="flex h-12 w-full items-center justify-center space-x-2 border-t border-lightGrey font-dmSans text-sm font-bold text-white transition-opacity duration-300 md:hidden md:border-none md:text-[2rem] md:text-lime md:opacity-0 md:group-hover:flex md:group-hover:opacity-100">
                      <p>Go to the article</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portal-target"></div>
      <div className="bg-lightGrey">
        <div className="mx-auto max-w-[128.8rem] overflow-hidden">
          <div className="md:spac-y-0 flex h-[15rem] flex-col items-center justify-center space-y-4 px-4 md:h-[10rem] md:flex-row md:justify-between">
            <p className="font-dmSans text-md font-bold">Graham Stephan</p>
            <div className="flex space-x-4 text-white">
              <a href="https://x.com/grahamstephan?s=11" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="19px"
                  height="18px"
                  stroke="currentColor"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/grahamstephan"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M17.6332 0C18.3162 0 18.9189 0.602679 18.9189 1.32589V16.7143C18.9189 17.4375 18.3162 18 17.6332 18H2.16448C1.48144 18 0.918945 17.4375 0.918945 16.7143V1.32589C0.918945 0.602679 1.48144 0 2.16448 0H17.6332ZM6.34305 15.4286V6.87054H3.69126V15.4286H6.34305ZM5.01715 5.66518C5.8609 5.66518 6.54394 4.98214 6.54394 4.13839C6.54394 3.29464 5.8609 2.57143 5.01715 2.57143C4.13323 2.57143 3.45019 3.29464 3.45019 4.13839C3.45019 4.98214 4.13323 5.66518 5.01715 5.66518ZM16.3475 15.4286V10.7277C16.3475 8.4375 15.8252 6.62946 13.1332 6.62946C11.8475 6.62946 10.9636 7.35268 10.602 8.03572H10.5618V6.87054H8.03054V15.4286H10.6823V11.2098C10.6823 10.0848 10.8832 9 12.2895 9C13.6555 9 13.6555 10.2857 13.6555 11.25V15.4286H16.3475Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCV6KDgJskWaEckne5aPA0aQ"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                  fill="none"
                >
                  <path
                    d="M25.9971 2.85938C26.5596 4.82812 26.5596 9.04688 26.5596 9.04688C26.5596 9.04688 26.5596 13.2188 25.9971 15.2344C25.7158 16.3594 24.8252 17.2031 23.7471 17.4844C21.7314 18 13.7627 18 13.7627 18C13.7627 18 5.74707 18 3.73145 17.4844C2.65332 17.2031 1.7627 16.3594 1.48145 15.2344C0.918945 13.2188 0.918945 9.04688 0.918945 9.04688C0.918945 9.04688 0.918945 4.82812 1.48145 2.85938C1.7627 1.73438 2.65332 0.84375 3.73145 0.5625C5.74707 0 13.7627 0 13.7627 0C13.7627 0 21.7314 0 23.7471 0.5625C24.8252 0.84375 25.7158 1.73438 25.9971 2.85938ZM11.1377 12.8438L17.7939 9.04688L11.1377 5.25V12.8438Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/gpstephan/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.57965 4.35938C12.1109 4.35938 14.2002 6.44866 14.2002 8.97991C14.2002 11.5513 12.1109 13.6004 9.57965 13.6004C7.00822 13.6004 4.95912 11.5513 4.95912 8.97991C4.95912 6.44866 7.00822 4.35938 9.57965 4.35938ZM9.57965 11.9933C11.227 11.9933 12.5529 10.6674 12.5529 8.97991C12.5529 7.33259 11.227 6.0067 9.57965 6.0067C7.89215 6.0067 6.56626 7.33259 6.56626 8.97991C6.56626 10.6674 7.93233 11.9933 9.57965 11.9933ZM15.4457 4.19866C15.4457 4.80134 14.9636 5.28348 14.3609 5.28348C13.7582 5.28348 13.2761 4.80134 13.2761 4.19866C13.2761 3.59598 13.7582 3.11384 14.3609 3.11384C14.9636 3.11384 15.4457 3.59598 15.4457 4.19866ZM18.4993 5.28348C18.5796 6.77009 18.5796 11.2299 18.4993 12.7165C18.4189 14.1629 18.0975 15.4085 17.0529 16.4933C16.0082 17.5379 14.7225 17.8594 13.2761 17.9397C11.7895 18.0201 7.32965 18.0201 5.84305 17.9397C4.39662 17.8594 3.15108 17.5379 2.06626 16.4933C1.02162 15.4085 0.700195 14.1629 0.619838 12.7165C0.539481 11.2299 0.539481 6.77009 0.619838 5.28348C0.700195 3.83705 1.02162 2.55134 2.06626 1.5067C3.15108 0.462054 4.39662 0.140625 5.84305 0.0602679C7.32965 -0.0200893 11.7895 -0.0200893 13.2761 0.0602679C14.7225 0.140625 16.0082 0.462054 17.0529 1.5067C18.0975 2.55134 18.4189 3.83705 18.4993 5.28348ZM16.5707 14.2835C17.0529 13.1183 16.9323 10.3058 16.9323 8.97991C16.9323 7.6942 17.0529 4.8817 16.5707 3.67634C16.2493 2.91295 15.6466 2.27009 14.8832 1.98884C13.6779 1.5067 10.8654 1.62723 9.57965 1.62723C8.25376 1.62723 5.44126 1.5067 4.27608 1.98884C3.47251 2.31027 2.86984 2.91295 2.54841 3.67634C2.06626 4.8817 2.1868 7.6942 2.1868 8.97991C2.1868 10.3058 2.06626 13.1183 2.54841 14.2835C2.86984 15.0871 3.47251 15.6897 4.27608 16.0112C5.44126 16.4933 8.25376 16.3728 9.57965 16.3728C10.8654 16.3728 13.6779 16.4933 14.8832 16.0112C15.6466 15.6897 16.2895 15.0871 16.5707 14.2835Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <script
        src="./Graham Stephan_files/webpack-174b3f4eef28df0e.js.download"
        crossorigin=""
        async=""
      ></script>
      <script>
        (self.__next_f = self.__next_f || []).push([0]); self.__next_f.push([2,
        null]);
      </script>
      <script>self.__next_f.push([1, "d:null\n"]);</script>
      <div style={{ all: "initial !important" }}>
        <template shadowrootmode="open">
          <div>
            <div data-v-58e693c1=""></div>
          </div>
        </template>
      </div>
      <div
        id="shimeji-workArea"
        style={{
          position: "fixed",
          background: "transparent",
          zIndex: 2147483643,
          width: "100vw",
          height: "100vh",
          left: "0px",
          top: "0px",
          transform: "translate(0px, 0px)",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}

export default App;
