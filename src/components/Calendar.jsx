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
                    {
                        title: 'Hola',
                        daysOfWeek: [0],
                        startTime: '10:00',
                        endTime: '13:00'
                    }
                ]}
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