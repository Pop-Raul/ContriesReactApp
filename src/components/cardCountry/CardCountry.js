import React, { useState } from 'react';
import Modal from 'react-modal';
import "./CardCountry.css"
Modal.setAppElement('#root');

const CardCountry = ({ flag, name, capital, region, population, alpha2code, latlng, area, timezone, borders, currencies, languages }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className='cardCountry' onClick={() => {
            if (modalIsOpen) {
                setModalIsOpen(false)
            } else { setModalIsOpen(true) }
        }}>
            <h2 className='flag'>Flag: <img src={flag} width={200} height={100} /> </h2>
            <h2>Country Name:{name}  </h2>
            <h2>Capital:  {capital}</h2>
            <h2>Region:  {region}</h2>
            <h2>Population:  {population}</h2>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'purple'
                        }

                    }
                }>
                <h2 className='flag'>Flag: <img src={flag} width={200} height={100} /> </h2>
                <h2>Country Name:{name}  </h2>
                <h2>Alpha2code:{alpha2code}</h2>
                <h2>Capital:  {capital}</h2>
                <h2>Region:  {region}</h2>
                <h2>Population:  {population}</h2>
                <h2>timezone: {timezone}</h2>
                <h2>latlng:{latlng}</h2>
                <h2>area:{area}</h2>
                <h2>border:{borders}</h2>
                <h2>currencies:{currencies}</h2>
                <h2>languages:{languages}</h2>

            </Modal>
        </div>
    );
}

export default CardCountry;