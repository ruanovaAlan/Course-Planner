import { useState } from "react";
import Select from 'react-select';
import { weekDays, select_styles } from '../utility/SelectConfig.js'
import { motion } from "framer-motion";


export default function EditInputs({ onEdit, editingEvent, onSubmitEdit }) {
  const [event, setEvent] = useState({
    title: editingEvent.title,
    daysOfWeek: editingEvent.daysOfWeek.map(day => ({ value: day.toString(), label: weekDays.find(wd => wd.value === day.toString()).label })),
    startTime: editingEvent.startTime,
    endTime: editingEvent.endTime,
    color: editingEvent.color,
    id: editingEvent.id
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSelectedDays = (selectedOption) => {
    setEvent(prev => {
      return { ...prev, daysOfWeek: selectedOption }
    }
    )
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const daysArray = event.daysOfWeek.map(day => +day.value)

    const updatedEvent = {
      title: event.title,
      daysOfWeek: daysArray,
      startTime: event.startTime,
      endTime: event.endTime,
      color: event.color,
      id: event.id
    }
    onEdit(updatedEvent)
    onSubmitEdit(null)

  }

  return (
    <form onSubmit={handleSubmit} className="flex  flex-col md:flex-row items-center gap-4 justify-between 
         bg-white xs:w-[90%] md:w-full bg-opacity-60 mx-auto rounded-xl py-4 px-6 font-body shadow-lg">

      <div className="w-full md:w-[30%]">
        <label htmlFor="title" className="mb-3 text-2xl text-center block font-bold">Título</label>
        <input onChange={handleChange} name="title" value={event.title} type="text" id="title"
          placeholder="Agrega un evento..."
          className="rounded-md p-2 w-full bg-slate-900 bg-opacity-50 text-white"
          required
        />
      </div>

      <div className="w-full md:w-[30%]">
        <label htmlFor="day-of-week" className="mb-3 text-2xl text-center block font-bold">Día(s)</label>
        <Select
          isMulti
          name="daysOfWeek"
          options={weekDays}
          value={event.daysOfWeek}
          onChange={handleSelectedDays}
          placeholder="Selecciona día(s)"
          required
          className="rounded-md w-full text-white"
          styles={select_styles()}
        />
      </div>

      <div className="flex gap-8 md:gap-6 ">
        <div>
          <label htmlFor="startTime" className="mb-3 text-2xl text-center block font-bold">Inicio</label>
          <input type="time" id="startTime" onChange={handleChange} name="startTime" value={event.startTime}
            className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
            min="07:00" max="20:30"
            required
          />
        </div>

        <div>
          <label htmlFor="endTime" className="mb-3 text-2xl text-center block font-bold">Fin</label>
          <input type="time" id="endTime" onChange={handleChange} name="endTime" value={event.endTime}
            className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
            min="07:00" max="20:30"
            required
          />
        </div>
      </div>

      <button type="submit" className="flex items-center" >
        <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }} className="lets-icons--check-fill"></motion.span>
      </button>
    </form>
  )
}