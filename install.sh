echo "Necessari i diritti di superuser per"
echo "installare npm, gestione moduli per Node.js"

sudo apt install npm
npm init -y
npm install rxjs webpack webpack-dev-server typescript ts-loader
npm install webpack-cli --save-dev

echo "Modificare il file in src/index.ts con il codice da provare"
echo "Lanciare il server con il comando 'npm run start'"
echo "Vedere il risultato sul browser all'URL 'http://localhost:8080'"
