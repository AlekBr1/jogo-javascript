import { Player } from "./player";

export const craeteControls = (
    scene: Phaser.Scene
): Phaser.Types.Input.Keyboard.CursorKeys => {
    return scene.input.keyboard.createCursorKeys();
};

export const configControls = (
    player: Player,
    controls: Phaser.Types.Input.Keyboard.CursorKeys,
    scene: Phaser.Scene
): void => {
    player.setVelocityX(0);
    player.setVelocityY(0);

    if (controls.right.isDown) {
        moveRight(player);
        return;
    }

    if (controls.left.isDown) {
        moveLeft(player);
        return;
    }

    if (controls.down.isDown) {
        moveDown(player);
        return;
    }

    if (controls.up.isDown) {
        moveUp(player);
        return;
    }

    if (controls.space.isDown) {
        if (!player.isCollect){
            collect(player);
        };
        return;
    }
    
    player.anims.play("player_idle", true);
};

const defaultVelocity = 200;

const moveRight = (player): void =>{
    player.setflipx(false);
    player.anims.play('player_walk', true);
    player.setVelocityX(defaultVelocity);
};

const moveLeft = (player): void =>{
    player.setflipx(true);
    player.anims.play('player_walk', true);
    player.setVelocityX(-defaultVelocity)
};

const moveUp = (player): void => {
    player.anims.play('player_walk', true);
    player.setVelocityY(-defaultVelocity);
};

const moveDown = (player): void => {
    player.anims.play('player_walk', true);
    player.setVelocityY(defaultVelocity);
};

const collect = (player: Player): void => { 
    player.isCollect = true;
    player.anims.play('player_collect', true);
}