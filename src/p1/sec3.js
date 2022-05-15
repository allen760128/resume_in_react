import React, { useState, useEffect } from 'react';

const Sec3 = (props) => {
	const [scroll2, setScroll2] = useState(false);
	const skillRef = props.skill;
	useEffect(() => {
		window.addEventListener('scroll', () => {
			// const skillScroll=document.getElementsByClassName('skill')[0];
			setScroll2(
				window.scrollY > skillRef.current.getBoundingClientRect().top ? true : false
			);
		});
	}, []);

	/* window.onscroll=()=>{
		const skillScroll=document.getElementsByClassName('skill')[0];
		setScroll2(
			window.scrollY>skillScroll.getBoundingClientRect().top?true:false
		);
	} */
	const skillFade = { opacity: scroll2 ? '1' : '0', paddingTop: scroll2 ? '100px' : '300px' };
	return (
		<div className="skill" ref={skillRef}>
			<div className="skillContent" style={skillFade}>
				<h2 className="h2FSize40">SKILL</h2>
				<hr className="shortColorBar" />

				<ul>
					<li>
						<span className="skillPicSpan"><i></i></span>
						<h4>Website Design</h4><p className="color777">網頁設計/前端設計<br />Html、css、js、ReactJs、React Native<br />Standardized web design</p>
					</li>
					<li>
						<span className="skillPicSpan"><i></i></span>
						<h4>Branding</h4><p className="color777">商業設計/形象設計<br />Branding image and mockups<br />Logotype, brand guideline</p>
					</li>
					<li>
						<span className="skillPicSpan"><i></i></span>
						<h4>Visual Design</h4><p className="color777">視覺設計<br />Vector design<br />Illastration, character design</p>
					</li>
				</ul>

			</div>
		</div>
	);
}

export default Sec3;