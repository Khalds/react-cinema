import React, { useState } from "react"
import styles from "./Calend.module.css"
import Calendar from "react-calendar"
import "./Calend.css"
import { BsCalendar3 } from "react-icons/bs"

function Calend({ value, onChange }) {
  const [open, setOpen] = useState(false)

  const renderCal = () => {
    const calDay = []
    const dayMilsec = 24 * 60 * 60 * 1000

    const today = value.getTime()

    for (let i = 0; i < 5; i++) {
      let date = new Date(today + dayMilsec * i)

      calDay.push(
        <div className={styles.date_item}>
          <div className={styles.month}>
            {new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)}
          </div>
          <div className={styles.day}>
            {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}
          </div>
          <div className={styles.week_day}>
            {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
              date
            )}
          </div>
        </div>
      )
    }
    return calDay
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.Calend}>
        <div className={styles.date}>{renderCal()}</div>
        <div onClick={(e) => setOpen(!open)} className={styles.cal}>
          <BsCalendar3 className={styles.cal_icon} />
        </div>
      </div>
      {open && (
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
      )}
    </div>
  )
}

export default Calend
