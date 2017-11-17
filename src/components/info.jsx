import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
        switch (this.props.dag) {
            case 0: 
                console.log("Maandag");
                break;
            case 1: 
                console.log("Dinsdag");
                break;
            case 2: 
                console.log("Woensdag");
                break;
            case 3: 
                console.log("Donderdag");
                break;
            case 4: 
                console.log("Vrijdag");
                break;
            case 5: 
                console.log("Zaterdag");
                break;
            case 6: 
                console.log("Zondag");
                break;
            default: 
                console.error("Something went wrong....");
                break;
        }
    }

    render() {
        return (
            <div className="agenda__lijst__blokEvent">
                <p>{this.props.tijd}</p>
                <p>{this.props.beschrijving}</p>
            </div>
        );
    }
}

export default Agenda;
