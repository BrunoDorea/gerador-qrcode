import dotenv from 'dotenv'
dotenv.config();

async function permittedCharacters() {
    let permitted = []
    
    if(process.env.UPPERCASE_LETTERS == "true") permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(process.env.LOWERCASE_LETTERS == "true") permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    if(process.env.NUMBERS == "true") permitted.push(... "1234567890")
    if(process.env.SPECIAL_CHARACTERS == "true") permitted.push(... "!@#$%-_")

    return permitted
}

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