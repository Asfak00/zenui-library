import React, { useState } from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaHand } from "react-icons/fa6";

// utils style
import utils from "../Utils";

const OverviewFooter = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');
  const [reportValue, setReportValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLikeBtn = () => {
    setIsLiked(!isLiked);
    setIsDisLiked(false);
  };

  const handleDislikeBtn = () => {
    setIsDisLiked(!isDisLiked);
    setIsLiked(false);
  };

  // handle feedback message
  const handleFeedback = (e) => {
    e.preventDefault()
    const url = 'https://devlab-black-email.friendsclub.workers.dev/';
    const data = {
      email: 'mlFZBnbf1PocWSlou6+x9sgm+gK6+FM8Pl6pgDQSUUozmLt4eV6SsUgFfylGhIX/U5O+wLSwqbjwnGDZxETjNhhnZrTpKiT3swy17v6xLxH0ZFBndt8uA2d2ymAop+gi',
      form: {
        title: 'Form Name',
        data: [
          ['textarea', feedbackValue]
        ]
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          setSuccessMessage('Thank You for Your Feedback!')
          setTimeout(()=>{
            setSuccessMessage('')
          }, 3000)
          return response.text();
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}

  // handle report message
  const handleReport = (e) => {
    e.preventDefault()
    const url = 'https://devlab-black-email.friendsclub.workers.dev/';
    const data = {
      email: 'mlFZBnbf1PocWSlou6+x9sgm+gK6+FM8Pl6pgDQSUUozmLt4eV6SsUgFfylGhIX/U5O+wLSwqbjwnGDZxETjNhhnZrTpKiT3swy17v6xLxH0ZFBndt8uA2d2ymAop+gi',
      form: {
        title: 'Form Name',
        data: [
          ['textarea', reportValue]
        ]
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          setSuccessMessage('Thank You for Reporting an Issue on Our Website!')
          setTimeout(()=>{
            setSuccessMessage('')
          }, 3000)
          return response.text();
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}

const handleFeedbackInput = (e)=> {
    setFeedbackValue(e.target.value)
}

const handleReportInput = (e) => {
    setReportValue(e.target.value)
}

  return (
    <footer className="w-full 1024px:w-[80%] mt-8">
      <div className="flex flex-col 425px:flex-row 425px:items-center justify-between w-full pb-5">
        <a href='https://github.com/Asfak00/zenui-library' target='_blank'
          className={`${utils.buttonSecondary} flex items-center gap-2 !px-2 !py-1 text-[0.9rem] min-w-[110px] mr-3 max-w-[110px]`}
        >
          <FaGithub />
          Give a star
        </a>

        <div className="flex items-center justify-between w-full gap-4">
          <span className='text-[#0471d6]'>Was this page helpful?</span>
          <div className="flex items-center gap-3">
            <BiSolidLike
              className={`${
                isLiked && "!text-primary"
              } p-2 border border-[#0471d6] rounded-full text-[2.4rem] cursor-pointer text-[#9caebc]`}
              onClick={handleLikeBtn}
            />
            <BiSolidDislike
              className={`${
                isDisLiked && "!text-[#d30c0c]"
              } p-2 border border-[#0471d6] rounded-full text-[2.4rem] cursor-pointer text-[#9caebc]`}
              onClick={handleDislikeBtn}
            />
          </div>
        </div>
      </div>

      {isLiked && (
          <form action="#" className="w-full mb-5" onSubmit={handleFeedback}>
            <label htmlFor="message" className=''>What did you like about this page?</label>
            <br/>
            <textarea
                name="message"
                id="message"
                onChange={handleFeedbackInput}
                placeholder='Give feedback'
                className="w-full h-[130px] bg-border outline-none rounded p-4 mt-1"
            ></textarea>

            <p className='text-[1rem]  text-primary mt-[0.2rem]'>{successMessage}</p>

            <div className="w-full flex items-center mt-2 justify-end gap-3">
              <button
                  type="button"
                  onClick={handleLikeBtn}
                  className={`${utils.buttonSecondary} !py-1 !px-3`}
              >
                Cancel
              </button>
              <button
                  disabled={feedbackValue === ''}
                  type="submit"
                  className={`${utils.buttonPrimary} !py-1 !px-3 ${feedbackValue === '' ? 'bg-[#b2cfe8] border-[#b2cfe8] cursor-not-allowed' : 'bg-primary border-primary cursor-pointer'}`}
              >
                Submit
              </button>
            </div>
          </form>
      )}

      {isDisLiked && (
          <form action="#" className="w-full mb-5" onSubmit={handleReport}>
          <label htmlFor="message" className=''>How can we improve this page?</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder='Report summary'
            onChange={handleReportInput}
            className="w-full h-[130px] bg-border outline-none rounded p-4 mt-1"
          ></textarea>

          <p className='text-[1rem]  text-primary mt-[0.2rem]'>{successMessage}</p>

          <div className="w-full border border-[#ffa90a] rounded p-3 flex gap-4 items-start my-4 bg-[#ffa90a21]">
            <p>
              <FaHand className="text-[1.2rem] text-[#ffa90a]" />
            </p>
            <p className="text-[1rem] text-text">
              If something is broken or if you need a reply to a problem you've
              encountered, please{" "}
              <a href="https://github.com/Asfak00/zenui-library/issues/new" target='_blank' className=" text-primary font-[500] underline">
                open an issue instead
              </a>
              . Otherwise, the team won't be able to answer back or ask for more
              information.
            </p>
          </div>
          <div className="w-full flex items-center mt-2 justify-end gap-3">
            <button
              type="button"
              onClick={handleDislikeBtn}
              className={`${utils.buttonSecondary} !py-1 !px-3`}
            >
              Cancel
            </button>
            <button
                disabled={reportValue === ''}
              type="submit"
              className={`${utils.buttonPrimary} !py-1 !px-3 ${reportValue === '' ? 'bg-[#b2cfe8] border-[#b2cfe8] cursor-not-allowed' : 'bg-primary border-primary cursor-pointer'}`}
            >
              Submit
            </button>
          </div>
        </form>
      )}

      <div className="flex items-center gap-5 justify-between w-full border-t border-border pt-5">
        <img src="/footer_logo.png" alt="logo-image" className="w-[120px]" />

        <div className="flex items-center gap-3">
          <p className=" font-[600] text-[1rem] text-text">Support:</p>
          <a href="https://buymeacoffee.com/zenuilibrary" target="_blank">
            <img
              src="https://www.codehim.com/wp-content/uploads/2022/09/bmc-button-640x180.png.webp"
              alt="sponser-image"
              className="w-[120px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default OverviewFooter;
