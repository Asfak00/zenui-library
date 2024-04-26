import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const Faq = () => {
  // Faq button
  const [isPreview, setIsPreview] = useState(true);
  const [isCode, setIsCode] = useState(false);

  const handleOnCode = () => {
    setIsCode(true);
    setIsPreview(false);
  };

  const handleOnPreview = () => {
    setIsPreview(true);
    setIsCode(false);
  };

  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(0);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      id: 1,
      question: "What is the React UI Enthusiasts Group?",
      answer:
        "The React UI Enthusiasts Group is a vibrant community dedicated to all things related to user interface (UI) development with React. Whether you're a seasoned developer or just starting out, our group provides a supportive environment for learning, sharing ideas, and collaborating on React UI projects. Join us to explore the latest trends, best practices, and innovative techniques in React UI development.",
    },
    {
      id: 1,
      question: "What is the React UI Enthusiasts Group?",
      answer:
        "The React UI Enthusiasts Group is a vibrant community dedicated to all things related to user interface (UI) development with React. Whether you're a seasoned developer or just starting out, our group provides a supportive environment for learning, sharing ideas, and collaborating on React UI projects. Join us to explore the latest trends, best practices, and innovative techniques in React UI development.",
    },
    {
      id: 1,
      question: "What is the React UI Enthusiasts Group?",
      answer:
        "The React UI Enthusiasts Group is a vibrant community dedicated to all things related to user interface (UI) development with React. Whether you're a seasoned developer or just starting out, our group provides a supportive environment for learning, sharing ideas, and collaborating on React UI projects. Join us to explore the latest trends, best practices, and innovative techniques in React UI development.",
    },
  ];

  return (
    <>
      <aside>
        <ContentHeader text={"Faq (Frequently Asked Questions) "} />

        <p className="w-[80%] text-text text-[1rem]">
          A FAQ (Frequently Asked Questions) component is a common feature on
          websites and applications designed to provide quick answers to common
          queries that users may have.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          {/* preview actions */}
          <div className="">
            <button
              className={`${
                isPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleOnPreview}
            >
              Preview
            </button>
            <button
              className={`${
                isCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleOnCode}
            >
              Code
            </button>
          </div>

          {isPreview && (
            <section>
              <div className="grid   place-items-center">
                <div className="  border rounded-xl p-6 sm:p-5 m-3 transition-all duration-300">
                  {accordionData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div
                          className="transition-all duration-500 py-[15px] gap-4  flex justify-between items-center cursor-pointer "
                          onClick={() => toggle(index)}
                        >
                          <p className="font-[600] text-[#000] capitalize text-[1.3rem] transition-all duration-500">
                            {data.question}
                          </p>
                          <div className="text-xl sm:text-[25px] transition-all duration-500">
                            {open === index ? (
                              <AiOutlineMinus />
                            ) : (
                              <AiOutlinePlus />
                            )}
                          </div>
                        </div>

                        {open === index && (
                          <div className="transition-all duration-500 text-justify w-[90%] text-[13px] sm:text-[16px] leading-relaxed ">
                            {data.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {isCode && (
            <Showcode
              code={`

              <section>
              <div className="grid   place-items-center">
                <div className="  border rounded-xl p-6 sm:p-5 m-3">
                  {accordionData.map((data, index) => {
                    return (
                      <Accordion
                        key={data.id}
                        open={index === open}
                        question={data.question}
                        answer={data.answer}
                        toggle={() => toggle(index)}
                      ></Accordion>
                    );
                  })}
                </div>
              </div>
            </section>

            -- don't forgot to use json or data like this
            [
              {
                "id": 1,
                "question": "What is the React UI Enthusiasts Group?",
                "answer": "The React UI Enthusiasts Group is a vibrant community dedicated to all things related to user interface (UI) development with React. Whether you're a seasoned developer or just starting out, our group provides a supportive environment for learning, sharing ideas, and collaborating on React UI projects. Join us to explore the latest trends, best practices, and innovative techniques in React UI development."
              },
              // more json
            ]
`}
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Faq</title>
      </Helmet>
    </>
  );
};

export default Faq;
