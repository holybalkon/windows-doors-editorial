#!/bin/bash
set -e

SITE_DIR="/var/www/bestwindowcompaniesincanada.business"
NGINX_CONF="/etc/nginx/sites-available/bestwindowcompaniesincanada.business.conf"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Deploying bestwindowcompaniesincanada.business..."

# Copy site files
sudo rm -rf "$SITE_DIR"
sudo mkdir -p "$SITE_DIR"
sudo cp -r "$REPO_DIR"/*.html "$SITE_DIR/"
sudo cp -r "$REPO_DIR"/*.js "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/*.json "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/*.jpg "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/*.svg "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/*.txt "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/*.xml "$SITE_DIR/" 2>/dev/null || true
sudo cp -r "$REPO_DIR"/css "$SITE_DIR/"
sudo cp -r "$REPO_DIR"/js "$SITE_DIR/"

# Install nginx config
sudo cp "$REPO_DIR/bestwindowcompaniesincanada.business.conf" "$NGINX_CONF"
sudo ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "Done! bestwindowcompaniesincanada.business is live."
