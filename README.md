# github-actions-slack

This is a simple bash script that sends a formatted message using a GitHub Action event similar to how Bitbucket Pipelines notifications work.

# Install

    $ curl -o /usr/local/bin/github-actions-slack https://raw.githubusercontent.com/bartimaeus/github-actions-slack/master/notify.sh

    $ chmod +x /usr/local/bin/github-actions-slack

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
  echo "~> Installing github-actions-slack"
  curl -o /usr/local/bin/github-actions-slack https://raw.githubusercontent.com/bartimaeus/github-actions-slack/master/notify.sh
  chmod +x /usr/local/bin/github-actions-slack

  # Send Slack notification
  github-actions-slack ":boom: *Failed* to deploy" "#ff5b5b"
}

# Run errorNotification on any ERR, SIGINT, or SIGTERM
trap "errorNotification" ERR SIGINT SIGTERM
## END github-actions-slack ##

# entrypoint deployment custom script...
```

See the notification in Slack

![Slack Notification](https://s3.amazonaws.com/github-actions-slack/github-actions-slack-notification.png?v2)
