import chalk from "chalk";
import handle from "./handle.js"

async function createPassword() {
    const password = await handle()
    console.log(chalk.green("Senha gerado com sucesso -> "), chalk.yellow.underline(password));
}

export default createPassword