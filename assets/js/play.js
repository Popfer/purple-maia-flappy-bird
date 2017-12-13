/* global game, Phaser, playState, menuState, mainMenuState */

var playState = {

    preload: function() { 
        if (!game.device.desktop){
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
            }
        game.scale.pageAlighnHorizontally = true;
        game.scale.pageAlighnVertically = true;
        
        game.stage.backgroundColor = '#8185d5';
        
        // preload pipes and banana
        game.load.image('bird', 'assets/images/banana.png');
        game.load.image('pipe', 'assets/images/pipe.png');
        
        // load the jump sound
        game.load.audio('jump', 'assets/audio/jump.m4a');
    
    },

    create: function() { 
        //this is the physics function/options
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //create our pipes group
        this.pipes = game.add.group();
        
        // our timer
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        //add bird to he stage
        this.bird = game.add.sprite(100, 245, 'bird');
        
        //enable physics on our bird
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        
        //anchor postition
        this bird.anchor.setTo(-0.2, 0.5);
    },

    update: function() {
        
    }
};
