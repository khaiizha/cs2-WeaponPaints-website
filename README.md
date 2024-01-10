
# Weapon Paints website

Website used for the **[cs2-WeaponPaints](https://github.com/Nereziel/cs2-WeaponPaints/)** plugin



## Installation

- **[Download latest release](https://github.com/L1teD/cs2-WeaponPaints-website/releases/latest/download/cs2-WeaponPaints-website.zip)**
- In **`src/`** copy **`config.example.json`** to **`config.json`** and fill it:
```json
{
    "name": "Title of your website",
    "lang": "en", 
    "DB": {
        "DB_HOST": "host",
        "DB_USER": "username",
        "DB_PASS": "password",
        "DB_DB": "table",
        "DB_PORT": "3306"
    },
    "HOST": "example.com or localhost/127.0.0.1",
    "SUBDIR": "/skinsExample/ or just /",
    "PORT": 27275,
    "STEAMAPIKEY": "Your Steam Web API Key",
    "connect": {
        "show": true,
        "name": "Connect to server",
        "server": [ 
            {
                "name": "Server1",
                "url": "steam://connect/[IP:PORT]?appid=730/[Server password if needed]"
            },
            {
                "name": "Server2",
                "url": "steam://connect/[IP:PORT]?appid=730"
            }
        ]
    }
}
```
- Supported languages **`ru, en, pt-BR`**

- And then

If Windows:
```bash
  npm i
  npm run start
```

If Linux:
```bash
  npm i
  npm run startLinux
```

## Support me


[![Steam donations](https://github.com/Nereziel/cs2-WeaponPaints/assets/32937653/a0d53822-4ca7-4caf-83b4-e1a9b5f8c94e)](https://steamcommunity.com/tradeoffer/new/?partner=1153616149&token=V-OXvmuV)
