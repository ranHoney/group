import React from 'react';

class leftnav extends React.Component{
	render(){
		var styl = {
			styl1:{
				width:'190px',
				height:'170px',
				background:'pink',
				position:'absolute',
				top:'0'
			},
			styl2:{
				width:'190px',
				height:'480px',
				background:'#999395',
				marginTop:'100px'
				
			},
			styl3:{
				padding:'16px 0'
			}
		}
		return(
			<div>
				<div style={styl.styl1}></div>
				<div style={styl.styl2}>
					<ul style={styl.styl3} className="lnav">
						<li>
                            <a>家用电器</a>
                        </li>
						<li>
                            <a>手机</a>
							<span>/</span>    
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
                        <li>
                            <a>手机</a>
							<span>/</span>    
							<a>运营商</a>
							<span>/</span>       
							<a>数码</a>
                        </li>
					</ul>
				</div>
			</div>
		)
	}
}
export default leftnav;