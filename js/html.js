const quizData = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
      answer: 'Hyper Text Markup Language',
    },
    {
      question: 'Who is making the Web standards?',
      options: ['Microsoft', 'World Wide Web', 'Mozilla', 'Google'],
      answer: 'World Wide Web',
    },
    {
      question: 'Choose the correct HTML element for the largest heading',
      options: ['<h6>', '<heading>', '<head>', '<h1>'],
      answer: '<h1>',
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      options: ['<br>', '<lb>', '<break>', '<url>'],
      answer: '<br>',
    },
    {
      question: 'What is the correct HTML for adding a background color?',
      options: [
        '<body bg="yellow">',
        '<body style="background-color:yellow;">',
        '<background>yellow</background>',
        '<background>style color=yellow</background>',
      ],
      answer: '<body style="background-color:yellow;">',
    },
    {
      question: 'How many tags are in a regular HTML element?',
      options: ['2', '1', '3', '4'],
      answer: '2',
    },
    {
      question: 'Choose the correct HTML element to define important text',
      options: [
        '<i>',
        '<important>',
        '<b>',
        '<strong>',
      ],
      answer: '<strong>',
    },
    {
      question: 'Choose the correct HTML element to define emphasized text',
      options: ['<em>', '<i>', '<italic>', '<a>'],
      answer: '<em>',
    },
    {
      question: 'Which character is used to indicate an end tag?',
      options: [
        '<',
        '/',
        '^',
        '*',
      ],
      answer: '/',
    },
    {
      question: 'Which of these elements are all <table> elements?',
      options: ['<table><tr><td>', '<table><tr><tt>', '<thead><body><tr>', '<table><head><tfoot>'],
      answer: '<table><tr><td>',
    },
    {
      question: 'How can you make a numbered list?',
      options: ['<ol>', '<list>', '<dl>', '<ul>'],
      answer: '<ol>',
    },
    {
      question: 'How can you make a bulleted list?',
      options: ['<list>', '<ol>', '<ul>', '<dl>'],
      answer: '<ul>',
    },
    {
      question: 'What is the correct HTML for making a checkbox?',
      options: ['<checkbox>', '<input type="check">', '<input type="checkbox">', '<check>'],
      answer: '<input type="checkbox">',
    },
    {
      question: 'What is the difference between an opening tag and a closing tag?',
      options: ['Closing tag has a / in front', 'Opening tag has a / in front', 'There is no difference', 'non of these'],
      answer: 'Closing tag has a / in front',
    },
    {
      question: 'What is the correct HTML for making a text input field?',
      options: [
        '<input type="text">',
        '<textfield>',
        '<input type="textfield">',
        '<textinput type="text">',
      ],
      answer: '<input type="text">',
    },
    {
      question: 'What is the correct HTML for making a drop-down list?',
      options: ['<select>', '<input type="dropdown">', '<list>', '<input type="list">'],
      answer: '<select>',
    },
    {
      question: 'What is the correct HTML for inserting an image?',
      options: [
        '<image src="image.gif" alt="MyImage">',
        '<img alt="MyImage">image.gif</img>',
        '<img src="image.gif" alt="MyImage">',
        '<img href="image.gif" alt="MyImage">',
      ],
      answer: '<img src="image.gif" alt="MyImage">',
    },
    {
      question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      options: ['alt', 'src', 'longdesc', 'title'],
      answer: 'alt',
    },
    {
      question: 'Which HTML element is used to specify a footer for a document or section?',
      options: [
        '<bottom>',
        '<section>',
        '<footer>',
        '<header>',
      ],
      answer: '<footer>',
    },
    {
      question: 'What is the correct HTML element for playing video files',
      options: ['<video>', '<movie>', '<media>', '<image>'],
      answer: '<video>',
    },
    {
      question: 'What is the correct HTML element for playing audio files?',
      options: ['<audio>', '<mp3>', '<sound>', '<movie>'],
      answer: '<audio>',
    },
    {
      question: 'The HTML global attribute, "contenteditable" is used to:',
      options: ['Return the position of the first found occurrence of content inside a string', 'Update content from the server', 'Specify whether the content of an element should be editable or not', 'Specifies a context menu for an element. The menu appears when a user right-clicks on the element'],
      answer: 'Specify whether the content of an element should be editable or not',
    },
    {
      question: 'Graphics defined by SVG is in which format?',
      options: ['none of these', 'HTML', 'XML', 'css'],
      answer: 'XML',
    },
    {
      question: 'The HTML <canvas> element is used to:',
      options: ['draw graphics', 'create draggable elements', 'manipulate data in MySQL', 'display database records'],
      answer: 'draw graphics',
    },
    {
      question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
      options: [
        'required',
        'validate',
        'placeholder',
        'formvalidate',
      ],
      answer: 'required',
    },
    {
      question: 'Which input type defines a slider control?',
      options: ['range', 'controls', 'search', 'slider'],
      answer: 'range',
    },
    {
      question: 'Which HTML element is used to display a scalar measurement within a range?',
      options: [
        '<gauge>',
        '<measure>',
        '<range>',
        '<meter>',
      ],
      answer: '<meter>',
    },
    {
      question: 'Which HTML element defines navigation links?',
      options: ['<nav>', '<navigate>', '<navigation>', 'none of these'],
      answer: '<nav>',
    },
    {
      question: 'Which HTML element is used to specify a header for a document or section?',
      options: [
        '<head>',
        '<header>',
        '<section>',
        '<top>',
      ],
      answer: '<header>',
    },
    {
      question: 'In HTML, what does the <aside> element define?',
      options: ['Content aside from the page content', 'A navigation list to be shown at the left side of the page', 'none of these', 'The ASCII character-set; to send information between computers on the Internet'],
      answer: 'Content aside from the page content',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();