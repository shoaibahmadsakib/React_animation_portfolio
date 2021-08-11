import React from "react";
import Loader from "react-loader-spinner";

const Loder = () => {
  return (
    <div className="Loder_effect">

{/* Audio	
Ball-Triangle	
Bars	
Circles	
Grid	
Hearts
Oval	
Puff	
Rings
TailSpin	
ThreeDots */}
      <Loader className="loader_style"
        type="Circles"
      
      
     
        
        color="rgb(157 0 255)"
        height={200}
        width={200}
        secondaryColor="gray"
      />
    </div>
  );
};

export default Loder;
