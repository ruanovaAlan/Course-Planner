import logo from '../assets/calendar.svg'

export default function Header() {
    return (
        <div className="flex flex-col items-center mt-8 mb-8">
            <img className="w-44 h-auto mb-4" src={logo} alt="App Logo" />
            <h1 className="text-center text-xl md:text-4xl">Planificador Semanal</h1>
        </div>
    );
}