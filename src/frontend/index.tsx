import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [rabbit, setRabbit] = useState<Rabbit | null>(null);

    useEffect(() => {
        fetchRandomRabbit();
    }, []);

    const fetchRandomRabbit = () => {
        fetch('http://0.0.0.0:8080/randomrabbit')
            .then(response => response.json())
            .then(data => {
                setRabbit(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Random Rabbit</h1>
            {rabbit && (
                <div style={styles.rabbitContainer}>
                    <h2>{rabbit.name}</h2>
                    <img
                        src={rabbit.imageUrl}
                        alt={rabbit.name}
                        style={styles.rabbitImage}
                    />
                    <p style={styles.rabbitDescription}>{rabbit.description}</p>
                </div>
            )}
            <button style={styles.refreshButton} onClick={fetchRandomRabbit}>
                Refresh
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    rabbitContainer: {
        marginBottom: '30px',
    },
    rabbitImage: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    rabbitDescription: {
        fontSize: '16px',
        marginTop: '10px',
    },
    refreshButton: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#61dafb',
        color: 'white',
        cursor: 'pointer',
    },
};

interface Rabbit {
    name: string;
    description: string;
    imageUrl: string;
}

ReactDOM.render(<App />, document.getElementById('root'));
