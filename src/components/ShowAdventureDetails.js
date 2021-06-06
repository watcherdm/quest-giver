import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import SceneGraph from './SceneGraph'
// import LocationList from './LocationList'
// import CharacterList from './CharacterList'
// import ItemList from './ItemList'

class showAdventureDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventure: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/adventures/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showAdventureDetails-API-response: " + res.data);
        this.setState({
          adventure: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowAdventureDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('/api/adventures/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowAdventureDetails_deleteClick");
      })
  };


  render() {
    let adventure = {};
    const {title, author, description} = adventure = this.state.adventure

    return (
      <div className="ShowAdventureDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Adventure List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{title}</h1>
              <p className="lead text-center">
                  by {author}
              </p>
            </div>
          </div>
          <div>
            {description}
            <SceneGraph mode='edit'/>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,adventure._id)}>Delete Adventure</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-adventure/${adventure._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Adventure
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default showAdventureDetails;