// src/components/NotesList.js
import React from 'react';

const NotesList = ({ notes, onDelete }) => {
    // Define styles
    const containerStyle = {
        textAlign: 'center', // Center the text
        margin: '20px',      // Margin around the container
    };

    const imageStyle = {
        width: '200px',      // Adjust the width as needed
        height: 'auto',      // Maintain aspect ratio
        margin: '20px 0',    // Space around the image
    };

    return (
        <div style={containerStyle}>
            <h2>Your Notes</h2>
            <img src="/your-image.jpg" alt="Notes" style={imageStyle} />
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
