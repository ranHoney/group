
import React from 'react';

class Personal extends React.Component{
	render(){
		return(
			<div className="personal">
		<div className="pert">
			<p>
				<img src="https://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"  />
				<span>
					<i>hi,欢迎来到京东!</i>
					<i>登录 注册</i>
				</span>
			</p>
			<p>
			  <span>新人福利</span>
			  <span>PLUS会员</span>
			</p>
		</div>
		<div className="news">
			<p><span>促销</span>　|　<span>公告</span><i>更多</i></p>
			<p>家电巅峰品牌盛典</p>
			<p>京东秋季拍卖会低至1元起拍</p>
			<p>租房租车享信用免押金</p>
			<p>五星双人自助低至299元</p>
		</div>
		<ul className="perb">
			<li><span></span><i>话费</i></li>
			<li><span></span><i>机票</i></li>
			<li><span></span><i>酒店</i></li>
			<li><span></span><i>游戏</i></li>
			<li><span></span><i>企业购</i></li>
			<li><span></span><i>加油卡</i></li>
			<li><span></span><i>电影票</i></li>
			<li><span></span><i>火车票</i></li>
			<li><span></span><i>众筹</i></li>
			<li><span></span><i>理财</i></li>
			<li><span></span><i>礼品卡</i></li>
			<li><span></span><i>白条</i></li>
		</ul>
	</div>
		)
	}
}



export default Personal;