import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    bio: {type: String},
    image: {type: String},
});

const artistas = mongoose.model('artistas', artistaSchema);

export default artistas;
