
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'
<<<<<<< HEAD
import Personal from './components/personal'
=======
import Search from './components/search'
>>>>>>> e0f6fae8118942ba705a668c44c5345c35a41e4c

import './sty/styl.css'   

class App extends React.Component{
	render(){
		return(
			<div className="app">
				<Con/>
<<<<<<< HEAD
				<Personal/>
=======
				<Search/>
>>>>>>> e0f6fae8118942ba705a668c44c5345c35a41e4c
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

