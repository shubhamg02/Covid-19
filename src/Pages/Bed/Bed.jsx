import React, { useEffect, useState } from 'react'

import OptionBox from '../../Options/OptionBox';

import CircularIndeterminate from '../../Spinner/Spinner';

import './Bed.css';
import db from '../../Firebase';

const Beds = () => {

    const [beds, setBeddata] = useState([]);

    const [isloading, setloading] = useState(false);

    useEffect(() => {
        try {
            setloading(true);
            db.collection('beds').get()
            .then(snapshot => {
                setBeddata(snapshot.docs.map(doc => ({ data: doc.data() })))
            }).then(event => {
                setloading(false);
            })
        } catch (error) {
            console.log('error.message');
        }
    },[])

    if(isloading) {
        return (
            <div className='spinner'>
                <CircularIndeterminate/>
            </div>
        );
    }
    else {
        return (
            <div className="services">
                <div className='heading__book'>
                    <h1>Hospital Beds available according to Location</h1>
                </div>
                <div className='heading__test'>
                {
                    beds?.map(bed => (
                        <div className='beds'>
                            <OptionBox
                            title={bed.data}
                            subtitle={`Click here to get the details of all available bed in ${bed.data.type}`}
                            path={bed.data.total}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

export default Beds
