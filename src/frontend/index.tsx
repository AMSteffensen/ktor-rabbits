import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [rabbits, setRabbits] = useState<Rabbit[]>([]);

    useEffect(() => {
        fetch('http://0.0.0.0:8080/randomrabbit')
            .then(response => response.json())
            .then(data => {
                setRabbits([data]);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);



    return (
        <div>
            <h1>Random Rabbit</h1>
            {rabbits.map(rabbit => (
                <div key={rabbit.name}>
                    <h2>{rabbit.name}</h2>
                    <img src={rabbit.imageUrl} alt={rabbit.name} />
                    <p>{rabbit.description}</p>
                </div>
            ))}
        </div>
    );
};

interface Rabbit {
    name: string;
    description: string;
    imageUrl: string;
}

ReactDOM.render(<App />, document.getElementById('root'));
