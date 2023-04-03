import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import { interfaceMisdemeanourPageProps, misdemeanoursContextCreator } from './misdemeanour_page';
import ComponentConfessionSubject from './confession_subjects';
import ComponentConfessionDetails from './confession_details';
import ComponentConfessionContact, { interfaceConfesContactProps } from './confession_contact';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';

export interface interfaceConfesTextProps {

    confesText: string;
    onChangeConfesText: (event: React.ChangeEvent<HTMLInputElement>) => void;

};

const ComponentConfession: React.FC = () => {

    const [confesTextSubject, setconfesTextSubject] = useState(" Type in Subject ");
    const [confesSelectionContact, setconfesSelectionContact] = useState<MisdemeanourKind | JustTalk | "">("");
    const [confesTextDetails, setconfesTextDetails] = useState(" Type in Details ");
    const [confesFormValid, setconfesFormValid] = useState(false);

    return (

        <>
            <h3> Confession </h3>

            <form className='form'>
                <p>  It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.            </p>
                <p>  However, if you're just having a hard day and need to vent then you're welcome to contact us here too 😊. Up to you!              </p>
                <tr>
                    <ComponentConfessionSubject valueSubject={confesTextSubject} onChangeValueSubject={(event) => setconfesTextSubject(event)} />
                </tr>
                <br></br>
                <tr>
                    <ComponentConfessionContact valueContact={confesSelectionContact} onChangeValueContact={(event) => setconfesSelectionContact(event)} />
                </tr>
                <br></br>
                <tr>
                    <ComponentConfessionDetails valueDetails={confesTextDetails} onChangeValueDetails={(event) => setconfesTextDetails(event)} />
                </tr>
                <tr>
                    <button type='submit' > Confess </button>
                </tr>
            </form>
        </>

    )

};