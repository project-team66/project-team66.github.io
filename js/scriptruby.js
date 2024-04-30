function showQuestions() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('questioni1').style.display = 'block';
  }

  function checkAnsweri(answerId, currentQuestionId, nextQuestionId) {
    var answeri = document.getElementById(answerId).value.trim();
    var correctAnsweri = '';

    switch (currentQuestionId) {
      case 'questioni1':
        correctAnsweri = 'world';
        break;
      case 'questioni2':
        correctAnsweri = 'string, integer, float';
        break;
      case 'questioni3':
        correctAnsweri= 'orman';
        break;
      case 'questioni4':
        correctAnsweri = '.to_i';
        break;
      case 'questioni5':
        correctAnsweri = 'true';
        break;
      case 'questioni6':
        correctAnsweri = '&&';
        break;
      case 'questioni7':
        correctAnsweri = '24';
        break;
      case 'questioni8':
        correctAnsweri = 'x is smaller than y';
        break;
      case 'questioni9':
        correctAnsweri = 'for and while'
        break;
    }

    if (answeri === correctAnsweri) {
      document.getElementById(currentQuestionId).style.display = 'none';
      if (currentQuestionId === 'questioni9') {
        document.getElementById('finish').style.display = 'block';
      } else {
        document.getElementById(nextQuestionId).style.display = 'block';
      }
    } else {
      alert('Wrong answer, try again');
    }
  }



    function submitAnswersi() {
        var qi1 = document.querySelector('input[name="qi1"]:checked');
        var qi2 = document.querySelector('input[name="qi2"]:checked');
        var qi3 = document.querySelector('input[name="qi3"]:checked');
        var qi4 = document.querySelector('input[name="qi4"]:checked');
        var qi5 = document.querySelector('input[name="qi5"]:checked');
        var qi6 = document.querySelector('input[name="qi6"]:checked');
        var qi7 = document.querySelector('input[name="qi7"]:checked');
        var qi8 = document.querySelector('input[name="qi8"]:checked');
        if (qi1 && qi2 && qi3 && qi4 && qi5 && qi6 && qi7 && qi8) {
            var score = 0;
            if (qi1.value === 'a') score++;
            if (qi2.value === 'a') score++;
            if (qi3.value === 'a') score++;
            if (qi4.value === 'a') score++;
            if (qi5.value === 'a') score++;
            if (qi6.value === 'b') score++;
            if (qi7.value === 'b') score++;
            if (qi8.value === 'b') score++;
            document.getElementById('score').innerHTML = 'Your score is: ' + score + '/8';
        } else {
            alert('Please answer all questions.');
        }
    }




function checkAnswerii(answerId, currentQuestionId, nextQuestionId) {
    var answerii = document.getElementById(answerId).value.trim();
    var correctAnswerii = '';

    switch(currentQuestionId) {
        case 'questionii1':
            correctAnswerii = 'Marawan';
            break;
        case 'questionii2':
            correctAnswerii = '[10, 20, 30, 40, 50]';
            break;    
        case 'questionii3':
            correctAnswerii = '10';
            break;
        case 'questionii4':
            correctAnswerii = 'new york';
            break;
        case 'questionii5':
            correctAnswerii = 'puts Time.now.month';
            break;
        case 'questionii6':
            correctAnswerii = 'gets';
            break;
        case 'questionii7':
            correctAnswerii ='File.read';
            break;
        case 'questionii8': 
            correctAnswerii = 'filename, mode';
            break;    
        case 'questionii9':
            correctAnswerii = 'File.open';
            break;
        case 'questionii10':
            correctAnswerii = '15';
            break;
              
    }

    if (answerii === correctAnswerii) {
      document.getElementById(currentQuestionId).style.display = 'none';
    if (currentQuestionId === 'questionii10') {
      document.getElementById('finish').style.display = 'block';
    } else {
      document.getElementById(nextQuestionId).style.display = 'block';
    }
  } else {
    alert('Wrong answer, try again');
  }
}




