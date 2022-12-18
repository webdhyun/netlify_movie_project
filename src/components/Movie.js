import React, { Component } from 'react';
import '../css/Movie.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


class Movie extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        let genre_rend=null;
        if(this.props.genres===undefined){
        genre_rend=
        <div id="movie_genre">
            genre:none
        </div>
        }else {
            genre_rend=
        <div id="movie_genre">
            genre:
        {this.props.genres.map((genre,i)=>{return <span className="genre" key={i}>{genre}</span>})}
        </div>
        }

        return(
            <div key={this.props.id} id="movie_posts">
                <div id="movie_left">
                    <div id="left_comp">
                        <span className="cover_back">
                        <img src={this.props.medium_cover_image} alt="cover"/>
                        </span>
                    
                        <span className="down">
                            <FontAwesomeIcon icon={faDownload} />
                            <span> </span>
                            <a href={this.props.url}>
                                Download
                            </a>
                        </span>
                    </div>   
                </div>

                <div id="movie_right">
                    <div id="right_comp">
                    <div className="movie_title">
                        {this.props.title}
                    </div>
                    <div className="movie_year">
                        {this.props.year}
                    </div>
                    {genre_rend}
                    <div className="movie_time">
                        {this.props.runtime} min
                    </div>
                    <div className="movie_rating">
                        <FontAwesomeIcon icon={faStar} color="yellow"/>
                        <span> </span>
                        {this.props.rating}/10
                    </div>
                    <div className="movie_summary">
                        {this.props.summary}
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Movie;