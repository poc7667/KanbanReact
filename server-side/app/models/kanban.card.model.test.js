var mongoose = require('mongoose');
var Card = require('./kanban.card.model');
var faker = require('faker');

mongoose.connect('mongodb://localhost/kanbanapi');

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var cards = [];

for(var i = 0; i < 10 ; i++) {
    var status = ['in-progress', 'todo', 'done'].random()
    console.log(status)
    var card = new Card({
        title: faker.name.findName(),
        description: faker.hacker.phrase(),
        status: status
    });
  for(var j=1; j< 5;j++){
        card.addTask(faker.name.findName());
  }
  cards.push(card);
}

cards.forEach(function(card){
    card.save(function(err) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('succeed');
        }
    });
});

// card.addTask('chapter 1');



// Card.findById('56f5d1ebfb2713d615ec24e9', function(err, card) {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		if (card != null) {
// 			//card.updateTask('56f5d1ebfb2713d615ec24ea', 'chapter 1', true);

// 			card.removeTask('56f5d1ebfb2713d615ec24ea');
			
// 			card.save(function(err) {
// 				if (err) {
// 					console.log(err.message)
// 				} else {
// 					console.log('succeed');
// 				}
// 			});
// 		} else {
// 			console.log('invalid card');
// 		}
// 	}
// });