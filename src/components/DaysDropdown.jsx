// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'


// export default function DaysDropdown({ children }) {

//     return (
//         <Menu as="div" className="relative inline-block text-left">
//             <div>
//                 <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//                     Selecciona
//                     <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </Menu.Button>
//             </div>

//             <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//             >
//                 <Menu.Items className="origin-top-right absolute  mt-2 h-auto w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                     {children}
//                 </Menu.Items>
//             </Transition >
//         </Menu >
//     )
// }

import { Fragment, React } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function ChildComponent({ close }) {
    const handleClick = () => {
        // Do something when an option is selected...
        close();
    };

    return (
        <div onClick={handleClick}>
            {/* Option content */}
        </div>
    );
}

export default function DaysDropdown({ children }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open, actions }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Selecciona
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute mt-2 h-auto w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            {React.cloneElement(children, { close: actions.close })}
                        </Menu.Items>
                    </Transition >
                </>
            )}
        </Menu >
    )
}