const sngBtn = document.getElementsByClassName('songBtn');

sngBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('from js')
    window.location.href = '/song1.html';
});