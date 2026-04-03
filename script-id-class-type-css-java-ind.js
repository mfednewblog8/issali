
j='';
banner='';
$.getScript('yuming.js?'+ (new Date()).getTime());


theme='aden';

var vid=[
'Qzkj_p7GnLc',
];

var STRONG = {
share: 10
};



function incrementValue1() {
if(parseInt(get_Cookie('prog')) > 600){
window.open('whatsapp://send?text=' + tb);
}else{
window.open('whatsapp://send?text=' + tb);
}
setTimeout(function(){
incrementValue_i();
fn1_i();
value = parseInt(get_Cookie('prog'));
set_Cookie('prog',value+1);
},2000);
}
function incrementValue_i()
{
get_Cookie('prog')=='' ? value=0 : value=get_Cookie('prog') ;
value == 2 || value == 4 ? alert('Sharing failed!\n\n The same group or the same friend is not correct. Please check and share again.') : void(0) ;
set_Cookie('prog',value);
record('adien',value);
record(theme,'share');
if(value>= 12){
record('adien','wc');
lasthtml();
}
}
function fn1_i() {
v=get_Cookie('prog');
document.querySelector('.progress').style.display = "block";
v=='0'?ob=30:v=='1'?ob=50:v=='2'?ob=52:v=='3'?ob=60:v=='4'?ob=60:v=='5'?ob=65:v=='6'?ob=70:v=='7'?ob=80:v=='8'?ob=85:v=='9'?ob=90:v=='10'?ob=96:v=='11'?ob=98:v=='12'?ob=100:void(0);
document.querySelector('.progress span').style['width'] = ob + "%";
document.querySelector('.progress span').style['width'] = ob + "%";
document.querySelector('.progress p').textContent = ob + "%";
}

function incrementValue_a()
{
value = parseInt(get_Cookie('prog'))-1;
value == 2 || value == 4 ? alert('Sharing failed!\n\n The same group or the same friend is not correct. Please check and share again.') : void(0) ;
record('adien',value);
record(theme,'share');
if(value>= 12){
record('adien','wc');
lasthtml();
}
}

function fn1_a() {
v=parseInt(get_Cookie('prog'))-1;
document.querySelector('.progress').style.display = "block";
v=='0'?ob=30:v=='1'?ob=50:v=='2'?ob=52:v=='3'?ob=60:v=='4'?ob=60:v=='5'?ob=65:v=='6'?ob=70:v=='7'?ob=80:v=='8'?ob=85:v=='9'?ob=90:v=='10'?ob=96:v=='11'?ob=98:v=='12'?ob=100:void(0);
document.querySelector('.progress span').style['width'] = ob + "%";
document.querySelector('.progress span').style['width'] = ob + "%";
document.querySelector('.progress p').textContent = ob + "%";
}



function tipn(){
alert('You Will Recive Your Questions and Answers immidiately after you share to whatsApp groups and friends so they can also get thier answers before Exams \n Share until the blue bar is full!');
}


function set_Cookie(name,value){
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + (Days*20*1000));
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=/;"
}
function get_Cookie(name){
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)){
return unescape(arr[2]);
}
return '';
}
function getQueryString(name) {
var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
var r = window.location.search.substr(1).match(reg);
if (r != null) {
return unescape(r[2]);
}
return null;
}

record(getQueryString('th'));
record('adien');

function record (a,b){
var aa = new XMLHttpRequest;
if(b){
if(get_Cookie(a+b)!== a+b){
aa.open("GET", '//r.line-me.vip/record/total.php?ac=node&name='+a+'&node='+b), aa.onreadystatechange = function () {
set_Cookie(a+b,a+b);
}, aa.send(null)
}
}else{
if(get_Cookie(a)!== a){
aa.open("GET",'//r.line-me.vip/record/total.php?ac=total&name='+a), aa.onreadystatechange = function () {
set_Cookie(a,a);
}, aa.send(null)
}
}
}

var zeit = new Date();
var sec = zeit.getSeconds();
if (sec < 6 ){
sec = 9
}
if (sec > 5 & sec < 13 ){
sec = 8
}
if (sec > 11 & sec < 19 ){
sec = 7
}
if (sec > 17 & sec < 25 ){
sec = 6
}
if (sec > 23 & sec < 31 ){
sec = 5
}
if (sec > 29 & sec < 37 ){
sec = 4
}
if (sec > 35 & sec < 43 ){
sec = 3
}
if (sec > 41 & sec < 49 ){
sec = 2
}
if (sec > 47 & sec < 55 ){
sec = 1
}
if (sec > 54){
sec=0
};
var add = sec;
var zeit2 = new Date();
var minute = zeit2.getMinutes();
var timer1 = (60-minute)*60;
if (timer1 > 1800) {
var resttimer = (30-minute)*10
} else {
var resttimer = (60-minute)*10
};
var timer = resttimer + add + 67;
function updateTimer() {
timer--;
$("#gutschein").text(timer);
if (timer < 9) {
stopFunction();
}
}
var myTimer = window.setInterval(updateTimer, 6000);
function stopFunction() {
window.clearInterval(myTimer);
}

function lasthtml(){
html='<font color="#43AF65">The last step:</font><br/><br/>To get questions and answers before Exams, you have to complete this final step!<br/><br/>1. You have to Send your Reg. Number for the App to Extract your question and answer from Jamb Portal<br/><br/>After adding Click on UNLOCK QUESTIONS/ANSWERS Below and wait for admin to check it, the review will be completed in 1 hours and you will get a Notification<br/><br/>';
document.getElementById("lastapp").innerHTML=html;
document.getElementById("buttonl").style.display='none';
document.getElementById("button2").style.display='block';
}

function dapp(){
window.open('https://ey43.com/4/3144603');
}
function dappp(){
window.open('https://ey43.com/4/3144603');
}
function ads(vdata,ir){
record('adiensense');
record('adiensense',ir);
window.open('https://ey43.com/4/3144603');
}



