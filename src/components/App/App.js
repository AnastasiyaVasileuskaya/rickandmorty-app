import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

import Header from '../Header/Header'
import Characters from '../Characters/Characters'
import Location from '../Location/Location'
import Episode from '../Episode/Episode'
import Navigation from '../Navigation/Navigation'
import Grid from '../Grid/Grid'
import CharacterFilterByStatus from '../CharacterFilterByStatus/CharacterFilterByStatus'
import CharacterSearch from '../CharacterSearch/CharacterSearch'

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
        <Grid>
            <Header title="The Rick and Morty App" />
            <div className="App">
                <CharacterFilterByStatus
                    filteredStatus={filteredStatus}
                    setFilteredStatus={setFilteredStatus}
                />
                <CharacterSearch
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                <Characters
                    characters={characters}
                    hidden={currentPage !== 'Characters'}
                    title="Characters"
                    filteredStatus={filteredStatus}
                    userInput={userInput}
                />
                <Location
                    characters={characters}
                    hidden={currentPage !== 'Location'}
                    title="Location"
                    filteredStatus={filteredStatus}
                    userInput={userInput}
                />
                <Episode
                    characters={characters}
                    hidden={currentPage !== 'Episode'}
                    title="Episode"
                    filteredStatus={filteredStatus}
                    userInput={userInput}
                />
            </div>
            <Navigation
                activeButton={currentPage}
                onNavigate={setCurrentPage}
            />
        </Grid>
    )
}

export default App
