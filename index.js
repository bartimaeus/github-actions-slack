#!/usr/bin/env node

const axios = require("axios");

/**
 * Send notification to Slack based on GitHub commit
 *
 * Usage:
 *
 *     ./index.js build success
 *
 * github-actions-slack takes two arguments
 *
 *   * action(string) - build, test, or deploy
 *   * status(string) - success, failure, or neutral
 */
try {
  const buildCommitMessage = require("./src/commit-message");

  const event = require(process.env.GITHUB_EVENT_PATH);
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  // Parse command line args
  if (!process.argv && process.argv.length < 2) {
    throw new Error("Missing required arguments `action` and `status`!");
  }
  const action = process.argv[0];
  const status = process.argv[1];

  // Build the message
  const message = buildCommitMessage({ action, event, status });

  // Send message to Slack
  axios.post(slackWebhookUrl, message);
} catch (err) {
  console.log(`[github-actions-slack] ERROR: ${err}`); // eslint-disable-line
}
