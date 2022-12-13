import moment from 'moment';
import {
  BsSun,
  BsCalendarEvent,
  BsBoxArrowRight,
  BsDashCircle,
  BsEmojiSmile,
} from 'react-icons/bs';
import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';

function TaskDate({ setTaskDate, setShowTaskDate, showTaskDate }: any) {
  const [selected, setSelected] = useState<Date>();
  useEffect(() => {
    setTaskDate(moment(selected).format('DD/MM/YYYY'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    showTaskDate && (
      <>
        <span className="task-date__overlay" onClick={() => setShowTaskDate(!showTaskDate)}></span>
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
            <li>
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
            <li>
              <div
                role="button"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().add(7, 'day').format('DD/MM/YYYY'));
                }}
              >
                <span>
                  <BsBoxArrowRight />
                </span>
                <span>Next week</span>
              </div>
            </li>
            <li>
              <div
                role="button"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate(moment().day(6).format('DD/MM/YYYY'));
                }}
              >
                <span>
                  <BsEmojiSmile />
                </span>
                <span>This weekend</span>
              </div>
            </li>
            <li>
              <div
                role="button"
                onClick={() => {
                  setShowTaskDate(false);
                  setTaskDate('');
                }}
              >
                <span>
                  <BsDashCircle />
                </span>
                <span>No date</span>
              </div>
            </li>
          </ul>
          <div className="task-date__pick-day">
            <DayPicker
              mode="single"
              disabled={{ before: new Date() }}
              selected={selected}
              onSelect={setSelected}
              onDayClick={() => setShowTaskDate(false)}
            />
          </div>
        </div>
      </>
    )
  );
}
export default TaskDate;
