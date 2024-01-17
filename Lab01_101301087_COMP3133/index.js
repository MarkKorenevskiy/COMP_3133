'use strict'

import fs from 'fs';
import csvParser from "csv-parser";

function main() {
    ['canada.txt', 'usa.txt'].forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    });

    fs.createReadStream('input_countries.csv')
        .pipe(csvParser())
        .on('data', (row) => {
            if (row.country === 'Canada') {
                fs.appendFileSync('canada.txt', `${row.country},${row.year},${row.population}\n`);
            } else if (row.country === 'United States') {
                fs.appendFileSync('usa.txt', `${row.country},${row.year},${row.population}\n`);
            }
        });
}

main();
