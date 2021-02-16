import { results } from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
    return (
        <div className="App">
            {results.map(({ name, id, species, image }) => (
                <Card key={id} name={name} species={species} image={image} />
            ))}
        </div>
    )
}

export default App
