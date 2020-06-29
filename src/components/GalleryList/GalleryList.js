import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

export default class GelleryItem extends Component {
  render() {
    return (
      <div className="galleryList">
          {this.props.gallery.map((galleryItem) =>
          <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem} 
            likeClick={this.props.likeClick}
            deleteClick={this.props.deleteClick}
          />
          )}
      </div>
    );
  }
}