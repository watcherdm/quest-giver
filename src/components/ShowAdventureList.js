import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdventureCard from './AdventureCard';

class ShowAdventureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventures: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/adventures')
      .then(res => {
        this.setState({
          adventures: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAdventureList');
      })
  };


  render() {
    const adventures = this.state.adventures;
    console.log("PrintAdventure: " + adventures);
    let adventureList;

    if(!adventures) {
      adventureList = "there is no adventure record!";
    } else {
      adventureList = adventures.map((adventure, k) =>
        <AdventureCard adventure={adventure} key={k} />
      );
    }

    return (
      <div className="ShowAdventureList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">QuestGiver</h2>
              <h5 className="display-6 text-center">Have We Got a Quest for You</h5>
            </div>

            <div className="col-md-11">
              <Link to="/create-adventure" className="btn btn-outline-warning float-right">
                + Add New Adventure
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {adventureList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAdventureList;