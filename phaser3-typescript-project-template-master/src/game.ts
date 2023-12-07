import * as Phaser from 'phaser';
import { craetePlayer, loadSprites } from "./player";
// import { craeteControls, configControls } from './controls';

export default class Demo extends Phaser.Scene {
    player;
    // controls;
    water;

    constructor () {
        super('demo');
    }

    preload () {
        this.load.image('tiles', './assets/map/grass.png');
        // this.load.image('tiles', '../assets/map/grama.png');
        // this.load.image('border', '../assets/map/Bricks.png');
        this.load.image('border', './assets/map/water.png');
        this.load.tilemapTiledJSON('map', './assets/map/mapa.json');
        loadSprites(this);
    }

    create () {
     const map = this.make.tilemap({key: "map"});
     const tilesetGlass = map.addTilesetImage('grass', "tiles");
    //  const tilesetGrama = map.addTilesetImage('grama', "tiles");
    //  const tilesetBricks = map.addTilesetImage('Bricks', "border");
     const tilesetWater = map.addTilesetImage('water', "border");

     const ground = map.createLayer('grass', tilesetGlass, 0, 0);
    //  const ground2 = map.createLayer('grama', tilesetGrama, 0, 0);
    //  const bricks = map.createLayer('Bricks', tilesetBricks, 0, 0);
     const water = map.createLayer('water', tilesetWater, 0, 0);

     this.water.setCollisionByProperty({ collider: true});

    //  this.player = craetePlayer(this);
    //  this.physics.add.collider(this.player, this.water);
     this.player.anims.play("player_idle", true);


    //  this.controls = craeteControls(this);
    }

    update() {
        // configControls(this.player, this.controls, this);
    }
};
const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    }
};

const game = new Phaser.Game(config);
