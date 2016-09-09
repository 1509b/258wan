img1.style.transform="scale("+1.3+")";

setTimeout(function(){
  img1.style.transform="scale("+1.0+")";
},500);

ser.onfocus=function(){
  seh.style.border="1px solid lime"
};
ser.onblur=function(){
  seh.style.border="1px solid #ccc"
};
if(localStorage.s1){
  var num2=parseInt(localStorage.getItem("s1"));
  span3.innerHTML=num2;
  p1.onclick=function(){
    num2+=1;
    localStorage.setItem('s1',num2);
    span3.innerHTML=num2;
  };
}else{
  var num=0;
  p1.onclick=function(){
    num+=1;
    localStorage.setItem('s1',num);
    span3.innerHTML=num;
  }
}



