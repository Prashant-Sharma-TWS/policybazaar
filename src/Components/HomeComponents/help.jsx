import React from "react";
import styles from "./CSS/help.module.css";

export const Help = () => {
  return (
    <>
      <div className={styles.help}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.h2}>
              Have a question?
              <br />
              Here to help.
              <span></span>
            </div>
          </div>
          <div className={styles.help_pic}>
            <img
              src="https://static.pbcdn.in/cdn/images/home-v1/help.png"
              alt="help"
              loading="lazy"
            />
          </div>
          <div className={styles.help_text}>
            <p>
              Our friendly customer support team is your extended family. Speak
              your heart out. They listen with undivided attention to resolve
              your concerns. Give us a call, request a callback or drop us an
              email, we’re here to help.
            </p>
            <div className={styles.help_pic2}>
              <img
                src="https://static.pbcdn.in/cdn/images/home-v1/help.png"
                alt="help"
                loading="lazy"
              />
            </div>
            <a
              href="mailto:care@policybazaar.com?Subject=General%20Enquiries"
              className={styles.btn}
            >
              <i className={styles.mail}></i>
              <span>General Enquiries</span>
              <span>care@policybazaar.com</span>
            </a>
            <a
              href="tel:+18002088787"
              className={`${styles.btn} ${styles.no_margin}`}
            >
              <i className={styles.support}></i>
              <span>Customer Sales Enquiries</span>
              <span>1800 - 208 - 8787</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.group_companies}>
        <div className={styles.container}>
          <div className={styles.text}>
            Group Brands<span></span>
          </div>
          <div className={styles.co_logo}>
            <div className={styles.logo_block}>
              <span
                className={`${styles.co_logo_sprite} ${styles.doc_prime}`}
                href="https://docprime.com/?journey_type=doctor&amp;utm_source=pb&amp;utm_medium=link&amp;utm_content=doctor"
              ></span>
            </div>
            <div className={styles.logo_block}>
              <span
                className={`${styles.co_logo_sprite} ${styles.quick_fix_cars}`}
                href="https://www.quickfixcars.com/home?Utm_Source=policybazaar&amp;Utm_Campaign=pbwebsite&amp;Utm_Medium=pbbanner"
              ></span>
            </div>
            <div className={styles.logo_block}>
              <span
                className={`${styles.co_logo_sprite} ${styles.policy_bazaar}`}
                href="https://www.policybazaar.ae/?utm_source=policybazaar&amp;utm_campaign=pbwebsite&amp;utm_medium=groupcompanies"
              ></span>
            </div>
            <div className={styles.logo_block}>
              <span
                className={`${styles.co_logo_sprite} ${styles.paisa_bazaar}`}
                href="https://www.paisabazaar.com/?utm_content=cs_campaign&amp;utm_source=policybazaar&amp;utm_medium=home_page_product_icon"
              ></span>
            </div>
            <div className={styles.logo_block}>
              <span
                className={`${styles.co_logo_sprite} ${styles.pb_partner}`}
                href="https://www.pbpartners.com/?utm_source=policybazaar&amp;utm_campaign=pbwebsite&amp;utm_medium=pb-partner"
              ></span>
            </div>
            <div className={`${styles.logo_block} ${styles.last}`}>
              <div
                className={`${styles.co_logo_sprite} ${styles.fintech}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
