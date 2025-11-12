
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            like: 0,
            dislike: 0
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
                    <button>Dislike ({this.state.dislike})</button>
                </div>
            </>
        );
    }
}

export default ContentRating;
