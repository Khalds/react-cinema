import React from "react";
import style from "./review.module.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import { delReviewById } from "../../features/Reviews/reviewSlice";
import { useDispatch } from "react-redux";

const Review = ({ review, text }) => {
  console.log(review);
  const dispatch = useDispatch();

  const handleDeleteComment = () => {
    dispatch(delReviewById(review._id));
  };

  return (
    <div className={style.comments_paket}>
      <div className={style.comment_user}>
        <div className={style.header_comment_user}>
          <div className={style.image_comment_user}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/147/147140.png"}
              alt="avatar"
              className={style.avatar_comment_user}
            />
          </div>
          <div className={style.name_and_data_comment_user}>
            <div className={style.name_comment_user}>Ibragim</div>
            <div className={style.name_and_data_comment_user}>
              <div className={style.data_comment_user}>
                {review.date.slice(0, 10) + ' / ' + review.date.slice(11, 16)}
              </div>
            </div>
          </div>
          <button
            className={`${review.deleting ? style.delete_btn_comment_user_disabled : style.delete_btn_comment_user}`}
            onClick={() => handleDeleteComment(review._id)}
            disabled={review.deleting}
          >
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </div>
        <div className={style.text_comment_user}>{text}</div>
      </div>
    </div>
  );
};

export default Review;
