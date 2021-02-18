import './Card.css'
import React from 'react'

export default function Card({
    name,
    species,
    image,
    status,
    gender,
    origin,
    location,
}) {
    const [isDetailsVisible, setIsDetailsVisible] = React.useState(false)

    return (
        <section className="Card">
            {name} {species === 'Human' ? '👤' : '👽'}
            <img src={image} alt="" />
            <button
                onClick={(event) => {
                    event.stopPropagation()
                    setIsDetailsVisible(!isDetailsVisible)
                }}
            >
                {isDetailsVisible ? 'Hide details' : 'Show details'}
            </button>
            {isDetailsVisible && (
                <p>
                    {status} <br></br> {gender} <br></br> {origin} <br></br>
                    {location}
                </p>
            )}
        </section>
    )
}
