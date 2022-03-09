import fs from 'fs'
import { argv } from 'process';
import { dirname } from 'path';

const source = argv[2]
const destination = argv[3]

if (source === undefined) {
    console.log('no input file given')
    process.exit(0)
}

if (destination === undefined) {
    console.log('no output file given')
    process.exit(0)
}

fs.readFile(source, (err, sourceContent) => {

    let content = undefined;

    if (!err && sourceContent !== undefined) {
        content = sourceContent.toString()
    }

    console.log('src read content', content);

    if (content !== undefined && destination !== undefined) {
        fs.mkdir(dirname(destination), {recursive: true}, function (err) {
            if (err) return console.error(err);

            fs.writeFile(destination, content, (err) => {
                if (err) return console.error(err);

                console.log('des written content', content);
            });
        });
    }

})


