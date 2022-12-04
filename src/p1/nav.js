import React, { useState, useRef } from 'react';

const Nav = ({ all }) => {
	const [openRwdMenu, setRwdMenu] = useState(false);

	const scrollData = {
		aboutref: all.aboutRef,
		skillref: all.skillRef,
		workref: all.workRef,
		contactref: all.contactRef
	}

	const lib = (data, e) => {
		e.preventDefault();
		const target = data.current.offsetTop;
		window.scrollTo({ top: target, behavior: 'smooth' });
		setRwdMenu(!openRwdMenu);
	}

	const handleScrollAbout = (e) => {
		lib(scrollData.aboutref, e);
	};

	const handleScrollSkill = (e) => {
		lib(scrollData.skillref, e);
	};

	const handleScrollWork = (e) => {
		lib(scrollData.workref, e);
	};

	const handleScrollContact = (e) => {
		lib(scrollData.contactref, e);
	};

	const handleMenu = () => {
		setRwdMenu(!openRwdMenu);
	};


	const topMenu = useRef();
	const handleToTop = () => {
		window.scrollTo({ top: topMenu.current.offsetTop, behavior: 'smooth' });
	};
	const Rmenu = { right: openRwdMenu ? '0px' : '-300px' };
	const Mback = { opacity: openRwdMenu ? '1' : '0', transform: openRwdMenu ? 'scale(1)' : 'scale(0)' };
	const Bar = { transform: openRwdMenu ? 'rotate(45deg)' : 'rotate(0deg)' };
	const Rinner = { opacity: openRwdMenu ? '0' : '1' };
	const Xx = { opacity: openRwdMenu ? '1' : '0', transform: openRwdMenu ? 'rotate(0deg)' : 'rotate(-45deg)' };
	return (
		<div className="indexmenu" ref={topMenu}>
			<div className="WeiTingLogo" id='indexmenu' onClick={handleToTop} >
				<a href='/#'>
					<img src="img/logo.png" alt="WeiTingLogo" />
					<h2>ALLEN DESIGN</h2>
				</a>
			</div>

			{<ul className="menu" id="rwdMenu" style={Rmenu}>
				<li className="toAbout" id='about' onClick={handleScrollAbout} ><a href='/#'>ABOUT</a></li>
				<li className="toSkill" id='skill' onClick={handleScrollSkill} ><a href='/#'>SKILL</a></li>
				<li className="toWorks" id='work' onClick={handleScrollWork} ><a href='/#'>WORKS</a></li>
				<li className="toContact" id='contact' onClick={handleScrollContact} ><a href='/#' >CONTACT</a></li>
			</ul>}
			<div id="rwdMenuOuter" onClick={handleMenu}>
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