import logo from '../assets/calendar.svg'

export default function Header() {
    return (
        <div className="flex flex-col items-center mt-8 mb-8">
            <img className="w-44 h-auto mb-6" src={logo} alt="App Logo" />
            <h1 className="text-center text-6xl font-title text-blue-950">Planificador Semanal</h1>
        </div>
    );
}