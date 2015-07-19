# platform
OS=$(shell uname -s)

# port
PORT=8000

# source files
JSX=./browser/components/app.jsx
SASS=./browser/stylesheets/main.sass

# destination files
JS=./browser/public/app.js
CSS=./browser/public/main.css

# binaries
BROWSERIFY=./node_modules/browserify/bin/cmd.js
NODESASS=./node_modules/node-sass/bin/node-sass
POSTCSS=./node_modules/postcss-cli/bin/postcss

# add colorful output
define shout
	@tput setaf 3
	@echo $1
	@tput sgr0
endef

# install
install:

	$(call shout, 'creating public directory')
	@mkdir -p ./browser/public

ifeq ($(OS), Darwin)
	$(call shout, 'installing watchman')
	@brew update
	@brew install watchman
else
	$(call shout, 'warning: some recipes require watchman')
endif

# build js
build-js:
	$(call shout, 'transforming JavaScript')
	@$(BROWSERIFY) -t babelify $(JSX) > $(JS)

#build css
build-css:
	$(call shout, 'transforming style sheets')
	@$(NODESASS) $(SASS) > $(CSS)
	$(call shout, 'transforming vender prefixes')
	@$(POSTCSS) --use autoprefixer -o $(CSS) $(CSS)

# watchman
watch:
	@watchman watch-project $(shell pwd)
	@watchman -- trigger $(shell pwd) jsx '*.jsx' -- make build-js
	@watchman -- trigger $(shell pwd) sass '*.sass' -- make build-css

# server
server:

	$(call shout, 'starting server on port:' $(PORT))
ifeq ($(OS), Darwin)
	@python -m SimpleHTTPServer $(PORT) &> /dev/null &
	@sleep 2s
	$(call shout, 'opening browser')
	@open 'http://localhost:'$(PORT)'/browser'
else
	@python2 -m SimpleHTTPServer $(PORT) &> /dev/null &
endif

.PHONY: server
