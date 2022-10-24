    var answers = ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "Hell ya", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "Nah, I don't think so",
                   "Are you CrAzY?! NO", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "When pigs fly",
                   "Cannot predict now", 
                   "Rethink your question and ask again"];
    
    window.onload = function() {
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       var question = document.getElementById("question");
       
       eightball.addEventListener("click", function() {
         if (question.value.length < 1) {
           alert('Enter a question!');
         } else {
           eight.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
    };