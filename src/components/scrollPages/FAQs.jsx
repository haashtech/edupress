import React from "react";
import { MdLock } from "react-icons/md";
import Accordian, { AccordianItem } from "./Accodion";

function FAQs() {
  return (
    <Accordian>
      <AccordianItem
        value="1"
        trigger={<div>What Does Royalty Free Mean?</div>}
        
      >
        <div className="flex mb-5  justify-between items-center md:text-sm text-xs px-5">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </span>
        </div>
        <div className="flex mb-5 justify-between items-center md:text-sm text-xs px-5">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </span>
        </div>
      </AccordianItem>
      <AccordianItem
        value="2"
        trigger={<div>What Does Royalty Free Mean?</div>}
        
      >
        <div className="flex mb-5 justify-between items-center md:text-sm text-xs px-5">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </span>
        </div>
      </AccordianItem>
      {/* Add more AccordianItem components for additional curriculum sections */}
    </Accordian>
  );
}

export default FAQs;
