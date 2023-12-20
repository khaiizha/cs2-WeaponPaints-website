
## Installation

- Download the release
- In **`src/`** create **`config.json`** file and fill it:
```json
{
    "name": "Title of your website",
    "lang": "en", 
    "DB": {
        "DB_HOST": "host",
        "DB_USER": "username",
        "DB_PASS": "password",
        "DB_DB": "table"
    },
    "STEAMAPIKEY": "Your Steam Web API Key",
    "connect": {
        "show": true,
        "url": "steam://connect/[IP:PORT]?appid=730/[Server password if needed]"
    }
}
```
- Supported languages **`ru, en`**
- In **`src/app.js`** got to the 40 line
- Change returnURL and realm

if localhost:
```js
    returnURL: 'http://localhost:' + PORT + '/api/auth/steam/return',
    realm: 'http://localhost:' + PORT + '/',
```

if domain:
```js
    returnURL: 'http://example.com/api/auth/steam/return',
    realm: 'http://example.com/',
```

- And then

```bash
  npm i
  npm run start
```
