//On Scroll
window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  
  for(var i=0;i < reveals.length;i++){
    var windowHeight = window.innerHeight;
    
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
      console.log("Is Active")
    }
    else {
      reveals[i].classList.remove('active');
      console.log("Not Active")
    }
  }
}

//Automatic Banner Slider Functions
var count = 1;
setInterval(function slide(){
  var images = document.getElementById("image");
  var num = 100;
  if(count === 2){
    num = 200;
  }
  images.style.marginLeft = "-"+num+"%";
  count++;
  if (count === 4){
    images.style.marginLeft = "0%";
  }
},5000);

//coupon code checking
const codes = ['hxb6y4u','ak47bbc','grocer5'];
const coupons = ['500','200','1000'];

function couponChecker(){
  var inputCode = document.getElementById("couponcode");
  var verifier = false;
  if(inputCode.value == ""){
    Javascript:alert("No Code is Entered");
    verifier = true;
  }
  for(var i=0;i<3;i++){
    if(inputCode.value==codes[i]){
      gotCoupon(i);
      inputCode.value = "";
      verifier = true;
    }
  }
  if(verifier === false){
    Javascript:alert("Invalid Coupon Code [Error:404]");
  }
}

function gotCoupon(i){
  var popup = document.getElementById("gotCoupon");
  popup.style.opacity = "1";
  popup.style.transform = "scale(1) translate(-50%,-50%)";
  
  var wonCoupon = document.getElementById("couponTeller");
  wonCoupon.innerText = "YOU HAVE GOT Rs."+coupons[i];
}

function popupCloser(){
  var popup = document.getElementById("gotCoupon");
  popup.style.opacity = "0";
  popup.style.transform = "scale(0) translate(-50%,-50%)";
}

//This is for side Bar
var body = document.getElementById("Body");
var barIsActive = false;
var sidebar = document.getElementById("SIDEBAR");
var bar = document.getElementById("bars");
function sideBar(){
  if(barIsActive === false){
    sidebar.style.left="50%";
    bar.style.transform = "rotate(90deg)";
    body.style.overflowY="hidden";
    barIsActive = true;
  }else {
    sidebar.style.left="100%";
    bar.style.transform = "rotate(0deg)";
    body.style.overflowY="scroll";
    barIsActive = false;
  }
}
document.onclick = function(e){
  if(e.target.id != 'SIDEBAR' && e.target.id != 'bars'){
    if(barIsActive === true){
      sideBar();
    }
  }
}