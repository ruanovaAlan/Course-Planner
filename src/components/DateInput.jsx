import { useState, useRef } from "react";
import Select from 'react-select';
import { randomColor } from '../utility/RandomColor.js'
import { weekDays, select_styles } from '../utility/SelectConfig.js'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";


export default function DateInput({ onAddEvent }) {
    const [event, setEvent] = useState({
        title: '',
        daysOfWeek: [],
        startTime: '',
        endTime: '',
        color: randomColor(),
        id: uuidv4()
    })
    const endTimeRef = useRef()

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

    const handleTimeInput = () => {
        if (event.endTime) {
            endTimeRef.current.setCustomValidity('')

            if (event.endTime < event.startTime) {
                const time = event.endTime = ''
                setEvent(prev => {
                    return { ...prev, endTime: time }
                })
                endTimeRef.current.setCustomValidity('El tiempo inicial debe ser mayor al tiempo final.')
            }
            endTimeRef.current.reportValidity()
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const daysArray = event.daysOfWeek.map(day => +day.value)

        const newEvent = {
            title: event.title,
            daysOfWeek: daysArray,
            startTime: event.startTime,
            endTime: event.endTime,
            color: event.color,
            id: event.id
        }

        onAddEvent(newEvent)
        setEvent({
            title: '',
            daysOfWeek: [],
            startTime: '',
            endTime: '',
            color: randomColor(),
            id: uuidv4()
        })


    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto xs:w-[90%] md:w-5/6 bg-white bg-opacity-40  rounded-xl py-4 px-6 shadow-lg">
            <section className="flex  flex-col md:flex-row items-center gap-4 justify-between 
         font-body ">
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
                        <input type="time" id="endTime" ref={endTimeRef} onChange={handleChange} onBlur={handleTimeInput} name="endTime" value={event.endTime}
                            className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                            min="07:00" max="20:30"
                            required
                        />

                    </div>
                </div>

                <button type="submit" className="flex items-center" >
                    <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }} className="lets-icons--check-fill"></motion.span>
                </button>
            </section>

        </form>
    )
}
