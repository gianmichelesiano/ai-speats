#!/bin/bash
# Script per aggiornare il frontend in produzione
cd /opt/ai-speats
git pull
docker compose up -d --build frontend
echo "Frontend aggiornato!"
docker compose ps frontend
