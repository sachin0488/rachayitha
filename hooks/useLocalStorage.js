import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      // Get from local storage by key
      const item = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))

      return item
    } catch (error) {
      // If error also return initialValue
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, typeof valueToStore == 'string' ? valueToStore : JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
