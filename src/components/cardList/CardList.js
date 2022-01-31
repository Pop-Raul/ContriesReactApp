import React from "react";
import CardCountry from "../cardCountry/CardCountry";

const CardList = ({ countries }) => {
    const cardComponent = countries.map((name, i) => {
        let languages = ''
        if (countries[i].languages)
            languages = String(Object.values(countries[i].languages));
        let currencies = ''
        if (countries[i].currencies)
            currencies = JSON.stringify(countries[i].currencies);
        console.log(currencies);

        return <CardCountry
            key={i}
            flag={countries[i].flags.png}
            name={countries[i].name.common}
            capital={countries[i].capital}
            region={countries[i].region}
            population={countries[i].population}
            timezone={String(countries[i].timezones)}
            currencies={String(currencies)}
            languages={languages}
            alpha2code={countries[i].cca2}
            latlng={String(countries[i].latlng)}
            area={countries[i].area}
            borders={String(countries[i].borders)}


        />
    });
    return (
        <div>
            {cardComponent}
        </div>
    )
}
export default CardList;
