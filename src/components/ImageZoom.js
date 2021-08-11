import React,{useState} from "react";
import ModalImage from "react-modal-image";
import { photos } from "../components/ImageGallary";
import ThreeBar from "../assets/3 bar.svg";
import "../css/imageZoom.css";
import TitleStyle from "./title component/TitleStyle";

const ImageZoom = () => {

  const [projects , setProject] = useState(photos)

  const projectFilterItem =(name)=>{
    const arrProject =  photos.filter((p) =>p.catagory.includes(name))
    setProject(arrProject)
 }
  return (
    <div>
     <TitleStyle><h1>PORTFOLIO</h1></TitleStyle>
      <div className="project_nav">
            <div className="project_item" onClick={()=>projectFilterItem('reactjs')} >react</div>
            <div className="project_item" onClick={()=>projectFilterItem('html')} >html</div>
            <div className="project_item" onClick={()=>projectFilterItem('javascript')} >javascript</div>
            <div className="project_item" onClick={()=>projectFilterItem('python')} >python</div>
            <div className="project_item" onClick={()=>projectFilterItem('nodejs')} >node</div>
      </div>
      <div className="image_items">
        {projects.map((photo) => (
          <div>
            <div className="img-section">
              <div className="image_box">
                <ModalImage
                  className="image_sizing"
                  small={photo.src}
                  medium={photo.src}
                  large={photo.src}
                  showRotate={true}
                />
                <div className="box_write">
                  <h1>{photo.title}</h1>
                  <p>{photo.describtion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageZoom;
