import logo from '../assets/calendar.svg'
const SettingsLogo = <svg xmlns="http://www.w3.org/2000/svg" className="w-30 fill-gray-700 hover:fill-black hover:scale-125 transition ease-in-out duration-300" width="2.5rem" height="2.5rem" viewBox="0 0 24 24">
    <rect width="12" height="12" fill="none" />
    <path d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" />
</svg>

export default function Header() {
    return (
        <div className="flex items-center mx-auto gap-6 mt-0 md:mt-8 mb-12 w-[90%]">
            <img className="w-16 h-auto hidden md:flex" src={logo} alt="App Logo" />
            <h1 className="text-center text-4xl font-title text-blue-950 hidden md:flex">Planificador Semanal</h1>
            <div className='absolute end-4 md:end-20 hidden'>{SettingsLogo}</div>
        </div>
    );
}