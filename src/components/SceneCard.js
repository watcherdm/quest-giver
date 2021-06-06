import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SceneCard = (props) => {
    const  scene  = props.scene;

    return(
        <div className="card-container">
            <img src="https://via.placeholder.com/50" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-scene/${scene._id}`}>
                        { scene.title }
                    </Link>
                </h2>
                <p>{scene.description}</p>
            </div>
        </div>
    )
};

export default SceneCard;
