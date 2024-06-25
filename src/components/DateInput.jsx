import { useState } from "react";
import Select from 'react-select';
import { randomColor } from '../utility/RandomColor.js'
import { weekDays, select_styles } from '../utility/SelectConfig.js'

export default function DateInput({ onAddEvent }) {
    const [event, setEvent] = useState({
        title: '',
        daysOfWeek: [],
        startTime: '',
        endTime: '',
        color: randomColor()
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

        const newEvent = {
            title: event.title,
            daysOfWeek: daysArray,
            startTime: event.startTime,
            endTime: event.endTime,
            color: randomColor()
        }
        onAddEvent(newEvent);

        setEvent({
            title: '',
            daysOfWeek: [],
            startTime: '',
            endTime: '',
            color: randomColor()
        })

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-between 
        bg-white bg-opacity-50 w-5/6 mx-auto rounded-md py-4 px-6 font-body shadow-lg">
            <div>
                <label htmlFor="title" className="mb-3 text-xl text-center block font-bold">Título</label>
                <input onChange={handleChange} name="title" value={event.title} type="text" id="title"
                    placeholder="Agrega un evento..."
                    className="rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                    required
                />
            </div>

            <div className="w-[30%]">
                <label htmlFor="day-of-week" className="mb-3 text-xl text-center block font-bold">Día(s)</label>
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

            <div>
                <label htmlFor="startTime" className="mb-3 text-xl text-center block font-bold">Inicio</label>
                <input type="time" id="startTime" onChange={handleChange} name="startTime" value={event.startTime}
                    className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                    min="07:00" max="20:30"
                    required
                />
            </div>

            <div>
                <label htmlFor="endTime" className="mb-3 text-xl text-center block font-bold">Fin</label>
                <input type="time" id="endTime" onChange={handleChange} name="endTime" value={event.endTime}
                    className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                    min="07:00" max="20:30"
                    required
                />
            </div>

            <button type="submit" className="h-10 w-10 rounded-full bg-sky-950  text-2xl font-extrabold
            text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-lime-500">
                +
            </button>
        </form>
    )
}