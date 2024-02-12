"use client";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Tutition from "../trainees/Tutition";
import FilterModal from "../trainees/FilterModal";

const topBar = [
  "Staff Name/ID",
  "Sex",
  "Position",
  "Department",
  "Experience",
  "GPA",
  "Education",
  "Contact Number",
  "Date Joined",
  "Status",
];
const Report = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [trainee, setSelectedTrainee] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleButtonClick = (item) => {
    setSelectedTrainee(item);
  };

  if (trainee) {
    return <Tutition payrolStatus={() => setSelectedTrainee(false)} />;
  }

  return (
    <>
      <div className='flex w-full  p-7 mx-32 flex-col gap-8 '>
        <div className='flex text-slate-500 text-xl font-bold justify-between'>
          <span>
            <i className='fa fa-rotate-left px-3 pt-1 text-xl'></i> Report
          </span>
        </div>

        <div className='flex w-full flex-col gap-2 shadow-2xl rounded-xl p-4  ring-2 ring-slate-100 '>
          <div className='flex flex-row justify-between w-full px-20  text-md font-thin text-slate-500 m-3 '>
            <div className='flex flex-col gap-3 text-slate-700'>
              <span className='font-thin text-slate-400 pt-1'>
                {" "}
                COMPUTER DEPARTMENT/DATABASE STREAM / SECTION 3E
              </span>
              <div className='flex flex-row mt-1 gap-3'>
                <input
                  name=''
                  onChange={() => alert("wait for form data ")}
                  className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='header text'
                  type='text'
                  placeholder='search'
                />
                <i className='fa fa-search mt-2 -mx-2 text-slate-400'></i>
                <span className='mx-4'>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            It deparment
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                current trainees{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                applications{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                registry requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                withdraw requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                transfer and upgrades
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </div>
            </div>
            {isModalVisible && (
              <FilterModal visibleModal={() => setModalVisible(false)} />
            )}
            <div className='flex justify-around gap-16'>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            2020
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                current trainees{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                applications{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                registry requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                withdraw requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                transfer and upgrades
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex text-black cursor-pointer text-sm justify-start bg-slate-100 p-2 rounded-md font-bold'>
                            Current trainees
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                current trainees{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                applications{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                registry requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                withdraw requiest{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                transfer and upgrades
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </span>
              <span className='flex gap-3'>
                <span>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className=''>
                          <span className='flex cursor-pointer justify-start z-50 text-slate-400 opacity-80'>
                            <i className='fa-solid fa-bars text-xl  p-2 text-slate-500 font-bold rounded-sm'></i>
                          </span>{" "}
                        </Popover.Button>
                        <Popover.Panel
                          className={`${
                            open ? "block" : "hidden"
                          } absolute z-10 bg-white border border-gray-200 right-0 p-5 rounded-md`}
                        >
                          <>
                            <div className='flex justify-center flex-col w-40 text-sm gap-2 text-slate-600 '>
                              <span className='cursor-pointer '>select</span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>select </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send announcement{" "}
                              </span>
                              <hr className=' text-black' />
                              <span className='cursor-pointer '>
                                generate report{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                send issue{" "}
                              </span>
                              <hr className=' text-black' />

                              <span className='cursor-pointer '>
                                export cvs{" "}
                              </span>
                              <hr className=' text-black' />
                            </div>
                          </>{" "}
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </span>
              </span>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex rounded-sm  w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col  ring-1 ring-slate-100 shadow-xl mx-2 rounded-2xl w-full'>
                  <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white  px-10'>
                    <div className='flex flex-row justify-around w-full gap-5 text-sm font-thin text-slate-500 m-3 '>
                      <span className='flex flex-block'>occupation</span>
                      <span className='flex flex-col'>
                        <span>regular</span>
                        <span className='flex flex-row font-thin text-sm gap-4 text-slate-600'>
                          <span>LEVEL |</span>
                          <span>LEVEL ||</span>
                          <span>LEVEL |||</span>
                          <span>LEVEL |v</span>
                          <span>LEVEL v</span>
                          <span>TOTAL</span>
                        </span>
                        <span className='flex flex-row font-thin text-sm gap-9 text-slate-600'>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                        </span>
                      </span>
                      <span className='flex flex-col'>
                        <span>extension</span>
                        <span className='flex flex-row font-thin text-sm gap-4 text-slate-600'>
                          <span>LEVEL |</span>
                          <span>LEVEL ||</span>
                          <span>LEVEL |||</span>
                          <span>LEVEL |v</span>
                          <span>LEVEL v</span>
                          <span>TOTAL</span>
                        </span>
                        <span className='flex flex-row font-thin text-sm gap-9 text-slate-600'>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                          <span>M F T</span>
                        </span>
                      </span>
                      <span className='flex flex-col'>
                        <span>total</span>
                        <span className='flex flex-row font-thin text-sm text-slate-600'></span>
                        <span>M F T</span>
                      </span>
                    </div>

                    <div className='all_items flex flex-row flex-wrap gap-1 w-full overflow-y-scroll h-5/6 justify-around '>
                      <div className='flex flex-row flex-wrap  w-full overflow-y-scroll justify-between '>
                        {[1].map((item) => (
                          <div
                            key={item}
                            className={`flex flex-row justify-around w-full gap-2 text-sm font-thin text-slate-500 m-3  `}
                            onClick={() => handleButtonClick(item)}
                          >
                            <span htmlFor='' className='flex flex-row gap-6'>
                              <span>electronics</span>
                              <span className='flex flex-col gap-6'>
                                <span>electronics c1</span>
                                <span>fashion c1</span>
                                <span>IT A1</span>
                                <span>Construction B</span>
                              </span>
                            </span>
                            <span className='flex flex-row gap-1'>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span> <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                            </span>{" "}
                            <span className='flex flex-row gap-1'>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span> <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                            </span>{" "}
                            <span className='flex flex-row gap-1'>
                              <span>0</span>
                              <span>0</span>
                              <span>0</span>
                            </span>{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
