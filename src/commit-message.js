const axios = require("axios");

function getNotificationColor(status) {
  switch (status) {
    case "success":
      return "#36a64f";
    case "failure":
      return "#ff5b5b";
    default:
      return "#888888";
  }
}

function getNotificationPreText(action, status) {
  const success = status === "success";

  switch (action) {
    case "build":
      return success
        ? ":hammer_and_wrench: *Successfully* built"
        : ":fire: *Failed* to build";
    case "deploy":
      return success
        ? ":rocket: *Successfully* deployed"
        : ":boom: *Failed* to deploy";
    case "test":
      return success
        ? ":white_check_mark: tests *passed*"
        : ":no_entry: tests *failed*";
    default:
      return success ? ":white_check_mark: *Success*" : ":no_entry: *Failure*";
  }
}

function buildCommitMessage({ action, event, status }) {
  const { head_commit, repository, sender } = event;

  if (!head_commit || !repository || !sender) return;

  // Abbreviate commit SHA
  const sha = head_commit.id.substring(0, 7);

  return {
    attachments: [
      {
        author_icon: sender.avatar_url,
        author_name: head_commit.author.name || sender.login,
        color: getNotificationColor(status),
        footer: `<${repository.html_url}>`,
        footer_icon: repository.owner && repository.owner.avatar_url,
        mrkdwn_in: ["text", "pretext"],
        pretext: `${getNotificationPreText(action, status)} \`${
          repository.name
        }\` @ \`<${head_commit.url}|${sha}>\``,
        text: `\`<${head_commit.url}|${sha}>\` ${head_commit.message}`
      }
    ]
  };
}

module.exports = buildCommitMessage;
