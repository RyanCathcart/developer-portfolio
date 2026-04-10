import { Box } from '@mui/material';
import { type P5CanvasInstance, ReactP5Wrapper } from 'react-p5-wrapper';
import { customTheme } from '../../styles/customTheme';

function sketch(p5: P5CanvasInstance) {
  let cols: number, rows: number;
  let w: number, h: number;

  const terrain: number[][] = [];
  let flying = 0;

  const BACKGROUND_COLOR = customTheme.palette.background.default;
  const SHAPE_FILL_COLOR = 'rgba(0, 180, 216, 0.0234375)';
  const SCALE = 100; // Scale of the polygons
  const FLYING_SPEED = 0.002; // Speed that the animation progresses
  const PERLIN_NOISE_OFFSET = 0.2; // How quickly the vertices traverse through the perlin noise function
  const TERRAIN_AMPLITUDE = 250; // The range of the lowest valleys to the highest peaks, from -TERRAIN_AMPLITUDE to TERRAIN_AMPLITUDE

  p5.setup = () => {
    w = document.body.clientWidth;
    h = window.innerHeight;
    p5.createCanvas(w, h, p5.WEBGL);
    cols = Math.ceil(w / SCALE) + 2;
    rows = Math.ceil(h / SCALE);

    for (let x = 0; x < cols; x++) {
      terrain[x] = [];
      for (let y = 0; y < rows; y++) {
        terrain[x][y] = 0;
      }
    }
  };

  p5.draw = () => {
    flying -= FLYING_SPEED;

    let yOff = flying;
    for (let y = 0; y < rows; y++) {
      let xOff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = p5.map(
          p5.noise(xOff, yOff),
          0,
          1,
          -TERRAIN_AMPLITUDE,
          TERRAIN_AMPLITUDE,
        );
        xOff += PERLIN_NOISE_OFFSET;
      }
      yOff += PERLIN_NOISE_OFFSET;
    }

    p5.background(BACKGROUND_COLOR);
    p5.fill(SHAPE_FILL_COLOR);

    p5.rotateX(p5.PI / 3);
    p5.translate((-(cols - 1) * SCALE) / 2, -h / 3);

    for (let y = 0; y < rows - 1; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      p5.stroke('rgba(0, 180, 216, ' + p5.map(y, 0, rows - 1, 0, 0.35) + ')');
      for (let x = 0; x < cols; x++) {
        p5.vertex(x * SCALE, y * SCALE, terrain[x][y]);
        p5.vertex(x * SCALE, (y + 1) * SCALE, terrain[x][y + 1]);
      }
      p5.endShape();
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(document.body.clientWidth, window.innerHeight);
    p5.setup();
  };
}

export default function P5Canvas() {
  return (
    <Box position='absolute' top='0' sx={{ zIndex: -1 }}>
      <ReactP5Wrapper sketch={sketch} />
    </Box>
  );
}
