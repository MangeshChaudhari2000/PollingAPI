import { OptionModel } from '../Schemas/options.schemas.js';
import applicationError from '../Middlewares/application.error.js';

export default class OptionRepository {

    deleteOptionRepo = async (optionId) => {
        try {
            const isdeleted = await OptionModel.findByIdAndDelete(optionId);
            if (isdeleted) {
                return isdeleted; // Return the saved document
            } else {
                throw new applicationError("Option does not exist", 400); // Throw custom application error
            }
        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };

    addVoteRepo = async (optionId) => {
        try {
            const ifExist = await OptionModel.findById(optionId);
            if (ifExist) {
                ifExist.votes += 1;
                const isSaved= await ifExist.save();
                if (isSaved) {
                    return isSaved; // Return the saved document
                }
            } else {
                throw new applicationError("Option does not exist", 400); // Throw custom application error
            }
        } catch (error) {
            throw new applicationError(error.message, 400); // Throw custom application error
        }
    };
}