import {useEffect, useState} from "react";
import img from './static/img.png';
import img1 from './static/img_1.png';
import img2 from './static/img_2.png';
import mergeImages from 'merge-images';
// import imageToBase64 from 'image-to-base64';


function App() {
    const [loadImage, setLoadImage] = useState([]);
    // const combine = (imgSources) => {
    //     return Promise.all(imgSources.map(function (url) {
    //         // load all images
    //         return new Promise(function (resolve) {
    //             var img = new Image();
    //             img.onload = function () {
    //                 resolve(img);
    //             };
    //             img.height = 1000;
    //             img.width = 100;
    //             img.src = url;
    //             console.log(img.src)
    //         });
    //     })).then(function (images) {
    //         console.log(images , 'images')
    //         // create a canvas with required dimensions
    //         var canvas = document.getElementById('canvas');
    //         canvas.width = 265;
    //         canvas.height = 500;
    //         // canvas.style.backgroundColor = 'transparent';
    //
    //         // draw images to the canvas
    //         var ctx = canvas.getContext('2d');
    //         ctx.drawImage(images[0], 0, 0);
    //         ctx.drawImage(images[1], 0, 0);
    //         ctx.drawImage(images[2], 0, 0);
    //
    //         // return the resulting image in base64 form
    //         let dataURL = canvas.toDataURL('image/jpeg/png/svg');
    //         console.log(dataURL , 'dataURL')
    //         return dataURL
    //     });
    // }
    //
    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    useEffect(() => {

        let url = 'https://raw.githubusercontent.com/lukechilds/merge-images/master/test/fixtures/body.png';
        let url2 = 'https://raw.githubusercontent.com/lukechilds/merge-images/master/test/fixtures/eyes.png';
        let url3 = 'https://raw.githubusercontent.com/lukechilds/merge-images/master/test/fixtures/mouth.png';

        let imagUrl = [url, url2, url3];

        for (let i = 0; i < imagUrl.length; i++) {
            fetchImage(imagUrl[i]);
        }

    },[])
    const fetchImage = async (url) => {

        const fileName = url.substring(url.lastIndexOf('/') + 1)
        await fetch(url)
            .then(response => response.blob())
            .then(blob => new File([blob], `${fileName}`, {
                type: blob.type
            }))
            .then(file => {
                getBase64(file).then(res => {
                    setLoadImage(prevState => [...prevState, res])
                })
            })

    }

    useEffect(() => {
        mergeImages(loadImage)
            .then(b64 => {
                console.log(b64, 'b64')
            });
    },[loadImage])

    const newImage = async () => {

    }


    return (
        <div className="App">
            {/*<img src='' id="new-image" alt="" style={{ height:500 , width:500}}/>*/}

            <canvas style={{width:"max-content" , }} id="canvas" />
            <button onClick={newImage}>submit</button>
        </div>
    );
}

export default App;
