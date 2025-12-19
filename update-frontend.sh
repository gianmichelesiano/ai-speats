#!/bin/bash
# Script per aggiornare il frontend in produzione
cd /opt/ai-speats
git pull

# Carica le variabili d'ambiente (produzione)
if [ -f .env.production ]; then
  source .env.production
else
  source .env 2>/dev/null || true
fi

# Se DOMAIN è localhost, usa http://localhost:8002 invece di https://api.localhost
if [ "$DOMAIN" = "localhost" ]; then
  export VITE_API_URL="http://localhost:8002"
fi

# Ferma temporaneamente il backend per liberare memoria durante il build
docker compose --env-file .env.production stop backend
# Build del frontend (--no-cache per forzare rebuild completo)
docker compose --env-file .env.production build --no-cache frontend
# Riavvia il frontend
docker compose --env-file .env.production up -d --no-deps frontend
# Riavvia il backend
docker compose --env-file .env.production start backend
echo "Frontend aggiornato!"
docker compose --env-file .env.production ps frontend
