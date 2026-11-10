#!/bin/bash
set -e

SITE_DIR="/var/www/bestwindowcompaniesincanada.business"
NGINX_CONF="/etc/nginx/sites-available/bestwindowcompaniesincanada.business.conf"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Deploying bestwindowcompaniesincanada.business..."

# Copy site files
sudo mkdir -p "$SITE_DIR"
sudo rsync -av --delete \
    --exclude='.git' \
    --exclude='deploy.sh' \
    --exclude='*.conf' \
    --exclude='check.py' \
    --exclude='check.js' \
    --exclude='report.md' \
    "$REPO_DIR/" "$SITE_DIR/"

# Install nginx config
sudo cp "$REPO_DIR/bestwindowcompaniesincanada.business.conf" "$NGINX_CONF"
sudo ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "Done! bestwindowcompaniesincanada.business is live."
