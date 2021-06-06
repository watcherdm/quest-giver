import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SceneCard from './SceneCard';

const getRandomEmoji = () => {
  const e = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
  return e[Math.floor(Math.random() * e.length)]
}

class Scene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.scene,
      x: props.x,
      y: props.y
    }
    this.lockPosition = this.lockPosition.bind(this)
  }

  lockPosition() {
    this.setState({
      selected: false,
    })
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      x: props.x,
      y: props.y
    }
  }

  render() {
    const {x, y, symbol} = this.state;
    return (<button onClick={this.lockPosition} style={{position: 'absolute', top: y - 18, left: x - 18}} className="scene-node btn btn-outline-warning">{symbol}</button>)
  }
}

class SceneGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenes: []
    };
    this.addScene = this.addScene.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  addScene() {
    this.setState({
      scenes: [...this.state.scenes, {symbol: getRandomEmoji(), selected: true}]
    });
  }

  componentDidMount() {
    // axios
    //   .get(`/api/adventures/${this.props.adventure}/scenes`)
    //   .then(res => {
    //     this.setState({
    //       scenes: res.data
    //     })
    //   })
    //   .catch(err =>{
    //     console.log('Error from ShowSceneList');
    //   })
  };

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const {x, y, scenes} = this.state
    let sceneList;

    if(!scenes) {
      sceneList = "there is no scene record!";
    } else {
      sceneList = scenes.map((scene, k) => {
        if (scene.selected) {
          return <Scene scene={scene} x={x} y={y} key={`scene-${k}`} />
        } else {
          return <Scene scene={scene} key={`scene-${k}`} />
        }
      });
    }

    return (
      <div className="ShowSceneList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-4 text-center">Scenes</h2>
            </div>

            <div className="toolbar">
              <div className="add-scene">
                <button onClick={this.addScene} className="scene-node btn btn-outline-warning">
                  +
                </button>
              </div>
            </div>

          </div>

          <div onMouseMove={this.handleMouseMove} className="node-stage list">
            {sceneList}
          </div>
        </div>
      </div>
    );
  }
}

export default SceneGraph;