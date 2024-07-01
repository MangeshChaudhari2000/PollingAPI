import  OptionRepository  from "../Repositories/option.repository.js";
import applicationError from "../Middlewares/application.error.js";

export default class QuestionController {

    constructor() {
        this.optionRepository = new OptionRepository();
    }

    deleteOption=async(req,res)=>{
        try {
           const isOptionDeleted= await this.optionRepository.deleteOptionRepo(req.params.id);
           if (isOptionDeleted) {
               return res.status(200).send(isOptionDeleted);
           }
           
        } catch (error) {
           return res.status(400).send(error.message)
        }
       }

       addVote=async(req,res)=>{
        try {
           const isVote= await this.optionRepository.addVoteRepo(req.params.id);
           if (isVote) {
               return res.status(200).send(isVote);
           }
        } catch (error) {
           return res.status(400).send(error.message)
        }
       }
}
