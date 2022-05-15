import React,{useState,useRef} from 'react';

const Nav=(props)=>{
	const [openRwdMenu,setRwdMenu]=useState(false);

	const handleScrollAbout=()=>{
		const aboutref=props.all.aboutRef.current.offsetTop;
		window.scrollTo({top:aboutref,behavior:'smooth'});
		setRwdMenu(!openRwdMenu);
	};
	const handleScrollSkill=()=>{
		//   const slideTo=document.getElementsByClassName(e.currentTarget.id)[0].offsetTop;
		const skillref=props.all.skillRef.current.offsetTop;
		window.scrollTo({top:skillref,behavior:'smooth'});
		setRwdMenu(!openRwdMenu);
	};
	const handleScrollWork=()=>{
		const workref=props.all.workRef.current.offsetTop;
		window.scrollTo({top:workref,behavior:'smooth'});
		setRwdMenu(!openRwdMenu);
	};
	const handleScrollContact=()=>{
		const contactref=props.all.contactRef.current.offsetTop;
		window.scrollTo({top:contactref,behavior:'smooth'});
		setRwdMenu(!openRwdMenu);
	};
	const handleMenu=()=>{
		setRwdMenu(!openRwdMenu);
	};

	
	const topMenu=useRef();
	const handleToTop=()=>{
		window.scrollTo({top:topMenu.current.offsetTop,behavior:'smooth'});
	};
	const Rmenu={right:openRwdMenu?'0px':'-300px'};
	const Mback={opacity:openRwdMenu?'1':'0',transform:openRwdMenu?'scale(1)':'scale(0)'};
	const Bar={transform:openRwdMenu?'rotate(45deg)':'rotate(0deg)'};
	const Rinner={opacity:openRwdMenu?'0':'1'};
	const Xx={opacity:openRwdMenu?'1':'0',transform:openRwdMenu?'rotate(0deg)':'rotate(-45deg)'};
    return(
        <div className="indexmenu" ref={topMenu}>
			<div className="WeiTingLogo" id='indexmenu' onClick={handleToTop} >
				<a>
					<img src="img/logo.png" alt="WeiTingLogo"/>
					<h2>ALLEN DESIGN</h2>
				</a>
			</div>
			
			{<ul className="menu" id="rwdMenu" style={Rmenu}>
				<li className="toAbout" id='about' onClick={handleScrollAbout} ><a>ABOUT</a></li>
				<li className="toSkill" id='skill' onClick={handleScrollSkill} ><a >SKILL</a></li>
				<li className="toWorks" id='work' onClick={handleScrollWork} ><a >WORKS</a></li>
				<li className="toContact" id='contact' onClick={handleScrollContact} ><a >CONTACT</a></li>
			</ul>}
			<div id="rwdMenuOuter"  onClick={handleMenu}>
				<h3 id="xx" style={Xx}>x</h3>
				<div className="rwdMenuInner" id="inner" style={Rinner}>
					<div className="bar" style={Bar}></div>
					<div className="bar" style={Bar}></div>
					<div className="bar" style={Bar}></div>

				</div>
			</div>
			<div className="menuBack" style={Mback} onClick={handleMenu}></div>
		</div>
    );
}

export default Nav;