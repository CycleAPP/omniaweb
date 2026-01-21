#!/bin/bash
set -e
# Kill process on port 6432 if it exists
fuser -k 6432/tcp || true
npm install
npm run build
npm start -- -p 6432
