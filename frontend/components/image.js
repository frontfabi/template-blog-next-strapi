import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const Image = ({ image, style }) => {
  const { provider_metadata } = image.data.attributes
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_NAME || 'blogstrapinext'
    }
  }); 
  
  const myImage = cld.image(provider_metadata.public_id);

  console.log(image, provider_metadata.public_id)
  return (
    <AdvancedImage cldImg={myImage}   />
  )
}

export default Image
