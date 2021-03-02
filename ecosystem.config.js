/**
 * 更新 env
 * pm2 restart ecosystem.config.js --update-env
 * pm2 restart <pid> --update-env
 */
module.exports = {
  apps: [
    {
      name: 'phelomi',
      script: './server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker'],
    // },
  ],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
};
