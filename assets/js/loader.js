window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    // const header = document.getElementById('header');
    // const progressBar = document.getElementById('progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10; 
    //     progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
    //         header.classList.add('finish-loader');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600); 
        }
    }, 100);
});
