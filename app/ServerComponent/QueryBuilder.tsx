import React from "react";
import { useState } from "react";

function QueryBuilder() {
  const [showDragArea, setShowDragArea] = useState(false);

  const handleFilterClick = () => {
    setShowDragArea(!showDragArea);
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-[#1D191A] rounded-lg mt-6 ml-12 w-[1200px] h-auto">
      <div className="text-white text-lg font-semibold">Query Builder</div>

      <div className="flex flex-col space-y-4">
        <label className="text-white">Measurement</label>
        <div className="p-2 bg-[#8EC1C3] text-black text-center rounded h-16">
          drag and drop area
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-white">Fields</label>
        <div className="p-2 bg-[#D8E59D] text-black text-center rounded h-16">
          drag and drop area
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-white">Filters</label>
        {showDragArea && (
          <div className="p-2 bg-[#E3A8A7] text-black text-center rounded h-16">
            drag and drop area
          </div>
        )}
      </div>

      <div className="flex space-x-12">
        {!showDragArea && (
          <button
            className="p-4 bg-[#8A2F2D] text-white rounded flex items-center w-[180px] h-[54px]"
            onClick={handleFilterClick}
          >
            <img src="/icon/filter.svg" alt="Sort" className="h-6 w-6 mr-2" />
            Filter
          </button>
        )}
        <button className="p-4 bg-[#0D0C0C] text-white rounded flex items-center w-[180px] h-[54px]">
          <img
            src="/icon/arrow-up-down.svg"
            alt="Sort"
            className="h-6 w-6 mr-2"
          />
          Sort
        </button>
        <button className="p-4 bg-[#0D0C0C] text-white rounded flex items-center w-[180px] h-[54px]">
          <img src="/icon/list.svg" alt="Row Limit" className="h-6 w-6 mr-2" />
          Row Limit
        </button>
      </div>
    </div>
  );
}

export default QueryBuilder;
