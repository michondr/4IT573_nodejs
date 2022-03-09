import fs from 'fs/promises'
import util from 'util'


try{
    const data = await fs.readFile('co.mjs')

    console.log(data.toString())
} catch (err) {
    console.error(err.message)
}
