import React, { useState } from 'react';


const Search = () => {
    const [title, setTitle] = useState("");
    return (
        <div>
            <form onSubmit={onSubmit()}>
                <div>
                    <label>Search</label>
                    <input value={title} onChange={onSearchChanged} type="text" placeholder="Enter search keyword" />
                </div>
            </form>
        </div>
    )
}

export default Search;