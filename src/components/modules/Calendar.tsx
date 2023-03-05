import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import daygrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import timegrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import { Event } from '@/types/types';
import { useRecoilState } from 'recoil';
import { event } from '@/src/store/atom';

export function Calender() {
  const [events, setEvents] = useRecoilState(event);

  const calendarEvents = () => {
    const a = ""
  }

  return (
    <div>
      <FullCalendar locale={"ja"} plugins={[daygrid, timegrid, list, interaction]} initialView={"dayGridMonth"} selectable={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek',
        }}

        buttonText={{
          today: "今日",
          month: "月",
          week: "週",
          list: "リスト",
        }}
      />

    </div>
  );
}