
const TobicsDropdownButton = document.getElementById('TobicsDropdownButton');
const TobicsDropdownContent = document.getElementById('TobicsDropdownContent');

TobicsDropdownButton.addEventListener('click', function() {
  TobicsDropdownContent.style.display = TobicsDropdownContent.style.display === 'block' ? 'none' : 'block';
});


document.querySelectorAll('.submit-btn').forEach(function(button, index) {
  button.addEventListener("click", function() {
      var correctAnswers = ["d","b","b"]; 
      var currentQuestion = this.closest('.container');
      var selectedAnswer = currentQuestion.querySelector('input[name="answer'+ (index + 1) +'"]:checked');
      var resultContainer = currentQuestion.querySelector('.result');

      if (selectedAnswer) {
          var userAnswer = selectedAnswer.value;
          var correctAnswer = correctAnswers[index];
          var isCorrect = userAnswer === correctAnswer;

          var resultHTML = "";
          if (isCorrect) {
              resultHTML = "<p style='color: green;'>Correct!</p>";
          } else {
              resultHTML = "<p style='color: red;'>Your answer: " + userAnswer + "</p>";
              resultHTML += "<p style='color: green;'>Correct answer: " + correctAnswer + "</p>";
          }

          resultContainer.innerHTML = resultHTML;
      } else {
          resultContainer.innerHTML = "<p style='color: red;'>Please select an answer.</p>";
      }
  });
});


function openVideo(videoSrc) {
    var videoPageUrl = 'v1.html?src=' + encodeURIComponent(videoSrc);
    window.open(videoPageUrl, '_blank');
}










