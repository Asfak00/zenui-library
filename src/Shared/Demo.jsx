import React from "react";

const ToggleTab = () => {
  return (
      <div className="flex flex-col items-center justify-center">
          <div className="z-10 w-full">
              <div className="mx-auto mt-6 flex items-center justify-center gap-4">

                  <label htmlFor="transactions">

                      <div
                          className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="transactions"
                                     className="peer appearance-none"/>

                              <span
                                  className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                                          d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"/></svg>

              <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                                                      d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
            </span>
                              <span
                                  className="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Transactions</span>
                          </div>
                      </div>
                  </label>
                  <label htmlFor="updates">

                      <div
                          className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2 pl-3.5 pt-3.5 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="updates"
                                     className="peer appearance-none"/>

                              <span
                                  className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path
                      d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333L6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path
                      d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/>
                </g>
              </svg>

              <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
            </span>
                              <span
                                  className="opacity-0 text-white transition-all mb-1 peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Updates</span>
                          </div>
                      </div>
                  </label>
                  <label htmlFor="promotions">

                      <div
                          className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="promotions"
                                     className="peer appearance-none"/>

                              <span
                                  className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                        d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49l-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013a75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975l1.609 3.037l.01.024h.548l-.002-.014l-.443-2.966a68 68 0 0 0-1.722-.082z"/></svg>

              <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                                    d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"/></svg>
            </span>
                              <span
                                  className="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Promotions</span>
                          </div>
                      </div>
                  </label>
              </div>
          </div>
      </div>
  )
      ;
};

export default ToggleTab;
