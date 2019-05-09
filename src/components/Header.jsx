import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="header-container">
                <span className="title">2048</span>
                <div className="scoreboard">
                    <span className="key">score</span>
                    <span className="score">8</span>
                </div>
                <div className="scoreboard">
                    <span className="key">best</span>
                    <span className="score">8</span>
                </div>
            </div>
            <div className="rules">
                Join the numbers and get to the <strong>2048 tile!</strong>
            </div>
        </div>
    )
}

export default Header;