import chalk from "chalk";
import http from "http";
import fs from 'fs/promises'
import mime from 'mime-types'

const port = 3000

const server = http.createServer(async (req, res) => {
    if (req.url === '/favicon.ico') return res.end()

    let localFilePath = 'index.html';

    if (req.url !== '/') {
        localFilePath = './public' + req.url
    }

    res.setHeader('Content-Type', mime.lookup(localFilePath));

    try {
        const content = await fs.readFile(localFilePath);

        res.statusCode = 200;
        res.write(content.toString())
    } catch (err) {
        res.statusCode = 404;
    } finally {
        res.end()
    }

})

server.listen(port, () => {
    console.log(chalk.yellow(`server listening on http://localhost:${port}`))
})
