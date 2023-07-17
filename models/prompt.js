const { Schema, model, models, default: mongoose } = require("mongoose");

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required!"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    }
});

const User = models.Prompt || model("Prompt", PromptSchema);

export default User;