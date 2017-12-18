
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/con'

import './sty/sty.css'

class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Con/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

