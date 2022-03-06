import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./CSS/CustomersSay.module.css";

export class CustomersSay extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={styles.custMainContainer}>
        <div className={styles.red}>
          <div className={styles.custTitle}>
            What Our Customers <br />
            Are Saying <span className={styles.custLine}></span>
          </div>
        </div>
        <Slider {...settings} className={styles.custWrapper}>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Bhaaskar Lokhande</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                Thanks for correction done in time and really Appreciated....!!
                GOOD TO HAVE POLICYBAZAAR..!! LIFE IS EASY WITH YOU..!!
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Prabhat Yadav</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                Thanking you very much for your support for getting our policy
                quickly, I would appreciate your work.
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Neha Jain</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                You are doing a great job. Proud to be a customer of
                Policybazaar.
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Rashmi Sirsath</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                I would like to thank the website 'www.policybazaar.com' because
                of which i could get a good policy.
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Ananth Narayan</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                Thank you for facilitating and following up on the policy. Its
                been a very pleasurable experience with you folks at
                Policybazaar.
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Sonia Khanna</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                Got good deal without agent calling or speaking to anyone!!
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Shraddha Sharma</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                Very simple to use, friendly website
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Parag Lele</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                The services provided by Policybazaar are extremely helpful in
                making the right choice. Overall I had a good experience with
                Policybazaar.
              </p>
            </div>
          </div>
          <div className={styles.custDivBox}>
            <div>
              <p className={styles.custParaHead}>Urvashi Solanki</p>
              <span className={styles.custColon}></span>
              <p className={styles.custPara}>
                I did not even need help from an agent! This is very good!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
