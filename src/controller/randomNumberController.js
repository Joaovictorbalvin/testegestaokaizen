const { seed, random } = require('../services/randomNumberGenerator');

class MapController {
    getRandomResults(req, res) {
        seed(192837465);
        const resultMap = new Map();

        for (let i = 0; i < 9; i++) {
            resultMap.set(i, random());
        }

        const resultArray = [];

        for (let key of resultMap.keys()) {
            resultArray.push(resultMap.get(key));
        }

        res.json(resultArray);
        console.log(resultArray)
    }
}

module.exports = new MapController();
