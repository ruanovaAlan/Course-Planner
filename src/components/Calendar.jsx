import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'

import { useAspectRatio } from '../hooks/useAspectRatio'

export default function Calendar({ eventList }) {

    const { aspectRatio } = useAspectRatio();

    return (
        <div style={{ minWidth: '600px' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                events={eventList}
                headerToolbar={false}
                aspectRatio={aspectRatio}
                dayHeaderFormat={{ weekday: 'long' }}
                selectMirror={true}
                dayMaxEvents={true}
                slotMinTime="07:00:00"
                slotMaxTime="21:00:00"
                allDaySlot={false}
                locale={esLocale}
                handleWindowResize={true}
                stickyFooterScrollbar={true}

            />
        </div>
    )
}

