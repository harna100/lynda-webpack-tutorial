import { Component } from 'react'
import { render }from 'react-dom'

class Contact extends Component {
    render(){
        return <div>Feel free to contact us</div>
    }
}


render(<Contact/>, document.getElementById('react-container'));