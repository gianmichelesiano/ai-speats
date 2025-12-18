#!/bin/bash
# Script per aggiornare il backend in produzione
cd /opt/ai-speats
git pull
docker compose up -d --build backend
echo "Backend aggiornato!"
docker compose logs backend --tail=20
