const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
        windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        per = windowScroll / windowHeight * 100;

    progress.style.width = per + '%';


}
