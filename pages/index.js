import Navigation from "./components/navigation";
import unfetch from "isomorphic-unfetch";

 function İndex({characters}) {

  return (
    <div>
      
      <div>
      <Navigation />
      </div>
      <div>
      <ul>
        {characters.results.map(character =>(
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}

 export async function getStaticProps() {
   const data = await unfetch("https://rickandmortyapi.com/api/character/")
   const characters = await data.json()
   return {
    props: {
      characters
     }, 
   }
 }

export default İndex;
