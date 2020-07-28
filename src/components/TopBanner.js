/**
 * Created by petar on 2/6/17.
 */
import React, { Component } from 'react';
import cuteStar from '../../public/img/cute-star.svg';
import './TopBanner.css'

class TopBanner extends Component {
    render(){
        let cssClass = `TopBanner ${this.props.hideHeader?'hide':''}`;
        return (
            <div className={cssClass}>
                <h1 className="text-danger">
                    <img src={cuteStar} className="TopBannner-banner" alt="spinner"/>
                    FAIR AND HONEST AUCTIONS
                    <img src={cuteStar} className="TopBannner-banner" alt="spinner"/>
                </h1>
                <h2 className="text-info"> Auction Application </h2>

            </div>
        );
    }
}

export default TopBanner;