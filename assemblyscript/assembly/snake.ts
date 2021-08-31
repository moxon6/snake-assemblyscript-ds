export enum SnakeDirection {
    LEFT = 1,
    RIGHT = -1,
    UP = 2,
    DOWN = -2
} 

class Segment {
    x: u8;
    y: u8;
    constructor(x: u8, y: u8) {
        this.x = x;
        this.y = y;
    }
}

const nextSegment = (segment: Segment, direction: SnakeDirection): Segment => {
    switch(direction) {
        case SnakeDirection.LEFT:
            return new Segment(segment.x - 8, segment.y)
        case SnakeDirection.RIGHT:
            return new Segment(segment.x + 8, segment.y)
        case SnakeDirection.UP:
            return new Segment(segment.x, segment.y > 0 ? segment.y - 8 : 184)
        case SnakeDirection.DOWN:
            return new Segment(segment.x, segment.y < 184 ? segment.y + 8 : 0)
        default:
            return segment;
    }
}

export class Snake {
    segments: Segment[];
    direction: SnakeDirection;
    
    constructor(){
        this.segments = [
            new Segment(8, 0),
            new Segment(0, 0),
        ],
        this.direction = SnakeDirection.RIGHT
    }
    
    advanceHead(): void {
        this.segments.unshift(nextSegment(this.segments[0], this.direction))
    };

    removeTail(): void {
        this.segments.pop()
    }

    
}
