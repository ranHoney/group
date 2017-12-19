import React from 'react';

class Head extends React.Component{
	render(){
		var sty = {
			sty1:{color:'red'},
			sty2:{color:'#999',
				fontSize:'12px'
				},
			sty3:{
				height:'30px',
				lineHeight:'30px',
				width:'990px'
			},
			sty5:{
				float:'left',
				marginLeft:'200px',
				listStyle:'none'
			},
			sty6:{
				float:'right',
				listStyle:'none'
			}
		}
		return(
			<div style={sty.sty2} className='boxd' >
				<header style={sty.sty3}>
					<ul style={sty.sty5}>
						<li><span></span><span>郑州</span></li>
					</ul>
					<ul style={sty.sty6} className='uls'>
						<li><a>你好，请登录</a></li>
						<li><a style={sty.sty1}>免费注册</a>|</li>
						<li><a>我的订单</a>|</li>
						<li><a><span>我的京东</span><span>∨</span></a>|</li>
						<li><a>京东会员</a>|</li>
						<li><a>企业采购</a>|</li>
						<li><a><span>客户服务</span><span>∨</span></a>|</li>
						<li><a><span>网站导航</span><span>∨</span></a>|</li>
						<li><a>手机京东</a><span></span></li>
						<img src="https://img10.360buyimg.com/da/jfs/t7525/251/1899038567/28110/d5764256/59a51bf6Nb8e478cc.png" />
					</ul>
				</header>
			</div>
		)
	}
}
export default Head;