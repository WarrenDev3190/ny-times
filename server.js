var express = require('express'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	logger = require('morgan'),
	path = require('path'),
	index = require('./app/routes/index');


	var app = express();

	//Application Middleware
	app.use(cookieParser());
	app.use(session({
		secret: 's3kr3t',
		resave: false,
		saveUninitialized: false,
		cookie: {maxAge: 600000}
	}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(logger('dev'));
	app.use(express.static(path.join(__dirname, 'public')));

	//Set up Webpack-Dev-Middleware
	if(app.get('env')==='development'){
		var webpack = require('webpack'),
			WebpackMiddleware = require('webpack-dev-middleware'),
			config = require('./webpack.config');
		app.use(WebpackMiddleware(webpack(config),{
			publicPath: config.output.publicPath,
			headers: {'X-Custom-Header':'yes'},
			stats: [
				'colors',
				'progress'
			]
		}));
	}

	//Application Settings
	app.set('views',path.join(__dirname,'app/views'));
	app.set('view engine','ejs');
	app.set('port',require('./app/constants/config').port);

	//Application Routes
	app.use('/', index);

	app.listen(app.get('port'), function serve (err) {
		if (err) console.log(err);
		console.log('App running on port:' + app.get('port') + ' 👋😄');
	});