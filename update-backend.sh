#!/bin/bash
# Script per aggiornare il backend in produzione
cd /opt/ai-speats
git pull
docker compose --env-file .env.production up -d --build backend
echo "Backend aggiornato!"
docker compose --env-file .env.production logs backend --tail=20
