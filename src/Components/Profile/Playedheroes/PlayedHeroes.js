import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
export default class extends Component{
    state = {
        playerheroes: []
    }

    componentDidMount(){
        this.props.getPlayerHeroes(this.props.match.params.id)
        .then(res => this.setState({playerheroes: res}))
        this.props.gethero()
        .then(res => this.setState({heroes: res}))
    }

    render(){
        return(
            <div className="playedheroes">
                <Table className="table" inverted selectable>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Hero</Table.HeaderCell>
                <Table.HeaderCell>Games</Table.HeaderCell>
                <Table.HeaderCell>Winrate</Table.HeaderCell>
                <Table.HeaderCell>Last Played</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body className="tablebody">
                </Table.Body>
                </Table>
                </div>
        )
    }
}