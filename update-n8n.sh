#!/bin/bash
# Script per aggiornare n8n in produzione
cd /opt/ai-speats
git pull
docker compose up -d n8n
echo "n8n aggiornato!"
docker compose ps n8n