function submitAnswersii() {
    var qii1 = document.querySelector('input[name="qii1"]:checked');
    var qii2 = document.querySelector('input[name="qii2"]:checked');
    var qii3 = document.querySelector('input[name="qii3"]:checked');
    var qii4 = document.querySelector('input[name="qii4"]:checked');
    var qii5 = document.querySelector('input[name="qii5"]:checked');
    var qii6 = document.querySelector('input[name="qii6"]:checked');
    var qii7 = document.querySelector('input[name="qii7"]:checked');
    var qii8 = document.querySelector('input[name="qii8"]:checked');
    var qii9 = document.querySelector('input[name="qii9"]:checked');
    var qii10 = document.querySelector('input[name="qii10"]:checked');
      

    if (qii1 && qii2 && qii3 && qii4 && qii5 && qii6 && qii7 && qii8 && qii9 && qii10) {
        var score = 0;
        if (qii1.value === 'b' ) score++;
        if (qii2.value === 'b') score++;
        if (qii3.value === 'd' ) score++;
        if (qii4.value === 'b' ) score++;
        if (qii5.value === 'c' ) score++;
        if (qii6.value === 'b' ) score++;
        if (qii7.value === 'a' ) score++;
        if (qii8.value === 'a' ) score++;
        if (qii9.value === 'c' ) score++;
        if (qii10.value === 'c' ) score++;
       

        document.getElementById('score').innerHTML = 'Your score is: ' + score + '/10';
    } else {
        alert('Please answer all questions.');
    }
}




  function showQuestions() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('questioni1').style.display = 'block';
  }

  function checkAnsweriii(answerId, currentQuestionId, nextQuestionId) {
    var answeriii = document.getElementById(answerId).value.trim();
    var correctAnsweriii = '';

    switch (currentQuestionId) {
      case 'questioniii1':
        correctAnsweriii = 'Okay.';
        break;
      case 'questioniii2':
        correctAnsweriii = 'Okay.';
        break;
      case 'questioniii3':
        correctAnsweriii= 'Okay.';
        break;
    }

    if (answeriii === correctAnsweriii) {
      document.getElementById(currentQuestionId).style.display = 'none';
      if (currentQuestionId === 'questioniii3') {
        document.getElementById('finish').style.display = 'block';
      } else {
        document.getElementById(nextQuestionId).style.display = 'block';
      }
    } else {
      alert('Wrong answer, try again');
    }
  }






function submitAnswersiii() {
    var qiii1 = document.querySelector('input[name="qiii1"]:checked');
    var qiii2 = document.querySelector('input[name="qiii2"]:checked');
    var qiii3 = document.querySelector('input[name="qiii3"]:checked');
    var qiii4 = document.querySelector('input[name="qiii4"]:checked');
    var qiii5 = document.querySelector('input[name="qiii5"]:checked');
    var qiii6 = document.querySelector('input[name="qiii6"]:checked');
    var qiii7 = document.querySelector('input[name="qiii7"]:checked');
    var qiii8 = document.querySelector('input[name="qiii8"]:checked');
    var qiii9 = document.querySelector('input[name="qiii9"]:checked');
    var qiii10 = document.querySelector('input[name="qiii10"]:checked');
      

    if (qiii1 && qiii2 && qiii3 && qiii4 && qiii5 && qiii6 && qiii7 && qiii8 && qiii9 && qiii10) {
        var score = 0;
        if (qiii1.value === 'c' ) score++;
        if (qiii2.value === 'a') score++;
        if (qiii3.value === 'd' ) score++;
        if (qiii4.value === 'b' ) score++;
        if (qiii5.value === 'b') score++;
        if (qiii6.value === 'a' ) score++;
        if (qiii7.value === 'a' ) score++;
        if (qiii8.value === 'a' ) score++;
        if (qiii9.value === 'b' ) score++;
        if (qiii10.value === 'd' ) score++;
       

        document.getElementById('score').innerHTML = 'Your score is: ' + score + '/10';
        if (score === 10) {
          document.getElementById('certificate').style.display = 'block';
        }
    } else {
        alert('Please answer all questions.');
    }
}