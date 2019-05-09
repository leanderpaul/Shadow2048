import React, { Component } from "react";
import GameContainer from "./GameContainer";
import Tile from "./Tile";

class Game extends Component {
    state = {
        game: [[0, 0, 0, 2], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    };

    generateNewTile = () => {
        let game = this.state.game;
        let emptySpaces = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (game[i][j] === 0) emptySpaces.push({ row: i, col: j });
            }
        }
        if (emptySpaces.length === 0) {
            alert("Game Over!! You Lose!!!!");
            return;
        }
        let randomTileLocation = Math.floor(Math.random() * emptySpaces.length);
        let tileLocation = emptySpaces[randomTileLocation];
        game[tileLocation.row][tileLocation.col] = 2;
        this.setState({ game });
    };

    moveUp = () => {
        const { game } = this.state;
        for (let j = 0; j < 4; j++) {
            let topValue = game[0][j];
            let topPosition = 0;
            for (let i = 1; i < 4; i++) {
                if (game[i][j] === 0) continue;
                if (topValue === game[i][j]) {
                    game[i][j] = topValue * 2;
                    game[topPosition][j] = game[i][j];
                    game[i][j] = 0;
                    topPosition++;
                    topValue = game[topPosition][j];
                    continue;
                }
                if (topValue > 0) topPosition++;
                topValue = game[i][j];
                if (topPosition === i) continue;
                game[topPosition][j] = game[i][j];
                game[i][j] = 0;
            }
        }
        this.setState({ game });
        this.generateNewTile();
    };

    moveRight = () => {
        const { game } = this.state;
        for (let i = 0; i < 4; i++) {
            let rightValue = game[i][3];
            let rightPosition = 3;
            for (let j = 2; j >= 0; j--) {
                console.log(game[i]);
                console.log(`rightPosition = ${rightPosition}, j = ${j}, i = ${i}`);
                if (game[i][j] === 0) continue;
                if (rightValue === game[i][j]) {
                    game[i][j] = rightValue * 2;
                    game[i][rightPosition] = game[i][j];
                    game[i][j] = 0;
                    rightPosition--;
                    rightValue = game[i][rightPosition];
                    continue;
                }
                if (rightValue > 0) rightPosition--;
                rightValue = game[i][j];
                if (rightPosition === j) continue;
                game[i][rightPosition] = game[i][j];
                game[i][j] = 0;
            }
        }
        this.setState({ game });
        console.log(this.state.game);
        this.generateNewTile();
    };

    moveDown = () => {
        const { game } = this.state;
        for (let j = 0; j < 4; j++) {
            let bottomValue = game[3][j];
            let bottomPosition = 3;
            for (let i = 2; i >= 0; i--) {
                if (game[i][j] === 0) continue;
                if (bottomValue === game[i][j]) {
                    game[i][j] = bottomValue * 2;
                    game[bottomPosition][j] = game[i][j];
                    game[i][j] = 0;
                    bottomPosition--;
                    bottomValue = game[bottomPosition][j];
                    continue;
                }
                if (bottomValue > 0) bottomPosition--;
                bottomValue = game[i][j];
                if (bottomPosition === i) continue;
                game[bottomPosition][j] = game[i][j];
                game[i][j] = 0;
            }
        }
        this.setState({ game });
        this.generateNewTile();
    };

    moveLeft = () => {
        const { game } = this.state;
        for (let i = 0; i < 4; i++) {
            let leftValue = game[i][0];
            let leftPosition = 0;
            for (let j = 1; j < 4; j++) {
                if (game[i][j] === 0) continue;
                if (leftValue === game[i][j]) {
                    game[i][j] = leftValue * 2;
                    game[i][leftPosition] = game[i][j];
                    game[i][j] = 0;
                    leftPosition++;
                    leftValue = game[i][leftPosition];
                    continue;
                }
                if (leftValue > 0) leftPosition++;
                leftValue = game[i][j];
                if (leftPosition === j) continue;
                game[i][leftPosition] = game[i][j];
                game[i][j] = 0;
            }
        }
        this.setState({ game });
        this.generateNewTile();
    };

    render() {
        document.onkeydown = e => {
            let keyPressed = e.keyCode;
            console.log(`key = ${keyPressed}`);
            if (keyPressed === 37) this.moveLeft();
            else if (keyPressed === 38) this.moveUp();
            else if (keyPressed === 39) this.moveRight();
            else if (keyPressed === 40) this.moveDown();
        };
        const { game } = this.state;
        let Tiles = [];
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 4; j++)
                if (game[i][j] > 0) Tiles.push(<Tile tilePosition={i + 1 + "-" + (j + 1)} value={game[i][j]} key={i * 10 + j} />);
        return (
            <div id="game">
                <GameContainer />
                {Tiles}
                {/* <Tile tilePosition={i + 1 + "-" + j + 1} key={30} value={game[0][0]} /> */}
            </div>
        );
    }
}

export default Game;
