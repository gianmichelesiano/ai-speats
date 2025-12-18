#!/bin/bash
# Script per avviare il backend Speats AI

cd /Users/gianmichele/Development/Personal/ai-speats/backend

# Attiva il virtual environment
source .venv/bin/activate

# Carica le variabili d'ambiente
set -a
source .env
set +a

# Esegui le migrazioni del database
alembic upgrade head

# Carica i dati iniziali (se necessario)
python app/initial_data.py

# Avvia FastAPI in modalità development
echo "Avvio Speats AI Backend su http://localhost:8000"
fastapi dev app/main.py
