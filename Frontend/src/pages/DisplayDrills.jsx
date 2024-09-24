import './DisplayDrills.css';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';  // Import the context

function DisplayDrills() {
    const { selectedAgeGroup, players, selectedSkill } = useContext(AppContext);  // Access values from context
    const [drills, setDrills] = useState([]);  // State to store the drills
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);  // Error state

    // Function to fetch drills from the backend
    const fetchDrills = async () => {
        setLoading(true);
        setError(null);  // Reset error

        try {
            const response = await fetch(`/api/drills?selectedAgeGroup=${selectedAgeGroup}&players=${players.length}&selectedSkill=${selectedSkill}`);
            const data = await response.json();

            if (response.ok) {
                setDrills(data.data);  // Set the drills from response
            } else {
                setError(data.message || 'Error fetching drills');
            }
        } catch (err) {
            setError('Failed to fetch drills');
        } finally {
            setLoading(false);  // Stop loading once the data is fetched
        }
    };

    useEffect(() => {
        fetchDrills();  // Fetch the drills when the component mounts or when the context changes
    }, [selectedAgeGroup, players, selectedSkill]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="drillsContainer">
                <h1>Available Drills</h1>
                {/* Render the drills in a grid */}
                {drills.length > 0 ? (
                    <div className="drillsGrid">
                        {drills.map(drill => (
                            <div className="drillTile" key={drill._id}>
                                <a href={drill.videoLink} target="_blank" rel="noopener noreferrer">
                                    <img src={drill.videoThumbnail} alt={`${drill.name} thumbnail`} />
                                </a>
                                <div className="drillDetails">
                                    <h3>{drill.name}</h3>
                                    <p>Min Players: {drill.minPlayers}</p>
                                    <p>Max Players: {drill.maxPlayers}</p>
                                    <p>Skill: {selectedSkill}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No drills available for the selected options.</p>
                )}
            </div>
        </>
    );
}

export default DisplayDrills;
