// src/ImageDownloader.js
import { range, times } from 'lodash';
import React, { useState } from 'react';

const makeUrl = (index: number) => {
    return `https://notwk.london/bg/bg_${index}.jpg`
}

const imageUrls = range(19, 20).map(val => {
    return {
        url: makeUrl(val),
        order: val
    }
})

const ImageDownloader = () => {
    const dev = []
    const [imageUrl, setImageUrl] = useState("https://notwk.london/bg/bg_1.jpg");

    const handleChange = (e: any) => {
        setImageUrl(e.target.value);
    };

    const handleDownload = async () => {
        if (imageUrls.length > 0) {
            try {
                // Fetch and download images one by one

                imageUrls.map(async (item) => {


                    const response = await fetch(item.url);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `bg_${item.order}.jpg`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    // Reset the URL to prevent re-downloading on re-render
                    URL.revokeObjectURL(url);

                })
                // for (let i = 0; i < imageUrls.length; i++) {
                //   const response = await fetch(imageUrls[i]);
                //   const blob = await response.blob();
                //   const url = window.URL.createObjectURL(new Blob([blob]));
                //   const link = document.createElement('a');
                //   link.href = url;
                //   link.setAttribute('download', `image_${i + 1}.jpg`);
                //   document.body.appendChild(link);
                //   link.click();
                //   document.body.removeChild(link);
                //   // Reset the URL to prevent re-downloading on re-render
                //   URL.revokeObjectURL(url);
                // }
            } catch (error) {
                console.error('Error downloading images:', error);
            }
        }
    };


    return (
        <div>

            <button onClick={handleDownload}>Download Image</button>
        </div>
    );
};

export default ImageDownloader;