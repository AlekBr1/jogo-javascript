export const craetePlayer = (scene: Phaser.Scene) => {
    const player = scene.physics.add.sprite(200, 200, 'player_idle');
    createAnimations(scene);
    return player;
}   

export const loadSprites = (scene: Phaser.Scene) : void => {
    scene.load.spritesheet('player_idle', 'local e a img do perso idle.png',{    
        frameWidth: 83,
        frameHeight: 64,
        spacing: 45,
    });

    scene.load.spritesheet('player_walk', 'local e a img do perso walk.png',{
        frameWidth: 83,
        frameHeight: 64,
        spacing: 45,
    });

    scene.load.spritesheet('player_colect', 'local e a img do perso colect.png',{
        frameWidth: 83,
        frameHeight: 64,
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
         frameRate: 6,
         repeat: -1,
         yoyo: true
    });

    scene.anims.create({
        key: 'player_walk',
         frames: scene.anims.generateFrameNames('player_walk', {
            start: 0,
            end: 2,
         }),
         frameRate: 6,
         repeat: -1,
         yoyo: true
    });

    scene.anims.create({
        key: 'player_colect',
         frames: scene.anims.generateFrameNames('player_colect', {
            start: 0,
            end: 4,
         }),
         frameRate: 6,
         repeat: 0,
         yoyo: false
    });
} 