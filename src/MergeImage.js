import React, {useEffect, useState} from 'react';
import mergeImages from 'merge-images';
import head from './static/img.png';
import eyes from './static/img_1.png';
import mouth from './static/img_2.png';

const MergeImage = () => {

    const newImage = () => {
         mergeImages([head, eyes, mouth]).then(b64 => {
                console.log(b64, 'b64');
                document.getElementById('after-image').src = b64
            });
    }

    useEffect(()=> {
        newImage();
    }, [])
    return (
        <div>
            <img id="after-image" alt='' />
            MergeImage
        </div>
    );
}
export default MergeImage;