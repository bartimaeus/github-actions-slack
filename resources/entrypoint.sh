#!/bin/bash

set -e

errorNotification() {
  which jq || {
    echo "~> Installing missing package jq"
    apt update && apt install -y jq
  }
  /notify.sh ":boom: *Failed* to deploy" "#ff5b5b"
}

trap "errorNotification" ERR SIGINT SIGTERM

bogus_deployment_function

echo "This will never happen!"
