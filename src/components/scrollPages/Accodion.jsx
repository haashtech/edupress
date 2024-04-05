// AccordianItem.js
import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, lessonInfo, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const [contentHeight, setContentHeight] = useState(0);
  const open = selected === value;

  const ref = useRef(null);

  useEffect(() => {
    setContentHeight(open ? ref.current?.scrollHeight || 0 : 0);
  }, [open, children]);

  return (
    <li className="border-b bg-white my-2 rounded-md" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex justify-between items-center p-4 font-medium ${open ? 'text-primary' : ''}`}
      >
        <div className="flex gap-2 items-center">
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
          {trigger}
        </div>
        {lessonInfo && (
          <div className="flex gap-3 items-end text-right text-xs">
            <span>{lessonInfo.lessons}</span>
            <span>{lessonInfo.duration}</span>
          </div>
        )}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: contentHeight }}
      >
        <div className="pt-5 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
