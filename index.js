

//DOM 조작 위해서 온로드 후에 동작
window.onload = function(){
    const guide_1 = document.querySelectorAll('#guide_1 ul li')
    if(location.pathname == '/'){
        guide_1[0].classList.add('li_active')
    }
}