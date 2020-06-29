import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import InputForm from '../InputForm/InputForm'

class App extends Component {
  state = {
    gallery: [],
    newItem: {path: '' , description: ''}
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('GET response:' , response);
      this.setState({gallery: response.data})
    }).catch((error) => {
      console.log('Error - GET request', error);
    })
  }

  likeClick = (event) => {
      //isolates which Image was clicked
      let targetItem = this.state.gallery.filter(item => event.currentTarget.id == item.id);

      axios({
        method: 'PUT',
        url: `/gallery/like/${targetItem[0].id}`,
      }).then((response) => {
        console.log('PUT response:', response);
        this.getGallery();        
      }).catch((error) => {
        console.log('Error - PUT request', error);
      })
  }

  handleChange = (event) => {
    this.setState({
      newItem: { 
        ...this.state.newItem,
        [event.target.name]: event.target.value
    }})
  }

  inputClick = (event) => {
    event.preventDefault();
    let data = this.state.newItem;
    console.log('Input Clicked', data);

    axios({
      method: 'POST',
      url: `/gallery`,
      data: this.state.newItem
    }).then((response) => {
      console.log('POST response:', response);
      this.getGallery();
      this.setState({
        newItem: { 
          newItem: {path: '' , description: ''}
      }})
    }).catch((error) => {
      console.log('Error - POST request', error);
    })

  }

  deleteClick = (event) => {
    axios({
        method: 'DELETE',
        url: `/gallery/delete/${event.currentTarget.id}`
      })
      .then((response) => {
        this.getGallery();
        console.log("delete success");
      })
      .catch((err) => {
        console.log("delete failed", err);
      })
  }



  render() {
    return (
      <div className="App">
        {/* {console.log('state', this.state)} */}
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList
          gallery={this.state.gallery}
          likeClick={this.likeClick}
          deleteClick={this.deleteClick}
        />
        <InputForm
          handleChange={this.handleChange}
          inputClick={this.inputClick}
          newItem={this.state.newItem}
        />
      </div>
    );
  }
}

export default App;
