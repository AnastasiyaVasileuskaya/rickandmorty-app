import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

import Header from '../Header/Header'
import Characters from '../Characters/Characters'
import Liked from '../Liked/Liked'
import Navigation from '../Navigation/Navigation'
import Grid from '../Grid/Grid'
import CharacterSearch from '../CharacterSearch/CharacterSearch'
import Dropdown from '../Dropdown/Dropdown'

function App() {
  const [characters, setCharacters] = useState([])
  const [userInput, setUserInput] = useState('')
  const [filteredStatus, setFilteredStatus] = useState('All characters')
  const [currentPage, setCurrentPage] = useState('Characters')

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])
        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  function setLiked(index) {
    // we need:
    // slice, spread operator, index
    const currentCharacter = characters[index]

    setCharacters([
      ...characters.slice(0, index),
      { ...currentCharacter, isLiked: !currentCharacter.isLiked },
      ...characters.slice(index + 1),
    ])
  }

  if (characters.length === 0) {
    return null
  }

  return (
    <Grid>
      <Header title="The Rick and Morty App" color="lightblue" />
      <div className="App">
        <Dropdown
          hidden={currentPage !== 'Characters'}
          characters={characters}
          setFilteredStatus={setFilteredStatus}
        />

        <CharacterSearch
          hidden={currentPage !== 'Characters'}
          userInput={userInput}
          setUserInput={setUserInput}
        />
        <Characters
          characters={characters}
          hidden={currentPage !== 'Characters'}
          filteredStatus={filteredStatus}
          userInput={userInput}
          setLiked={setLiked}
        />
        <Liked characters={characters} hidden={currentPage !== 'Liked'} />
      </div>
      <Navigation activeButton={currentPage} onNavigate={setCurrentPage} />
    </Grid>
  )
}

export default App
