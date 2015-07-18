uname := $(shell uname -s)

install:
	mkdir -p browser/public
	npm run bundle-js & npm run bundle-css

server:
	@echo "checking python..."
ifeq ($(word 2, $(subst ., , $(shell python --version))), 3)
	@echo "python 3 found!"
	@cd browser && python -m http.server &> /dev/null &
else
	@echo "python 2 found!!"
	@cd browser && python -m SimpleHTTPServer &> /dev/null
endif

	@echo 'opening browser...'
ifeq (${uname}, Darwin)
	@open 'http://localhost:8000'
endif

ifeq (${uname}, Linux)
	@surf 'http://localhost:8000' &> /dev/null &
endif

.PHONY: install server
