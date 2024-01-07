import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Calendar() {
    return (
        <>
            <div className='size-4/5 m-auto' >
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridWeek"
                    events={[
                        { title: 'event 1', date: '2024-01-07' },
                        { title: 'event 2', date: '2024-01-08' }
                    ]}
                    headerToolbar={false}
                    aspectRatio={1.5}


                />
            </div>
        </>
    )
}