# DOM Test Fixture Automation

An experiment to automate manual testing of the [ReactDOM test fixtures](https://github.com/facebook/react/tree/master/fixtures/dom).

## Setup

This setup has only been tested in High Sierra OSX.

```bash
yarn install
cp .env.example .env
```

### Local testing

Run `make install` to download selenium and web drivers to `./bin`. Then run:

```bash
yarn test:local
```

By default, this tests Chrome. Test additional browsers with:

```bash
yarn test:local -e firefox,chrome,safari
```

#### To test in Safari 11:

1. Open Safari
2. Check Developer > Allow Remote Automation
3. Close Safari
4. Run `safaridriver --enable` to enable the webdriver

### Remote testing

1. Create an account (a free trial is fine) on [Browserstack](http://browserstack.com).
2. Copy `.env.example` to `.env`.
3. Fill in your browserstack username and key within `.env`

```bash
yarn test:remote
```

By default, this tests Chrome. Test additional browsers with:

```bash
yarn test:local -e firefox,chrome,safari,ie,edge
```
