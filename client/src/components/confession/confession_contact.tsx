import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';
import ComponentErrorMessage from '../ErrorMessage/ErrorMessage';

export interface interfaceConfesContactProps {

    valueContact: MisdemeanourKind | JustTalk | "",
    onChangeValueContact: (valueContact: MisdemeanourKind | JustTalk | "") => void;

};

const ComponentConfessionContact: React.FC<interfaceConfesContactProps> = ({ valueContact, onChangeValueContact }) => {

    const [errorMessage, setErrorMessage] = useState<string | undefined>('');
    const validate: (value: string) => string | undefined = (value) => {
        if (value === "Just Talk 🕊️☮️🕊️") {
            return 'ERROR - Contact: Do NOT Support ManU , Please !'
        };

        return undefined;
    };
    return (

        <>
            <label htmlFor="Contact"> Reason For Contact : </label>

            <select value={valueContact} onChange={(event) => {
                const errorMessage = validate(event.target.value);
                setErrorMessage(errorMessage);
                onChangeValueContact(event.target.value as MisdemeanourKind | JustTalk)
            }} >

                <option value=""> Select A Reason For Contact </option>
                <option value="rudeness 🤪"> Mild Public Rudeness 🤪 </option>
                <option value="lift 🗣"> Speaking in a Lift 🗣 </option>
                <option value="vegetables 🥗"> Not Eating Your Vegetables 🥗 </option>
                <option value="united 😈"> Supporting Manchester United 😈 </option>

            </select>
        </>

    )

};

export default ComponentConfessionContact;