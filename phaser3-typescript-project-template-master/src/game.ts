import * as Phaser from "phaser";
import { createPlayer, loadSprites } from "./player";
import { craeteControls, configControls } from "./controls";

export default class Demo extends Phaser.Scene {
  player;
  water;
  Bricks;
  Bricks2;
  controls;

  constructor() {
    super("demo");
  }
  
  preload() {
    this.load.image("tiles", "./assets/map/grass.png");
    // this.load.image("border", "./assets/map/water.png");
    this.load.image("Wall", "./assets/map/Bricks.png");
    this.load.image("ground", "./assets/map/Bricks2.png");
    this.load.tilemapTiledJSON("map", "./assets/map/mapa.json");
    loadSprites(this);
    
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tilesetGrass = map.addTilesetImage("grass", "tiles");
    // const tilesetWater = map.addTilesetImage("water", "border");
    const tilesetBricks = map.addTilesetImage("Bricks", "Wall");
    const tilesetBricks2 = map.addTilesetImage("Bricks2", "ground");
    

    const ground = map.createLayer("grass", tilesetGrass, 0, 0);
    this.Bricks = map.createLayer("Wall", tilesetBricks, 0, 0);
    this.Bricks2 = map.createLayer("ground", tilesetBricks2, 0, 0);
    // this.water = map.createLayer("water", tilesetWater, 0, 0);


    // this.Bricks.setCollisionByProperty({colider:true});
    // this.physics.add.collider(this.player,this.Bricks,/*this.Bricksb*/);    
   
    this.player = createPlayer(this);
    this.player.anims.play("player_idle", true);
    this.controls = craeteControls(this);
  
  }

  update() {
    configControls(this.player, this.controls, this);
  }
};

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 1024,
  height: 768,
  scene: Demo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);




// this.physics.add.collider(this.player, this.water);
// this.water.setCollisionByProperty({collider:true});
