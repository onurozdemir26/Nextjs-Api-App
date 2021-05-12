import Navigation from "./components/navigation";
import unfetch from "isomorphic-unfetch";

import Link from 'next/link'
import slug from 'slug'

 function İndex({characters}) {

  return (
    <div>
      
      <div >
      <Navigation />
      {/* <Image
        src="/background-1.jpg"
        alt="Ricky And Morty"
        width={1920}
        height={1080}
        className="img"
        layout="fixed"
      /> */}
      </div>
      <div className="table">
      <ul >
        {characters.results.map(character => (
          <li  key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}


export default İndex;
