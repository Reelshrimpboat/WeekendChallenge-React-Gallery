import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class InputForm extends Component {

    render() {
      return (
        <section>
            <h2>Post Your Own!</h2>
            <form className="inputForm">
                <label >URL
                <input type='text'
                    placeholder="URL"
                    onChange={this.props.handleChange}
                    name="path"
                    value={this.props.newItem.path} 
                ></input>
                </label>
                <label>Description
                <input type='text'
                    placeholder="Description"
                    onChange={this.props.handleChange}
                    name="description"
                    value={this.props.newItem.description}
                ></input>
                </label>
                <Button 
                onClick={this.props.inputClick}
                color="primary" 
                > Submit </Button>
            </form>
        </section>
    );
}
}