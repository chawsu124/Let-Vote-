import React from 'react'
import { Carousel } from 'antd';


const Car = () => {
    return <>
      
  <Carousel autoplay>
    <div>
      <img src="https://www.edarabia.com/wp-content/uploads/2019/12/public-holidays-myanmar.jpg" width="100%" height="500px" />
      </div>
      <div>
      <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F5%2F5%2F5%2F4%2F25424555-5-eng-GB%2FCropped-1583693973N%20Suu%20Kyi.jpg?source=nar-cms" width="100%" height="500px" />
      </div>
      <div>
        <img src="https://images.mapsofworld.com/around-the-world/election-in-mynamar.jpg" width="100%" height="500px"></img>
      </div>
      <div>
        <img src="https://www.frontiermyanmar.net/wp-content/uploads/2020/02/the-hate-speech-threat-to-the-2020-election-1582230683.jpg" width="100%" height="500px"></img>
      </div>
  </Carousel>
  
    </>
}
export default Car;