var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var exec = require('child_process').exec;

var port = 3003;

console.reset = function () {
	return process.stdout.write('\033c');
}


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text());




app.post('/testImage', function (req, res) {

	
	var fs = require('fs');
	fs.writeFile("./mnist/Test-28x28_cntk_text.txt" , req.body, function(err) {
		if(err) { 
			return console.log(err);
		}else{
			
			fs.readdir("./cntk/", (err, files) => {
				
				var results = {}
				
				var count = 0

				var testNework = function(file){
					exec('cntk configFile=./cntk/' + file + ' command=testNetwork', function(error, stdout, stderr){
						if (!error){
							var key = file.split('.')[0];
							var lines = stderr.split("\n");
							for(var j = 0; j < lines.length; j++){
								if (lines[j].startsWith("Final Results:")){
									results[key] = lines[j];
								}
							}
							count++;
							if (count == files.length){											
								res.json(results)
							}							
						}else{
							res.send(stderr)
						}
					});
				}

				
				for(var i = 0; i < files.length; i++){
					testNework(files[i]);				
				}


			})
					
		}
	}); 
	
	
})

app.listen(port);
console.log("Listening on port " + port);
