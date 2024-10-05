import React, { useEffect } from 'react';

function Loader() {
    useEffect(() => {
        // Dynamically load the spinner script when the component mounts
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/npm/ldrs/dist/auto/dotSpinner.js';
        document.body.appendChild(script);
    }, []);

    return (
        <div style={styles.loaderContainer}>
            <l-dot-spinner
                size="40"
                speed="0.9"
                color="black"
                aria-label="Loading"
            ></l-dot-spinner>
        </div>
    );
}

const styles = {
    loaderContainer: {
        position: 'relative ',         // Positioned relative to its nearest positioned ancestor
        top: 0,                       // Start at the top
        left: 0,                      // Start at the left
        width: '100%',               // Full width of the viewport
        height: '350px',              // Full height of the viewport
        display: 'flex',              // Center the spinner
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius : '15px',
        // Semi-transparent dark background
        zIndex: 10,  
         
    }
};

export default Loader;
