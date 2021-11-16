import React from 'react';
import cosmTeam from '../images/COSM-team.jpg'; 
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

const LightBoxOptions = {
  buttons: {
    showAutoplayButton: false,
    showNextButton: false,
    showPrevButton: false,
    backgroundColor: "#533A36",
    iconColor: "#fff",
  },
  thumbnails: {
    showThumbnails: false,
  },
  caption: {
    captionColor: "#fff",
  }
};

function Lightbox() {
  return (
    <SimpleReactLightbox>
    <SRLWrapper options={LightBoxOptions}>
      <div>
        <a href={cosmTeam}>
          <img src={cosmTeam} alt="The COSM family.  From top left to bottom right: Janice, Lucy, Maria, Suzanne, Sikelelwa, Charlotte, Louise, and Merjem." className="about__team__img"/>
        </a>
      </div>
    </SRLWrapper>
    </SimpleReactLightbox>
  );
 }
 
 export default Lightbox;