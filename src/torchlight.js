/**
 * Zachary Johnson
 * June 2009
 * www.zachstronaut.com
 */
 
 var text = null;
 var spot = null;
 var root = null;
 ///window.onload = init;
 
function init() {
    text = document.getElementById('tsb-text');
    spot = document.getElementById('tsb-spot');
    root = document.getElementById('root')
    if (text && spot) {
        root.onmousemove = onMouseMove;
        
        root.ontouchmove = function (e) {e.preventDefault(); e.stopPropagation(); onMouseMove({clientX: e.touches[0].clientX, clientY: e.touches[0].clientY});};
    }
    
    onMouseMove({clientX: 300, clientY: 200, target: root});
}
 
 function onMouseMove(e) {
     var xm = (e.clientX - (document.body.scrollWidth / 2)) / document.body.scrollWidth * 250;
     var ym = (e.clientY - (document.body.scrollHeight / 2)) / document.body.scrollHeight * 50;
     var d = Math.round(Math.sqrt(xm*xm + ym*ym) / 5);
     text.style.textShadow = -xm + 'px ' + (-ym - 20) + 'px ' + (d * 2) + 'px rgba(0,0,0,0.8)';
     
     
     xm = e.clientX - (root.clientWidth);
     ym = e.clientY - 125;
     spot.style.backgroundPosition = xm + 'px ' + ym + 'px';
 }

 export default init