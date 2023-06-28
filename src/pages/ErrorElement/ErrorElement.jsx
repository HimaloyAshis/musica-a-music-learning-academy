import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorElement = () => {
    return (
        <div>
            <Helmet>
                <title>Musica || Error Page </title>
            </Helmet>
            <h2>OOpps !!!!!</h2>
        </div>
    );
};

export default ErrorElement;