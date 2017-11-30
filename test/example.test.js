module.exports = {
  "When a radio value and name changes at once": function(browser) {
    browser.url(browser.launch_url + "/input-change-events")
    browser.waitForElementVisible(".container", 1000)

    browser.click("#toggle_radio")
    browser.expect.element("#first_radio").to.be.selected
    browser.expect.element("#second_radio").not.to.be.selected

    browser.click("#toggle_radio")
    browser.expect.element("#first_radio").not.to.be.selected
    browser.expect.element("#second_radio").to.be.selected

    browser.click("#toggle_radio")
    browser.expect.element("#first_radio").to.be.selected
    browser.expect.element("#second_radio").not.to.be.selected

    browser.end()
  }
}
