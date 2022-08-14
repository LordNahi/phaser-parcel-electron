import { MainScene } from "./scenes/mainScene";
import windowConfig from "../window.json";

const config: GameConfig = {
  type: Phaser.AUTO,
  width: windowConfig.width,
  height: windowConfig.height,
  scene: [MainScene],
};

const game = new Phaser.Game(config);
