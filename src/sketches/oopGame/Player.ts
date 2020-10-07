import p5 from 'p5';

import GameObject from './GameObject'

const CONTROL_FORCE_MAG = 0.05;

export default class Player extends GameObject {
    radius: number;

    constructor(s: p5, radius: number) {
        super(s, s.createVector(s.width / 2, s.height / 2));
        this.radius = radius;
    }

    pushUp() {
        this.applyForce(this.s.createVector(0, -CONTROL_FORCE_MAG))
    }

    pushDown() {
        this.applyForce(this.s.createVector(0, CONTROL_FORCE_MAG))

    }

    pushLeft() {
        this.applyForce(this.s.createVector(-CONTROL_FORCE_MAG, 0))
    }

    pushRight() {
        this.applyForce(this.s.createVector(CONTROL_FORCE_MAG, 0))
    }

    draw(): void {
        this.s.fill('green');
        this.s.circle(this.position.x, this.position.y, this.radius);
    }
}