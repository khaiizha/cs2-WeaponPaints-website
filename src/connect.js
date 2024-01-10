// connect.js
const express = require('express');
const router = express.Router();

router.get('/connect', (req, res) => {
  const ip = req.query.ip;

  if (ip) {
    const [domainWithoutPort, port] = (ip || '').split(':') || [null, null];
    const resolvedIp = domainWithoutPort;

    if (resolvedIp !== domainWithoutPort) {
      const steamConnectLink = `steam://connect/${resolvedIp}:${port || ''}`;
      res.redirect(302, steamConnectLink);
    } else {
      const steamConnectLink = `steam://connect/${ip}`;
      res.redirect(302, steamConnectLink);
    }
  } else {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;
