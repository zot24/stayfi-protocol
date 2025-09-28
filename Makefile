# Simple Makefile to run the stayfi web app locally

SHELL := /bin/sh
WEB_DIR := apps/web

.PHONY: help install dev build start lint docker-build docker-up docker-down docker-dev docker-rebuild clean deck-install deck-pdf deck-html deck-pptx

help:
	@echo "Usage: make <target>"
	@echo "Targets:"
	@echo "  install       Install npm deps in $(WEB_DIR)"
	@echo "  dev           Run Next.js dev server (http://localhost:3000)"
	@echo "  build         Build the app (standalone output)"
	@echo "  start         Start the built app"
	@echo "  lint          Run ESLint"
	@echo "  docker-build  Build Docker image with docker-compose"
	@echo "  docker-up     Run container (builds if needed)"
	@echo "  docker-dev    Run container in dev mode with live reload (mounts web)"
	@echo "  docker-rebuild Rebuild container without cache and restart"
	@echo "  docker-down   Stop containers and remove network"
	@echo "  clean         Remove node_modules and build artifacts"
	@echo "  deck-install  Install Marp CLI globally"
	@echo "  deck-pdf      Compile DECK.md to PDF via Marp"
	@echo "  deck-html     Compile DECK.md to HTML via Marp"
	@echo "  deck-pptx     Compile DECK.md to PowerPoint via Marp"

install:
	cd $(WEB_DIR) && npm install

dev:
	cd $(WEB_DIR) && npm run dev

build:
	cd $(WEB_DIR) && npm run build

start:
	cd $(WEB_DIR) && npm run start

lint:
	cd $(WEB_DIR) && npm run lint || true

docker-build:
	docker compose build --no-cache

docker-up:
	docker compose up --build

docker-dev:
	cd $(WEB_DIR) && \
	echo "Launching dev container with bind mounts..." && \
	docker compose -f docker-compose.yml up --build

docker-rebuild:
	docker compose build --no-cache && docker compose up -d --force-recreate

docker-down:
	docker compose down -v

clean:
	rm -rf $(WEB_DIR)/node_modules $(WEB_DIR)/.next

# --- Deck (Marp) ---
# Requires: npm install -g @marp-team/marp-cli
DECK?=DECK.md

deck-install:
	npm install -g @marp-team/marp-cli

deck-pdf:
	marp $(DECK) --pdf --allow-local-files --output deck.pdf

deck-html:
	marp $(DECK) --html --allow-local-files --output deck.html

deck-pptx:
	marp $(DECK) --pptx --allow-local-files --output deck.pptx

