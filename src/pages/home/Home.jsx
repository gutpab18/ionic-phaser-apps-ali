import { IonContent } from '@ionic/react';
import './Home.css';
import React, {useEffect, useState} from "react";
import Phaser from 'phaser';
import {useWindowSize} from "../../components/window/WindowSize";
import { Platformer } from '../../components/Platformer/Platformer';

 
export const Home = () => {
    const windowSize = useWindowSize();
    const [phaserGame, setPhaserGame] = useState({});
    useEffect(async () => {
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth * window.devicePixelRatio,
            height: window.innerHeight * window.devicePixelRatio,
            pixelArt: true,
            physics: {
                default: 'arcade'
            },
            parent: 'game',
            scene: [Platformer]
        };
        const game = new Phaser.Game(config);
        setPhaserGame(game);
    }, [windowSize]);

    return <IonContent>
        <div id="game"/>
    </IonContent>
};
