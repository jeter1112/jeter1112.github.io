const myHeading=document.querySelector('h1');
myHeading.textContent='shen zhen';
let mi=document.querySelector('img');
mi.onclick=function(){
    let ms=mi.getAttribute('src');
    if(ms === 'images/20ms.png')
    {
        mi.setAttribute('src','images/1000ms.png')
    }
    else
    {
        mi.setAttribute('src','images/20ms.png')
    }
}

let mb=document.querySelector('button')
let mh=document.querySelector('h1')

function setUserName()
{
    let mn=prompt('Please enter your name.');
    localStorage.setItem('name',mn);
    mh.textContent='user:'+mn;
}

if (!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let sn=localStorage.getItem('name');
    mh.textContent='daye';
}

mb.onclick = function() {
    setUserName();
  }
// hello 
/**
 * wocj
 */