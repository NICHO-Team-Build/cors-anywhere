module.exports = {
  apps: [
    {
      cwd: "./",
      name: "nichonft-proxy-ai",
      script: "server.js",
      watch: false,
      instances: 1,
      error_file: "/data/logs/nichonft-proxy-ai/error.log",
      out_file: "/data/logs/nichonft-proxy-ai/server.log",
      pid_file: "/data/logs/nichonft-proxy-ai/server.pid",
    },
  ],
}