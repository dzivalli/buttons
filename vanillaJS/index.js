const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const btnBlock = document.getElementById('btn-block');
const shuffleBtn = document.getElementById('shuffle');

const shuffle = () => {
  let colors = [...COLORS];

  for (let i = 0; i < btnBlock.children.length; i++) {
    const color = Math.floor(Math.random() * colors.length);
    btnBlock.children[i].style.background = colors.splice(color, 1);
  }
}

COLORS.map(() => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btnBlock.appendChild(btn);
})
shuffleBtn.addEventListener('click', shuffle);

shuffle();
