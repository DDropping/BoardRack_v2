import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

import { FiltersBoxContainer, WarningMessage } from "./style";
import Location from "./Location";
import PriceRange from "./PriceRange";
import Condition from "./Condition";
import BoardType from "./BoardType";
import Distance from "./Distance";
import MoreFiltersButton from "./MoreFiltersButton";
import ApplyFiltersButton from "./ApplyFiltersButton";
import Length from "./dimensions/Length";
import Width from "./dimensions/Width";
import Depth from "./dimensions/Depth";
import Volume from "./dimensions/Volume";

const index = ({ fetchPosts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isFiltersVisible = useSelector(
    (state) => state.filters.isFiltersVisible
  );
  return (
    <>
      {isFiltersVisible && (
        <FiltersBoxContainer>
          <Location />
          <WarningMessage>
            <ExclamationCircleTwoTone twoToneColor='#ff9900' /> Filtering By
            Location Disabled For Demo
          </WarningMessage>
          <div
            style={{
              borderBottom: "1px solid #E9E9E9",
              margin: "10px 0",
            }}
          ></div>
          <PriceRange />
          <br />
          <Condition />
          <br />
          <BoardType />
          <br />
          <Distance />
          <br />
          {isOpen && <Length />}
          {isOpen && <Width />}
          {isOpen && <Depth />}
          {isOpen && <Volume />}
          {isOpen && <br />}
          <ApplyFiltersButton fetchPosts={fetchPosts} />
          <MoreFiltersButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </FiltersBoxContainer>
      )}
    </>
  );
};

export default index;
