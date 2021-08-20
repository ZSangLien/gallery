
        let desktopLayers = document.querySelectorAll(".desktop-layer");
        let mobileLayers = document.querySelectorAll(".mobile-layer")
        checkGallery();

        function checkGallery() {
            if (window.innerWidth > 600) {
                desktopLayers[0].classList.add("active-layer")
                desktopLayers[1].classList.add("active-layer")
                mobileLayers[0].remove()
                mobileLayers[1].remove()
            }

            else {
                desktopLayers[0].remove()
                desktopLayers[1].remove()
                mobileLayers[0].classList.add("active-layer")
                mobileLayers[1].classList.add("active-layer")
            }
        }

        let images = document.querySelectorAll("img[data-src]");
        images.forEach((x) => {
            x.src = x.attributes.getNamedItem("data-src").value;
        })

        let videoObject;
        function videoSec() {
            videoObject = document.querySelector('video');
            let videoLinks = document.querySelectorAll('div[video-src]');

            videoLinks.forEach(videoLink => {
                videoLink.addEventListener('click', () => {
                    videoObject.src = videoLink.attributes.getNamedItem("video-src").value;
                    videoObject.play();
                    videoLinks.forEach(x => x.classList.remove('active-video'));
                    videoLink.classList.add('active-video');
                    let overlay = document.querySelector(".teaser-sec .overlay");
                    overlay.classList.add("clicked");
                });
            });
        }

        let translateCount = 1;
        let totalThumb = document.querySelector('.video-list-container').childElementCount;


        document.querySelector('.right-arrow').addEventListener('click', () => {
            let thumbInView = Math.floor(document.querySelector('.video-list').offsetWidth / 320);
            if (thumbInView * translateCount < totalThumb)
                document.querySelector('.video-list-container').style = `transform:translate(${320 * thumbInView * (-(++translateCount - 1))}px)`;
            checkArrowState()
        });

        document.querySelector('.left-arrow').addEventListener('click', () => {
            let thumbInView = Math.floor(document.querySelector('.video-list').offsetWidth / 320);
            if (translateCount > 1)
                document.querySelector('.video-list-container').style = `transform:translate(${320 * thumbInView * (-(--translateCount - 1))}px)`;
            checkArrowState();
        });
        checkArrowState();
        function checkArrowState() {
            if (translateCount > 1)
                document.querySelector('.left-arrow').classList.remove('deactive-btn');
            else
                document.querySelector('.left-arrow').classList.add('deactive-btn');

            let thumbInView = Math.floor(document.querySelector('.video-list').offsetWidth / 320);

            if (thumbInView * translateCount < totalThumb)
                document.querySelector('.right-arrow').classList.remove('deactive-btn');
            else
                document.querySelector('.right-arrow').classList.add('deactive-btn');
        }

        let isDevCollapsed = false;
        function Developer() {
            let devRow = document.querySelector('#team .row');
            let devSection = document.querySelector("#team");
            if (isDevCollapsed != true)
                devSection.style = `height: ${200 + 60 + devRow.offsetHeight}px`;
            else

                devSection.style = window.innerWidth > 500 ? 'height:200px' : 'height : 140px';
        }
        window.addEventListener('resize', Developer);
        Developer()


