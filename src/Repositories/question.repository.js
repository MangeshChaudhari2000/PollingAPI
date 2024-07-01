import applicationError from "../Middlewares/application.error.js";
import { QuestionModel } from "../Schemas/question.schemas.js";
import { OptionModel } from "../Schemas/options.schemas.js";

export default class QuestionRepository {

    CreateQuestionRepo = async (question) => {
        try {
            const isCreated = new QuestionModel({ title: question });
            const isSaved = await isCreated.save();

            if (isSaved) {
                return isSaved; // Return the saved document
            }
        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };

    addOptionRepo = async (questionId, option) => {
        try {
            const question = await QuestionModel.findById(questionId);

            if (question.options.length == 4) {
                throw new applicationError("Four options have already been added; please delete one to add a new one.", 400); // Throw custom application error
            }
            else {
                const isOptionAdded = new OptionModel({ text: option });
                const isSaved = await isOptionAdded.save();
                if (isSaved) {
                    const isAssignedOption = (question.options).push(isOptionAdded._id);
                    const isSaved = await question.save();
                    if (isSaved) {
                        return question;
                    }
                }
            }

        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };

    deleteQuestionRepo = async (questionId) => {
        try {
            const isdeleted = await QuestionModel.findByIdAndDelete(questionId);
            if (isdeleted) {
                return isdeleted; // Return the saved document
            } else {
                throw new applicationError("Question does not exist", 400); // Throw custom application error
            }
        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };
    
    viewQuestionRepo = async (questionId) => {
        try {
            const question = await QuestionModel.findById(questionId).populate('options');
            if (question) {
                return question; // Return the found document
            } else {
                throw new Error('Question not found'); // Throw an error if document is not found
            }
        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };
    
    
}