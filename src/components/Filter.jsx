import { useState } from "react";

function Filter({ games, selectedGenre, setSelectedGenre }) {
    const [showGenreMenu, setShowGenreMenu] = useState(false);

const allGenres = [
    ...new Set(
        games.flatMap((game) =>
            Array.isArray(game.genre) ? game.genre : [game.genre]
        )
    ),
];

    return (
        <div className="genre-filter-wrapper">
            <button
                type="button"
                className="filter-btn"
                onClick={() => setShowGenreMenu((prev) => !prev)}
            >
                <img src="/images/filter.png" alt="" />
                <span>Filter</span>
            </button>

            {showGenreMenu && (
                <select
                    value={selectedGenre}
                    onChange={(e) => {
                        setSelectedGenre(e.target.value);
                        setShowGenreMenu(false);
                    }}
                    className="genre-filter"
                   size={Math.min(allGenres.length + 1, 6)}
                >
                    <option value="all">All Genres</option>

                   {allGenres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default Filter;

// import { useState } from "react";

// function Filter({ games, selectedGenre, setSelectedGenre }) {
//     const [showGenreMenu, setShowGenreMenu] = useState(false);


//     return (
//         <div className="genre-filter-wrapper">
//             <button
//                 className="filter-btn"
//                 onClick={() => setShowGenreMenu(!showGenreMenu)}
//             >
//                 <img src="/images/filter.png" alt="" />
//                 <span>Filter</span>
//             </button>

//             {showGenreMenu && (
//                 <div>
//                     <select
//                         value={selectedGenre}
//                         onChange={(e) => {
//                             setSelectedGenre(e.target.value);
//                             setShowGenreMenu(false);
//                         }}
//                         className="genre-filter"
//                     ></select>
//                 </div>
//             )};
//         </div>
//     );

// }

// export default Filter;
