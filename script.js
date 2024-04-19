// $('#text p').textillate({ in: { effect: 'rollIn' } });
 window.addEventListener('resize', function (){ 
 'use strict';
 window.location.reload(); 
})
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

document.querySelector('#main').addEventListener('mousemove',function(dets){
    document.querySelector('circle').style.left = `${dets.clientX}px`
    document.querySelector('circle').style.top = `${dets.clientY}px`
})
dfkjbsdkfjbsd
gsap.fromTo('child',{
scrollTrigger:{
    trigger:'parent',
    scrub:true,
    markers:true,
    start:'top 50%',
    end:'top 0%',
},
})
hello