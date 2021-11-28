import React, { useState, useMemo, createContext, useContext } from 'react'

const ReadContext = createContext()

function useRead() {
    const context = useContext(ReadContext)
    if (!context) {
        throw new Error(`useRead must be used within a CountProvider`)
    }
    return context
}

function ReadProvider(props) {
    const [readCounts, setReadCounts] = useState([])
    const value = useMemo(() => [readCounts, setReadCounts], [readCounts])
    return <ReadContext.Provider value={value} {...props} />
}

export { ReadProvider, useRead }