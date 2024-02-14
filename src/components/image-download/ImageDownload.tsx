// src/ImageDownloader.js
import { range, } from 'lodash';

const makeUrl = (index: number) => {
    return `https://notwk.london/bg/col_${index}.png`
}

const imageUrls = range(10, 24).map(val => {
    return {
        url: makeUrl(val),
        order: val
    }
})

const ImageDownloader = () => {

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
                    link.setAttribute('download', `col_${item.order}.png`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                })
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