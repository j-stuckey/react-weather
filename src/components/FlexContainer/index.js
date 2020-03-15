import React from 'react';
import './FlexContainer.css';

function FlexContainer(props) {
    return <div className={"FlexContainer FlexContainer-" + props.type}>{props.children}</div>;
}

FlexContainer.defaultProps = {
    type: 'row'
};

export default FlexContainer;
