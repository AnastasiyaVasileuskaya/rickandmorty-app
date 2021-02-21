import './Card.css'
import { useState } from 'react'
import { ReactComponent as LikeSVG } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import { ReactComponent as UnlikeSVG } from '@fortawesome/fontawesome-free/svgs/regular/heart.svg'

export default function Card({
  id,
  name,
  image,
  status,
  gender,
  isLiked,
  setLiked,
}) {
  const like = <LikeSVG className="Card__like" />
  const unlike = <UnlikeSVG className="Card__like" />

  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>
      <span onClick={() => setLiked(id - 1)}>{isLiked ? like : unlike}</span>
      <img src={image} alt="" />
      <button
        onClick={event => {
          event.stopPropagation()
          setIsDetailsVisible(!isDetailsVisible)
        }}
      >
        {isDetailsVisible ? 'Hide details' : 'Show details'}
      </button>
      {isDetailsVisible && (
        <p>
          Status: {status} <br />
          Gender: {gender}
        </p>
      )}
    </section>
  )
}
