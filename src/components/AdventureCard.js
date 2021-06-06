import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AdventureCard = (props) => {
    const  adventure  = props.adventure;

    return(
        <div className="card-container">
            <img src="https://via.placeholder.com/250" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-adventure/${adventure._id}`}>
                        { adventure.title }
                    </Link>
                </h2>
                <h3>{adventure.author}</h3>
                <p>{adventure.description}</p>
            </div>
        </div>
    )
};

export default AdventureCard;
