import React from 'react'
import $ from 'jquery'
export default class App extends React.Component {
    componentDidMount(){
    $('<h1 />')
    .text('Hello world from JQuery')
    .css({
        textAlign: 'center',
        backgroundColor: '#2020c1',
        fontSize: '42px',
        color: 'black'

    })
    .appendTo($('header'))
    
    }
    render(){
        return(
    <React.Fragment>
        <header></header>
        <hr />
        <div className="box">
            <h2 className="box-title">Box title</h2>
            <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illo quibusdam corporis dolorem inventore id eius? Consequuntur aspernatur ut dolore?</p>
        </div>
    </React.Fragment>
        )
    }
}