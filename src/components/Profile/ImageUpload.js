import React, { useEffect, useState} from 'react';
import './Profile.css'


const ImageUpload = (props) => {
    const initialState = props.initialState;
    const [imageState, setImage] = useState(() => null);
    const [previewUrl, setPreviewUrl] = useState(()=>initialState)

    useEffect(()=>{
        if(!imageState){
            return;
        }
        const fileReader = new FileReader();
      
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
            props.setImage(fileReader.result.split("base64,")[1]);
        }

        fileReader.readAsDataURL(imageState);
    }, [imageState]);

    const onChangeImageHandler = (event) => {
        const filesArray = event.target.files;
        let imageFile;
        if(filesArray && filesArray.length ===1 ){
            imageFile = filesArray[0];
            setImage(()=>imageFile)
        } else {
            console.log("Accepts 1 file please")
        }
    }
  return (
    <div>
         <input
        id={props.id}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={(e) => onChangeImageHandler(e)}
      />
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>please pick an image</p>}
        </div>
    </div>
  )
}

export default ImageUpload