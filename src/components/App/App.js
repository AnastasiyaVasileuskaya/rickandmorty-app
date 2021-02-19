import Card from '../Card/Card'
import Header from '../Header/Header'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [characters, setCharacters] = useState([])
    const [userInput, setUserInput] = useState('')
    const [filteredStatus, setFilteredStatus] = useState('all')
    const [currentPage, setCurrentPage] = useState('Characters')

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
                colortext="black"
                color="white"
                title="The Rick and Morty App"
            />
            <Characters hidden={currentPage} />
            <Location />
            <Episode />
            <Navigation />
            <label>
                <input
                    type="radio"
                    value="Human"
                    checked={filteredStatus === 'Human'}
                    onChange={() => setFilteredStatus('Human')}
                />
                Human
            </label>
            <label>
                <input
                    type="radio"
                    value="Alien"
                    checked={filteredStatus === 'Alien'}
                    onChange={() => setFilteredStatus('Alien')}
                />
                Alien
            </label>
            <label>
                <input
                    type="radio"
                    value="Humanoid"
                    checked={filteredStatus === 'Humanoid'}
                    onChange={() => setFilteredStatus('Humanoid')}
                />
                Humanoid
            </label>
            <label>
                <input
                    type="radio"
                    value="Poopybutthole"
                    checked={filteredStatus === 'Poopybutthole'}
                    onChange={() => setFilteredStatus('Poopybutthole')}
                />
                Poopybutthole
            </label>
            <label>
                <input
                    type="radio"
                    value="Mythological Creature"
                    checked={filteredStatus === 'Mythological Creature'}
                    onChange={() => setFilteredStatus('Mythological Creature')}
                />
                Mythological Creature
            </label>
            <label>
                <input
                    type="radio"
                    value="Disease"
                    checked={filteredStatus === 'Disease'}
                    onChange={() => setFilteredStatus('Disease')}
                />
                Disease
            </label>
            <label>
                <input
                    type="radio"
                    value="Cronenberg"
                    checked={filteredStatus === 'Cronenberg'}
                    onChange={() => setFilteredStatus('Cronenberg')}
                />
                Cronenberg
            </label>
            <label>
                <input
                    type="radio"
                    value="Animal"
                    checked={filteredStatus === 'Animal'}
                    onChange={() => setFilteredStatus('Animal')}
                />
                Animal
            </label>
            <label>
                <input
                    type="radio"
                    value="unknown"
                    checked={filteredStatus === 'unknown'}
                    onChange={() => setFilteredStatus('unknown')}
                />
                Unknown
            </label>
            <label>
                <input
                    type="radio"
                    value="all"
                    checked={filteredStatus === 'all'}
                    onChange={() => setFilteredStatus('all')}
                />
                All characters
            </label>

            <input
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="Filter name"
            />

            {characters
                .filter(
                    (character) =>
                        filteredStatus === 'all' ||
                        character.species === filteredStatus
                )
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
                        gender={character.gender}
                        origin={character.origin.name}
                    />
                ))}
        </div>
    )
}

export default App
