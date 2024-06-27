import cerrarIcon from '../assets/close-icon.svg'
import EditInputs from './EditInputs'


export default function EditEventModal({ selectedEvent, setSelectedEvent, onEdit }) {

  return (
    <>
      {
        selectedEvent &&
        <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#03122FC2]'>
          <dialog
            open={!!selectedEvent}
            onClose={() => setSelectedEvent(null)}
            className='flex flex-col justify-between items-center max-h-[90%] w-[90%]  bg-[#03122F]
            top-[5%] md:top-[20%] rounded-xl shrink-0  px-2 md:px-6 py-12 border-[5px] border-[#6BD1FF]'
          >
            <h1 className='text-white mb-6 text-4xl md:text-5xl font-bold'>Editar Evento:</h1>
            <form method='dialog'>
              <button formMethod='dialog' className='absolute size-10 top-2 right-1'>
                <img src={cerrarIcon} alt='Ícono de cerrar' />
              </button>
            </form>
            <EditInputs editingEvent={selectedEvent} onSubmitEdit={setSelectedEvent} onEdit={onEdit} />
          </dialog>
        </div>
      }
    </>
  )
}