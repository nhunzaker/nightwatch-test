"use strict"

require("dotenv").config()

module.exports = {
  src_folders: ["test"],
  output_folder: "reports",
  selenium: {
    start_process: true,
    server_path: "bin/selenium-server-standalone.jar",
    log_path: "logs",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": "bin/chromedriver",
      "webdriver.gecko.driver": "bin/geckodriver",
      "webdriver.safari.driver": "safaridriver"
    }
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: "localhost",
      launch_url: process.env.LAUNCH_URL,
      desiredCapabilities: {
        browserName: "firefox",
        marionette: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox"
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: "safari"
      }
    }
  }
}
