export const craeteControls = (
    scene: Phaser.Scene
): Phaser.Types.Input.Keyboard.CursorKeys => {
    return scene.input.keyboard.createCursorKeys();
};

export const configControls = (
    player,
    controls: Phaser.Types.Input.Keyboard.CursorKeys,
    scene: Phaser.Scene
): void => {
    player.steVelocityX(0);
    player.steVelocityY(0);

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
        collect(player);
        return;
    }
    
    player.anims.play("player_idle", true);
};

const defaultVelocity = 200;

const moveRight = (player): void =>{
    player.setflipx(false);
    player.anims.play('player_walk', true);
    player.steVelocityX(defaultVelocity);
};

const moveLeft = (player): void =>{
    player.setflipx(true);
    player.anims.play('player_walk', true);
    player.steVelocityX(-defaultVelocity)
};

const moveUp = (player): void => {
    player.anims.play('player_walk', true);
    player.steVelocityY(-defaultVelocity);
};

const moveDown = (player): void => {
    player.anims.play('player_walk', true);
    player.steVelocityY(defaultVelocity);
};

const collect = (player): void => {
    player.anims.play('player_collect', true);
}