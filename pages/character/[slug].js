import Navigation from "../components/Navigation";
import unfetch from "isomorphic-unfetch";
import slug from 'slug'


function characterDetails({ character }) {

    return (
        <div>
            <Navigation />
            <div>
                <h1>{character.name}</h1>

                <figure>
                    <img src={character.image} alt={character.name} />
                </figure>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const data = await unfetch("https://rickandmortyapi.com/api/character/")
    const characters = await data.json()

    const paths = characters.results.map(character => {
        return { params: { slug: `${slug(character.name)}-${character.id}` } }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.slug.split('-').slice(-1)[0]
    const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
    const character = await data.json()

    return {
        props: {
            character
        }
    }
}
export default characterDetails;