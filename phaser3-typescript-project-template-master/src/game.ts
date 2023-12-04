import * as Phaser from 'phaser';
import { craetePlayer, loadSprites } from "./player";

export default class Demo extends Phaser.Scene {
    player;
    constructor () {
        super('demo');
    }

    preload () {
        this.load.image('', 'assets/');
        this.load.image('', 'assets/');
        this.load.glsl('', 'assets/');
        loadSprites(this);
    }

    create () {
     const map = this.make.tilemap({key: "map"});
     const tilesetGlass = map.addTilesetImage("grass", "tiles");
     const tilesetWater = map.addTilesetImage("water", "border");

     const ground = map.createLayer('grass', tilesetGlass, 0, 0);
     const water = map.createLayer('water', tilesetWater, 0, 0);

     this.player = craetePlayer(this);
     
     this.player.anims.play("player_idle", true);
    }

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
