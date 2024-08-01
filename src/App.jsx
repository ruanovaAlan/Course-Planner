import Header from './components/Header'
import Calendar from './components/Calendar'
import DateInput from './components/DateInput'
import EventList from './components/EventList'
import Footer from './components/Footer'
import EditEventModal from './components/EditEventModal'
import PWABadge from './PWABadge'
import generatePDF from './utility/GeneratePDF'

import { useState, useEffect, useRef } from 'react'

function App() {
  const [events, setEvents] = useState([]);
  const [pdfWindow, setPdfWindow] = useState(false)
  const calendarRef = useRef()

  useEffect(() => {
    const storedEvents = JSON.parse(window.localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const addEvent = (NewEvent) => {
    setEvents(prevEvents => {
      const updatedEvents = [...prevEvents, NewEvent];
      window.localStorage.setItem('events', JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  }

  const editEvent = (updatedEvent) => {
    setEvents(prevEvents => {
      const updatedEvents = prevEvents.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
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

  const handleGeneratePDF = () => {
    generatePDF(calendarRef, setPdfWindow)
  }


  return (
    <>
      <Header />

      <DateInput onAddEvent={addEvent} onEditEvent={editEvent} />

      <div className='mt-6 w-[90%] md:w-5/6 mx-auto'>
        <button onClick={clearEvents}
          className=" rounded-md bg-sky-950 px-5 py-3 text-md font-medium 
        text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-body  shadow-md"
        >Limpiar Eventos</button>
      </div>

      <section className='w-5/6 md:w-4/5 mx-auto mt-6 p-2 bg-stone-950 opacity-50 rounded-md'>
        <EventList events={events} onDeleteEvent={handleDeleteEvent} onSelect={setSelectedEvent} />
      </section>

      <div className='mt-6 w-[90%] md:w-5/6 mx-auto flex justify-start'>
        <button className="rounded-md bg-sky-950 px-5 py-3 text-md font-medium 
        text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-body  shadow-md" onClick={handleGeneratePDF}>Generar PDF</button>
      </div>

      <section className='xs:h-auto xs:text-sm xs:size-[90%] lg:size-5/6 mx-auto mt-6 
      xl:mb-6 xs:mb-6 rounded-lg bg-white opacity-80 font-body shadow-xl overflow-x-auto'>
        <Calendar eventList={events} ref={calendarRef} pdfWindow={pdfWindow} />
      </section>

      <PWABadge />
      <section className='my-6 flex justify-end pe-8'>
        <Footer />
      </section>
      <EditEventModal selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} onEdit={editEvent} />

    </>
  )
}

export default App


