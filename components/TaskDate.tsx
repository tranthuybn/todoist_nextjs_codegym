import moment from 'moment';
import { BsSun, BsCalendarEvent, BsBoxArrowRight } from 'react-icons/bs';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import 'react-day-picker/dist/style.css';

function TaskDate({ setTaskDate, showTaskDate, setShowTaskDate, date }: any) {
  const [selected, setSelected] = useState<Date>();
  return (
    showTaskDate && (
      <div className="task-date">
        <ul className="task-date__list">
          <li>
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }}
              role="button"
            >
              <span>
                <BsCalendarEvent />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li date-testid="teask-date-tomorrow">
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              }}
              role="button"
            >
              <span>
                <BsSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li date-testid="teask-date-upcoming">
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'day').format('DD/MM/YYYY'));
              }}
            >
              <span>
                <BsBoxArrowRight />
              </span>
              <span>Upcoming</span>
            </div>
          </li>
        </ul>
        <div className="task-date__pick-day">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    )
  );
}

export default TaskDate;
