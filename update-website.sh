#!/bin/bash
# Script per aggiornare il website in produzione
cd /opt/ai-speats
git pull
docker compose up -d --build website
echo "Website aggiornato!"
docker compose ps website
