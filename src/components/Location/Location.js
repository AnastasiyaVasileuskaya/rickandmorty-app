import './Location.css'
import Card from '../Card/Card'

export default function Location({
    title,
    hidden,
    characters,
    filteredStatus,
    userInput,
}) {
    if (hidden) {
        return null
    }

    return (
        <div className="Location" hidden={hidden}>
            <h1>{title}</h1>

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
