import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { photos } from "../components/ImageGallary";
import Button from "@material-ui/core/Button";
import "../css/imageZoom.css";
import TitleStyle from "./title component/TitleStyle";

const ImageZoom = () => {
  const [projects, setProject] = useState(photos);

  const projectFilterItem = (name) => {
    const arrProject = photos.filter((p) => p.catagory.includes(name));
    setProject(arrProject);
  };
  return (
    <div id="portfolio">
      <TitleStyle>
        <h1>PORTFOLIO</h1>
      </TitleStyle>
      <div className="project_nav">
        <div
          className="project_item"
          onClick={() => projectFilterItem("reactjs")}
        >
          react
        </div>
        <div className="project_item" onClick={() => projectFilterItem("html")}>
          html
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("javascript")}
        >
          javascript
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("python")}
        >
          python
        </div>
        <div
          className="project_item"
          onClick={() => projectFilterItem("nodejs")}
        >
          node
        </div>
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
                  <h3>{photo.title}</h3>
                  <p>{photo.describtion}</p>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "rgb(132 70 171)" , color:'#ffffff'}}
                    href={photo.button}
                  >
                    See details
                  </Button>
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
