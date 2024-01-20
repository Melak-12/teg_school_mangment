"use client";
import Image from "next/image";
import React, { useState } from "react";
// ... (existing imports)

const PayrollProfile = ({ payrolStatus }) => {
  const [salaryLog, setSalaryLog] = useState(true);
  const [salaryAdjustment, setSalaryAdjustment] = useState(false);

  const salaryLogTab = () => {
    setSalaryAdjustment(false);

    setSalaryLog(true);
  };

  const salaryAdjustmentTab = () => {
    setSalaryAdjustment(true);
    setSalaryLog(false);
  };

  return (
    <div className='mx-40 flex flex-row  w-full'>
      <div className='w-1/4 md:h-[calc(82vh-0rem)] mt-3 mb-11 mx-8 rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-white '>
        <div className='flex flex-col mb-9 '>
          <span className='text-xl p-7 text-blue-600 font-bold'>payroll</span>
          <div className='flex p-9 gap-1 justify-center flex-col'>
            <span
              onClick={salaryLogTab}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                salaryLog ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              salary log{" "}
            </span>
            <span
              onClick={salaryAdjustmentTab}
              className={`p-1 px-8 text-lg cursor-pointer rounded-md ${
                salaryAdjustment ? "bg-slate-200" : "bg-slate-3200"
              } py-3 text-slate-400`}
            >
              salary adjustment{" "}
            </span>
          </div>
        </div>
      </div>
      <div className='w-full mt-4 rounded-2xl mb-11 ring-1 flex-wrap ring-slate-200  '>
        <>
          {salaryLog && (
            <div className='flex flex-col w-full gap-7'>
              <span className='text-xl text-blue-600 font-bold  px-4'>
                salary log{" "}
              </span>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-center w-full rounded-md m-5 bg-slate-200'>
                  <div className='flex mx-4 flex-row  gap-10 px-8'>
                    <div className='mt-8 -ml-3 pr-4'>
                      <Image
                        src='/elsabet.jpeg'
                        alt=''
                        width={150}
                        height={150}
                        className='rounded-full rounded-image -ml-4'
                      />
                    </div>
                    <div className='flex flex-col gap-5 text-slate-500'>
                      <span className='text-xl font-bold'>HANA Sirgut</span>
                      <span>store officer</span>
                      <span>department : computer</span>
                      <span>date joined : 12-12,2022</span>
                      <span>
                        <i className='fa fa-phone px-2'></i>032823323
                      </span>
                      <span>
                        <i className='fa fa-message px-2'></i>hana@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-row justify-end gap-5 pb-4 pr-3 pl-20  text-right '>
                    <span>
                      <i className='fa fa-phone px-2 text-2xl'></i>
                    </span>
                    <span>
                      <i className='fa fa-message px-2 text-2xl'></i>
                    </span>
                  </div>
                </div>
                <div className='flex flex-col gap-4 mr-3'>
                  <span className='text-xl font-bold text-black'>Data</span>
                  <div className=' rounded-md shadow-md ring-2  bg-slate-50 ring-slate-100 p-9 flex flex-row gap-10 '>
                    {[5, 2, 3].map((item) => (
                      <span
                        key={item}
                        className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600'
                      >
                        <span
                          className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-10   text-slate-500`}
                        >
                          <span className='flex justify-start font-bold text-lg'>
                            {item}
                          </span>
                          <span> certified in database design</span>
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className=' rounded-md  bg-slate-200 shadow-md p-9 flex flex-row gap-10 '>
                    {[5, 2, 3].map((item) => (
                      <span
                        key={item}
                        className='flex flex-row  text-sm justify-between mb-3 gap-5 text-slate-600'
                      >
                        <span
                          className={`p-1 rounded-lg px-3 w-full flex flex-col justify-start text-center text-xs h-10   text-slate-500`}
                        >
                          <span className='flex justify-start font-bold text-lg'>
                            {item}
                          </span>
                          <span> certified in database design</span>
                        </span>
                      </span>
                    ))}
                  </div>
                  <button className='btn flex w-32 justify-center text-slate-500 text-sm bg-gray-200 rounded-full '>
                    adjust salary
                  </button>
                </div>
              </div>
            </div>
          )}
          {salaryAdjustment && (
            <div className='flex flex-wrap  flex-row     mb-9 '>
              <div className='flex flex-col  mb-9  w-1/2 bg-white rounded-xl shadow-md'>
                <span className='text-xl p-7 font-bold '>
                  salaryAdjustmentistrator
                </span>
                <div className='flex flex-col '>
                  <div className='flex flex-wrap  flex-col   p-10 gap-40    mb-9 bg-white rounded-lg '>
                    <div className='flex flex-col  mb-9 '>
                      <span className='text-md   font-bold text-slate-500'>
                        add salaryAdjustmentistrator
                      </span>
                      <span className='flex pt-3 flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg w-full py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter the units in order '
                        />
                        <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                      </span>
                    </div>
                    <div className='flex flex-col  mb-9 '>
                      <span className='text-md   font-bold text-slate-500'>
                        add salaryAdjustmentistrator
                      </span>
                      <span className='flex pt-3 flex-row gap-2'>
                        <input
                          name=''
                          // onChange={"onChange"}
                          className='shadow   appearance-none ring-1 ring-slate-400 border rounded-lg  py-2 px-3  text-slate-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='description'
                          type='text'
                          placeholder='enter the units in order '
                        />
                        <i className='fa fa-plus mt-1 rounded-full bg-slate-400 p-2 text-xl'></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className='flex justify-center ml-40 h-10 bg-blue-700 py-2 rounded-full w-40 text-white '
                onClick={() => payrolStatus(false)}
              >
                finish
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default PayrollProfile;
