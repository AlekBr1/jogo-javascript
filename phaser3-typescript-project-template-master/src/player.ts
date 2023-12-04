export const loadSprites = (scene) : void => {
    scene.load.spritesheet('player_idle', 'local e a img do perso idle.png',{    
        frameWidth: 83,
        frameHeigth: 64,
        spacing: 45,
    });

    scene.load.spritesheet('player_walk', 'local e a img do perso walk.png',{
        frameWidth: 83,
        frameHeigth: 64,
        spacing: 45,
    });

    scene.loadspritesheet('player_colect', 'local e a img do perso colect.png',{
        frameWidth: 83,
        frameHeigth: 64,
        spacing: 45,
    });
};

export const createAnimations = (scene: Phaser.Scene) : void => {
    scene.anims.create({
        key: 'player_idle',
         frames: scene.anims.generateFrameNames('player_idle', {
            start: 0,
            end: 2,
         }),
         frameRate: 8   ,
         repeat: -1,
         yoyo: true
    });

    scene.anims.create({
        key: 'player_walk',
         frames: scene.anims.generateFrameNames('player_walk', {
            start: 0,
            end: 2,
         }),
         frameRate: 8,
         repeat: -1,
         yoyo: true
    });

    scene.anims.create({
        key: 'player_colect',
         frames: scene.anims.generateFrameNames('player_colect', {
            start: 0,
            end: 7,
         }),
         frameRate: 8,
         repeat: -1,
         yoyo: true
    });
} 