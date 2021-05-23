import React, { useEffect, useState } from 'react'

import OptionBox from '../../Options/OptionBox';
import SearchIcon from '@material-ui/icons/Search';
import './Plasma.css';
import db from '../../Firebase';
import CircularIndeterminate from '../../Spinner/Spinner';

const Plasma = () => {

    const [plasma_data, Setplasmadata] = useState([]);
    const [searchItem, setsearchItem] = useState("");
    const [isloading, setloading] = useState(false);

    useEffect(() => {
        try {
            setloading(true);
            db.collection('Plasma').orderBy('location').get()
            .then(snapshot => {
                Setplasmadata(snapshot.docs.map( doc => ({ data: doc.data() }) ))
            }).then(event => {
                setloading(false);
            })
        } catch (error) {
            alert(error.message);
        }
    },[])

    if(isloading) {
        return (
            <div className='spinner'>
                <CircularIndeterminate/>
            </div>
        );
    } else {
        return (
            <div className="services">
                <div className='heading__book'>
                    <h1>Plasma donors available according to Location</h1>
                </div>
                <div className='heading__input' onClick={()=>{}}>
                    <SearchIcon />
                    <input 
                        placeholder="Search by location" 
                        type="text"
                        onChange={ e => setsearchItem(e.target.value) }
                    />
                </div>
                <div className='heading__test'>
                {
                    plasma_data?.filter( (item) => {
                        if (searchItem === "" ) {
                            return item;
                        }
                        else if (item.data.location.toLowerCase().includes(searchItem.toLowerCase())) {
                            return item;
                        }
                        else {
                            return null;
                        }
                    } ).map(plasma => (
                        <div className='plasma'>
                            <OptionBox
                                title={plasma.data.location}
                                subtitle={`Contact person: ${plasma.data.name}`}
                                contact={`Contact number: ${plasma.data.contact}`}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Plasma