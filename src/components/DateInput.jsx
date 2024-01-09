import { useRef } from "react";

export default function DateInput({ onAddEvent }) {
    const titleRef = useRef();
    const dayOfWeekRef = useRef();
    const startTimeRef = useRef();
    const endTimeRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            title: titleRef.current.value,
            dayOfWeek: dayOfWeekRef.current.value,
            startTime: startTimeRef.current.value,
            endTime: endTimeRef.current.value,
        }
        onAddEvent(newEvent);
        console.log(newEvent);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-evenly bg-white bg-opacity-50 w-5/6 mx-auto rounded-md p-4">
            <div>
                <label htmlFor="title" className="mb-3 text-xl text-center block">Título</label>
                <input ref={titleRef} type="text" id="title"
                    placeholder="Agrega un evento..."
                    className="rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                />
            </div>

            <div>
                <label htmlFor="day-of-week" className="mb-3 text-xl text-center block">Día</label>
                <select ref={dayOfWeekRef} name="" id="day-of-week" className=" rounded-md p-2 bg-slate-900 bg-opacity-50 text-white">
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
                <label htmlFor="time" className="mb-3 text-xl text-center block">Inicio</label>
                <input ref={startTimeRef} type="time" id="time"
                    className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                />
            </div>
            <div>
                <label htmlFor="time" className="mb-3 text-xl text-center block">Fin</label>
                <input ref={endTimeRef} type="time" id="time"
                    className="rounded-md p-2 text-sm bg-slate-900 bg-opacity-50 text-white"
                />
            </div>
            <button type="submit" className="h-10 rounded-md bg-sky-950 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Agregar
            </button>
        </form>
    )
}