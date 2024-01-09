import Header from './components/Header'
import Calendar from './components/Calendar'
import DateInput from './components/DateInput'
import EventList from './components/EventList'

import { useState } from 'react'

function App() {

  const [events, setEvents] = useState(() => {
    const eventsFromStorage = window.localStorage.getItem('events');
    return eventsFromStorage ? JSON.parse(eventsFromStorage) : []
  })

  const addEvent = (newEvent) => {
    setEvents(prevEvents => {
      const updatedEvents = [...prevEvents, newEvent];
      window.localStorage.setItem('events', JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  }

  const handleDeleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
    window.localStorage.setItem('events', JSON.stringify(newEvents));
  }

  const clearEvents = () => {
    setEvents([]);
    window.localStorage.removeItem('events');
  }


  return (
    <>
      <Header />

      <DateInput onAddEvent={addEvent} />

      <div className='mt-6 w-5/6 mx-auto'>
        <button onClick={clearEvents}
          className="h-10 rounded-md bg-sky-950 px-3.5 py-1.5 text-sm font-medium 
        text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-body"
        >Limpiar Eventos</button>
      </div>

      <section className='w-4/5 mx-auto mt-6 p-2 bg-stone-950 opacity-50 rounded-md'>
        <EventList events={events} onDeleteEvent={handleDeleteEvent} />
      </section>

      <section className='xs:h-auto xs:text-sm  sm:size-11/12 lg:size-5/6 mx-auto mt-6 
      xl:mb-6 xs:mb-6 rounded-lg bg-white opacity-80 font-body shadow-xl'>
        <Calendar eventList={events} />
      </section>
    </>
  )
}

export default App


