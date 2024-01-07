import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar() {
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                events={[
                    { title: 'event 1', date: '2024-01-07T12:00:00' },
                    { title: 'event 2', date: '2024-01-08' }
                ]}
                headerToolbar={false}
                aspectRatio={2.5}
                dayHeaderFormat={{ weekday: 'long' }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
            />
        </>
    )
}