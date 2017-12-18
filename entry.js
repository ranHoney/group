
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'
import Search from './components/search'

import './sty/styl.css'   

class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Con/>
				<Search/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

