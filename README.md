# github-actions-slack

This is a simple bash script that sends a formatted message using a GitHub Action event similar to how Bitbucket Pipelines notifications work.

# Install

    $ bash -c "$(curl -fsSL http://bartimae.us/github-actions-slack/setup.sh)"

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

## BEGIN github-actions-slack ##
errorNotification() {
  # Install github-actions-slack
  bash -c "$(curl -fsSL http://bartimae.us/github-actions-slack/setup.sh)"

  # Send Slack notification
  github-actions-slack ":boom: *Failed* to deploy" "#ff5b5b"
}

# Run errorNotification on any ERR, SIGINT, or SIGTERM
trap "errorNotification" ERR SIGINT SIGTERM
## END github-actions-slack ##

# entrypoint deployment custom script...
```

See the notification in Slack

![Slack Notification](https://s3.amazonaws.com/github-actions-slack/github-actions-slack-notification.png?v3)

# Development

Test the script locally using `docker` and `docker-compose`. First, make sure that you have a valid `SLACK_WEBHOOK_URL` in `docker-compose.yml`.

### Build the image

    docker-compose build

### Run the image

    docker-compose up

Your notification should now appear in your Slack channel!
