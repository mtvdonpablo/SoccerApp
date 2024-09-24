import React, { createContext, useState } from 'react';

// Create a Context
export const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
    const [players, setPlayers] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <AppContext.Provider value={{ selectedAgeGroup, setSelectedAgeGroup, players, setPlayers, selectedSkill, setSelectedSkill }}>
            {children}
        </AppContext.Provider>
    );
};
