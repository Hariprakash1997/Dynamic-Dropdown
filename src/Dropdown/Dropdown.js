import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dropdown extends React.Component {

    state = {
        width:30,
        display:"inline-block",
        margin:1
    }

    render(){
        return( 
            <div style={{width:this.state.width + "%", display : this.state.display, margin : this.state.margin + "%"}}>
                <div className="card">
                    <h1 className="text-center">Test {this.props.count + 1}</h1>
                    <div className="card-body">
                        <div className="dropdown show text-center">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                Dropdown {this.props.count + 1}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">{this.props.dataOne}</a>
                                <a className="dropdown-item">{this.props.dataTwo}</a>
                                <a className="dropdown-item">{this.props.dataThree}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;