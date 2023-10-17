import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center items-start bg-white flex flex-col">
      <div className="bg-white self-stretch flex w-full flex-col pb-10 max-md:max-w-full">
        <div className="justify-between items-center bg-cyan-950 z-[1] flex mt-0 w-full flex-col px-5 py-8 max-md:max-w-full max-md:mt-0">
          <div className="self-center flex w-full max-w-[1200px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-green-500 text-4xl font-semibold leading-10 self-center w-[177px] my-auto">
              <span className="text-white">Ever</span>
              <span className="text-green-500">Green</span>
            </div>
            <div className="justify-between items-start self-center flex w-[445px] max-w-full gap-5 my-auto max-md:flex-wrap max-md:justify-center">
              <div className="text-white text-base font-semibold leading-6 self-stretch">
                Home
              </div>
              <div className="text-white text-base font-semibold leading-6 self-stretch">
                About Us
              </div>
              <div className="text-white text-base font-semibold leading-6 self-stretch">
                Our Service
              </div>
              <div className="text-white text-base font-semibold leading-6 self-stretch">
                Blog
              </div>
              <div className="items-start self-stretch flex justify-between gap-2">
                <div className="text-white text-base font-semibold leading-6 self-stretch">
                  Pages
                </div>
              </div>
            </div>
            <div className="justify-center items-center bg-green-500 self-stretch flex w-[198px] max-w-full flex-col px-5 py-4 rounded-[6.25rem]">
              <div className="text-white text-center text-xl font-semibold leading-6 self-center">
                Login
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1342px] px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full">
              <div className="items-center bg-white flex grow flex-col w-full mx-auto max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="hero.jpg"
                  className="aspect-[0.65] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-52">
                <div className="justify-center items-start flex w-[639px] max-w-full flex-col">
                  <div className="self-stretch text-green-500 text-8xl font-bold leading-[6.875rem] w-full max-md:max-w-full">
                    <span className="text-[rgba(4,58,58,1)]">Crafting </span>
                    <span className="text-green-500">Green </span>
                    <span className="text-[rgba(4,58,58,1)]">Masterpieces</span>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
                    Vivamus ut sapien et ex volutpat tincidunt eget at felis
                    vivamus hendrerit suscipit egestas consectetur adipiscing
                    elit.
                  </div>
                </div>
                <div className="items-start flex w-[447px] max-w-full justify-between gap-5 mt-14 max-md:flex-wrap">
                  <div className="items-center bg-green-500 self-stretch flex w-[204px] max-w-full flex-col px-5 py-6 rounded-[6.25rem]">
                    <div className="text-white text-xl font-semibold leading-6 self-center w-[124px] max-w-full">
                      Get Started
                    </div>
                  </div>
                  <div className="items-center bg-cyan-950 self-stretch flex w-[203px] max-w-full flex-col px-5 py-6 rounded-[6.25rem]">
                    <div className="text-white text-xl font-semibold leading-6 self-center w-[123px] max-w-full">
                      Learn More
                    </div>
                  </div>
                </div>
                <div className="justify-between items-start flex w-[542px] max-w-full gap-5 mt-16 max-md:flex-wrap">
                  <div className="justify-center items-center self-center flex flex-col grow shrink-0 basis-auto my-auto">
                    <img
                      loading="lazy"
                      srcSet="people.jpg"
                      className="aspect-[3.83] object-cover object-center w-full justify-center items-center overflow-hidden self-stretch grow"
                    />
                  </div>
                  <div className="items-start self-stretch flex flex-col w-[242px]">
                    <div className="self-stretch text-cyan-950 text-5xl font-semibold leading-[3.5rem] w-full">
                      50K+
                    </div>
                    <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full">
                      Joined in already
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-center self-center flex w-[746px] max-w-full flex-col mt-10">
          <div className="self-stretch text-green-500 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-[rgba(4,58,58,1)]">Landscape Design </span>
            <span className="text-green-500">Beyond Expectations</span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit.
          </div>
        </div>
        <div className="justify-center items-center bg-white self-center flex w-full max-w-[1244px] flex-col mt-20 rounded-3xl max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="about.jpg"
            className="aspect-[3.46] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full"
          />
        </div>
        <div className="justify-between items-center bg-cyan-950 self-center flex w-full max-w-[1244px] flex-col mb-10 px-5 py-10 rounded-none max-md:max-w-full">
          <div className="self-center flex w-full max-w-[1116px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="justify-center items-center self-stretch flex flex-col w-[126px]">
              <div className="self-stretch text-green-500 text-center text-5xl font-semibold leading-[3.5rem] w-full">
                <span className="text-white">13</span>
                <span className="text-green-500">+</span>
              </div>
              <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-2">
                Years Experience
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col w-[97px]">
              <div className="self-stretch text-green-500 text-center text-5xl font-semibold leading-[3.5rem] w-full">
                <span className="text-white">13K</span>
                <span className="text-green-500">+</span>
              </div>
              <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-2">
                Product
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col w-[120px]">
              <div className="self-stretch text-green-500 text-center text-5xl font-semibold leading-[3.5rem] w-full">
                <span className="text-white">7K</span>
                <span className="text-green-500">+</span>
              </div>
              <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-2">
                Satisfied Clients
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col w-[158px]">
              <div className="self-stretch text-green-500 text-center text-5xl font-semibold leading-[3.5rem] w-full">
                <span className="text-white">124</span>
                <span className="text-green-500">+</span>
              </div>
              <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-2">
                Local Team Members
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1244px] my-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[63%] max-md:w-full">
              <div className="flex grow flex-col w-[758px] max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-start self-stretch flex flex-col w-full max-md:max-w-full">
                  <div className="self-stretch text-green-500 text-7xl font-semibold leading-[4.5rem] w-full">
                    <span className="text-[rgba(4,58,58,1)]">Why Choose </span>
                    <span className="text-green-500">Us?</span>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    facilisis eleifend quam, non efficitur nisi mattis quis.
                    Vivamus scelerisque orci nec erat cursus, sed facilisis
                    velit porttitor. Vestibulum ligula sapien, cursus sed
                    consectetur nec, tincidunt ac metus. Vivamus accumsan diam
                    eget auctor.
                  </div>
                </div>
                <div className="justify-center items-start self-stretch flex grow flex-col mt-20 max-md:max-w-full">
                  <div className="self-stretch max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[11%] max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="mark.svg"
                          className="aspect-square object-cover object-center w-20 fill-green-500 overflow-hidden shrink-0 my-auto max-md:mt-12"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[89%] ml-5 max-md:w-full">
                        <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-4">
                          <div className="items-start flex w-[662px] max-w-full flex-col">
                            <div className="self-stretch text-cyan-950 text-3xl font-semibold leading-8 w-full max-md:max-w-full">
                              Sustainable Practices
                            </div>
                            <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-2 max-md:max-w-full">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed facilisis eleifend quam, non efficitur
                              nisi mattis quis. Vivamus scelerisque orci nec
                              erat cursus, sed facilisis velit porttitor.
                              Vestibulum ligula sapien, cursus sed consectetur.
                            </div>
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-6">
                            Read More...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch mt-10 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[11%] max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="mark.svg"
                          className="aspect-square object-cover object-center w-20 fill-green-500 overflow-hidden shrink-0 my-auto max-md:mt-12"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[89%] ml-5 max-md:w-full">
                        <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-4">
                          <div className="items-start flex w-[662px] max-w-full flex-col">
                            <div className="self-stretch text-cyan-950 text-3xl font-semibold leading-8 w-full max-md:max-w-full">
                              Licensed and Insured
                            </div>
                            <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-2 max-md:max-w-full">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed facilisis eleifend quam, non efficitur
                              nisi mattis quis. Vivamus scelerisque orci nec
                              erat cursus, sed facilisis velit porttitor.
                              Vestibulum ligula sapien, cursus sed consectetur.
                            </div>
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch mt-10 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[11%] max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="mark.svg"
                          className="aspect-square object-cover object-center w-20 fill-green-500 overflow-hidden shrink-0 my-auto max-md:mt-12"
                        />
                      </div>
                      <div className="flex flex-col items-stretch w-[89%] ml-5 max-md:w-full">
                        <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-4">
                          <div className="items-start flex w-[662px] max-w-full flex-col">
                            <div className="self-stretch text-cyan-950 text-3xl font-semibold leading-8 w-full max-md:max-w-full">
                              Local Knowledge
                            </div>
                            <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-2 max-md:max-w-full">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed facilisis eleifend quam, non efficitur
                              nisi mattis quis. Vivamus scelerisque orci nec
                              erat cursus, sed facilisis velit porttitor.
                              Vestibulum ligula sapien, cursus sed consectetur
                            </div>
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full">
              <div className="justify-center items-center bg-neutral-600 flex grow flex-col w-full mx-auto rounded-2xl max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="whyus.jpg"
                  className="aspect-[0.57] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-start self-center flex w-[746px] max-w-full flex-col mt-10">
          <div className="self-stretch text-green-500 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-[rgba(4,58,58,1)]">Our </span>
            <span className="text-green-500">Service </span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit.
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Lawn Care
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Free Consultations
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Irrigation Systems
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Seasonal Maintenance
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] my-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Weater Features
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                    <div className="justify-center items-start bg-cyan-950 z-[1] flex w-40 max-w-full flex-col -mr-10 my-auto p-4 rounded-3xl max-md:mt-12">
                      <img
                        loading="lazy"
                        srcSet="mowing.png"
                        className="aspect-square object-cover object-center w-10 overflow-hidden shrink-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                    <div className="items-center shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full">
                      <div className="justify-center items-start flex w-[466px] max-w-full flex-col mr-1">
                        <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-cyan-950 text-3xl font-semibold leading-8 max-w-[304px] grow shrink-0 basis-auto">
                            Gardeners
                          </div>
                          <div className="text-green-500 text-base font-medium leading-6 underline mt-2">
                            Read More...
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4 max-md:max-w-full">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor. Proin iaculis metus vel condimentum
                          tincidunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-start self-center flex w-[625px] max-w-full flex-col mt-10">
          <div className="self-stretch text-cyan-950 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-green-500">Pricing</span>
            <span className="text-[rgba(4,58,58,1)]"> Table</span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
            volutpat tincidunt eget at felisioj,
          </div>
        </div>
        <div className="self-center w-full max-w-[972px] mt-20 mb-9 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="items-center flex flex-col my-auto max-md:max-w-full max-md:mt-12">
                <div className="justify-center items-center bg-green-500 self-center flex w-96 max-w-full flex-col px-5 py-4 rounded-3xl">
                  <div className="text-white text-center text-xl font-semibold leading-6 self-center w-[164px] max-w-full">
                    Package 1
                  </div>
                </div>
                <div className="items-start self-stretch flex grow flex-col max-md:max-w-full">
                  <div className="items-start self-stretch border-b-[color:var(--White,#FFF)] bg-cyan-950 flex flex-col px-5 py-10 rounded-t-3xl border-b border-solid max-md:max-w-full">
                    <div className="justify-end items-start self-center flex w-[386px] max-w-full flex-col">
                      <div className="self-stretch text-white text-3xl font-semibold leading-8 w-full">
                        Standard Plan
                      </div>
                      <div className="self-stretch text-white text-7xl font-semibold leading-[4.5rem] w-full mt-4">
                        $20.00
                      </div>
                      <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                        /Per month
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-3xl items-start self-stretch bg-cyan-950 flex grow flex-col px-5 py-10 rounded-none max-md:max-w-full">
                    <div className=" justify-center items-center self-center flex w-[386px] max-w-full flex-col">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="items-start self-stretch flex justify-between gap-4">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Initial Consultation
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Labor Costs
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Materials and Plants
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Equipment and Machinery
                          </div>
                        </div>
                      </div>
                      <div className="justify-center items-center self-stretch bg-white flex w-full grow flex-col mt-14 px-5 py-6 rounded-[6.25rem]">
                        <div className="text-cyan-950 text-center text-xl font-semibold leading-6 self-center w-[306px] max-w-full">
                          Purchase
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="items-center flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-center bg-cyan-950 self-center flex w-96 max-w-full flex-col px-5 py-4 rounded-3xl">
                  <div className="text-white text-center text-xl font-semibold leading-6 self-center w-[164px] max-w-full">
                    Package 2
                  </div>
                </div>
                <div className="items-start self-stretch flex grow flex-col max-md:max-w-full">
                  <div className="items-start self-stretch border-b-[color:var(--White,#FFF)] rounded-t-3xl  bg-green-500 flex flex-col px-5 py-10 border-b-2 border-solid max-md:max-w-full">
                    <div className="justify-end items-start self-center flex w-[386px] max-w-full flex-col">
                      <div className="self-stretch text-white text-3xl font-semibold leading-8 w-full">
                        Premium Plan
                      </div>
                      <div className="self-stretch text-white text-7xl font-semibold leading-[4.5rem] w-full mt-4">
                        $90.00
                      </div>
                      <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                        /Per month
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-3xl  items-start self-stretch bg-green-500 flex grow flex-col px-5 py-10 rounded-none max-md:max-w-full">
                    <div className="justify-center items-center self-center flex w-[386px] max-w-full flex-col">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="items-start self-stretch flex justify-between gap-4">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Initial Consultation
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Labor Costs
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Materials and Plants
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Equipment and Machinery
                          </div>
                        </div>
                        <div className="items-start self-stretch flex justify-between gap-4 mt-8">
                          <img
                            loading="lazy"
                            srcSet="check.svg"
                            className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                          />
                          <div className="text-white text-base font-medium leading-6 self-stretch max-w-[346px] grow shrink-0 basis-auto">
                            Permits and Inspection Fees
                          </div>
                        </div>
                      </div>
                      <div className="justify-center items-center self-stretch bg-white flex w-full grow flex-col mt-14 px-5 py-6 rounded-[6.25rem]">
                        <div className="text-green-500 text-center text-xl font-semibold leading-6 self-center w-[306px] max-w-full">
                          Purchase
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-start self-center flex w-[746px] max-w-full flex-col mt-10">
          <div className="self-stretch text-green-500 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-[rgba(4,58,58,1)]">EverGreen </span>
            <span className="text-green-500">Gallery</span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit.
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
              <div className="justify-center items-center bg-neutral-600 flex w-[388px] max-w-full grow flex-col mx-auto rounded-2xl max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="example.jpg"
                  className="aspect-square object-cover rounded-2xl object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
              <div className="justify-center items-center bg-green-500 flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-10 rounded-2xl max-md:mt-10">
                <div className="justify-center items-start self-stretch flex flex-col w-full mt-20 mb-12">
                  <div className="self-stretch text-white text-center text-3xl font-semibold leading-8 w-full">
                    Water Features
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas. Nunc eget congue ante.{" "}
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 underline w-full mt-4">
                    See more
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
              <div className="justify-center items-center bg-neutral-600 flex w-[388px] max-w-full grow flex-col mx-auto rounded-2xl max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="example.jpg"
                  className="aspect-square object-cover  rounded-2xl object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] my-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
              <div className="justify-center items-center bg-green-500 flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-10 rounded-2xl max-md:mt-10">
                <div className="justify-center items-start self-stretch flex flex-col w-full mt-20 mb-12 mx-1">
                  <div className="self-stretch text-white text-center text-3xl font-semibold leading-8 w-full">
                    Lawn Care
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas. Nunc eget congue ante.{" "}
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 underline w-full mt-4">
                    See more
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full ">
              <div className="justify-center items-center  bg-neutral-600 flex w-[388px] max-w-full grow flex-col mx-auto rounded-2xl max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="example.jpg"
                  className="aspect-square rounded-2xl object-cover object-center w-full overflow-hidden self-stretch grow"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
              <div className="justify-center items-center bg-green-500 flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-10 rounded-2xl max-md:mt-10">
                <div className="justify-center items-start self-stretch flex flex-col w-full ml-1 mr-0.5 mt-20 mb-12">
                  <div className="self-stretch text-white text-center text-3xl font-semibold leading-8 w-full">
                    Irrigation Systems
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 w-full mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas. Nunc eget congue ante.{" "}
                  </div>
                  <div className="self-stretch text-white text-center text-base font-medium leading-6 underline w-full mt-4">
                    See more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-start self-center flex w-[746px] max-w-full flex-col mt-10">
          <div className="self-stretch text-green-500 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-[rgba(4,58,58,1)]">Listen to what our </span>
            <span className="text-green-500">customers say</span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit.
          </div>
        </div>
        <div className="justify-center items-center content-center flex-wrap self-center flex w-full max-w-[1244px] flex-col mt-20 mb-10 max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Charlie Leuschke
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Luke Glover
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Roderick Schumm
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-10 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Brandi Boyle
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Scott Runolfsdottir
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex w-[388px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-3xl max-md:mt-10">
                  <div className="items-start self-stretch flex justify-between gap-4 mx-1">
                    <img
                      loading="lazy"
                      srcSet="testimonial.jpg"
                      className="aspect-square object-cover object-center w-14 justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="justify-center items-start self-center flex flex-col grow shrink-0 basis-auto my-auto">
                      <div className="text-cyan-950 text-xl font-semibold leading-6 w-[268px] max-w-full">
                        Claire Witting
                      </div>
                      <div className="items-start flex w-24 max-w-full gap-1 mt-2 max-md:justify-center">
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                        <img
                          loading="lazy"
                          srcSet="star.svg"
                          className="aspect-square object-cover object-center w-4 fill-amber-300 overflow-hidden shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6 mx-1">
                    Phasellus fermentum orci non nunc fermentum mattis. In
                    eleifend vehicula justo, sed pulvinar erat scelerisque vel.
                    Vestibulum eu erat elit. Etiam mattis feugiat finibus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="justify-center items-start self-center flex w-[746px] max-w-full flex-col mt-10">
          <div className="self-stretch text-green-500 text-center text-7xl font-semibold leading-[4.5rem] w-full max-md:max-w-full">
            <span className="text-[rgba(4,58,58,1)]">Frequently Asked </span>
            <span className="text-green-500">Questions</span>
          </div>
          <div className="self-stretch text-neutral-600 text-center text-base font-medium leading-6 w-full mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit.
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-stretch mx-1 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[200px]  max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[93%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[498px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          What factors influence the cost of a landscaping
                          project?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-center w-[522px] max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch  w-[200px] max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[466px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          What sets your landscaping service apart from others
                          in the area?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-center w-[522px] max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[8%] max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[466px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          How often should I schedule landscape maintenance
                          services?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-center w-[522px] max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[8%] max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[466px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          Do you provide sustainable and eco friendly
                          landscaping options?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1244px] my-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-center w-[522px] max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[8%] max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[466px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          What landscaping services do you offer?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
              <div className="justify-center items-start shadow-[18px_15px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="self-center w-[522px] max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[8%] max-md:w-full"></div>
                    <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full">
                      <div className="items-center flex grow flex-col w-[466px] max-md:max-w-full max-md:mt-4">
                        <div className="text-cyan-950 text-3xl font-semibold leading-8 self-stretch w-full">
                          Can you assist with obtaining permits for landscaping
                          projects?
                        </div>
                        <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-4">
                          Vestibulum ligula sapien, cursus sed consectetur nec,
                          tincidunt ac metus. Vivamus accumsan diam eget
                          ultricies auctor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center items-start bg-white self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1244px] my-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full">
              <div className="justify-center items-start flex flex-col w-[561px] max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-green-500 text-7xl font-semibold leading-[4.5rem] w-full">
                  <span className="text-[rgba(4,58,58,1)]">
                    Fill the Form to{" "}
                  </span>
                  <span className="text-green-500">
                    get a free consultation
                  </span>
                </div>
                <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-full mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
                  Vivamus ut sapien et ex volutpat tincidunt eget at felis
                  vivamus hendrerit.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full">
              <div className="items-start shadow-[-13px_18px_35px_0px_rgba(0,0,0,0.09)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-2xl max-md:max-w-full max-md:mt-10">
                <div className="items-start self-center flex w-[563px] max-w-full justify-between gap-5 mt-10 pb-2 max-md:flex-wrap">
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-[232px] items-start">
                    Full name
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-[291px] items-start grow basis-auto">
                    Email
                  </div>
                </div>
                <div className="items-start self-center flex w-[563px] max-w-full justify-between gap-5 mt-10 pb-2 max-md:flex-wrap">
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-[232px] items-start">
                    Telephone
                  </div>
                  <div className="self-stretch text-neutral-600 text-base font-medium leading-6 w-[291px] items-start grow basis-auto">
                    Service
                  </div>
                </div>
                <div className="self-center text-neutral-600 text-base font-medium leading-6 w-[563px] items-start max-w-full mt-10 max-md:max-w-full">
                  Message
                </div>
                <div className="justify-center items-center self-center bg-green-500 flex w-[563px] max-w-full flex-col mt-28 mb-4 px-5 py-6 rounded-[6.25rem]">
                  <div className="text-white text-center text-xl font-semibold leading-6 self-center w-[308px] max-w-full">
                    Get Strated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between items-start bg-cyan-950 self-stretch flex w-full flex-col px-5 py-10 max-md:max-w-full">
        <div className="self-center w-full max-w-[1244px] my-14 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[24%] max-md:w-full">
              <div className="items-start flex grow flex-col max-md:mt-11">
                <div className="items-start flex w-[271px] max-w-full flex-col">
                  <div className="self-stretch text-green-500 text-4xl font-semibold leading-10 w-full">
                    <span className="text-white">Ever</span>
                    <span className="text-green-500">Green</span>
                  </div>
                  <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Morbi sit amet neque tortor.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[10%] ml-5 max-md:w-full">
              <div className="items-start flex grow flex-col w-28 max-md:mt-11">
                <div className="text-white text-xl font-semibold leading-6 self-stretch w-full">
                  Quick Links
                </div>
                <div className="items-start self-stretch flex grow flex-col w-full mt-10">
                  <div className="self-stretch text-white text-base font-medium leading-6 w-full">
                    About Us
                  </div>
                  <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                    Service
                  </div>
                  <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                    Pricing
                  </div>
                  <div className="self-stretch text-white text-base font-medium leading-6 w-full mt-4">
                    Blog
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full">
              <div className="items-start flex flex-col w-[293px] max-md:mt-11">
                <div className="self-stretch text-white text-xl font-semibold leading-6 w-full">
                  Contact Us
                </div>
                <div className="items-start self-stretch flex grow flex-col mt-10">
                  <div className="items-start self-stretch flex justify-between gap-2">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    />
                    <div className="text-white text-base font-medium leading-6 self-stretch max-w-[269px] grow shrink-0 basis-auto">
                      hello@website.com
                    </div>
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-2 mt-4">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    />
                    <div className="text-white text-base font-medium leading-6 self-stretch max-w-[269px] grow shrink-0 basis-auto">
                      Riverside Building, County Hall, London SE1 7PB, United
                      Kingdom
                    </div>
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-2 mt-4">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    />
                    <div className="text-white text-base font-medium leading-6 self-stretch max-w-[269px] grow shrink-0 basis-auto">
                      451-484-5939
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full">
              <div className="items-start flex flex-col max-md:max-w-full max-md:mt-11">
                <div className="text-white text-xl font-semibold leading-6 w-[119px] max-w-full">
                  Newsletter
                </div>
                <div className="items-start flex w-[432px] max-w-full gap-0 mt-10 max-md:flex-wrap">
                  <div className="items-start bg-white self-stretch flex w-[280px] max-w-full flex-col grow shrink-0 basis-auto px-5 py-6 rounded-l-2xl">
                    <div className="text-neutral-600 text-base font-medium leading-6 opacity-50 self-stretch w-full mx-1">
                      Enter your email{" "}
                    </div>
                  </div>
                  <div className="text-white text-center text-xl font-semibold leading-6 self-stretch w-[152px] justify-center items-center rounded-r-2xl bg-green-500 max-w-full px-4 py-6 rounded-none">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
