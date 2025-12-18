#!/bin/bash
# Script per aggiornare il frontend in produzione
cd /opt/ai-speats
git pull
# Ferma temporaneamente il backend per liberare memoria durante il build
docker compose stop backend
# Build del frontend
docker compose build frontend
# Riavvia tutti i servizi
docker compose up -d
echo "Frontend aggiornato!"
docker compose ps frontend
