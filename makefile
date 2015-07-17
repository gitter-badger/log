server:
	@echo "checking python..."
ifeq ($(word 2, $(subst ., , $(shell python --version))), 3)
	@echo "python 3 found!"
	@cd browser && python -m http.server
else
	@echo "python 2 found!!"
	@cd browser && python -m SimpleHTTPServer
endif

.PHONY: server
