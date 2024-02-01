import { useLocation, useNavigate } from 'react-router-dom';

function WeekSelect() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialWeek = location.pathname.split('/')[1] || 'week0';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${event.target.value}`)
  }

  return (
    <select
      style={{ position: 'fixed', bottom: 0, left: 0 }}
      defaultValue={initialWeek}
      onChange={handleChange}
    >
      <option value="week0">Week 0</option>
      <option value="week1">Week 1</option>
      <option value="week2">Week 2</option>
      <option value="week3">Week 3</option>
      <option value="week4">Week 4</option>
      <option value="week5">Week 5</option>
      <option value="week6">Week 6</option>
      <option value="week7">Week 7</option>
      <option value="week8">Week 8</option>
    </select>
  )
}

export default WeekSelect
