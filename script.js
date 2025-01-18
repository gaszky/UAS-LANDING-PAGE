function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const vide = document.querySelector('video');
    video.pause();
    trailer.classlist.toggle('active');
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.backround = 'url("../image/movies/${bg}")';
    banner.style.backroundSize = 'cover';
    banner.style.backroundPosition = 'center';

    contents.forEach(content => {
        content.classLisst.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}