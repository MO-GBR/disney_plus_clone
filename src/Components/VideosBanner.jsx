import React from 'react'
import { BannerContainer, Wrap } from '../Style/VideosBanner';
import { BannerList } from '../Constants';

const VideosBanner = () => {
  return (
    <div>
      <BannerContainer>
        {
          BannerList.map((item, index) => (
            <Wrap key={index}>
              <img src={item.img} alt = "banner"/>
              <video src={item.video} autoPlay loop muted/>
            </Wrap>
          ))
        }
      </BannerContainer>
    </div>
  )
}

export default VideosBanner