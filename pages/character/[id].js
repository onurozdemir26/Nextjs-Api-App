import Navigation from "../components/Navigation";
import unfetch from "isomorphic-unfetch";


function characterDetails({ character }) {

    return (
        <div>
            <Navigation />
            <div>
                {character.name}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const data = await unfetch("https://rickandmortyapi.com/api/character/")
    const characters = await data.json()
    
   const paths = characters.results.map(character => {
       return { params : { id: `character.id` } }
   })
   return {
       paths,
       fallback: false
   }
}

export async function getStaticProps({ params }) {
     const data = await unfetch("https://rickandmortyapi.com/api/character/" + params.id)
     const character = await data.json()
    return {
        props: {
            character
        },
    }
}

export default characterDetails;