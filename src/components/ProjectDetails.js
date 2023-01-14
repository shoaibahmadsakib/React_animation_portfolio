import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { photos } from "../components/ImageGallary";
const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  // useEffect(()=>{
  // fetch(`projects.json`)
  // .then(res=>res.json())
  // .then

  const filter = photos.filter((myFilter) => myFilter.id == id);
  console.log(filter);

  return (
    <div>
      {filter.map((data) => (
        <>
        <div className="details_style">
          <div>
            <h1>{data.title}</h1>
            <p>{data.describtion}</p>
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(132 70 171)",
                color: "#ffffff",
              }}
              href={data.button}
            >Link</Button>
          </div>
          <div className="photo_details">
            <img src={data.src} alt="" />
            <div className="three_image">
              <img src={data.ss1} alt="" width="100%"/>
              <img src={data.ss2} alt="" width="100%"/>
              <img src={data.ss3} alt="" width="100%"/>
            </div>
          </div>
        </div>

        </>
      ))}
    </div>
  );
};

export default ProjectDetails;
