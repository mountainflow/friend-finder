let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });


    app.post('/api/friends', function (req, res) {

        // Convert scores to integers before pushing to friends
        let newUser = req.body;
        let numConverted = newUser.scores.map(Number);
        newUser.scores = numConverted;

        let differences = {
            scores: []
        };

        let finalArray = [];

        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].scores.length; j++) {
                differences.scores.push(Math.abs(newUser.scores[j] - friends[i].scores[j]));
            }
            let diff = differences.scores.reduce(function (total, num) {
                return Number(total) + Number(num);
            }, 0);

            // console.log('\nDifferences 01 :\n' + JSON.stringify(differences) + '\n');

            differences.scores.length = 0;

            finalArray.push(diff);
        }

        //Get index of smallest number in finalArray
        let index = 0;
        let value = finalArray[0];
        for (let i = 1; i < finalArray.length; i++) {
            if (finalArray[i] < value) {
                value = finalArray[i];
                index = i;
            }
        }

        console.log('\nIndex: ' + index);

        console.log('\nBest Match : ' + JSON.stringify(friends[index]));

        let bestMatch = friends[index];



        // console.log('\nDifferences :\n' + JSON.stringify(differences) + '\n');

        console.log('finalArray: ' + JSON.stringify(finalArray));

        // Push the newUser to friends with all scores changed to integers
        friends.push(newUser);

        console.log(friends);




        res.json(bestMatch);


    });
};