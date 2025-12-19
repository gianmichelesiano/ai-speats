#!/bin/bash
# Script per aggiornare il website in produzione
cd /opt/ai-speats
git pull
docker compose --env-file .env.production up -d --build website
echo "Website aggiornato!"
docker compose --env-file .env.production ps website
