import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Tile from "./Tile";
import Row from "react-bootstrap/Row";

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            m : [[ 1 , 2 , 3],[4 , 5 , 6] , [7 , 8 , 9]]
        };

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(event) {
        event.preventDefault();
    }

    createTable = () => {
        let table = [];

        // Outer loop to create parent
        for (let i = 0; i < this.state.m.length; i++) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < this.state.m[i].length; j++) {
                children.push(<Col key={j}><Tile value={this.state.m[i][j]}/></Col>)
            }
            //Create the parent and add the children
            table.push(<Row key={i}>{children}</Row>)
        }
        return table
    };

    render() {

        return (<div>
            {this.createTable()}
        </div>);
    }

}

export default Grid;