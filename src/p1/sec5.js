import React,{useState,useEffect} from 'react';

const Sec5=(props)=>{
    const [scroll3,setScroll3]=useState(false);
	const contactRef=props.contact;
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            // const contactScroll=document.getElementsByClassName('contact')[0];
            setScroll3(
                window.scrollY>contactRef.current.offsetTop-300?true:false
            );
        });
    },[]);
    const contactFade={opacity:scroll3?'1':'0',paddingTop:scroll3?'100px':'300px'};
    return(
        <div className="contact" ref={contactRef}>
			<div className="contactContent" style={contactFade}>
				<h2 className="h2FSize40">CONTACT</h2>
				<hr className="shortColorBar"/>
				<div className="contactOut">
					<div className="contactPic">
						<img src="img/weiting.jpg" alt="自介照片"/>
						<h4>Wei-Ting Chen</h4>
						<p><i></i><a href="mailto:happyalien543@gmail.com">happyalien543@gmail.com</a></p>
						<ul>
							<li className="github"><a href="https://github.com/allen760128" target="_blank"><span></span></a></li>
							<li className="insta"><a href="https://issuu.com/allenchen2/docs/portfolio3-2-" target="_blank"><span></span></a></li>
							<li className="twitter"><a href="https://twitter.com/" target="_blank"><span></span></a></li>
						</ul>
					</div>
				</div>
			</div>	
		</div>
    );
}

export default Sec5;