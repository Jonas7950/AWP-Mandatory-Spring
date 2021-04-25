module.exports = (mongoose) => {

  const answerSchema = new mongoose.Schema({
    answer: String,
    rating: Number
  });

  const questionSchema = new mongoose.Schema({
    title: String,
    description: String,
    answers: Array
  });

  const answerModel = mongoose.model('answer', answerSchema);
  const questionModel = mongoose.model('question', questionSchema);

  async function getQuestions() {
    try {
      return await questionModel.find();
    } catch (error) {
      console.error("getQuestions:", error.message);
      return {};
    }
  }

  async function getQuestion(id) {
    try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function createQuestion(Title, Desc) {
    let question = new questionModel({title: Title, description: Desc});
    return question.save();
  }

  async function getAnswers() {
    try {
      return await answerModel.find();
    } catch (error) {
      console.error("getQuestions:", error.message);
      return {};
    }
  }

  async function createAnswer(Answer){
    let answer = new answerModel({answer: Answer, rating: 0});
    return answer.save();
  }

  async function bootstrap(count = 5) {
    let l = (await getQuestions()).length;
    console.log("Question collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        
        let _answers = [];
        for (let y = 0; y < 3; y++){
          let newAnswer = new answerModel({answer:`answer number ${y} on question number ${i}`, rating: 0})
          console.log(y + " and " + i);
          _answers.push(newAnswer.save());
        }

        let newQuestion = new questionModel({title: `question number ${i}`, description: `description number ${i}`, answers: _answers});
        promises.push(newQuestion.save());
      }

      return Promise.all(promises);
    }
  }

  return {
    getQuestions,
    getQuestion,
    createQuestion,
    getAnswers,
    createAnswer,
    bootstrap
  }
}