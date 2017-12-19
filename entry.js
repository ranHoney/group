
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'
import Personal from './components/personal'

import './sty/styl.css'   

class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Con/>
				<Personal/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

