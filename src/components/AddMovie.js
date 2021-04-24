import React, { useState } from 'react'

const AddMovie = (props) => {
    const {addFilmAccess} = props;
    const [addMovieInput, setAddMovieInput] = useState("")

    const clickHandler = (e) => {
        e.preventDefault();
        addFilmAccess(addMovieInput)
    }

    return (

        <div>
            <textarea
                cols="20px"
                rows="10px"
                placeholder="Add Movie"
                onChange={(e) => setAddMovieInput(e.target.value)}
                value={addMovieInput}

            >

            </textarea>
            <button onClick={clickHandler}>Add Movie
            </button>
        </div>


    )
}

export default AddMovie