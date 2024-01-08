import { useRef } from "react";

export default function DateInput({ onAddEvent }) {
    const titleRef = useRef();
    const dayOfWeekRef = useRef();
    const timeRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            title: titleRef.current.value,
            dayOfWeek: dayOfWeekRef.current.value,
            time: timeRef.current.value
        }
        onAddEvent(newEvent);
        console.log(newEvent);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-evenly bg-white bg-opacity-50 w-3/4 mx-auto rounded-md p-4">
            <div>
                <label htmlFor="title" className="mb-3 text-2xl text-center block">Título</label>
                <input ref={titleRef} type="text" id="title"
                    placeholder="Agrega un evento..."
                    className="text-xl rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                />
            </div>

            <div>
                <label htmlFor="day-of-week" className="mb-3 text-2xl text-center block">Día de la semana</label>
                <select ref={dayOfWeekRef} name="" id="day-of-week" className="text-xl w-44 rounded-md p-2 bg-slate-900 bg-opacity-50 text-white">
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
                <label htmlFor="time" className="mb-3 text-2xl text-center block">Hora</label>
                <input ref={timeRef} type="time" id="time"
                    className="text-xl rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                />
            </div>
            <button type="submit" className="h-10 rounded-md bg-sky-950 px-3.5 py-1.5 text-xl font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Agregar
            </button>
        </form>
    )
}