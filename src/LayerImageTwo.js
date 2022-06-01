import './App.css';
import {useEffect} from "react";
import img from './static/img_3.png';
import img1 from './static/img_4.png';
import img2 from './static/img_6.png';


function App() {
    const combine = (imgSources) => {
        return Promise.all(imgSources.map(function (url) {
            // load all images
            return new Promise(function (resolve) {
                var img = new Image();
                img.onload = function () {
                    resolve(img);
                };
                img.height = 1000;
                img.width = 100;
                img.src = url;
                console.log(img.src)
            });
        })).then(function (images) {
            console.log(images , 'images')
            // create a canvas with required dimensions
            var canvas = document.getElementById('canvas');
            canvas.width = 265;
            canvas.height = 500;
            // canvas.style.backgroundColor = 'transparent';

            // draw images to the canvas
            var ctx = canvas.getContext('2d');
            ctx.drawImage(images[0], 0, 0);
            ctx.drawImage(images[1], 0, 0);
            ctx.drawImage(images[2], 0, 0);

            // return the resulting image in base64 form
            let dataURL = canvas.toDataURL('image/jpeg/png/svg');
            console.log(dataURL , 'dataURL')
            return dataURL
        });
    }

    useEffect(() => {
        console.log(img, img1, img2 , 'fgdfhgdfhg')
        combine([img, img1, img2]).then(function (result) {
            var img = new Image();
            img.src = result;
            // document.getElementById('new-image').src = img.src;
            // document.body.appendChild(img);
        });
    },[])


    return (
        <div className="App">
            {/*<img src='' id="new-image" alt="" style={{ height:500 , width:500}}/>*/}

            <canvas style={{width:"max-content" , }} id="canvas" />
        </div>
    );
}

export default App;
