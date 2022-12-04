import React, { useState, useEffect } from 'react';

const Sec2 = ({ about }) => {
	const [scroll, setScroll] = useState(false);

	let sc = () => {
		window.scrollY > about.current.getBoundingClientRect().top ? setScroll(true) : setScroll(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			sc();
			// setScroll(
			// 	window.scrollY>about.current.getBoundingClientRect().top?true:false
			// ); 
		});
		return () => {
			window.removeEventListener('scroll', () => {
				sc();
			});
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	/* window.onscroll=()=>{
		const abCount=document.getElementsByClassName('about')[0];
		setScroll(
			window.scrollY>abCount.getBoundingClientRect().top?true:false
		);
	}  */
	const scrollFade = { opacity: scroll ? '1' : '0', paddingTop: scroll ? '100px' : '300px' };


	return (
		<div className="about" ref={about} >
			<div className="aboutContent" id="aboutContentFade" style={scrollFade}>
				<h2 className="h2FSize40">ABOUT</h2>
				<hr className="shortColorBar whiteColor" />
				<p>Hi, I am Allen Chen<br />I have experienced in graphic design for more than 5 years and continue practicing web design<br />This page will show my resume and portfolio<br />Hope you like it and thank you for watching</p>
				<div className="aboutResume">
					<a href="https://github.com/allen760128/resume_in_react/blob/main/build/img/resume-02.jpg" target="_blank" rel="noreferrer">resume<span></span></a>
				</div>
			</div>
		</div>
	);
}

export default Sec2;