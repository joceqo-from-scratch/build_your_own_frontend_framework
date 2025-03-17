export function addEventListener(eventName, handler, el) {
  // Function that wraps the original handler
   function boundHandler(event) {
  // -- snip -- //
 
     handler(event)
   }
 
   el.addEventListener(eventName, boundHandler)
 
   return boundHandler
 }

export function addEventListeners(listeners = {}, el) {
  const addedListeners = {}

  Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListener(eventName, handler, el)
    addedListeners[eventName] = listener
  })

  return addedListeners
}

export function removeEventListeners(listeners = {}, el) {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    el.removeEventListener(eventName, handler)
  })
}