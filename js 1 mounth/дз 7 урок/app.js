function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    const button = document.querySelector(`button[onclick="toggleAnswer(${id})"]`);

    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      button.textContent = 'Скрыть ответ';
    } else {
      answer.style.display = 'none';
      button.textContent = 'Показать ответ';
    }
  } 