
let translateVal = 0;
        let layers = document.querySelectorAll(".layer .active-layer");


        function right() {
            document.querySelector(".instructions").classList.add("remove");
            layers = document.querySelectorAll(".layer.active-layer");
            for (let i = 0; i < layers[0].childElementCount; i++) {
                layers[0].children[i].classList.add("animate")
            }
            for (let i = 0; i < layers[1].childElementCount; i++) {
                layers[1].children[i].classList.add("animate")
            }
            document.querySelector(".gallery-heading").classList.add("animate");

            if (translateVal < 3)
                translateVal++;

            layers[0].style = "-webkit-transform: translateX( -" + 200 * translateVal + "vw); -ms-transform: translateX( -" + 200 * translateVal + "vw);  transform: translateX( -" + 200 * translateVal + "vw);" +
                "transform-origin:" + translateVal + "px; -webkit-transform-origin:" + translateVal + "px; -ms-transform-origin:" + translateVal + "px;";

            layers[1].style = "transform: translateX( -" + 200 * translateVal + "vw);  -webkit-transform: translateX( -" + 200 * translateVal + "vw); -ms-transform: translateX( -" + 200 * translateVal + "vw);" +
                "transform-origin:" + translateVal + "px; -ms-transform-origin:" + translateVal + "px; -webkit-transform-origin:" + translateVal + "px;";

            window.setTimeout(() => {
                for (let i = 0; i < layers[0].childElementCount; i++) {
                    layers[0].children[i].classList.remove("animate")
                }

                for (let i = 0; i < layers[1].childElementCount; i++) {
                    layers[1].children[i].classList.remove("animate")
                }
                document.querySelector(".gallery-heading").classList.remove("animate");
            }, 1600)
        }

        function left() {

            layers = document.querySelectorAll(".layer.active-layer");

            for (let i = 0; i < layers[0].childElementCount; i++) {
                layers[0].children[i].classList.add("animate")
            }
            for (let i = 0; i < layers[1].childElementCount; i++) {
                layers[1].children[i].classList.add("animate")
            }
            document.querySelector(".gallery-heading").classList.add("animate");

            if (translateVal > 0)
                translateVal--;
            if (translateVal == 0)
                document.querySelector(".instructions").classList.remove("remove");
            layers[0].style = "-webkit-transform: translateX( -" + 200 * translateVal + "vw); -ms-transform: translateX( -" + 200 * translateVal + "vw);  transform: translateX( -" + 200 * translateVal + "vw);" +
                "transform-origin:" + translateVal + "px; -webkit-transform-origin:" + translateVal + "px; -ms-transform-origin:" + translateVal + "px;";

            layers[1].style = "transform: translateX( -" + 200 * translateVal + "vw);  -webkit-transform: translateX( -" + 200 * translateVal + "vw); -ms-transform: translateX( -" + 200 * translateVal + "vw);" +
                "transform-origin:" + translateVal + "px; -ms-transform-origin:" + translateVal + "px; -webkit-transform-origin:" + translateVal + "px;";


            window.setTimeout(() => {
                for (let i = 0; i < layers[0].childElementCount; i++) {
                    layers[0].children[i].classList.remove("animate")
                }

                for (let i = 0; i < layers[1].childElementCount; i++) {
                    layers[1].children[i].classList.remove("animate")
                }
                document.querySelector(".gallery-heading").classList.remove("animate");

            }, 1600)
        }