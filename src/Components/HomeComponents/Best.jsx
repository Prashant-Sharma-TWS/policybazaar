import React from "react";
import "./Best.css";

export const Best = () => {
  return (
    <>
      <div class="best-place">
        <div class="container">
          <div class="left-block">
            <div class="txt-block opacity-1">
              What makes
              <br />
              <span>Policybazaar</span> the
              <br />
              <span>best place</span> to buy
              <br />
              <span>insurance</span> in
              <br class="hide-big" />
              India?
            </div>
            <div class="right-block top-0">
              <div class="info-box">
                <span class="top-icon"></span>
                <p class="head">Over 9 million</p>
                <p class="copy">
                  customers trust us &amp; have bought their insurance on
                  Policybazaar
                </p>
              </div>
              <div class="info-box insurer">
                <span class="top-icon"></span>
                <p class="head">50+ insurers</p>
                <p class="copy">
                  partnered with us so that you can compare easily &amp;
                  transparently
                </p>
              </div>
              <div class="info-box lowest-price">
                <span class="top-icon"></span>
                <p class="head">The Best Price</p>
                <p class="copy">for all insurance plans available online</p>
              </div>
              <div class="info-box claims">
                <span class="top-icon"></span>
                <p class="head">Claims</p>
                <p class="copy">
                  support built in with every policy for help, when you need it
                  the most
                </p>
              </div>
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/blank.gif"
                loading="lazy"
                alt="blank"
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
