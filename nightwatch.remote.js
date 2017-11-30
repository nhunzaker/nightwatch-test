"use strict"

require("dotenv").config()

module.exports = {
  src_folders: ["test"],
  output_folder: "reports",
  selenium: {
    start_process: false,
    host: "hub-cloud.browserstack.com",
    port: 80,
    log_path: "logs"
  },
  test_settings: {
    default: {
      selenium_host: "hub-cloud.browserstack.com",
      selenium_port: 80,
      launch_url: process.env.LAUNCH_URL,
      desiredCapabilities: {
        "browserstack.user": process.env.BS_USER,
        "browserstack.key": process.env.BS_KEY,
        device: null,
        real_mobile: null
      }
    },
    chrome: {
      os: "OS X",
      os_version: "El Capitan",
      browser: "chrome",
      browser_version: "59.0"
    },
    firefox: {
      os: "OS X",
      os_version: "El Capitan",
      browser: "firefox",
      browser_version: "58.0 beta"
    },
    safari: {
      os: "OS X",
      os_version: "High Sierra",
      browser: "safari",
      browser_version: "11.0"
    },
    ie: {
      os: "Windows",
      os_version: "7",
      browser: "ie",
      browser_version: "11.0"
    },
    edge: {
      os: "Windows",
      os_version: "10",
      browser: "edge",
      browser_version: "16.0"
    }
  }
}
