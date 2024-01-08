export default function DateInput() {
    return (
        <section className="flex items-center justify-evenly bg-white bg-opacity-50 w-3/4 mx-auto rounded-md p-4">
            <div>
                <label htmlFor="title" className="mb-3 text-2xl text-center block">Título</label>
                <input type="text" id="title"
                    placeholder="Agrega un evento..."
                    className="text-xl rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                />
            </div>

            <div>
                <label htmlFor="day-of-week" className="mb-3 text-2xl text-center block">Día de la semana</label>
                <select name="" id="day-of-week" className="text-xl w-44 rounded-md p-2 bg-slate-900 bg-opacity-50 text-white">
                    <option value="">Lunes</option>
                    <option value="">Martes</option>
                    <option value="">Miércoles</option>
                    <option value="">Jueves</option>
                    <option value="">Viernes</option>
                    <option value="">Sábado</option>
                    <option value="">Domingo</option>
                </select>
            </div>
            <div>
                <label htmlFor="time" className="mb-3 text-2xl text-center block">Hora</label>
                <input type="time" id="time"
                    className="text-xl rounded-md p-2 bg-slate-900 bg-opacity-50 text-white"
                />
            </div>
            <button type="submit" className="h-10 rounded-md bg-sky-950 px-3.5 py-1.5 text-xl font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Agregar
            </button>
        </section>

    )
}