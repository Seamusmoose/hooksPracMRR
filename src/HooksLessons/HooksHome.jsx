import React from "react";
import Acocordion from "./Accordion";
import AccordionItems from "../AccordionItems";
import Search from "./Search";
import DropDown from "./DropDown";
import ColorItems from "../ColorItems";

const HooksHome = () => {
  return (
    <div>
      {/* <Search /> */}
      {/* <Acocordion Items={AccordionItems} /> */}
      <DropDown options={ColorItems} />
    </div>
  );
};

export default HooksHome;
