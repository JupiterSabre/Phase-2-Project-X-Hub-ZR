import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom"
// import 'react-calendar/dist/Calendar.css';

function RCalendar() {
    const navigate = useNavigate()

    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }

    const clickedDay = value => {
        const currentDate = new Date();
        const twoWeeksLater = new Date();
        twoWeeksLater.setDate(currentDate.getDate() + 5
        )
        if (value < currentDate) {
        alert('This date is in the past, please select the current or future date to book an appointment.');
        } else if (value <= twoWeeksLater) {
            alert('You are being redirected to a ticket portal for short-term passes');
            window.location.href="https://xxxxxxxxxx.app/hxnyc";
        } else {alert("Join the fray for access to future programming =) ");
        navigate('/')}
        }
    


    return <div>

        <Calendar onChange={onChange} className="react-calendar" value={date} onClickDay={clickedDay} />
        {console.log(date)}
    </div>
}

export default RCalendar