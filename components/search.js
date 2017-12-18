import React from 'react';

class Search extends React.Component{
	render(){
		return(
			<div className="searchBox">
				<div className="search">
					<input type="text"/>
					<input type="button" value="搜索"/>
					<div className="cart">我的购物车</div>
				</div>
				<p>
					<span>春节抢票</span>
					<span>智能数码</span>
					<span>农资绿植</span>
					<span>施华洛</span>
					<span>巅峰盛典</span>
					<span>游戏方向盘</span>
					<span>遛狗绳</span>
					<span>圣诞礼物</span>
					<span>电脑桌</span>
				</p>
				<ul>
					<li>秒杀</li>
					<li>优惠券</li>
					<li>闪购</li>
					<li>拍卖</li>
					<li>京东服饰</li>
					<li>京东超市</li>
					<li>生鲜</li>
					<li>全球购</li>
					<li>京东金融</li>
				</ul>
				<img src="https://img30.360buyimg.com/da/jfs/t12544/113/1630946209/4539/f781240/5a24c792N563594af.png"/>
			</div>
		)
	}
}
export default Search;