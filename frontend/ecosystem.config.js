module.exports = {
  apps: [
    {
      name: "rifas-frontend",
      cwd: "/home/rifas/apps/frontend",
      script: "node_modules/.bin/next",
      args: "start -p 3000",
      instances: "1",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
