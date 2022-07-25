import React from "react"
import styles from "./Calendar.module.css"

import { BsCalendar3 } from "react-icons/bs"

function Calendar() {
  return (
    <div className={styles.Calendar}>
      <div className={styles.date}>
        <div className={styles.date_item}>
          <div className={styles.month}>Jul</div>
          <div className={styles.day}>24</div>
          <div className={styles.week_day}>Sun</div>
        </div>
        <div className={styles.date_item}>
          <div className={styles.month}>Jul</div>
          <div className={styles.day}>25</div>
          <div className={styles.week_day}>Mon</div>
        </div>
        <div className={styles.date_item}>
          <div className={styles.month}>Jul</div>
          <div className={styles.day}>26</div>
          <div className={styles.week_day}>Tue</div>
        </div>
        <div className={styles.date_item}>
          <div className={styles.month}>Jul</div>
          <div className={styles.day}>27</div>
          <div className={styles.week_day}>Wed</div>
        </div>
      </div>
      <div className={styles.cal}>
        <BsCalendar3 className={styles.cal_icon} />
      </div>
    </div>
  )
}

export default Calendar
