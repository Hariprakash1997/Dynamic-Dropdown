import React from 'react';
import Dropdown from './Dropdown';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

    state = {
        testCounter:0,
        dropdownCounter:0,
        data : [
            { dataOne : 1, dataTwo : 2, dataThree : 3 },
            { dataOne : 4, dataTwo : 5, dataThree : 6 },
            { dataOne : 7, dataTwo : 8, dataThree : 9 },
            { dataOne : 10, dataTwo : 11, dataThree : 12 },
            { dataOne : 13, dataTwo : 14, dataThree : 15 },
            { dataOne : 16, dataTwo : 17, dataThree : 18 }
        ]
    };
    
    render(){

        let dropdown = (
            this.state.data.map( (dropdown,index) => {
                return( 
                    <Dropdown 
                    count={index}
                    dataOne={dropdown.dataOne}
                    dataTwo={dropdown.dataTwo}
                    dataThree={dropdown.dataThree}
                    key={index} />
                )
            } )
        )

        console.log("dropdown", dropdown);
        return(
            <section>
                <div className="container">
                    <div className="row">
                        {dropdown}
                    </div>
                </div>
            </section>
        );
    }

}

export default App;