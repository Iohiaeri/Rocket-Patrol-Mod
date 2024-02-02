// Ikenna Ohiaeri
// Rocket Patrol Reforged
// 10 hours
// Display time remaining (3) mouse contol(5) New Enmey Type (5) Contorl Rocket after Fire(1) Time goes up on hit and down on miss (5), Added BGM(1), added speed up at 30s (1)
// Music: Let Me See Ya Bounce- by DominikBraun
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let keyFIRE, keyRESET, keyLEFT, keyRIGHT