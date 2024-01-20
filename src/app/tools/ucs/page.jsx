"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddCourse from "./AddCourse";
import Link from "next/link";

const Ucs = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [openAddBook, setOpenAddBook] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
  const handleBackToItems = () => {
    setShowBookDetails(!showBookDetails);
  };

  return (
    <div className='p-6 '>
      <div className='flex flex-row justify-between p-5  w-full'>
        <span>
          <Link href={"/dashboard/"}>
            <Image src={"/logo.png"} alt='' width={40} height={40} />
          </Link>
        </span>
        <span className='text-slate-500 gap-5 flex flex-row'>
          <span className='flex pt-4 '>20,jan,2023</span>{" "}
          <Link href={"/profile/"}>
            <Image
              src={"/elsabet.jpeg"}
              alt=''
              width={40}
              height={40}
              className='rounded-full rounded-image  ring-1 ring-slate-400 -pb-2'
            />
          </Link>
        </span>
      </div>
      <div className='flex flex-row justify-between px-10 pb-10'>
        <div className='flex flex-row gap-11 text-slate-700'>
          <span className='flex gap-3 text-slate-500 text-2xl'>
            <span>
              <i className='fa fa-book'></i>
            </span>
            <span onClick={handleBackToItems} className='cursor-pointer'>
              UCS
            </span>
          </span>
        </div>
        <div className='flex justify-end'>
          <button
            className='bg-blue-600 text-blue-50 rounded-full px-6 p-2'
            onClick={() => setOpenAddBook(!openAddBook)}
          >
            add course
          </button>
        </div>
      </div>

      <div className='flex flex-row justify-between px-20 -mt-8'>
        <div className='flex gap-20'>
          <div className='flex flex-row mt-3 justify-between w-full'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='search'
            />
            <i className='fa fa-search mt-2 -mx-5 text-slate-400'></i>
          </div>
          <span className='flex justify-end mt-2 text-slate-600'>filter</span>
          <div className='flex flex-row mt-3'>
            <input
              name=''
              // onChange={() => alert("wait for form data ")}
              className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-full  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
              id='header text'
              type='text'
              placeholder='department'
            />
          </div>
        </div>
        <span className='flex gap-8 text-slate-500 text-2xl'>
          <i className='fa fa-list'></i>
          <i className='fa fa-list'></i>
        </span>
      </div>
      <div className='flex bg-slate-200 px-14 mx-14 mt-6 rounded-md'>
        {!openAddBook ? (
          <div className='flex w-full flex-row'>
            <div className='flex rounded-sm p-6 w-full'>
              <div className='flex flex-wrap  flex-row  '>
                <div className='flex flex-col '>
                  {showBookDetails ? (
                    <div className='book_items flex flex-col flex-wrap gap-6 w-full overflow-y-scroll justify-around '>
                      <div
                        className={`flex text-slate-500 flex-col gap-6 w-full justify-around cursor-pointer `}
                        onClick={handleBackToItems}
                      >
                        <div className='-mt-5'>
                          <Image
                            src='/book1.jpeg'
                            alt=''
                            width={590}
                            height={150}
                            className='rounded-xl mt-7 rounded-image'
                          />
                        </div>
                        <span className='text-xl font-bold'>
                          Computational breach test
                        </span>

                        <div className='flex flex-col  text-slate-500'>
                          <p>
                            some details about the course like the quick brown
                            fox jumped over the lazy dog . well that was not as
                            long as i had hoped
                          </p>
                        </div>
                        <span className='text-xl font-bold'>
                          unit assignment
                        </span>

                        <div className='flex flex-col  text-black'>
                          <p>some details about the</p>{" "}
                          <p>some details about the</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='flex p-1 gap-2 justify-center  flex-wrap flex-row bg-white rounded-md '>
                      <div className='flex flex-row justify-around w-full gap-52 text-sm font-thin text-slate-500 '>
                        <span>
                          <span>COURSE</span>
                        </span>
                        <span className='flex gap-20'>
                          <span>DATE CREATED</span>
                          <span> PREQUISITES</span>
                          <span>ADMIN</span>
                        </span>
                      </div>
                      <div className=' all_items flex flex-row flex-wrap gap-6 w-full overflow-y-scroll h-5/6 justify-around -mt-20'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map(
                          (item) => (
                            <div
                              key={item}
                              className={`flex text-slate-500 flex-row gap-10 w-full justify-around cursor-pointer ${
                                item === selectedItem
                                  ? "bg-blue-500 text-white"
                                  : ""
                              }`}
                              onClick={() => handleItemClick(item)}
                            >
                              <span className='flex flex-col font-bold'>
                                {item}. &nbsp;&nbsp;&nbsp;computational breach
                                test
                                <span
                                  className={`text-sm font-thin ${
                                    item === selectedItem
                                      ? "text-white"
                                      : "text-slate-600"
                                  }`}
                                >
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TF02230300
                                </span>
                              </span>
                              <span className='flex gap-10'>
                                <span>electronics CI</span>
                                <span>12-24-202</span>
                                <span>fashion C2</span>
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='flex p-6 rounded-sm w-full'>
              <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-around w-full bg-white'>
                  <div className='flex flex-col  gap-10 p-8 w-full'>
                    <div className='book_items flex flex-col flex-wrap gap-6 w-full overflow-y-scroll h-64 justify-around '>
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className={`flex text-slate-500 flex-col gap-6 w-full justify-around cursor-pointer `}
                          onClick={handleBackToItems}
                        >
                          <span className='text-xl font-bold'>
                            Computational breach test
                          </span>

                          <div className='flex flex-col  text-slate-500'>
                            <p>
                              some details about the course like the quick brown
                              fox jumped over the lazy dog . well that was not
                              as long as i had hoped
                            </p>
                          </div>
                          <div className='-mt-5'>
                            <Image
                              src='/book1.jpeg'
                              alt=''
                              width={290}
                              height={150}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 pt-4 pr-3 pl-10 h-48 bg-blue-300 text-start w-64 mt-14 mb-1 text-slate-200'>
                    <span>ID : ETS0392/12</span>
                    <span>DATA : 12-12,2022</span>
                    <span>CGPA : 3.5</span>
                    <span>UNITS : 5</span>
                  </div>
                </div>
                <div className='flex flex-row -mt-7 gap-7'>
                  <div className='flex flex-col '>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-14 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Units
                      </span>
                      <span>1.introduction</span>
                      <span>2.design of algorism</span>
                      <span>3.system training </span>
                      <span>2.field study </span>
                    </div>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10  h-48 bg-white text-start w-64 mt-3 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Tasks
                      </span>

                      <span>1.assignment 25%</span>
                      <span>2. field study 10%</span>
                      <span>3.test 20%</span>
                      <span>4. project 30%</span>
                    </div>
                  </div>
                  <div className='flex flex-col w-full '>
                    <div className='flex flex-col rounded-md pt-4 pr-3 pl-10   h-40 bg-white text-start  mt-14 mb-1 text-slate-500 shadow-md '>
                      <span className='text-xl px-3 font-bold text-black'>
                        Units
                      </span>
                      <span>1.introduction</span>
                      <span>2.introduction to the design of algorism</span>
                      <span>3.system training </span>
                    </div>
                    <div className='flex flex-col gap-3 pt-4 pr-3 pl-10 h-60 bg-blue-400 w-full text-start  mt-3 mb-1 text-slate-200'>
                      <span className='text-xl px-3 font-bold text-white'>
                        Course material
                      </span>
                      <p>
                        {
                          " Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        }
                        {
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        }
                      </p>
                      <div className='flex flex-row mt-16'>
                        <input
                          name=''
                          // onChange={() => alert("wait for form data ")}
                          className='shadow h-8 bg-slate-100 appearance-none ring-1 ring-slate-400 border  w-64 rounded-md  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='header text'
                          type='text'
                          placeholder='department'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AddCourse addcourse={() => setOpenAddBook(false)} />
        )}
      </div>
    </div>
  );
};

export default Ucs;
