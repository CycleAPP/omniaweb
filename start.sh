#!/bin/bash
set -e
# Kill process on port 3000 if it exists
fuser -k 3000/tcp || true
npm install
npm run build
npm start
