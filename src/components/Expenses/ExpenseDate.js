import './ExpenseDate.css'


function ExpenseDate (props) {

const month = props.date.toLocaleString('hu-HU', { month: 'long'});
const day = props.date.toLocaleString('hu-HU', { day: '2-digit'});
const dayName = props.date.toLocaleDateString('hu-HU', { weekday: 'long' }); 
const year = props.date.getFullYear();

return (<div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month} {day}</div>
      <div className="expense-date__day">{dayName}</div>
      </div>
      )
}

export default ExpenseDate;