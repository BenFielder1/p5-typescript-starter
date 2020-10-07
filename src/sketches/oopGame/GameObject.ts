import p5 from 'p5';

export default abstract class GameObject {
    s: p5;
    position: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    constructor(s: p5, position: p5.Vector, velocity?: p5.Vector) {
        this.s = s;
        this.position = position;
        this.velocity = velocity || s.createVector(0, 0);
        this.acceleration = s.createVector(0, 0);
    }

    applyForce(force: p5.Vector) {
        this.acceleration.add(force);
    }

    // Apply the forces for this frame, reset the force
    updatePhysics() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        // If we go off end of screen, wrap around
        if (this.position.x > this.s.width) {
            this.position.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = this.s.width;
        }
        if (this.position.y > this.s.height) {
            this.position.y = 0;
        }
        if (this.position.y < 0) {
            this.position.y = this.s.height;
        }
    }

    // All game objects need to know how to draw themselves
    abstract draw(): void;
}