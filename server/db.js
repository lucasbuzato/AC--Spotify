import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://sergiorockemroll:skibidi@ac-spotify.0brrj.mongodb.net/?retryWrites=true&w=majority&appName=AC-Spotify`);
    return mongoose.connection;
}