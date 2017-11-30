install: bin/selenium-server-standalone.jar bin/chromedriver bin/geckodriver

bin/selenium-server-standalone.jar:
	@ mkdir -p bin
	@ wget http://selenium-release.storage.googleapis.com/3.8/selenium-server-standalone-3.8.0.jar -O $@
	@ echo "[+] Selenium"

bin/chromedriver:
	@ wget -qO- https://chromedriver.storage.googleapis.com/2.33/chromedriver_mac64.zip | bsdtar -xvf-
	@ mv chromedriver $@
	@ echo "[+] Chromedriver"

bin/geckodriver:
	@ wget -qO- https://github.com/mozilla/geckodriver/releases/download/v0.19.1/geckodriver-v0.19.1-macos.tar.gz | bsdtar -xvf-
	@ mv geckodriver $@
	@ echo "[+] Geckodriver"
