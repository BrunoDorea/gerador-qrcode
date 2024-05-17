import chalk from "chalk"

const promptSchemaQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QRCode.'),
    },
    {
        name: 'type',
        description: chalk.yellow(`
        1 - Normal
        2 - Terminal
        Escolha entre o tipe de QRCode: `),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true
    }
]

export default promptSchemaQRCode