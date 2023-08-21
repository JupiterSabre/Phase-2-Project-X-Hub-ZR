import { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';


const RCalendar = () => {
    const [date, setDate] = useState(new Date())
    const onChange = () => {
        setDate(date)
    }


    return <div>

        <Calendar onChange={onChange} className="react-calendar" value={date} />
    </div>
}

export default RCalendar