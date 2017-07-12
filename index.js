// var cmd=require('node-cmd');
 
//     cmd.get(
//         'git status',
//         function(err, data, stderr){
//         	console.log(err);
//             console.log('the current working dir is : ',data)
//         }
//     );

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})