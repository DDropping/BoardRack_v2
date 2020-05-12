import React from "react";

import { FiltersBoxContainer } from "./style";
import Location from "./Location";
import PriceRange from "./PriceRange";
import Condition from "./Condition";

const index = () => {
  return (
    <FiltersBoxContainer>
      <Location />
      <br />
      <PriceRange />
      <br />
      <Condition />
    </FiltersBoxContainer>
  );
};

export default index;
