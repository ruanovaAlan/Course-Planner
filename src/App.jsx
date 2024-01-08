import Header from './components/Header'
import Calendar from './components/Calendar'
import DateInput from './components/DateInput'

import { useState } from 'react'

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  }

  return (
    <>
      <Header />
      <DateInput onAddEvent={addEvent} />
      <section className='size-4/5 mx-auto mt-24 bg-sky-700'>
        <Calendar />
      </section>
    </>
  )
}

export default App


