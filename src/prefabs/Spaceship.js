class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue, speedmod){
        super(scene, x, y, texture, frame, speedmod)
        scene.add.existing(this)
        this.points = pointValue
        this.sm = speedmod
        this.moveSpeed = game.settings.spaceshipSpeed
    }

    update(){

        this.x -= this.moveSpeed*this.sm

        if(this.x <= 0 - this.width){
            this.x = game.config.width
        }
    }

    reset(){
        this.x = game.config.width
    }
}