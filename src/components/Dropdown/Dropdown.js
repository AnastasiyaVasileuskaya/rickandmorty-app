export default function Dropdown({ setFilteredStatus, characters, hidden }) {
  const items = ['All characters']
  items.push(...new Set(characters.map(ch => ch.species)))
  /*
  const items = [
    {
      label: 'Human',
      value: 'Human',
    },
    { label: 'Alien', value: 'Alien' },
    { label: 'Humanoid', value: 'Humanoid' },
    { label: 'all', value: 'all' },
  ]
  */
  if (hidden) {
    return null
  }
  return (
    <select onChange={e => setFilteredStatus(e.target.value)}>
      {items.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

/* <div className="CharacterFilterByStatus">
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
        </div>
*/
