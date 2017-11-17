import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Dag extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="maandag" className='agenda__lijst'>
                    <h3>Maandag:</h3>
                </div>
                <div id="dinsdag" className='agenda__lijst'>
                    <h3>Dinsdag:</h3>
                </div>
                <div id="woensdag" className='agenda__lijst'>
                    <h3>Woensdag:</h3>
                </div>
                <div id="donderdag" className='agenda__lijst'>
                    <h3>Donderdag:</h3>
                </div>
                <div id="vrijdag" className='agenda__lijst'>
                    <h3>Vrijdag:</h3>
                </div>
                <div id="zaterdag" className='agenda__lijst'>
                    <h3>Zaterdag:</h3>
                </div>
                <div id="zondag" className='agenda__lijst'>
                    <h3>Zondag:</h3>
                </div>
            </div>
        );
    }
}

export default Dag;
