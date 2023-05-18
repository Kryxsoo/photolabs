
import React from 'react';
import '../styles/PhotoListItem.scss';

//userName string
//imageSource url
//id id
//hide userName

const PhotoListItem = (props) => {
  const photos = ['one', 'two', 'three']
  return photos.map(photo => {
    return (
      <div className = "photo-list--item" key={photo}>
        <div className = "photo-header">
          {/* <h2 className= " photo-list--user-profile ">{ props.username }</h2> */}
          <img className = "photo-list--image" src={ props.imageSource }></img>
        </div>
      </div>
    )
  })
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem