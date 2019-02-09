#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

set -e
set -o pipefail

echo -e "\033[36m~> \033[34mInstalling dependencies...\033[39m"
which jq || {
  apt update && apt install -y jq
}

echo -e "\033[36m~> \033[34mInstalling github-actions-slack...\033[39m"
curl -o /usr/local/bin/github-actions-slack http://bartimae.us/github-actions-slack/setup.sh
chmod +x /usr/local/bin/github-actions-slack

echo ""
echo -e "\033[92mgithub-actions-slack is ready to go!"

} # this ensures the entire script is downloaded #
