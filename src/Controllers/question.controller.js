import OptionRepository from "../Repositories/option.repository.js";
import QuestionRepository from "../Repositories/question.repository.js";
import applicationError from "../Middlewares/application.error.js";

export default class QuestionController {

    constructor() {
        this.questionRepository = new QuestionRepository();
    }

    createQuestion = async (req, res) => {
        try {
            const isQuestionCreated = await this.questionRepository.CreateQuestionRepo(req.query.question);
            if (isQuestionCreated) {
                return res.status(200).send(isQuestionCreated);
            }
        } catch (error) {
            return res.status(400).send(error.message)
        }


    }

    addOption=async(req,res)=>{
     try {
        const isOptionAdded = await this.questionRepository.addOptionRepo(req.params.id,req.query.option);
        if (isOptionAdded) {
            return res.status(200).send(isOptionAdded);
        }
        
     } catch (error) {
        return res.status(400).send(error.message)
     }
    }

    deleteQuestion=async(req,res)=>{
        try {
           const isQuestionDeleted= await this.questionRepository.deleteQuestionRepo(req.params.id);
           if (isQuestionDeleted) {
               return res.status(200).send(isQuestionDeleted);
           }
           
        } catch (error) {
           return res.status(400).send(error.message)
        }
       }

       viewQuestion=async(req,res)=>{
        try {
           const question= await this.questionRepository.viewQuestionRepo(req.params.id);
           if (question) {
               return res.status(200).send(question);
           }
           
        } catch (error) {
           return res.status(400).send(error.message)
        }
       }

}