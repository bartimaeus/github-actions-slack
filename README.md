# github-actions-slack

This is a simple function that builds a formatted message using a GitHub Actions event similar to how Bitbucket Pipelines notifications work.

Initially, I was using a bash script, but adding the Slack markdown in the pretext caused issues with the Slack API. So, I'm using node until I can troubleshoot the bash script more.

# Install

    $ npm install github-actions-slack

# Usage

Your GitHub Action needs to include the `SLACK_WEBHOOK_URL` environment variable in `main.workflow`:

```bash
action "Deploy" {
  uses = "./.github/actions/deploy"
  secrets = [ "SLACK_WEBHOOK_URL" ]
}
```

Next, include **github-actions-slack** in your custom GitHub Action `entrypoint.sh`:

```bash
#!/bin/bash

set -e

# Install nodejs
apt update && apt install -y nodejs

# Install github-actions-slack
npm install -g github-actions-slack

deploy() {
  # deploy scripts
  # ...
}

error() {
  github-actions-slack deploy failure
}

deploy || error
```
