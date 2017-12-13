/* global game, Phaser, playState, menuState, mainMenuState */

var startBtn;

var mainMenuState = {
    
    
    preload: function() { 
        game.load.spritesheet('startBtn''assets/images/start_btn.png',193, 71);
    
         game.stage.backgroundColor = '#FFD700'
         game.scale.pageAlighnHorizontally = true;    
         game.scale.pageAlighnVertically = true;
    },
    
    
    create: function() {
        startBtn = game.add.button(game.world.centerX-95, 200, 'startBtn', this.startGame, this, 2, 1, 0);
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
         spaceKey.onDown.add(this.startGame, this);
    },
    
    
    update: function() {
        
    },

    startGame: function() {
       game.state.start('play');
    }

};
