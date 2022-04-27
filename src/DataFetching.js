import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './layout.scss';

function DataFetching (){

    const [ list, setList ] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
            .then( res => setList(res?.data))
            .catch( err => console.log(err))
    }, [])

    console.log(list)

    return (
        <div>
            <div className="card-container">
                {
                    list.map( item => (
                        <div key={item?.id}>
                            {item?.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DataFetching