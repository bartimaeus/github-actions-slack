#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

set -e
set -o pipefail

echo -e "\033[36m~> \033[34mInstalling github-actions-slack...\033[39m"
curl -o /usr/local/bin/github-actions-slack https://bartimae.us/github-actions-slack/notify.sh
chmod +x /usr/local/bin/github-actions-slack

echo ""
echo -e "\033[92mgithub-actions-slack is ready to go!"

} # this ensures the entire script is downloaded #
