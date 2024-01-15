'use client'
import React, { useState } from "react";
// import Chart from "./Chart";
// import { Calendar } from "antd";
import Image from "next/image";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='flex w-full  p-7 mx-32 flex-col gap-8 shadow-xl rounded-xl'>
      <div className='flex flex-row justify-between'>
        <div className='flex text-slate-500 text-xl font-bold'>
          <i className='fa fa-home px-3 pt-1 text-xl'></i> Dashboard
        </div>
        <div className='flex justify-end'>
          <i className='fa-solid fa-earth-africa text-slate-500 font-bold text-3xl '></i>
        </div>
      </div>

      <div className='flex flex-row mx-8 justify-between'>
        <div className='flex flex-row gap-11 text-slate-700 shadow-md p-5  rounded-xl w-full justify-around '>
          <span className='flex gap-3 text-green-400'>
            <span>
              <i className='fa fa-user rounded-full bg-slate-200 p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-sm text-slate-400 '>Total trains</span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 text-pink-600'>
            <span>
              <i className='fa fa-home rounded-full bg-slate-200 p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-sm text-slate-400 '>Total trains</span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 text-cyan-600'>
            <span>
              <i className='fa fa-shop rounded-full bg-slate-200 p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-sm text-slate-400 '>Total trains</span>
              11
            </span>
          </span>{" "}
          <span className='flex gap-3 text-yellow-500'>
            <span>
              <i className='fa fa-add rounded-full bg-slate-200 p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-sm text-slate-400 '>Total trains</span>
              19
            </span>
          </span>
        </div>
      </div>

      <div className='flex flex-row mx-8 justify-between'>
        <div className='flex justify-around flex-row gap-32 text-slate-700    rounded-xl w-full  '>
          {/* chart! */}
          <div className='h-[calc(50vh-5rem)] w-96 bg-blue-200 rounded-lg '>
            {/* <Chart /> */}chart
          </div>

          <span className='flex gap-3 w-96 shadow-lg text-yellow-500'>
            Financial summery
          </span>
          <span className='flex gap-3 text-yellow-500'>
            <div
              className='w-96 h-96'
              style={{ border: "  ", borderRadius: 4 }}
            >
              {/* <Calendar
                fullscreen={false}
                // onPanelChange={onPanelChange}
              /> */}
              {/* <Calendar onChange={onChange} value={date} />{" "} */}
            </div>
          </span>
          <span className='flex gap-3 text-yellow-500'>
            <div
              className='w-96 h-96'
              style={{ border: "  ", borderRadius: 4 }}
            >
              {/* <Calendar
                fullscreen={false}
                // onPanelChange={onPanelChange}
              /> */}
              calendar
            </div>
          </span>
        </div>
      </div>
      <div className='flex flex-row mx-8 justify-between'>
        <div className='flex flex-row gap-6 text-slate-700  p-5  rounded-xl w-full justify-around '>
          <span className='flex gap-3 px-11 py-2 w-96 rounded-lg shadow-md text-green-400'>
            <span>
              <i className='fa fa-user rounded-full bg-slate-200 text-xl p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>Students</span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 px-11 py-2 w-96 rounded-lg text-pink-600 shadow-md'>
            <span>
              <i className='fa fa-home rounded-full bg-slate-200 text-xl p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>Employe</span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              120
            </span>
          </span>{" "}
          <span className='flex gap-3 px-11 py-2 w-96 rounded-lg text-cyan-600 shadow-md'>
            <span>
              <i className='fa fa-shop rounded-full bg-slate-200 text-xl p-4'></i>
            </span>
            <span className='flex flex-col'>
              <span className='text-slate-500 text-lg font-bold'>Students</span>{" "}
              <span className='text-sm flex flex-row gap-4 p-2 text-slate-400 '>
                <span>
                  <i className='fa fa-male'></i>male
                </span>
                <span>
                  <i className='fa fa-female'></i>female
                </span>
              </span>
              11
            </span>
          </span>{" "}
        </div>
      </div>
      <div className='flex flex-col shadow-xl rounded-md ring-1 ring-slate-200 px-7'>
        <span className='text-lg mx-9 m-5 text-slate-500 font-bold'>
          Todays Log
        </span>
        <div className='flex flex-row flex-wrap gap-24 text-sm font-thin overflow-x-scroll justify-between'>
          {["employe name", "age", "tasks", "postion", "date", "status"].map(
            (tab) => (
              <span key={tab} className=' text-slate-500 gap-0  '>
                {tab}
              </span>
            )
          )}
        </div>

        <span className='h-1 bg-slate-100 w-full my-3' />
        <div className='flex flex-row flex-wrap gap-4 w-full overflow-y-scroll h-96 justify-between'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 19].map((item) => (
            <div
              key={item}
              className='flex  text-slate-500 flex-row gap-20 w-full justify-between'
            >
              <span htmlFor='' className='flex flex-row'>
                {/* {item}.Melak */}
                <span>
                  <Image
                    src='/elsabet.jpeg'
                    alt=''
                    width={50}
                    height={50}
                    className='rounded-lg rounded-image text-center'
                  />
                </span>
                <span className='flex flex-col'>
                  <span>Melak ab </span>
                  <span className='text-slate-600 font-thin'>
                    melakabebeee@gmail.com
                  </span>
                </span>
              </span>

              <span>23</span>
              <span>stock request</span>
              <span>30,mar,21</span>
              <span>Leader</span>

              {item === 4 ||
              item === 3 ||
              item === 6 ||
              item === 11 ||
              item === 15 ? (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 bg-red-300 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-0 `}
                >
                  absent{" "}
                </button>
              ) : (
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className={`text-white ring-1 bg-green-300  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-1 `}
                >
                  present
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
