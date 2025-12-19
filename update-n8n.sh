#!/bin/bash
# Script per aggiornare n8n in produzione
cd /opt/ai-speats
git pull
docker compose --env-file .env.production up -d n8n
echo "n8n aggiornato!"
docker compose --env-file .env.production ps n8n
