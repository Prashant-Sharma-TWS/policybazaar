import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Company } from "../Components/Company";
import { QuoteCard } from "../Elements/Quotes";
import {
  updateUserDataRequest,
  updateUserDataSuccess,
} from "../Redux/Data/data.action";

export const Quotes = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <div>
      {data.card.show && <Card data={data} />}
      <Company />
    </div>
  );
};

const Card = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (data.card.left === 5) {
      dispatch(updateUserDataRequest());
      dispatch(
        updateUserDataSuccess({
          filter: { ...data.filter },
          card: {
            ...data.card,
            left: data.card.left - 1,
            question: "Select your annual income",
            btntwo: "",
          },
        })
      );
      return;
    }
    if (data.card.left === 4) {
      dispatch(updateUserDataRequest());
      dispatch(
        updateUserDataSuccess({
          filter: { ...data.filter },
          card: {
            ...data.card,
            left: data.card.left - 1,
            question: "Please choose your occupation type",
            btnone: "Salaried",
            btntwo: "Self Employed",
          },
        })
      );
      return;
    }
    if (data.card.left === 3) {
      dispatch(updateUserDataRequest());
      dispatch(
        updateUserDataSuccess({
          filter: { ...data.filter },
          card: {
            ...data.card,
            left: data.card.left - 1,
            question: "Select Educational Qualification",
            btnone: "Yes",
            btntwo: "",
          },
        })
      );
      return;
    }
    if (data.card.left === 2) {
      dispatch(updateUserDataRequest());
      dispatch(
        updateUserDataSuccess({
          filter: { ...data.filter },
          card: {
            ...data.card,
            left: data.card.left - 1,
            question: "Are you a resident of Maharashtra ?",
            btntwo: "No",
          },
        })
      );
      return;
    }
    dispatch(updateUserDataRequest());
    dispatch(
      updateUserDataSuccess({
        filter: { ...data.filter },
        card: {
          ...data.card,
          show: false,
          left: data.card.left - 1,
        },
      })
    );
  };

  return (
    <QuoteCard>
      <div></div>
      <div>
        <p>
          Just answer {data.card.left} simple questions to get more accurate
          quotes
        </p>
        <div></div>
        <h3>{data.card.question}</h3>
        {data.card.left === 5 && (
          <h5>
            Select <b>'Yes'</b> if you have smoked or chewed tobacco in last 12
            months
          </h5>
        )}
        {data.card.left === 4 && (
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
        {data.card.left === 2 && (
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
          {data.card.btnone.length > 0 && (
            <button onClick={handleClick}>{data.card.btnone}</button>
          )}
          {data.card.btntwo.length > 0 && (
            <button onClick={handleClick}>{data.card.btntwo}</button>
          )}
        </div>
      </div>
    </QuoteCard>
  );
};
