import React from 'react';
import FooterItems from './FooterItems';
import { EduPress, GETHELP, PROGRAMS, CONTACTUS } from "./FooterMenu";

function ItemContainer() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-6 sm:grid-cols-3 py-16 space-x-5">
      {/* First column */}
      <div className="md:col-span-2 md:justify-center  ps-5">
        <FooterItems Links={EduPress} title="EduPress" />
      </div>

      {/* Second column */}

      <div className="text-start flex md:justify-center">
      <FooterItems Links={GETHELP} title="GET HELP" />
      </div>

      {/* Empty space to start the third column from the fourth column */}

      {/* Third column */}
      <div className="flex md:justify-center">
      <FooterItems Links={PROGRAMS} title="PROGRAMS" />
      </div>


      {/* col 4 */}
      <div className="lg:col-span-2 ">
          <FooterItems Links={CONTACTUS} title="CONTACT US" />
      </div>

    
    </div>
  );
}

export default ItemContainer;
