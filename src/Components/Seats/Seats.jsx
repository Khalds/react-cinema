import styles from "./Seats.module.css";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getSessionById,
  getSessions,
} from "../../features/Sessions/sessionSlice";
import { useParams } from "react-router-dom";
import seatSlice, {
  choseSeat,
  getSeats,
  makeBooking,
} from "../../features/Seat/seatSlice";
import { useState } from "react";
import { MdOutlineChair } from "react-icons/md";
import Basket from "../Basket/Basket";

const Seats = () => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.sessionReducer.session);

  const seats = useSelector((state) => state.seatReducer.seats);

  const [isActiveBasket, setIsActiveBasket] = useState(false);

  const [basket, setBasket] = useState([]);

  const { id } = useParams();

  const handleClick = (id, element) => {
    dispatch(choseSeat(id));
    setBasket([...basket, element]);
  };

  const handleBuy = () => {
    setIsActiveBasket(true);
  };

  useEffect(() => {
    dispatch(getSessionById(id));
    dispatch(getSeats());
  }, [dispatch]);

  return (
    <div>
      {seats.map((element, index) => {
        if (element.hall._id === session.hall._id)
          return (
            <>
              <div className={styles.seats_conteiner}>
                <div>
                  {
                    <MdOutlineChair
                      onClick={() => handleClick(element._id, element)}
                      className={
                        element.isChosed || element.isBlocked
                          ? styles.active
                          : styles.disactive
                      }
                      
                    />
                  }
                  {element.name + index}
                </div>
              </div>
            </>
          );
      })}
    </div>
  );
};

export default Seats;
