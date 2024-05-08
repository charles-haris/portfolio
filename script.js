let go_up = document.querySelector('.btn');
document.getElementById('photography').style.animation = '3s infinite alternate slidein'

window.addEventListener('scroll',function(){
    let scrollHeight = this.window.screenY > 1200;
    go_up.classList.toggle('scroll-active',scrollHeight)
});

window.addEventListener('scroll',() => {
     if(window.scrollY > 200){
        go_up.style.display="flex";

    }else{
        go_up.style.display="none";

    } 
    go_up.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            behavior : "smooth"
        })
    })
    //let scrollHeight = this.window.screenY > 1000;
    //go_up.classList.toggle('scroll-active',scrollHeight)
});
let side_menu=document.getElementById('side_humburger_menu');
let humburger_menu=document.querySelector('.humburger_menu');
humburger_menu.addEventListener("click",()=>{
    side_menu.classList.toggle('side_menu-active');
    side_menu.classList.add('show');

})

let avatar=document.querySelector('#avatar');
avatar.addEventListener("click",()=>{
    side_menu.classList.toggle('side_menu-desactive');
    side_menu.classList.add('show');

})

let link_1 = document.getElementById('link_1');
let link_2 = document.getElementById('link_2');
let link_3 = document.getElementById('link_3');
let link_4 = document.getElementById('link_4');
let link_5 = document.getElementById('link_5');

link_1.addEventListener('click', () => {
    link_1.style.borderBottom='3px solid #0d8abc74';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';

})

link_2.addEventListener('click',()=>{
    link_2.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';

});

link_3.addEventListener('click',()=>{
    link_3.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';

});

link_4.addEventListener('click',()=>{
    link_4.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_5.style.borderBottom='none';

});

link_5.addEventListener('click',()=>{
    link_5.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';

});

if(window.scrollY < 800){
    link_1.style.borderBottom='3px solid #0d8abc74';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';


}else if(window.scrollY > 800 && window.scrollY < 1500){
    link_2.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';

} else if(window.scrollY > 1500 && window.scrollY < 2400){
    link_3.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_4.style.borderBottom='none';
    link_5.style.borderBottom='none';

}else if(window.scrollY > 2400 && window.scrollY < 3800){
    link_4.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_5.style.borderBottom='none';
}else{
    link_5.style.borderBottom='3px solid #0d8abc74';
    link_1.style.borderBottom='none';
    link_2.style.borderBottom='none';
    link_3.style.borderBottom='none';
    link_4.style.borderBottom='none';
}

let change_color = document.getElementById('change_color');

let sun = document.getElementById('sun');
let side_bar = document.querySelector('.sidebar');
let block_1 = document.querySelector('.block_1');
let block_2 = document.querySelector('.block_2');
let block_3 = document.querySelector('.block_3');
let block_4 = document.querySelector('.block_4');
let block_5 = document.querySelector('.block_5');
let block_6 = document.querySelector('.block_6');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let pic5 = document.getElementById('pic5');
let p = document.querySelectorAll('p');
let list_block_diploma_1 = document.querySelectorAll('.diploma_1');

let id_paragraph = document.querySelectorAll('#paragraph');
let card = document.querySelector('.card');

let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');

change_color.addEventListener("click",()=>{
    if(side_bar.style.backgroundColor=='black'){
        side_bar.style.backgroundColor='azure';
        block_1.style.backgroundColor='azure';
        block_2.style.backgroundColor='azure';
        block_3.style.backgroundColor='azure';
        block_4.style.backgroundColor='azure';
        block_5.style.backgroundColor='azure';
        block_6.style.backgroundColor='azure';
        p.forEach(
            (p)=>{
              p.style.color='black';
  
            }
          );
  
        id_paragraph.forEach(
              (id_paragraph)=>{
                  id_paragraph.style.color='black';
    
              }
            );
        
        list_block_diploma_1.forEach(
            (border)=>{
                border.style.borderTop='1px solid black';

            }
        );

        pic1.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/linkedin-box-line.png";
        pic2.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/whatsapp-line.png";
        pic3.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/facebook-box-line.png";
        pic4.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/instagram-line.png";
        pic5.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/snapchat-line.png";
        pic6.src="asset/images/icons/icons_black/RemixIcon_PNG_2404301532/twitter-x-line.png";

        card.style.backgroundColor="white";

        card.setAttribute("style","-webkit-backdrop-filter:none; -o-backdrop-filter: none;-moz-backdrop-filter: none;backdrop-filter: none;");
    /*make the color or image blur*/


        
    }else{
        
        side_bar.style.backgroundColor='black';
        block_1.style.backgroundColor='black';
        block_2.style.backgroundColor='black';
        block_3.style.backgroundColor='black';
        block_4.style.backgroundColor='black';
        block_5.style.backgroundColor='black';
        block_6.style.backgroundColor='black';
        p.forEach(
          (p)=>{
            p.style.color='white';

          }
        );

        id_paragraph.forEach(
            (id_paragraph)=>{
                id_paragraph.style.color='white';
  
            }
          );

          list_block_diploma_1.forEach(
            (border)=>{
                border.style.borderTop='1px solid white';

            }
        );
        pic1.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/linkedin-box-line.png";
        pic2.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/whatsapp-line.png";
        pic3.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/facebook-box-line.png";
        pic4.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/instagram-line.png";
        pic5.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/snapchat-line.png";
        pic6.src="asset/images/icons/icons_white/RemixIcon_PNG_2404301532/twitter-x-line.png";

        card.style.backgroundColor="rgba(240, 255, 255, 0.5)";

        card.setAttribute("style","background-color:rgba(240, 255, 255, 0.5);-webkit-backdrop-filter: blur(4px);-o-backdrop-filter: blur(4px);-moz-backdrop-filter: blur(4px);backdrop-filter: blur(4px);box-shadow:0px;border:0px;");
    /*make the color or image blur*/

    }
    
});



