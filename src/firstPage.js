import React,{useRef} from 'react';
import Nav from './p1/nav';
import Sec1 from './p1/sec1';
import Sec2 from './p1/sec2';
import Sec3 from './p1/sec3';
import Sec4 from './p1/sec4';
import Sec5 from './p1/sec5';
import Footer from './p1/footer';

const FirstPage=(props)=>{
    const aboutRef=useRef();
    const skillRef=useRef();
    const workRef=useRef();
    const contactRef=useRef();
    return(
        <div className='wrap'>
            <Nav all={{aboutRef,skillRef,workRef,contactRef}}/>
            <Sec1/>
            <Sec2 about={aboutRef}/>
            <Sec3 skill={skillRef}/>
            <Sec4 work={workRef}/>
            <Sec5 contact={contactRef}/>
            <Footer/>
        </div>
    );
}

export default FirstPage;