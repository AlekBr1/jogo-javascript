import * as Phaser from 'phaser';
import { craetePlayer, loadPlayerSprites } from "./player";
import { craeteControls, configControls } from './controls';

export default class Demo extends Phaser.Scene {
    player;
    controls;
    stone;


    constructor () {
        super('demo');
    }

    preload () {
        this.load.image('', 'assets/');
        this.load.image('', 'assets/');
        this.load.glsl('', 'assets/');
        loadPlayerSprites(this);
    }

    create () {
     const map = this.make.tilemap({key: "map"});
     const tilesetGlass = map.addTilesetImage("grass", "tiles");
     const tilesetStone = map.addTilesetImage("stone", "border");

     const ground = map.createLayer('grass', tilesetGlass, 0, 0);
     this.stone = map.createLayer('stone', tilesetStone, 0, 0);

     this.stone.setCollisionByProperty({ collider: true});

     this.player = craetePlayer(this);
     this.physics.add.collider(this.player, this.stone);

     this.player.anims.play("player_idle", true);

     this.controls = craeteControls(this);
    }

    update() {
        configControls(this.player, this.controls, this);
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
