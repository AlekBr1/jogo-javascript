// import * as Phaser from "phaser";

// export interface Player extends Phaser.Physics.Arcade.Sprite {
//     // isCollect?: boolean;
// }

// export const createPlayer = (scene: Phaser.Scene) => {
//     const player = scene.physics.add.sprite(200, 200, 'player_idle');
//     createAnimations(scene);
//     return player;
// }   

// export const loadSprites = (scene: Phaser.Scene) : void => {
//     scene.load.spritesheet('player_idle', "./assets/player/player_idle.png",{    
//         frameWidth: 83,
//         frameHeight: 64,
//         spacing: 45,
//     }
//     );

//     scene.load.spritesheet('player_walk', "./assets/player/walk.png",{
//         frameWidth: 83,
//         frameHeight: 64,
//         spacing: 45,
//     });

//     scene.load.spritesheet('player_collect', "./assets/player/attack.png",{
//         frameWidth: 83,
//         frameHeight: 64,
//         spacing: 45,
//     });
// };

// export const createAnimations = (scene: Phaser.Scene): void => {
//     scene.anims.create({
//         key: 'player_idle',
//          frames: scene.anims.generateFrameNames('player_idle', {
//             start: 0,
//             end: 7,
//          }),
//          frameRate: 8,
//          repeat: -1,
//          yoyo: true
//     });

//     scene.anims.create({
//         key: 'player_walk',
//          frames: scene.anims.generateFrameNames('player_walk', {
//             start: 0,
//             end: 6,
//          }),
//          frameRate: 6,
//          repeat: -1,
//          yoyo: true
//     });

//     scene.anims.create({
//         key: 'player_collect',
//          frames: scene.anims.generateFrameNames('player_collect', {
//             start: 0,
//             end: 3,
//          }),
//          frameRate: 6,
//          repeat: 0,
//          yoyo: false
//     });

//     // player.on('animationcomplete', function(animation){
//     //     if (animation.key === 'player_collect'){
//     //         player.isCollect = false;
//     //     };
//     // }, scene)
// } 