import React from "react";
import { QuoteCompany } from "../Elements/Quotes";

export const Company = () => {
  return (
    <QuoteCompany>
      <div>
        <div>
          <p>
            <input type="checkbox" />
            Plans that Return my premium.(Opted by 23% Customers)
          </p>
          <p>
            <b>All at one go</b>
          </p>
          <p>
            <p>
              <input type="checkbox" />
              Save upto
            </p>
            <b>25%</b><b className="rotate-five"></b>
          </p>
        </div>
      </div>
    </QuoteCompany>
  );
};
