#Makefile

install:
	npm install
start:
	npm run babel-node -- 'src/bin/games/brain-games.js'
lint:
	npm run eslint -- 'src/bin/**'	

