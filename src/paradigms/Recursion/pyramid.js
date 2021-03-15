function drawPyramid(height) {
  if (height === 0) {
    return;
  }
  drawPyramid(height - 1);
  let result = '';
  for (let i = 0; i < height; i++) {
    result += '#';
  }
  console.log(result);
}

drawPyramid(4);
