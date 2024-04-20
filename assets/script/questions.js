var question1 = {
  question:
    "You're planning a team outing! Which activity are you thinking of?",
  options: [
    "A thrilling adventure like zip-lining or rock climbing",
    "A relaxed picnic in the park with games and good food",
    "A cultural excursion to a museum or art gallery",
  ],
};

var question2 = {
  question:
    "Your friend asks for recommendations on a new restaurant to try. What type of cuisine do you suggest?",
  options: [
    "A trendy fusion restaurant with bold and innovative dishes",
    "A cozy neighborhood cafe known for its comforting home-cooked meals",
    "A classic steakhouse with a sophisticated ambiance and impeccable service",
  ],
};

var question3 = {
  question:
    "You're participating in a group project! Which role do you prefer to take on?",
  options: [
    "The leader who spearheads the project and delegates tasks efficiently",
    "The supportive team member who offers assistance and encouragement to others",
    "The creative thinker who generates innovative ideas and solutions",
  ],
};

var question4 = {
  question:
    "You are participating in a group event for charity! What type of event would you prefer?",
  options: [
    "A charity run or walkathon to raise awareness and funds for a specific cause or organization",
    "A charity auction or fundraising gala featuring entertainment, auctions, and raffles to attract donors",
    "A volunteer day at a local charity or community service organization to directly impact those in need",
  ],
};

var question5 = {
  question: "You're attending a networking event! Which approach do you take?",
  options: [
    "Proactively initiating conversations and confidently sharing your ideas and experiences",
    "Listening attentively to others and offering support and encouragement in their endeavors",
    "Observing the dynamics of the room and strategically connecting with individuals who share your interests and goals",
  ],
};

var question6 = {
  question: "How do you imagine your birthday celebration would be?",
  options: [
    "A themed costume party at a trendy nightclub with music, dancing, and vibrant decorations",
    "A cozy gathering at home with close friends and family, featuring homemade dishes and heartfelt conversations",
    "An outdoor barbecue or picnic in a scenic park, complete with games, food, and laughter",
  ],
};

var question7 = {
  question:
    "You're curious to try out a new sport! What type of sport are you most likely to explore?",
  options: [
    "Extreme sports like rock climbing or skydiving for an adrenaline rush and thrill-seeking adventure.",
    "Endurance sports like marathon running or triathlons for a challenge and sense of accomplishment.",
    "Team sports like rugby or lacrosse for the camaraderie and competitive spirit.",
  ],
};

var question8 = {
  question:
    "You're curious to try out a new sport! What type of sport are you most likely to explore?",
  options: [
    "Taking the lead in organizing the structure and confidently delivering key points with enthusiasm and conviction",
    "Supporting your teammates by contributing ideas and providing assistance with research and preparation",
    "Bringing creativity to the table by designing visually appealing slides and engaging the audience with compelling storytelling",
  ],
};

var question9 = {
  question:
    "Your friend asks for your advice on a personal matter! How do you offer support and guidance?",
  options: [
    "Providing straightforward advice and practical solutions to address the issue decisively",
    "Listening empathetically to their concerns and offering a comforting presence and reassurance",
    "Offering perspective from different angles and encouraging them to explore their options before making a decision",
  ],
};

var question10 = {
  question:
    "You're organizing a movie night with friends! What type of movie do you aim to screen for the event?",
  options: [
    "Action-packed blockbusters with thrilling sequences and intense plot twists for an exciting movie-watching experience.",
    "Heartwarming comedies or dramas with relatable characters and touching storylines for a cozy and enjoyable night in.",
    "Classic films or thought-provoking documentaries that spark meaningful discussions and insights among friends.",
  ],
};

// Khai báo biến global để lưu trữ số thứ tự của câu hỏi hiện tại
let currentQuestionNumber = 1;
let currentProgress = 1;

// Lấy ra thẻ div chứa câu hỏi và các lựa chọn
const questionDiv = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

// Hàm để cập nhật câu hỏi và các lựa chọn dựa trên số thứ tự của câu hỏi
function updateQuestion(questionNumber) {
  const currentQuestion = window["question" + questionNumber];
  // Sử dụng số thứ tự của câu hỏi trong nội dung câu hỏi
  console.log(questionNumber); //Linh's code
  console.log(currentQuestion); //Linh's code
  questionDiv.innerText = `Question ${questionNumber}: ${currentQuestion.question}`;
  option1.innerText = currentQuestion.options[0];
  option2.innerText = currentQuestion.options[1];
  option3.innerText = currentQuestion.options[2];
}
updateQuestion(currentQuestionNumber);

// Update progress
function updateProgress(progress) {
  const percent = (progress / 10) * 100; // Tính phần trăm hoàn thành
  document.querySelector(".progress").style.width = percent + "%"; // Cập nhật độ dài của thanh progress
}
updateProgress(currentProgress);

// Thêm sự kiện "click" cho mỗi thẻ <a> có class là "option"
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    if (currentQuestionNumber < 10) {
      //nếu bé hơn 11 thì đọc ra ngoài mảng mất :D
      currentQuestionNumber++;
    } else return;
    if (currentProgress < 10) {
      currentProgress++;
    } else return;
    updateQuestion(currentQuestionNumber);
    updateProgress(currentProgress);
  });
});

// Lấy ra thẻ có id là "start-again-btn"
const startAgainBtn = document.getElementById("start-again-btn");
// Thêm sự kiện "click" vào thẻ
startAgainBtn.addEventListener("click", () => {
  // Thiết lập lại số thứ tự của câu hỏi về 1
  currentQuestionNumber = 1;
  currentProgress = 1;
  // Cập nhật lại câu hỏi và các lựa chọn cho câu hỏi đầu tiên
  updateQuestion(currentQuestionNumber);
  // Cập nhật lại progress bar khi bắt đầu lại từ đầu
  updateProgress(currentProgress);
});
