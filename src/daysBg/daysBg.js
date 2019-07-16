import React from 'react';
import './daysBg.css';
import { Arrow } from "../buttons/arrow";
import { PlayBtn } from "../buttons/playBtn"
import { Article } from "../articles/article";
import { ManCharacter, WomanCharacter } from "../characters/characters";
import { Foods } from "../resources/resources";

export class GameStart extends React.Component {
    render() {
        return (
            <main>
                <h2>Survis le temps necessaire à la construction d’un radeau qui te permettra de te libérer de cette île !</h2>
                <hr />
                <article>Survis sur cette île déserte le plus longtemps possible. Explore les environs pour ramasser des objets qui te permettront de t'évader par la mer, vers la victoire. Rationne tes denrées pour survivre.</article>
                <hr />
                <PlayBtn className="play" label="Play" />
            </main>
        )
 
}}

export class CharactersChoices extends React.Component {
    render() {
        return (
            <main>
                <h2>Choisis ton personnage</h2>
                <div className="characters">
                    <ManCharacter />
                    <WomanCharacter />
                </div>
                <div className="buttons">
                    <PlayBtn className="easy" label="Easy" />
                    <PlayBtn className="hard" label="Hard" />
                </div>
            </main>
        )
 
}}

export class DaysBackground extends React.Component {
    render() {
        return (
            <main>
                <h1>Jour 1</h1>
                <Foods />
                {/* <Article /> */}
                <Arrow />
            </main>
        )
 
}}

