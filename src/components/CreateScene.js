import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateScene extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      description: this.state.description,
    };

    axios
      .post(`/api/adventure/${this.props.match.params.id}/scenes`, data)
      .then(res => {
        this.setState({
          title: '',
          description:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateScene!");
      })
  };

  render() {
    return (
      <div className="CreateScene">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to={`/show-adventure/{}`} className="btn btn-outline-warning float-left">
                  Show Scene List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Scene</h1>
              <p className="lead text-center">
                  Create new scene
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Scene'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this scene'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateScene;