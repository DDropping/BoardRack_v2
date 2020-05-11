import React from "react";

import { FiltersBarContainer } from "./style";
import ToggleFilterButton from "./ToggleFiltersButton";

const index = () => {
  return (
    <FiltersBarContainer>
      <ToggleFilterButton />
    </FiltersBarContainer>
  );
};

export default index;
