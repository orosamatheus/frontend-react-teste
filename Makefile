dev:
	yarn && yarn dev

build:
	yarn && yarn build && docker build . -t t10-frontend

test:
	yarn && yarn test

