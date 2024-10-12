const progress = document.querySelector(".progress");

const handleScroll = ()=>{
    let getTopScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    let totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = `${(getTopScrolled/totalScroll * 100)}%`
}
window.onscroll = ()=>{
    handleScroll();
}

