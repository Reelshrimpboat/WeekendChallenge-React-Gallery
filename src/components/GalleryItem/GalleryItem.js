import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default class GelleryItem extends Component {

    state = {
      imageClicked: false
    }

    stateChange = () => {
      this.setState({
        imageClicked: !this.state.imageClicked
      })
    }


    render() {
 
      let item = this.props.galleryItem;
      return (
        <div className="galleryItem">
        {this.state.imageClicked ? 
          <p onClick={this.stateChange} value="true" className="descriptionBox">
              {item.description}
          </p>
          :
          <img src={item.path}
            value="false"
            onClick={this.stateChange}
            alt={item.description}
            className="image"
          />
        }
        <div className="likeDisplay">
          <p className="likeCount">{item.likes}</p>
          <Button
            className="likeButton"
            onClick={this.props.likeClick} 
            id={item.id}
            variant="contained"
            color="primary"
            >Like!</Button>
        </div>
        <Button
          className="deleteButton"
          onClick={this.props.deleteClick}
          id={item.id}
          variant="outlined"
          color="secondary"
          >Delete</Button>
      </div>
    );
  }
}