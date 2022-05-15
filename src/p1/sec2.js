import React,{useState, useEffect} from 'react';
const Sec2=(props)=>{
	const [scroll,setScroll]=useState(false);
	const aboutRef=props.about;
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			window.scrollY>aboutRef.current.getBoundingClientRect().top?setScroll(true):setScroll(false);
			// setScroll(
			// 	window.scrollY>aboutRef.current.getBoundingClientRect().top?true:false
			// ); 
		});
	},[]);
	
	
		/* window.onscroll=()=>{
			const abCount=document.getElementsByClassName('about')[0];
			setScroll(
				window.scrollY>abCount.getBoundingClientRect().top?true:false
			);
		}  */
	const scrollFade={opacity:scroll?'1':'0',paddingTop:scroll?'100px':'300px'};
    return(
        <div className="about"  ref={aboutRef} >
			<div className="aboutContent"  id="aboutContentFade" style={scrollFade}>
				<h2 className="h2FSize40">ABOUT</h2>
				<hr className="shortColorBar whiteColor"/>
				<p>Hi, I am Allen Chen<br/>I have experienced in graphic design for more than 5 years and continue practicing web design<br/>This page will show my resume and portfolio<br/>Hope you like it and thank you for watching</p>
				<div className="aboutResume">
			    	<a href="https://github.com/allen760128/resume_in_react/blob/main/img/resume-02.jpg" target="_blank">resume<span></span></a>
			    </div>
			</div>
		</div>
    );
}

export default Sec2;