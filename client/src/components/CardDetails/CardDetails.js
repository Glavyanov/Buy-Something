import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as cardService from '../../services/cardsServise.js';

import './CardDetails.css';

export const CardDetails = () =>{
    const { adId } = useParams();
    const [ad, setAd] = useState([]);

    useEffect(() => {
        cardService.getOne(adId)
        .then((res) => {
            setAd(res);
        })

    },[]);

    return(
        <section id="game-details">
            <h1>Card Details</h1>
            <div className="info-section">

                <div className="card-header">
                    <img className="card-img" src={ad.imageUrl} />
                    <h1>Ad Title</h1>
                    <span className="category">Category: {ad.category}</span>
                    <p className="type">{/* game.category */}</p>
                </div>

                <p className="text">{ad.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {<li>Hello from comments</li>}
                        {<li>Hello from comments</li>}
                        {<li>Hello from comments</li>}
                        {<li>Hello from comments</li>}
                        {<li>Hello from comments</li>}
                        {/* {game.comments && game.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))} */}
                    </ul>

                    {/* {!game.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                </div>

                {/* {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )} */}
            </div>

            {/* isAuthenticated */ }
        </section>

    );
};