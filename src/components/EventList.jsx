
export default function EventList({ events, onDeleteEvent }) {

    const dayName = { 0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sábado' }

    const handleDelete = (index) => {
        onDeleteEvent(index);
    }

    const renderEvents = (
        <ul role="list" className="text-white divide-y divide-gray-100">
            {events.map((event, index) => (
                <li key={index} className="flex justify-between gap-x-6 py-3">
                    <div className="min-w-0 flex-auto ms-4">
                        <p className="text-md font-semibold leading-6 ">{event.title}</p>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end me-4">
                        <p className="text-md leading-6 ">Día: {dayName[event.daysOfWeek]}</p>
                        <p className="mt-1 text-sm leading-5 text-gray-300">Duración: {event.startTime} - {event.endTime}</p>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(index)}>❌</button>
                    </div>
                </li>
            ))}
        </ul >
    )

    return (
        <>
            {!events.length ? <p className="text-2xl text-center text-white">No hay eventos</p> : renderEvents}
        </>
    )
}


