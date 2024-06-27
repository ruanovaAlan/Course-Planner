import trashIcon from '../assets/trash-icon.svg';
import editIcon from '../assets/edit-icon.svg';

export default function EventList({ events, onDeleteEvent, onSelect }) {

    const dayName = { 0: 'Do', 1: 'Lu', 2: 'Ma', 3: 'Mi', 4: 'Ju', 5: 'Vi', 6: 'Sá' }

    const handleDelete = (index) => {
        onDeleteEvent(index);
    }

    const renderEvents = (
        <ul role="list" className="text-white divide-y divide-gray-100">
            {events.map((event) => (
                <li key={event.id} className="flex justify-between items-center gap-x-2 py-3 font-body">
                    <div className="min-w-0 flex-auto ms-4 ">
                        <p className="text-md font-semibold leading-6 ">{event.title}</p>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
                        <p className="text-md leading-6 ">Día(s): {event.daysOfWeek.map((day) => dayName[day]).join(', ')}</p>
                        <p className="mt-1 text-sm leading-5 text-gray-300">Duración: {event.startTime} - {event.endTime}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={() => onSelect(event)}
                            className='flex justify-end'
                        >
                            <img src={editIcon} alt="Eliminar evento" className='size-3/5 hover:bg-blue-600 p-2 rounded-lg' />
                        </button>

                        <button onClick={() => handleDelete(event.id)}
                            className=''
                        >
                            <img src={trashIcon} alt="Eliminar evento" className='size-3/5 hover:bg-red-600 rounded-lg' />
                        </button>
                    </div>
                </li>
            ))}
        </ul >
    )

    return (
        <>
            {!events.length ? <p className="text-2xl text-center text-white font-body font-bold">No hay eventos</p> : renderEvents}
        </>
    )
}


