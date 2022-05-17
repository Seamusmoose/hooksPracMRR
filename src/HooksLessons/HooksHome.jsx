import React, { useState } from "react";
import Acocordion from "./Accordion";
import AccordionItems from "../AccordionItems";
import Search from "./Search";
import DropDown from "./DropDown";
import options from "../Options";

const HooksHome = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Search /> */}
      {/* <Acocordion Items={AccordionItems} /> */}
      <DropDown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default HooksHome;
