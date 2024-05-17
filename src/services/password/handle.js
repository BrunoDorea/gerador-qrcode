import dotenv from 'dotenv'
dotenv.config();

import permittedCharacters from './utils/permitted-characters.js';

async function handle() {
    let characters = []
    let password = ""

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10)
    characters = await permittedCharacters()

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle