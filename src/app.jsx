import React from 'react';
// import Agenda from './components/info';
import Dag from './components/dag';
/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Dag />
            </div>
        );
    }
}

export default App;
