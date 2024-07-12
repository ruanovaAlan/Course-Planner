// import './PWABadge.css'

// import { useRegisterSW } from 'virtual:pwa-register/react'

// function PWABadge() {
//   // check for updates every hour
//   const period = 60 * 60 * 1000

//   const {
//     offlineReady: [offlineReady, setOfflineReady],
//     needRefresh: [needRefresh, setNeedRefresh],
//     updateServiceWorker,
//   } = useRegisterSW({
//     onRegisteredSW(swUrl, r) {
//       if (period <= 0) return
//       if (r?.active?.state === 'activated') {
//         registerPeriodicSync(period, swUrl, r)
//       }
//       else if (r?.installing) {
//         r.installing.addEventListener('statechange', (e) => {
//           /** @type {ServiceWorker} */
//           const sw = e.target
//           if (sw.state === 'activated')
//             registerPeriodicSync(period, swUrl, r)
//         })
//       }
//     },
//   })

//   function close() {
//     setOfflineReady(false)
//     setNeedRefresh(false)
//   }

//   return (
//     <div className="PWABadge" role="alert" aria-labelledby="toast-message">
//       { (offlineReady || needRefresh)
//       && (
//         <div className="PWABadge-toast">
//           <div className="PWABadge-message">
//             { offlineReady
//               ? <span id="toast-message">App ready to work offline</span>
//               : <span id="toast-message">New content available, click on reload button to update.</span>}
//           </div>
//           <div className="PWABadge-buttons">
//             { needRefresh && <button className="PWABadge-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button> }
//             <button className="PWABadge-toast-button" onClick={() => close()}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default PWABadge

// /**
//  * This function will register a periodic sync check every hour, you can modify the interval as needed.
//  * @param period {number}
//  * @param swUrl {string}
//  * @param r {ServiceWorkerRegistration}
//  */
// function registerPeriodicSync(period, swUrl, r) {
//   if (period <= 0) return

//   setInterval(async () => {
//     if ('onLine' in navigator && !navigator.onLine)
//       return

//     const resp = await fetch(swUrl, {
//       cache: 'no-store',
//       headers: {
//         'cache': 'no-store',
//         'cache-control': 'no-cache',
//       },
//     })

//     if (resp?.status === 200)
//       await r.update()
//   }, period)
// }

import React, { useEffect, useState } from 'react';
import './PWABadge.css';
import { useRegisterSW } from 'virtual:pwa-register/react';

function PWABadge() {
  const period = 60 * 60 * 1000; // check for updates every hour
  const [installEvent, setInstallEvent] = useState(null); // Estado para guardar el evento beforeinstallprompt

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    // Otras configuraciones y manejadores...
  });

  useEffect(() => {
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault(); // Prevenir que el navegador muestre el prompt automáticamente
      setInstallEvent(e); // Guardar el evento para usarlo más tarde
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  function close() {
    setOfflineReady(false);
    setNeedRefresh(false);
    setInstallEvent(null); // Limpiar el evento después de cerrar el toast
  }

  function handleInstall() {
    if (installEvent) {
      installEvent.prompt(); // Mostrar el prompt de instalación
      installEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setInstallEvent(null); // Limpiar el evento después de manejar la respuesta del usuario
      });
    }
  }

  return (
    <div className="PWABadge" role="alert" aria-labelledby="toast-message">
      {(offlineReady || needRefresh || installEvent) && (
        <div className="PWABadge-toast rounded-lg bg-opacity-35">
          <div className="PWABadge-message mb-3 font-semibold">
            {offlineReady ? (
              <span id="toast-message">App ready to work offline</span>
            ) : needRefresh ? (
              <span id="toast-message">New content available, click on reload button to update.</span>
            ) : (
              <span id="toast-message">Install this app for a better experience.</span>
            )}
          </div>
          <div className="PWABadge-buttons flex font-semibold">
            {needRefresh && <button className="PWABadge-toast-button rounded-lg w-1/2 hover:bg-blue-500 shadow-sm" onClick={() => updateServiceWorker(true)}>Reload</button>}
            {installEvent && <button className="PWABadge-toast-button rounded-lg w-1/2 hover:bg-[#e386f0]" onClick={handleInstall}>Install</button>}
            <button className="PWABadge-toast-button rounded-lg w-1/2 hover:bg-red-400 shadow-sm" onClick={() => close()}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PWABadge;