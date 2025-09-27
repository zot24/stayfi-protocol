# Simple Makefile to run the stayfi web app locally

SHELL := /bin/sh
WEB_DIR := apps/web

.PHONY: help install dev build start lint docker-build docker-up docker-down clean

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
	@echo "  docker-down   Stop containers and remove network"
	@echo "  clean         Remove node_modules and build artifacts"

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

docker-down:
	docker compose down -v

clean:
	rm -rf $(WEB_DIR)/node_modules $(WEB_DIR)/.next

