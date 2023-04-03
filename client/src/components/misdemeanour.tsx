import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentMisdemeanourPage from './misdemeanour_page';

import { interfaceMisdemeanourPageProps, misdemeanoursContextCreator } from './misdemeanour_page';



const Misdemeanour: React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<interfaceMisdemeanourPageProps[]>([]);

    const getAaisdemeanour = async (numberMisdemeanour: number) => {

        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${numberMisdemeanour}`);
        const dataMisdemeanours = await apiResponse.json();
        setMisdemeanours(dataMisdemeanours.misdemeanours);

    };

    useEffect(() => { getAaisdemeanour(3) }, []);
    useContext(misdemeanoursContextCreator);

    return (

        <>

            <div>
                <misdemeanoursContextCreator.Provider value={misdemeanours}>
                    <ComponentMisdemeanourPage />
                </misdemeanoursContextCreator.Provider>
            </div>

        </>

    )

};

export default Misdemeanour;