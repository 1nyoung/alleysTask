 var express = require('express')
 , http = require('http')
 , path = require('path');

 var bodyParser = require('body-parser');
 var cookieParser = require('cookie-parser');
 var expressSession = require('express-session');
 var fs = require('fs');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

var app = express();

app.set('port', process.env.PORT || 3000);

//app.use(express.static(path.join(__dirname, 'public')));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(expressSession({
  key: 'sess', // 세션키
  secret: 'secret', // 비밀키
  resave: true, //세션 아이디를 접속할때마다 새롭게 발급하지 않음
  saveUninitialized: true //세션 아이디를 실제 사용하기전에는 발급하지 않음   
//   cookie: {
//     maxAge: 1000 * 10 // 쿠키 유효기간 30초
// }
}));

//----------------4번 과제-1 --------------------
// app.get('/:fName', function(req, res, next){
// 	var fileName = req.params.fName;
// 	console.log(fileName);

// 	if (req.session.user) {
// 		fs.readFile('./public/'+fileName, 'utf8', function(err, data){
// 			if(err) {
// 				next();
// 			}else{
// 				res.send(data);
// 			}
// 		});
// 	}else {
// 		res.render('login.html');
// 	}
// });
//----------------------------------------------

//----------------4번 과제-2 --------------------
// app.get('/:fName', function(req, res, next){
// 	var fileName = req.params.fName;
// 	console.log(fileName);

// 	if (req.session.user) {
// 		var input = fs.createReadStream('./public/'+fileName);
// 		input.on('data', function(chunk){
// 			res.send(chunk.toString());
// 		});
// 		input.on('error', function(){
// 			next();
// 		});
// 	}else {
// 		res.render('login.html');
// 	}
// });
//----------------------------------------------

//----------------4번 과제-3 --------------------
app.get('/:fName', function(req, res, next){
	var fileName = req.params.fName;
	console.log(fileName);

	if (req.session.user) {
		var instream = fs.createReadStream('./public/'+fileName);
		instream.pipe(res);

		instream.on('error', function(){
			next();
		});
		
	}else {
		res.render('login.html');
	}
});
//----------------------------------------------

// app.get('/updatevisitors', function(req, res) {
     
//     var originCookie = s%3ApAgnI6AO2u_kMrOQJOiYZBGAQK5OsiKX.CQtAj%2BonVuFjxAlW%2BBwJfFX5Q55YsJOwPP5XA4Ia3jo;
     
//     res.cookie('sess', originCookie);
//     res.send('Visitors updated.');
     
// });

app.get('/', function(req, res){

	if(req.session.user){
		console.log('요기요기.');
        // var output = '
        // <h1> Hello, ${req.session.user.id} </h1>
        // <a href="/logout">로그아웃</a><br>
        // <a href="/test">테스트 페이지</a><br>
        // <h5> ${JSON.stringify(req.session)} <h5>
        // '
		res.send(output);

	}else{
        // var output ='
        // Hello home page <br>
        // <a href="/login">로그인 하러가기</a><br>
        // <a href="/test">테스트 페이지</a><br>
        // '
		res.send(output);

	}

});

app.get('/login', function(req, res) {
	console.log('login.html 호출됨.');
	
	res.render('login.html')
});


app.get('/test', function(req, res) {
	console.log('test 호출됨.');
	
	if (req.session.user) {
		res.render('test2.html');
	} else {
		res.render('login.html');
	}
});

app.post('/login', function(req, res) {
	console.log('login 호출됨.');

	var paramId = req.param('id');
	var paramPassword = req.param('password');
	
	if (req.session.user) {
		// 이미 로그인된 상태
		console.log('이미 로그인되어 테스트 페이지로 이동합니다.');
		
		res.render('test.html');
	} else {
		var auth = {
			id: 'admin',
			pw: 'admin_pw'
		}

		if(auth.id == paramId && auth.pw == paramPassword){
			console.log('로그인 성공');
			//세션 저장
			req.session.user = {
				id : paramId
				//authorized: true
			}
			res.redirect('/');
		}else{
			console.log('로그인 실패')
			res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
			res.write('<h1>로그인 실패</h1>');
			res.write('<div><p>id : ' + auth.id + '</p></div>');
			res.write('<div><p>password : ' + auth.pw + '</p></div>');
			res.write('<div><p>Param id : ' + paramId + '</p></div>');
			res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
			res.write("<br><br><a href='/login'>다시 로그인</a>");
			res.end();
		}

	}
});

app.get('/logout', function(req, res) {
	console.log('logout 호출됨.');
	
	if (req.session.user) {
		// 로그인된 상태
		console.log('로그아웃합니다.');
		
		req.session.destroy(function(err) {
			if (err) {throw err;}
			
			console.log('세션을 삭제하고 로그아웃되었습니다.');
			res.redirect('/');
		});
	} else {
		// 로그인 안된 상태
		console.log('아직 로그인되어있지 않습니다.');
		
		res.render('login.html');
	}
});	

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
	static: {
		'404': './public/404.html'
	}
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
