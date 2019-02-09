#!/bin/bash

set -e

# Install nodejs
apt update && apt-get install -y curl software-properties-common \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt update && apt install -y nodejs

# Install github-actions-slack
npm install -g github-actions-slack

deploy() {
  # bogus deployment scripts
  exit 1
}

error() {
  github-actions-slack deploy failure
}

deploy || error
