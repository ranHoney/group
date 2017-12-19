
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'

import Banner from './components/banner'
import Side from './components/side'
import Right from './components/right'
import BottomImg from './components/bottomImg'

import './sty/styl.css'   

class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Con/>
				<Banner/>
				<Side/>
				<Right/>
				<BottomImg/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

