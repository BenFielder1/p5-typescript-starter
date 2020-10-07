import p5 from "p5";
import { AbstractSketch } from "../../useSketch";
import Player from "./Player";
import Enemy from './Enemy'
import GameObject from "./GameObject";

const WIDTH = 600;
const HEIGHT = 600;
const ENEMY_COUNT = 5;
const PLAYER_RADIUS = 40;
const ENEMY_SIZE = 30;

export default class SomeSketch extends AbstractSketch<{}> {
    sketch = (s: p5) => {
        // This is how you do those 'global variables'
        let player: Player;
        let enemies: Enemy[] = [];

        s.setup = function () {
            s.createCanvas(WIDTH, HEIGHT);

            player = new Player(s, PLAYER_RADIUS);
            for (let i = 0; i < ENEMY_COUNT; i++) {
                enemies.push(new Enemy(s, ENEMY_SIZE))
            }
        };

        s.draw = function () {
            s.background(0);

            if (s.keyIsDown(s.UP_ARROW)) {
                player.pushUp();
            }
            if (s.keyIsDown(s.DOWN_ARROW)) {
                player.pushDown();
            }
            if (s.keyIsDown(s.RIGHT_ARROW)) {
                player.pushRight();
            }
            if (s.keyIsDown(s.LEFT_ARROW)) {
                player.pushLeft();
            }


            let gameObjects: GameObject[] = [player, ...enemies];

            gameObjects.forEach(g => {
                g.updatePhysics();
                g.draw()
            });
        };

    };
}
