import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power4.out"
});

const read = {
	frame1: 2.6,
	frame2: 3, 
	frame3: 3	
}

const {w, h} = bannerSize


function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.2, opacity:0}, `+=${time}`)
	return tl
}

function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	
	return tl
}


function sliderSlant(){
	const tl = new TimelineMax()
	tl.add("t1")
	tl.from(".t1a", {duration:.20, x:"-=100", y:"+=30", opacity:0, ease:Power4.easeOut}, "t1")
	tl.from(".t1b", {duration:.20, x:"+=100", y:"-=30", opacity:0, ease:Power4.easeOut}, "t1+=.39")
	return tl
}


function sliderVertical(){
	const tl = new TimelineMax()
	tl.add("t1")
	tl.from(".t1a", {duration:.20,  y:"-=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.20,  y:"+=30", opacity:0}, "t1+=.2")
	return tl
}

function standard(frame1=sliderSlant){	
	const tl = init()	
	const duration= 6;
	
	tl.add("cloud", 0)
	tl.to(".cloud.right.a", {duration:duration*1, x:0}, "cloud")
	tl.to(".cloud.right.b", {duration:duration*1, x:0}, "cloud")
	tl.to(".cloud.right.c", {duration:duration*1, x:0}, "cloud")

	tl.to(".cloud.left.a", {duration:duration*1, x:0}, "cloud")
	tl.to(".cloud.left.b", {duration:duration*1, x:0}, "cloud")


	tl.add("start", .5)
	tl.to(".dark", {duration:duration*1, opacity:0}, "start")
	tl.from(".light", {duration:duration*1, opacity:0}, "start")
	tl.to(".lantern", {duration:duration*1.2, y:0}, "start")
	tl.to(".logo", {duration:duration*1, y:0}, "start")


	

	
	

	return tl
}



function b_970x250(){
	b_728x90()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){

	standard()
}

function b_320x50(){
	standard(sliderVertical)
}

function b_728x90(text1){
	standard(sliderVertical)
	
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin, standard, read }

