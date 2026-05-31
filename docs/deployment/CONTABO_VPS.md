# Contabo VPS Deployment Notes

## Target

Host the `ЗОО БАКАЛИЯ` one page website on a Contabo VPS and attach a custom domain.

These notes assume the first production version is a static website served by Nginx.

## Do Not Commit

- SSH private keys
- VPS passwords
- API tokens
- `.env` files
- Certbot account data
- server-specific secrets

## Suggested Server Shape

- Ubuntu LTS VPS
- Nginx
- Certbot / Let's Encrypt
- static files under `/var/www/zoo-bakalia`
- domain A record pointing to the VPS public IP

## Initial Server Setup Outline

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## Nginx Site Outline

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/zoo-bakalia;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Replace `example.com` with the real domain.

## HTTPS

After DNS points to the VPS:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

## Deploy Outline

1. Build the site locally if a build step exists.
2. Upload the static output to the VPS.
3. Reload Nginx.
4. Verify the domain over HTTPS.
5. Check mobile and desktop rendering.

Example upload shape:

```bash
rsync -avz --delete ./dist/ user@example.com:/var/www/zoo-bakalia/
ssh user@example.com "sudo nginx -t && sudo systemctl reload nginx"
```

Do not run these commands until the real domain, SSH user, server path, and build output are confirmed.
