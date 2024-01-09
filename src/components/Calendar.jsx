import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar({ eventList }) {
    console.log(eventList);
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                events={eventList}
                headerToolbar={false}
                aspectRatio={2}
                dayHeaderFormat={{ weekday: 'long' }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
            />
        </>
    )
}

