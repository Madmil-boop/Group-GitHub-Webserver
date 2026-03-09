const fs = require('fs');

function getVisits(callback) {
    fs.readFile('visits.txt', 'utf8', (err, data) => {
        if (err) {
            callback(0);
            return;
        }
        callback(parseInt(data));
    });
}

function increaseVisits() {
    getVisits((count) => {
        let newCount = count + 1;
        fs.writeFile('visits.txt', newCount.toString(), (err) => {
            if (err) console.error(err);
        });
    });
}

module.exports = { getVisits, increaseVisits };