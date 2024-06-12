import {useState} from "react";

const PreviewCodeTab = (previewState, CodeState, PreviewHandler, CodeHandler) => {

    return (
        <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${previewState ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
            <button
                className={`${
                    previewState && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={PreviewHandler}
            >
                Preview
            </button>
            <button
                className={`${
                    CodeState && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={CodeHandler}
            >
                Code
            </button>
        </div>
    );
};

export default PreviewCodeTab;
