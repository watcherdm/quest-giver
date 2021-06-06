import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateAdventureInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/adventures/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, adventure: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
        })
      })
      .catch(err => {
        console.log("Error from UpdateAdventureInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
    };

    axios
      .put('/api/adventures/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-adventure/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateAdventureInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateAdventureInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Adventure List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Adventure</h1>
              <p className="lead text-center">
                  Update Adventure's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Adventure'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this adventure'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Adventure</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateAdventureInfo;
