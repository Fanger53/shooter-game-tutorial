import '../assets/style.scss';
import Phaser from 'phaser';
import SceneMainMenu from './sceneMainMenu';
import SceneMain from './sceneMain';
import SceneGameOver from './sceneGameOver';

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 600,
  parent: 'board-game',
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [SceneMainMenu,
    SceneMain,
    SceneGameOver],
  pixelArt: true,
  roundPixels: true
};

const game = new Phaser.Game(config);

