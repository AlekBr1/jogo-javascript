import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('', 'assets/');
        this.load.image('', 'assets/');
        this.load.glsl('', 'assets/');
    }

    create ()
    {
     const map = this.make.tilemap({key: "map"});
     const tilesetGlass = map.addTilesetImage("grass", "tiles");
     const tilesetWater = map.addTilesetImage("water", "border");

     const ground = map.createLayer('grass', tilesetGlass, 0, 0);
     const water = map.createLayer('water', tilesetWater, 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
