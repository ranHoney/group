
import React from 'react';
import ReactDOM from 'react-dom';

import Con from './components/head'
import Lnav from './components/leftnav'
<<<<<<< HEAD
import Personal from './components/personal'
=======
import Search from './components/search'
>>>>>>> e0f6fae8118942ba705a668c44c5345c35a41e4c

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
<<<<<<< HEAD
				<Banner/>
				<Side/>
				<Right/>
				<BottomImg/>
=======
<<<<<<< HEAD
				<Personal/>
=======
				<Search/>
>>>>>>> e0f6fae8118942ba705a668c44c5345c35a41e4c
>>>>>>> b5cb90abf610eebb8d8187389697e16664cf2565
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))

