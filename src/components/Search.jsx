/* eslint-disable no-unused-vars */
import { useState } from 'react';
const Search = () => {
    
    
    const [location, setLocation] = useState('Toshkent.hadra maydoni');


    const [count, setCount] = useState(1);

    return (
        <>
            <div className="search">
                <form action="">
                    <label htmlFor="location">
                        <input
                            id="location"
                            value={location}
                            placeholder="location"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                </form>
                <p>{ count}</p>
                <button onClick={() => setCount(count + 1)}>add</button>
            </div>
        </>
    )
}

export default Search;