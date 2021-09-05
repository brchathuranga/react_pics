import './ImageList.css'
import React from "react";
import ImageCard from "./ImageCard";


const ImageList = (props) => {

    const imageList = props.images.map(img => {
        return <ImageCard key={img.id} image={img}/>
    });

    return <div className="image-list"> {imageList}</div>
}

/*class ImageList extends React.Component {
    render() {
        const imageList = this.props.images.map(img => {
            return <ImageCard key={img.id} image={img}/>
        });
        return <div className="image-list"> {imageList}</div>
    }
}*/

export default ImageList;