import React, { Component } from 'react'

export default class CustomApp extends Component {
  render() {
    return (
      <div>react_hoc1</div>
    )
  }
}


class CommentList extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments:DataSource.getComments()
        }
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        this.setState(){
            comments:DataSource.getComments()
        }
    }
    render(){
        return(
            <>{this.state.comments.map((comment) => (
                <Comment />
            ))}</>
        )
    }
}