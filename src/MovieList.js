    import React ,{useState}from 'react'
    import MovieCard from './MovieCard'
    import batman from './batman.png'
    import superman from './superman.png'
    import spiderman from './spiderman.png'
    import blackwidow from './blackwidow.png'
    import joker from './joker.png'
    import avengers from './avengers.png'

    const MovieList = () => {
        const [data,setData] = useState([
            {rate: '4.5', name: "Batman",description:"bat caused a global pandemic",img:{batman}},
            {rate:"5", name:"blackwidow",description:"woman",img:{blackwidow}},
            {rate:"10", name:"Spider-man",description:"best superhero of all time", img:{spiderman}},
            {rate:"6", name:"Superman",description:"superHumanretard",img:{superman}},
            {rate:"7", name:"",description:"",img:{avengers}},
            {rate:"8", name:"",description:"",img:{joker}},
        ])
        return (
            <div style={{display:"flex",flexDirection:"rows",flexWrap:"wrap"}}>
                {data.map((film)=>
                <MovieCard name={film.name} rate={film.rate} description={film.description} img={batman} />
                )}
            

                
            </div>
        )
    }

    export default MovieList
