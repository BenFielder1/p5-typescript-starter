import p5 from 'p5';

import GameObject from './GameObject'

export default class Enemy extends GameObject {
    size: number;

    constructor(s: p5, size: number) {
        super(s,
            s.createVector(s.width / 3, Math.random() * s.height),
            s.createVector(Math.random(), Math.random()));
        this.size = size;
    }


    draw(): void {
        this.s.fill('orange');
        this.s.rect(this.position.x, this.position.y, this.size, this.size);
    }
}