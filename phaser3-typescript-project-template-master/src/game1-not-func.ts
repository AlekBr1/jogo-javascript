// import * as Phaser from 'phaser';
// import { createPlayer, loadSprites } from "./player";
// // import { craeteControls, configControls } from './controls';

// export default class Demo extends Phaser.Scene {
//     water;
//     // controls;

//     constructor() {
//         super('demo');
//     }

//     preload() {
//         this.load.image('player', './../dist/assets/player/player_idle.png')
//         this.load.image('tiles', './assets/map/grass.png');
//         this.load.image('border', './assets/map/water.png');
//         this.load.tilemapTiledJSON('map', './assets/map/mapa.json');
//         // this.load.image('tiles', '../assets/map/grama.png');
//         // this.load.image('border', '../assets/map/Bricks.png');
//     }

//     create() {
//         let player;
        
//         player=this.add.sprite(400,300,'player');
        
//         this.anims.create({
//             key:'idle',
//             frames: this.anims.generateFrameNumbers('player',{start: 0, end: 9}),
//             frameRate: 10,
//             repeat: -1
//         })
//         const map = this.make.tilemap({ key: "map" });
//         const tilesetGlass = map.addTilesetImage('grass', "tiles");
//         const tilesetWater = map.addTilesetImage('water', "border");
//         //  const tilesetGrama = map.addTilesetImage('grama', "tiles");
//         //  const tilesetBricks = map.addTilesetImage('Bricks', "border");

//         const ground = map.createLayer('grass', tilesetGlass, 0, 0);
//         const water = map.createLayer('water', tilesetWater, 0, 0);
//         //  const ground2 = map.createLayer('grama', tilesetGrama, 0, 0);
//         //  const bricks = map.createLayer('Bricks', tilesetBricks, 0, 0);

//         this.water.setCollisionByProperty({ collider: true });

//         this.physics.add.collider(player, this.water);


//         //  this.controls = craeteControls(this);
//     }

//     update() {
//         // configControls(this.player, this.controls, this);
//     }
// };
// const config = {
//     type: Phaser.AUTO,
//     backgroundColor: '#125555',
//     width: 1024,
//     height: 768,
//     scene: Demo,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 }
//         }
//     }
// };

// const game = new Phaser.Game(config);
