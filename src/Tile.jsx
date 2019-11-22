import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

class Tile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Core'
        };

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(event) {
        event.preventDefault();
    }

    render() {
        return (<div>
            <Card style={{
                width: '50px',
                height: '50px'
            }}>{this.props.value}</Card>
        </div>);
    }

}

export default Tile;