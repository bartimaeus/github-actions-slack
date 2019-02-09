#!/bin/bash

set -e

errorNotification() {
  # Install github-actions-slack remotely
  # bash -c "$(curl -fsSL http://bartimae.us/github-actions-slack/setup.sh)"
  # github-actions-slack ":boom: *Failed* to deploy" "#ff5b5b"

  # Use local github-actions-slack
  /notify.sh ":boom: *Failed* to deploy" "#ff5b5b"
}

trap "errorNotification" ERR SIGINT SIGTERM

bogus_deployment_function

echo "This will never happen!"
