import qr from 'qrcode-terminal'
import chalk from 'chalk'

async function handle (err, results) {
    if(err) {
        console.log('erro on application')
        return
    }

    const isSmall = results.type == 2
    qr.generate(results.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QRCode gerado com sucesso\n"))
        console.log(qrcode)
    })
}

export default handle