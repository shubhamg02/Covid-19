import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import OptionBox from '../../Options/OptionBox';

import './Doctor.css';
import db from '../../Firebase';
import CircularIndeterminate from '../../Spinner/Spinner';

const Doctor = () => {

    const history = useHistory();

    const [doctors, setDoctors] = useState([]);

    const [isloading, setloading] = useState(false);

    useEffect(() => {
        try {
            setloading(true);
            db.collection('Doctors').orderBy('name').get()
            .then(snapshot => {
                setDoctors(snapshot.docs.map( doc => ({ data: doc.data() }) ))
            }).then(event => {
                setloading(false);
            })
        } catch (error) {
            alert(error.message);
        }
    }, [])

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
                    <h1>Get Tata Digital Health Consultation for only Rs.100</h1>
                    <button onClick={() => history.push('/tata')}>Tata Health</button>
                </div>
                <h1>OR</h1>
                <h2 style={{color: 'gray'}}>Consult for free from our physicians</h2>
                <div className='heading__test'>
                {
                    doctors?.map(doctor => (
                        <div>
                            <OptionBox
                            title={doctor.data.name}
                            subtitle=' '
                            contact={`Contact no: ${doctor.data.contact}`}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Doctor
