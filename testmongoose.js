const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema = {
    name: String,
    age: Number,
    health: String
}
const Cat = mongoose.model('cat', schema);

// const kitty = new Cat({ name: 'testZildjian' });
// kitty.save().then(() => console.log('meow!'));
// const kitty1 = new Cat({ name: 'zhang', age: 1, health: 'good' });
// kitty1.save().then(() => console.log('meow~'));

Cat.find({name: "zhang"}, (err,data)=>{console.log(data[0]._doc.name)})