module.exports = {
  apps: [
    {
      cwd: "./",
      name: "cors-anywhere",
      script: "server.js",
      watch: false,
      instances: 1,
      error_file: "/data/logs/cors-anywhere/error.log",
      out_file: "/data/logs/cors-anywhere/server.log",
      pid_file: "/data/logs/cors-anywhere/server.pid",
    },
  ],
}