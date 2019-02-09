const buildCommitMessage = require("./commit-message");
const event = require("../resources/events.json");

describe("buildCommitMessage", () => {
  describe("event", () => {
    test("should include author_icon", () => {
      const message = buildCommitMessage({
        action: "build",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].author_icon).toBe(
        "https://avatars3.githubusercontent.com/u/10?v=4"
      );
    });

    test("should include footer", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].footer).toBe(
        "<https://github.com/bartimaeus/github-actions-slack>"
      );
    });

    test("should include footer_icon", () => {
      const message = buildCommitMessage({
        action: "test",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].footer_icon).toBe(
        "https://avatars0.githubusercontent.com/u/987123654?v=4"
      );
    });

    test("should include pretext", () => {
      const message = buildCommitMessage({
        action: "build",
        event,
        status: "success"
      });
      expect(message.attachments[0].pretext).toBe(
        ":hammer_and_wrench: *Successfully* built `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    test("should include text", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].text).toBe(
        "`<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>` Updating deploy action"
      );
    });
  });

  describe("action", () => {
    it("should mention `test` in pretext", () => {
      const message = buildCommitMessage({
        action: "test",
        event,
        status: "failure"
      });
      expect(message.attachments[0].pretext).toBe(
        ":no_entry: tests *failed* `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    it("should mention `build` in pretext", () => {
      const message = buildCommitMessage({
        action: "build",
        event,
        status: "failure"
      });
      expect(message.attachments[0].pretext).toBe(
        ":fire: *Failed* to build `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    it("should mention `deploy` in pretext", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].pretext).toBe(
        ":boom: *Failed* to deploy `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    it("should generate standard pretext", () => {
      const message = buildCommitMessage({
        action: undefined,
        event,
        status: "neutral"
      });
      expect(message.attachments[0].pretext).toBe(
        ":no_entry: *Failure* `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });
  });
  describe("status", () => {
    it("`success` should include *Success* in pretext", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "success"
      });
      expect(message.attachments[0].pretext).toBe(
        ":rocket: *Successfully* deployed `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    it("`failure` should include *Failed* in pretext", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "failure"
      });
      expect(message.attachments[0].pretext).toBe(
        ":boom: *Failed* to deploy `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });

    it("`neutral` should include *Failed* in pretext", () => {
      const message = buildCommitMessage({
        action: "deploy",
        event,
        status: "neutral"
      });
      expect(message.attachments[0].pretext).toBe(
        ":boom: *Failed* to deploy `github-actions-slack` @ `<https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210|b432fd7>`"
      );
    });
  });
});
