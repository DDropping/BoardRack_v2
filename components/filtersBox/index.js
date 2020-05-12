import React from "react";

import { FiltersBoxContainer } from "./style";
import Location from "./Location";
import PriceRange from "./PriceRange";

const index = () => {
  return (
    <FiltersBoxContainer>
      <Location />
      <PriceRange />
    </FiltersBoxContainer>
  );
};

export default index;
