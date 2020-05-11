import React from "react";

import { FiltersBarContainer } from "./style";
import ToggleFilterButton from "./ToggleFiltersButton";
import LayoutMenu from "./LayoutMenu";

const index = () => {
  return (
    <FiltersBarContainer>
      <ToggleFilterButton />
      <div style={{ flex: 1 }} />
      <LayoutMenu />
    </FiltersBarContainer>
  );
};

export default index;
