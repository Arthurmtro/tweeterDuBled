module.exports = {
  apps: [{
    name: 'twitterDuBled',
    script: './bin/www',
    exp_backoff_restart_delay: 100,
    instances: 'max',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'dev'
    },
    env_production: {
      NODE_ENV: 'prod'
    }
  }],
};