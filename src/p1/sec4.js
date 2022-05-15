import React, { useState, useEffect } from 'react';
import workData from './workData.json';
import Circular from './circular';

const Sec4 = (props) => {
	const [openWork, setOpenWork] = useState(false);
	const [showLink, setShowlink] = useState(false);
	const [toLink, setLink] = useState('');
	const [toLink2, setLink2] = useState('');
	const [tit1, setTit1] = useState('');
	const [tit2, setTit2] = useState('');
	const workRef = props.work;

	const handleOpen = (link, title1, title2, link3, alt) => {
		setOpenWork(
			true
		);
		// setLink(link);
		setLink2(link3);
		//判斷link3是否有值傳入
		setShowlink(link3 ? true : false);
		setTit1(title1);
		setTit2(title2);
		document.body.style.overflow = 'hidden';

		//設定延遲秒數出現圖
		setTimeout(() => {
			setLink(link);
		}, 1500);
	}
	const handleClose = () => {
		setOpenWork(
			false
		);
		document.body.style.overflow = 'scroll';
		setLink('');
	}
	const op = {
		opacity: openWork ? '1' : '0',
		transform: openWork ? 'scale(1)' : 'scale(0)',
		overflow: openWork ? 'scroll' : 'hidden',
		overflowX: openWork ? 'hidden' : 'scroll',
	}
	const showlink = { display: showLink ? 'block' : 'none' };

	return (
		<div className="work" ref={workRef}>
			<div className="paralasic_2" data-paralasic="0.5">
				<div className="workContent">
					<h2 className="h2FSize40">WORKS</h2>
					<hr className="shortColorBar" />
					<div className="allPortfolio">
						<ul id="allPortfolioUl">
							{workData.map(wk => {
								return (
									<li key={wk.id}>
										<div className='box' onClick={() => { handleOpen(wk.link2, wk.title1, wk.title2, wk.link3, wk.alt) }}>
											<a>
												<div className="title">
													<div className="titleCenter">
														<h4>{wk.title1}</h4>
														<p className="titleCenterP">{wk.title2}</p>
													</div>
												</div>
												<img src={`img/work/${wk.link}.jpg`} alt={wk.alt} />
											</a>
										</div>

										<div className="portPage" style={op}>
											<div className="closeP" onClick={handleClose}>x</div>
											<div className="pageWrap" >
												<div className="portTitle">
													<h4>{tit1}</h4>
													<p className="titleCenterP">{tit2}</p>
													<hr className="shortColorBar" />
												</div>
												<div className='portLink'>
													<a href={toLink2} style={showlink} target='_blank'>作品連結</a>
												</div>
												{
													toLink === '' ? <Circular /> : <img src={`img/work/${toLink}.jpg`} alt={wk.alt} />
												}
												{/* <img src={`img/work/${toLink}.jpg`} alt={wk.alt} /> */}

											</div>
											<div className="closePB" onClick={handleClose}>x</div>
										</div>
									</li>
								)
							})}

						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sec4;