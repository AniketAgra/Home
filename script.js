function isElementInviewport(el){
    const rect= el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight||document.documentElement.clientHeight)&&
        rect.right <= (window.innerWidth||document.documentElement.clientWidth)
    );
}
function addAnimationClass(){
    const elements = document.querySelectorAll('#anim');
    elements.forEach((element,index)=>{
        if(isElementInviewport(element)){
            setTimeout(() =>{
                element.classList.add('animate');
            },index*100);
        }
    });
}
addEventListener('scroll',addAnimationClass);