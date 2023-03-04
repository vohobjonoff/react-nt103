/* eslint-disable no-unused-vars */
import { useState } from 'react';
const Search = () => {

    // const location = "Tashkent,Hadra maydoni";
    
    
    const [location, setLocation] = useState('Toshkent.hadra maydoni');
    const [count, setCount] = useState(0);

 

    function inc() {
        setCount( count + 1 )
    }



    

    

   

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
                <button onClick={inc()}>inc</button>
            </div>
        </>
    )
}

export default Search;