const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const openBtn = document.getElementById("jsOpen");
const saveBtn = document.getElementById("jsSave");
const resetBtn = document.getElementById("jsReset");
const paintBtn = document.getElementById("jsPaint");
const fillBnt = document.getElementById("jsFill");

const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

const INITIAL_COLOR = "#2c2c2c";
const SECECT_COLOR = "#00eaa0";
const CANVAS_SIZE = 700;

let painting, filling;
const isFill = {
  0: () => {
    filling = false;
    paintBtn.style.color = SECECT_COLOR;
    fillBnt.style.color = "#000";
  },
  1: () => {
    filling = true;
    paintBtn.style.color = "#000";
    fillBnt.style.color = SECECT_COLOR;
  },
};

const resetCanvas = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  ctx.strokeStyle = "INITIAL_COLOR";
  ctx.fillStyle = "INITIAL_COLOR";
  ctx.lineWidth = 2.5;

  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  paintBtn.style.color = SECECT_COLOR;
  painting = filling = false;
};

const startPainting = () => (painting = true);
const stopPainting = () => (painting = false);

const onMouseMove = ({ offsetX, offsetY }) => {
  const x = offsetX,
    y = offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

const handleCanvasClick = () => {
  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

const handleImageOpenchange = ({ target: { files } }) => {
  const file = files[0],
    url = URL.createObjectURL(file),
    img = new Image();

  img.onload = function () {
    URL.revokeObjectURL(this.src);
    ctx.drawImage(this, 0, 0);
  };
  img.src = url;
};

const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint";
  link.click();
};

if (canvas) {
  resetCanvas();
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (openBtn) openBtn.addEventListener("change", handleImageOpenchange);
if (saveBtn) saveBtn.addEventListener("click", handleSaveClick);
if (resetBtn) resetBtn.addEventListener("click", () => resetCanvas());

if (paintBtn) paintBtn.addEventListener("click", isFill[0]);
if (fillBnt) fillBnt.addEventListener("click", isFill[1]);

if (range) range.addEventListener("input", handleRangeChange);
