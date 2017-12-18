
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'

import './sty/styl.css'

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

