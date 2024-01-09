import Header from './components/Header'
import Calendar from './components/Calendar'
import DateInput from './components/DateInput'
import EventList from './components/EventList'

import { useState } from 'react'

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  }

  console.log(events);

  return (
    <>
      <Header />
      <DateInput onAddEvent={addEvent} />
      <section className='w-3/4 mx-auto mt-8 p-2 bg-stone-950 opacity-50 rounded-lg'>
        <EventList events={events} />
      </section>
      <section className='size-4/5 mx-auto mt-8 bg-white opacity-70 '>
        <Calendar />
      </section>
    </>
  )
}

export default App


