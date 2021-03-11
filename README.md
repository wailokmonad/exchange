This is a very simply dockerized Nodejs Webapp.

It consists of only ONE API endpoint: GET http://209.97.161.48/

It accepts one mandatory and one optional parameters.

1) base (mandatory) : The base currency
2) amount : The amount you want to exchange. If omitted, less than or equal to 0, or non-number, it defaults to 1

For example, if you want to check the exchange rate to other currencies for 3 usd, you can type the following:
http://209.97.161.48?base=usd&amount=3

You can run unit test with "npm test".

The public container image is wailokmonad/wailok-repos:exchange.

https://hub.docker.com/r/wailokmonad/wailok-repos/tags

In case of CI/CD, i would set up a gitlab-runner to trigger the building of image and push it to docker hub, and tell (via raw ssh or ansible) the hosting server to pull that image and run.


