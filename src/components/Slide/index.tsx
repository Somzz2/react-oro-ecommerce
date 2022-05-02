import * as C from './styles'
import SimpleImageSlider from "react-simple-image-slider";
import anelbanner from "../../assets/images/anelbanner.png"
import anelbanner2 from "../../assets/images/anelbanner2.jpg"

export const Slide = () => {
    const images = [
        { url: anelbanner },
        { url: anelbanner2 }
      ];
    return (
        <C.Container>
            <div className='alt'>
                <img src={anelbanner} alt='alternativo'/>
              </div>
            <div className='slider'>
              <SimpleImageSlider
              style={{display: 'flex'}}
              width={1200}
              height={600}
              images={images}
              showBullets={true}
              showNavs={true}
              
              
              />
            </div>
      </C.Container>
    )
}