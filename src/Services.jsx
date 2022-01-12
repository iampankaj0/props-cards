import React from 'react';
import './services.css';
import ServiceData from './ServiceData';
import Card from './Card';

const Services = () => {
    return (
        <>
            <section className="services">
                <h1 className="heading text-center mb-5">our services</h1>
                <div className="container">
                    <div className="row gy-4">
                        
                        {
                            ServiceData.map((val, id) =>{
                                return < Card key={id} imgsec={val.imgsec} text={val.text} />
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;