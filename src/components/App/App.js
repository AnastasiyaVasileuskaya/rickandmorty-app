import Card from '../Card/Card'
import Header from '../Header/Header'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [characters, setCharacters] = useState([])
    const [userInput, setUserInput] = useState('')
    const [filteredStatus, setFilteredStatus] = useState('unknown')

    useEffect(() => {
        getAllCharacters()
    }, [])

    function getAllCharacters(
        url = 'https://rickandmortyapi.com/api/character'
    ) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCharacters((oldState) => [...oldState, ...data.results])

                const nextUrl = data.info.next
                nextUrl && getAllCharacters(nextUrl)
            })
    }

    return (
        <div className="App">
            <Header
                colortext="white"
                color="cornflowerblue"
                title="Rick and Morty App"
            />
            <button
                onClick={() => setFilteredStatus('Alive')}
                disabled={filteredStatus === 'Alive'}
            >
                Alive
            </button>
            <button
                onClick={() => setFilteredStatus('Dead')}
                disabled={filteredStatus === 'Dead'}
            >
                Dead
            </button>
            <button
                onClick={() => setFilteredStatus('unknown')}
                disabled={filteredStatus === 'unknown'}
            >
                Unknown
            </button>

            <input
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="Filter name"
            />

            {characters
                .filter((character) => character.status === filteredStatus)
                .filter((character) =>
                    character.name
                        .toLowerCase()
                        .includes(userInput.toLowerCase())
                )
                .map((character) => (
                    <Card
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                        status={character.status}
                        gender={character.gender}
                        origin={character.origin.name}
                        location={character.location.name}
                    />
                ))}
        </div>
    )
}

export default App
