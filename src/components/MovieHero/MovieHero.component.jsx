import React from 'react'

const MovieHero = () => {
    return (
        <>
           <div>
               {/*Mobile*/}
           <div className="md:hidden w-full" style={{height:"calc(180vw)"}}>
               <div className="w-full h-56 bg-opacity-50  absolute bg-black z-10 bottom-0"/>
               <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
               alt="Poster" className="w-full h-full"/>
           </div>
           {/*Tablet*/}
           <div className="relative hidden md:block  w-full lg:hidden" style={{height:"calc(100vw)"}}>
           <div className="w-full h-56 bg-opacity-50  absolute bg-black z-10 bottom-0"/>
           <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
               alt="Poster" className="w-full h-full"/>
           </div>
           {/*PC Screen*/}
           <div className="hidden lg:block w-full" style={{height:"30rem"}}>
           <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" 
            alt="Poster"
            className="w-full h-full"/>
           </div>
           </div> 
        </>
    )
}

export default MovieHero
