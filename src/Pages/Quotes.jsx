import React, { useEffect, useState } from "react";
import { Company } from "../Components/Company";
import { QuoteCard } from "../Elements/Quotes";

export const Quotes = () => {
  const [card, setCard] = useState({
    show: false,
    left: 5,
    question: "Do you Smoke or Chew tobacco?",
    smoke: "",
    income: "",
    occupation: "",
    qualification: "",
    resident: "",
    btnone: "Yes",
    btntwo: "No",
  });

  useEffect(() => {
    if (card.left !== 0) {
      setCard({ ...card, show: false });
    }
  }, []);

  return (
    <div>
      {card.show && <Card card={card} setCard={setCard} />}
      <Company />
    </div>
  );
};

const Card = ({ card, setCard }) => {
  const handleClick = () => {
    if (card.left === 5) {
      setCard({
        ...card,
        left: card.left - 1,
        question: "Select your annual income",
        btntwo: "",
      });
      return;
    }
    if (card.left === 4) {
      setCard({
        ...card,
        left: card.left - 1,
        question: "Please choose your occupation type",
        btnone: "Salaried",
        btntwo: "Self Employed",
      });
      return;
    }
    if (card.left === 3) {
      setCard({
        ...card,
        left: card.left - 1,
        question: "Select Educational Qualification",
        btnone: "Yes",
        btntwo: "",
      });
      return;
    }
    if (card.left === 2) {
      setCard({
        ...card,
        left: card.left - 1,
        question: "Are you a resident of Maharashtra ?",
        btntwo: "No",
      });
      return;
    }
    setCard({
      show: false,
      left: card.left - 1,
    });
  };

  return (
    <QuoteCard>
      <div></div>
      <div>
        <p>
          Just answer {card.left} simple questions to get more accurate quotes
        </p>
        <div></div>
        <h3>{card.question}</h3>
        {card.left === 5 && (
          <h5>
            Select <b>'Yes'</b> if you have smoked or chewed tobacco in last 12
            months
          </h5>
        )}
        {card.left === 4 && (
          <ul className="four-left-list">
            <li>
              <input type="radio" />
              15 Lac+
            </li>
            <li>
              <input type="radio" />
              10 Lac to 15 Lac
            </li>
            <li>
              <input type="radio" />5 Lac to 10 Lac
            </li>
            <li>
              <input type="radio" />2 Lac to 5 Lac
            </li>
            <li>
              <input type="radio" />
              Below 2 Lac
            </li>
          </ul>
        )}
        {card.left === 2 && (
          <ul className="four-left-list">
            <li>
              <input type="radio" />
              College graduate &amp; above
            </li>
            <li>
              <input type="radio" />
              12th pass
            </li>
            <li>
              <input type="radio" />
              10th pass &amp; below
            </li>
          </ul>
        )}
        <div>
          {card.btnone.length > 0 && (
            <button onClick={handleClick}>{card.btnone}</button>
          )}
          {card.btntwo.length > 0 && (
            <button onClick={handleClick}>{card.btntwo}</button>
          )}
        </div>
      </div>
    </QuoteCard>
  );
};
