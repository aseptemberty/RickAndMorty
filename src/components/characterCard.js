import '../styles/characterCard.css'

export default function CharacterCard({character},key){
  return(
   <div key={key} className='character-card'>
      <div className='character-card_image-wrapper'>

      </div>
      <div className='character-card_content-wrapper'>
        <div className='character-card_section'>
          <p>{character.name}</p>
          <p>{character.status} - {character.species}</p>
        </div>
        <div className='character-card_section'>
          <p>Last known location</p>
          <p>{character.location.name}</p>
        </div>
        <div className='character-card_section'>
          <p>First seen in:</p>
          <p></p>
        </div>
      </div>
   </div>
  )
}