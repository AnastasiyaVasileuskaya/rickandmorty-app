import { results } from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
    return (
        <div className="App">
            {results.map(
                ({
                    name,
                    id,
                    species,
                    image,
                    status,
                    gender,
                    origin,
                    location,
                }) => (
                    <Card
                        key={id}
                        name={name}
                        species={species}
                        image={image}
                        status={status}
                        gender={gender}
                        origin={origin.name}
                        location={location.name}
                    />
                )
            )}
        </div>
    )
}

export default App
