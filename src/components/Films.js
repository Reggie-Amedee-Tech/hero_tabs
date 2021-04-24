import React from 'react';

const Films = (props) => {
    const {filmArrayAccess} = props;
    

    return (
        filmArrayAccess.map((film, i) =>
        <h1 key={i}
        onClick={(e) => alert(film)}
        value={film}
        >{film}</h1>
        )
    )
}

export default Films;