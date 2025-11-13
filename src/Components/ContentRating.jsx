
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            handleLike:() => {
                this.setState((prevState) => ({likes: prevState.likes + 1}));
            },

            handleDislike:() => {
                this.setState((prevState) => ({dislike: prevState.dislikes + 1}));
            },
        }
    }
    render() {
        return (
            <>
                <div className='content-rating'>
                    <p>
                        “Los buenos tiempos se convierten en buenos recuerdos, pero los malos tiempos se convierten en buenas lecciones.”
                    </p>
                </div>
                <div className='rating-buttons'>
                    <button>Like ({this.state.likes})</button>
                    <button>Dislike ({this.state.dislikes})</button>
                </div>
            </>
        );
    }
}

export default ContentRating;
