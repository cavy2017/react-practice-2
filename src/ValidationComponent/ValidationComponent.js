import React from 'react';

const validationComponent = (props) => {
    if (props.textLength >= 5) {
        return <p>Text long enough</p>;
    }
    return <p>Text too short</p>;
}

export default validationComponent;