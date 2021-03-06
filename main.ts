namespace SpriteKind {
    export const warden = SpriteKind.create()
}
function CharacterCreating () {
    Ksifk = sprites.create(img`
        ................................
        .............eeeeee.............
        ...........eeeeeeeeeee..........
        ..........eeeeeeeeeeeee.........
        ........eeeeeeeeeeeeeeee........
        ........eeeeeeeeeeeeeeeee.......
        .......eeeedeeeedeeeeeeee.......
        ......eeeedddeeddeedeeeeee......
        ......eeeedddddddddddeeeee......
        .....eeeeedffdddddffdedeee......
        .....eeeeedddddddddddddeee......
        .....eeeedddddddddddddeeee......
        .....eeeeddddddddddddeeee.......
        .....eeeeedddffffddeeeeee.......
        .....eeeeeeeddddddeeeeeee.......
        ......eeeeeeeeddeeeeee.e........
        ........e.e..edde..e............
        ..............dd................
        ............fffffff.............
        .........fff9ffff9fff...........
        ........f9f99999999f9f..........
        .......f9f333333333ff9f.........
        .......f9f9999999999f9f.........
        .......fff3333333333f9f.........
        .......fdf9999999999fff.........
        .......fff9999999999fdf.........
        .........f999ffff999fff.........
        .........f999f..f999f...........
        .........fffff..fffff...........
        ..........fff....fff............
        ..........fff....fff............
        .........ffff....ffff...........
        `, SpriteKind.Player)
    controller.moveSprite(Ksifk, 100, 100)
    Ksifk.setPosition(16, 16)
    scene.cameraFollowSprite(Ksifk)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.warden, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level7`)
})
let Warden_1: Sprite = null
let Ksifk: Sprite = null
tiles.setTilemap(tilemap`level1`)
CharacterCreating()
forever(function () {
    if (Ksifk.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        tiles.setTilemap(tilemap`level0`)
        Warden_1 = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ...........fffffffff............
            ...........fffffffff............
            ...........fffffffff............
            ........fffffffffffffff.........
            ........fffffffffffffff.........
            ........fff11ffff11ffff.........
            ........fff11ffff11ffff.........
            ........fff11ffff11ffff.........
            ........fff11ffff11ffff.........
            ........fffffffffffffbbb........
            ........fbbbbbbbbbbbbbbb........
            ......bbbbbbbbbbbbbbbbb.........
            ......bbbbbbbbbbbbbffff.........
            .....bbbbbbbbbbffffffff.........
            ....bbbbbbfffffffffffff.........
            ...bbbbbbffffffffffffff.........
            ..bbbbbbfffffffffffffff.........
            ..bbbbb.fffffffffffffff.........
            ..bbbb..fffffffffffffff.........
            ..bbb...fffffffffffffff.........
            ........fffffffffffffff.........
            ........fffffffffffffff.........
            ........fffffffffffffff.........
            ..........fff.....fff...........
            ..........fff.....fff...........
            ..........fff.....fff...........
            ........fffff.....fffff.........
            ........fffff.....fffff.........
            `, SpriteKind.warden)
    }
})
