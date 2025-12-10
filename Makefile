.PHONY: audit
audit:
	npm audit

.PHONY: build
build:
	rm -rf dist
	npm run build
	npm run postprocess

.PHONY: format
format:
	npm run format

.PHONY: framework
framework: build
	node ./dist/framework/server.js

.PHONY: init
init:
	npm install

.PHONY: lint
lint:
	npm run lint

.PHONY: vanilla
vanilla: build
	node ./dist/vanilla/server.js
