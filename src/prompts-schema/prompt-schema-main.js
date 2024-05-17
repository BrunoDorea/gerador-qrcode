import chalk from "chalk"

const promptSchemaMain = [
    {
        name: 'select',
        description: chalk.green.bold(`
        1 - QRCode Generator
        2 - Password Generator
        Escolha sua opção: `
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true
    }
]

export default promptSchemaMain