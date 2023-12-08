import * as Phaser from "phaser";
import { createPlayer, loadSprites } from "./player";
import { craeteControls, configControls } from "./controls";

export default class Demo extends Phaser.Scene {
  player;
  water;
  controls;

  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("tiles", "./assets/map/grass.png");
    this.load.image("border", "./assets/map/water.png");
    this.load.tilemapTiledJSON("map", "./assets/map/mapa.json");
    loadSprites(this);
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tilesetGrass = map.addTilesetImage("grass", "tiles");
    const tilesetWater = map.addTilesetImage("water", "border");

    const ground = map.createLayer("grass", tilesetGrass, 0, 0);
    this.water = map.createLayer("water", tilesetWater, 0, 0);

    this.water.setCollisionByProperty({ collider: true });

    this.player = createPlayer(this);

    this.physics.add.collider(this.player, this.water);

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
  width: 800,
  height: 640,
  scene: Demo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
