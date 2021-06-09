import sprBtnPlay from '../assets/img/sprBtnPlay.png';
import sprBtnPlayHover from '../assets/img/sprBtnPlayHover.png';
import sprBtnPlayDown from '../assets/img/sprBtnPlayDown.png';
import sprBtnRestart from '../assets/img/sprBtnRestart.png';
import sprBtnRestartHover from '../assets/img/sprBtnRestartHover.png';
import sprBtnRestartDown from '../assets/img/sprBtnRestartDown.png';
import sndBtnOver from '../assets/sounds/sndBtnOver.wav';
import sndBtnDown from '../assets/sounds/sndBtnDown.wav';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);

    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
  }

  create() {
    
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );

    this.btnPlay.setInteractive();
  }
}