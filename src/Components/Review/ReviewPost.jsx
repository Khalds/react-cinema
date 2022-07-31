import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews, postReview } from "../../features/Reviews/reviewSlice"
import Review from "./Review"
import style from "./review.module.css"

const ReviewPost = () => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState("")
  const reviews = useSelector((state) => state.reviewReducer.reviews)
  // const token = useSelector((state) => state.application.token);

  const handleAddComment = () => {
    if (comment.trim().length) {
      dispatch(postReview(comment))
    }
    setComment("")
  }

  useEffect(() => {
    dispatch(getAllReviews())
  }, [dispatch])

  return (
    <div className={style.comments_render}>
      <div className={style.render_field}>
        <div className={style.comment_avatar}>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/147/147140.png"}
            alt="avatar"
            className={style.image_config}
          />
        </div>
        <div className={style.comments_field}>
          <input
            // disabled={!token ? true : false}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder={"Войдите в аккаунт, чтобы оставить комментарий"}
          ></input>
          <button onClick={handleAddComment}>Добавить</button>
        </div>
      </div>
      {reviews?.map((item) => {
        return <Review review={item} key={item._id} text={item.text} />
      })}
    </div>
  )
}

export default ReviewPost
