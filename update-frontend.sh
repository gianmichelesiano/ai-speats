#!/bin/bash
# Script per aggiornare il frontend in produzione
cd /opt/ai-speats
git pull
# Ferma temporaneamente il backend per liberare memoria durante il build
docker compose stop backend
# Build del frontend
docker compose build frontend
# Riavvia il frontend
docker compose up -d --no-deps frontend
# Riavvia il backend
docker compose start backend
echo "Frontend aggiornato!"
docker compose ps frontend
