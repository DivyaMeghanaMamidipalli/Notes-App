import React from 'react'
import { parseISO, formatDistanceToNow } from "date-fns";


function TimeAgo({timeStamp}) {
    let time =""

    if(timeStamp){
        const date = parseISO(timeStamp)
        const timePeriod = formatDistanceToNow(date)
        time = `${timePeriod} ago`
    }
  return (
    <span className="time" title={timeStamp}>
        <small>{time}</small>
  </span>
  )
}

export default TimeAgo
