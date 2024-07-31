import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

import { forwardRef } from 'react';
import { useAspectRatio } from '../hooks/useAspectRatio';

const Calendar = forwardRef(({ eventList, pdfWindow }, ref) => {
    const { aspectRatio } = useAspectRatio();
    const CalendarAspectRatio = pdfWindow ? '1' : aspectRatio

    return (
        <div style={{ minWidth: '600px' }} ref={ref}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                events={eventList}
                headerToolbar={false}
                aspectRatio={CalendarAspectRatio}
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
    );
});

export default Calendar;
