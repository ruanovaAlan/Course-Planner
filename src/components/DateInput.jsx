import { useRef } from "react";
import { randomColor } from '../utility/RandomColor.js'

export default function DateInput({ onAddEvent }) {
    const titleRef = useRef();
    const daysOfWeekRef = useRef();
    const startTimeRef = useRef();
    const endTimeRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            title: titleRef.current.value,
            daysOfWeek: [+daysOfWeekRef.current.value],
            startTime: startTimeRef.current.value,
            endTime: endTimeRef.current.value,
            color: randomColor()
        }
        onAddEvent(newEvent);

        titleRef.current.value = '';
        daysOfWeekRef.current.value = '1';
        startTimeRef.current.value = '';
        endTimeRef.current.value = '';

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-evenly 
        bg-white bg-opacity-50 w-5/6 mx-auto rounded-md p-4 font-body shadow-lg">
            <div>
                <label htmlFor="title" className="mb-3 text-xl text-center block font-bold">Título</label>
                <input ref={titleRef} type="text" id="title"
                    placeholder="Agrega un evento..."
                    className="rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                    required
                />
            </div>

            <div>
                <label htmlFor="day-of-week" className="mb-3 text-xl text-center block font-bold">Día</label>
                <select ref={daysOfWeekRef} name="" id="day-of-week"
                    className=" rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                    required
                >
                    <option value="1">Lunes</option>
                    <option value="2">Martes</option>
                    <option value="3">Miércoles</option>
                    <option value="4">Jueves</option>
                    <option value="5">Viernes</option>
                    <option value="6">Sábado</option>
                    <option value="0">Domingo</option>
                </select>
            </div>
            <div>
                <label htmlFor="startTime" className="mb-3 text-xl text-center block font-bold">Inicio</label>
                <input ref={startTimeRef} type="time" id="startTime"
                    className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                    min="07:00" max="20:30"
                    required
                />
            </div>
            <div>
                <label htmlFor="endTime" className="mb-3 text-xl text-center block font-bold">Fin</label>
                <input ref={endTimeRef} type="time" id="endTime"
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