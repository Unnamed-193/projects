window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.createElement('div');
  const nonogram = document.createElement('div');
  const headerHints = document.createElement('div');
  const emptyCell = document.createElement('div');
  const btnBox = document.createElement('div');
  const themeToggler = document.createElement('div');
  const themeImg = document.createElement('img');

  wrapper.className = 'wrapper';
  nonogram.className = 'nonogram';
  headerHints.className = 'header';
  emptyCell.className = 'cell';
  themeToggler.className = 'theme-toggler';
  themeImg.className = 'theme-img';
  themeImg.src = '/unnamed-193-JSFE2023Q4/nonograms/assets/img/theme.png';

  document.body.append(wrapper);
  wrapper.append(nonogram);
  nonogram.append(headerHints);
  headerHints.append(emptyCell);
  themeToggler.append(themeImg);

  const timeText = document.createElement('span');
  timeText.innerText = `Time: 00:00`;
  btnBox.append(timeText);
  btnBox.append(themeToggler);

  const horizontalHints = [[5], [1, 2], [2], [2], [5]];

  const verticalHints = [
    [2, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [2, 1],
  ];

  console.log([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ]);

  let isDark = false;

  themeToggler.onclick = () => {
    wrapper.classList.toggle('dark');
    document.body.classList.toggle('dark');
    isDark = !isDark;
  };

  function createCell(isFilled) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (isFilled) {
      cell.classList.add('filled');
    }

    cell.addEventListener('mousedown', (event) => {
      if (event.which === 3) {
        document.body.oncontextmenu = function () {
          return false;
        };
        cell.classList.toggle('cross');
        cell.classList.remove('filled');
      } else if (event.which === 1) {
        cell.classList.toggle('filled');
        cell.classList.remove('cross');
      }
    });

    return cell;
  }

  function createHint(hints) {
    const hintContainer = document.createElement('div');
    hintContainer.className = 'hint';

    hints.forEach((hint) => {
      const span = document.createElement('span');
      span.textContent = hint;
      hintContainer.appendChild(span);
    });

    return hintContainer;
  }

  verticalHints.forEach((colHints) => {
    const cell = createHint(colHints);
    headerHints.appendChild(cell);
  });

  horizontalHints.forEach((rowHints, rowIndex) => {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row';
    nonogram.appendChild(rowContainer);

    const hint = createHint(rowHints);

    rowContainer.appendChild(hint);
    for (let colIndex = 0; colIndex < verticalHints.length; colIndex++) {
      const cell = createCell();
      rowContainer.appendChild(cell);
    }
  });

  const rows = horizontalHints.length;
  const cols = horizontalHints[0].length;

  function checkRow(rowIdx) {
    const rowHints = horizontalHints[rowIdx];
    const row = Array.from(nonogram.querySelectorAll('.row'))[
      rowIdx
    ].querySelectorAll('.cell');
    const filledRowHints = [];

    let currentRun = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i].classList.contains('filled')) {
        currentRun++;
      } else {
        if (currentRun > 0) {
          filledRowHints.push(currentRun);
          currentRun = 0;
        }
      }
    }
    if (currentRun > 0) {
      filledRowHints.push(currentRun);
    }

    return JSON.stringify(rowHints) === JSON.stringify(filledRowHints);
  }

  function checkCol(colIdx) {
    const colHints = verticalHints[colIdx];
    const cells = nonogram.querySelectorAll(
      '.row .cell:nth-child(' + (colIdx + 2) + ')'
    );
    const filledColHints = [];

    let currentRun = 0;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('filled')) {
        currentRun++;
      } else {
        if (currentRun > 0) {
          filledColHints.push(currentRun);
          currentRun = 0;
        }
      }
    }
    if (currentRun > 0) {
      filledColHints.push(currentRun);
    }

    return JSON.stringify(colHints) === JSON.stringify(filledColHints);
  }

  function checkCol(colIdx) {
    const colHints = verticalHints[colIdx];
    const cells = nonogram.querySelectorAll(
      '.row .cell:nth-child(' + (colIdx + 2) + ')'
    );
    const filledColHints = [];

    let currentRun = 0;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('filled')) {
        currentRun++;
      } else {
        if (currentRun > 0) {
          filledColHints.push(currentRun);
          currentRun = 0;
        }
      }
    }
    if (currentRun > 0) {
      filledColHints.push(currentRun);
    }

    return JSON.stringify(colHints) === JSON.stringify(filledColHints);
  }

  function updateHints() {
    for (let i = 0; i < rows; i++) {
      const row = nonogram.querySelectorAll('.row')[i];
      const result = checkRow(i);
      if (result) {
        row.querySelector('.hint').classList.add('solved');
      } else {
        row.querySelector('.hint').classList.remove('solved');
      }
    }

    for (let i = 0; i < cols; i++) {
      const result = checkCol(i);
      if (result) {
        headerHints.querySelectorAll('.hint')[i + 1].classList.add('solved');
      } else {
        headerHints.querySelectorAll('.hint')[i + 1].classList.remove('solved');
      }
    }
  }

  function checkWin() {
    for (let i = 0; i < rows; i++) {
      if (!checkRow(i)) {
        return false;
      }
    }
    for (let i = 0; i < cols; i++) {
      if (!checkCol(i)) {
        return false;
      }
    }
    return true;
  }
  nonogram.addEventListener('click', () => {
    updateHints();
    if (checkWin()) {
      nonogram.style.pointerEvents = 'none';
      alert(
        `Victory! You solved the nonogram in ${time(minutes)}:${time(
          doubleSeconds
        )}`
      );
      resetTimer();
    }
  });

  const cells = document.querySelectorAll('.cell');

  let timerStart = false;
  let timer;
  let seconds;
  let minutes;
  let doubleSeconds;

  function time(value) {
    return value < 10 ? '0' + value : value;
  }

  function startTimer(event) {
    if (!timerStart) {
      seconds = 0;
      minutes = 0;
      timer = setInterval(() => {
        seconds++;
        minutes = Math.floor(seconds / 60);
        doubleSeconds = seconds % 60;
        timeText.innerText = `Time: ${time(minutes)}:${time(doubleSeconds)}`;
      }, 1000);
      timerStart = true;
    }

    cells.forEach((elem) => {
      if (elem !== event.target) {
        elem.removeEventListener('mousedown', startTimer);
      }
    });
  }

  function resetTimer() {
    clearInterval(timer);
    timeText.innerText = `Time: 00:00`;
    timerStart = false;
    cells.forEach((item) => {
      item.addEventListener('mousedown', startTimer);
    });
  }

  cells.forEach((item) => {
    item.addEventListener('mousedown', startTimer);
  });

  function restartGame() {
    const restartBtn = document.createElement('button');

    restartBtn.textContent = 'Restart';

    restartBtn.classList.add('restart-btn');
    btnBox.classList.add('btn-box');

    wrapper.append(btnBox);
    btnBox.append(restartBtn);

    const cells = document.querySelectorAll('.cell');

    restartBtn.addEventListener('click', () => {
      cells.forEach((item) => {
        item.classList.remove('cross');
        item.classList.remove('filled');
      });
      nonogram.style.pointerEvents = 'auto';
      resetTimer();
    });
  }

  restartGame();
});
