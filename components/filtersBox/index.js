import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FiltersBoxContainer } from "./style";
import Location from "./Location";
import PriceRange from "./PriceRange";
import Condition from "./Condition";
import BoardType from "./BoardType";
import Distance from "./Distance";
import MoreFiltersButton from "./MoreFiltersButton";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isFiltersVisible = useSelector(
    (state) => state.filters.isFiltersVisible
  );
  return (
    <div>
      {isFiltersVisible && (
        <FiltersBoxContainer>
          <Location />
          <br />
          <PriceRange />
          <br />
          <Condition />
          <br />
          <BoardType />
          <br />
          <Distance />
          <br />
          <MoreFiltersButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </FiltersBoxContainer>
      )}
    </div>
  );
};

export default index;
