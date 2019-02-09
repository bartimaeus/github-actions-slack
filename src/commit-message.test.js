const buildCommitMessage = require("./commit-message");

const event = {
  after: "b432fd716e7eec7475f37b2430a0d41e0f475210",
  base_ref: null,
  before: "34226f801ebc7e8aa5cc626463762908ae3a38fe",
  commits: [
    {
      added: [],
      author: {
        email: "eric@webdesignbakery.com",
        name: "Eric Shelley",
        username: "bartimaeus"
      },
      committer: {
        email: "eric@webdesignbakery.com",
        name: "Eric Shelley",
        username: "bartimaeus"
      },
      distinct: true,
      id: "b432fd716e7eec7475f37b2430a0d41e0f475210",
      message: "Updating deploy action",
      modified: [".github/actions/deploy/entrypoint.sh"],
      removed: [],
      timestamp: "2019-02-08T15:22:43-07:00",
      tree_id: "384f206f0d20ed5ac85c72a203009abeba3b6d16",
      url:
        "https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210"
    }
  ],
  compare:
    "https://github.com/bartimaeus/github-actions-slack/compare/34226f801ebc...b432fd716e7e",
  created: false,
  deleted: false,
  forced: false,
  head_commit: {
    added: [],
    author: {
      email: "eric@webdesignbakery.com",
      name: "Eric Shelley",
      username: "bartimaeus"
    },
    committer: {
      email: "eric@webdesignbakery.com",
      name: "Eric Shelley",
      username: "bartimaeus"
    },
    distinct: true,
    id: "b432fd716e7eec6150f37b2430a0d41e0f475210",
    message: "Updating deploy action",
    modified: [".github/actions/deploy/entrypoint.sh"],
    removed: [],
    timestamp: "2019-02-08T15:22:43-07:00",
    tree_id: "113f206f0d22543ac85c72a203009abeba3b6d16",
    url:
      "https://github.com/bartimaeus/github-actions-slack/commit/b432fd716e7eec6150f37b2430a0d41e0f475210"
  },
  organization: {
    avatar_url: "https://avatars0.githubusercontent.com/u/987123654?v=4",
    description: "",
    events_url: "https://api.github.com/orgs/webdesignbakery/events",
    hooks_url: "https://api.github.com/orgs/webdesignbakery/hooks",
    id: 987123654,
    issues_url: "https://api.github.com/orgs/webdesignbakery/issues",
    login: "webdesignbakery",
    members_url: "https://api.github.com/orgs/webdesignbakery/members{/member}",
    node_id: "73E8A69P4U4m5Tx9qk2NU632667d78YE",
    public_members_url:
      "https://api.github.com/orgs/webdesignbakery/public_members{/member}",
    repos_url: "https://api.github.com/orgs/webdesignbakery/repos",
    url: "https://api.github.com/orgs/webdesignbakery"
  },
  pusher: {
    email: "eric@webdesignbakery.com",
    name: "bartimaeus"
  },
  ref: "refs/heads/master",
  repository: {
    archive_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/{archive_format}{/ref}",
    archived: false,
    assignees_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/assignees{/user}",
    blobs_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/git/blobs{/sha}",
    branches_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/branches{/branch}",
    clone_url: "https://github.com/bartimaeus/github-actions-slack.git",
    collaborators_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/collaborators{/collaborator}",
    comments_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/comments{/number}",
    commits_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/commits{/sha}",
    compare_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/compare/{base}...{head}",
    contents_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/contents/{+path}",
    contributors_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/contributors",
    created_at: 1549566699,
    default_branch: "master",
    deployments_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/deployments",
    description: "Slack notifications for GitHub Actions",
    downloads_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/downloads",
    events_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/events",
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/forks",
    full_name: "bartimaeus/github-actions-slack",
    git_commits_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/git/commits{/sha}",
    git_refs_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/git/refs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/git/tags{/sha}",
    git_url: "git://github.com/bartimaeus/github-actions-slack.git",
    has_downloads: true,
    has_issues: true,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: "",
    hooks_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/hooks",
    html_url: "https://github.com/bartimaeus/github-actions-slack",
    id: 987654321,
    issue_comment_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/issues/comments{/number}",
    issue_events_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/issues/events{/number}",
    issues_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/issues{/number}",
    keys_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/keys{/key_id}",
    labels_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/labels{/name}",
    language: "Shell",
    languages_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/languages",
    license: null,
    master_branch: "master",
    merges_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/merges",
    milestones_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/milestones{/number}",
    mirror_url: null,
    name: "github-actions-slack",
    node_id: "MDEwOlJlcG9zaXRvcnkxNjk2MjY4OTE=",
    notifications_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/notifications{?since,all,participating}",
    open_issues: 0,
    open_issues_count: 0,
    organization: "webdesignbakery",
    owner: {
      avatar_url: "https://avatars0.githubusercontent.com/u/987123654?v=4",
      email: "hello@webdesignbakery.com",
      events_url:
        "https://api.github.com/users/webdesignbakery/events{/privacy}",
      followers_url: "https://api.github.com/users/webdesignbakery/followers",
      following_url:
        "https://api.github.com/users/webdesignbakery/following{/other_user}",
      gists_url: "https://api.github.com/users/webdesignbakery/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/webdesignbakery",
      id: 987123654,
      login: "webdesignbakery",
      name: "webdesignbakery",
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMyNTg3MzY1",
      organizations_url: "https://api.github.com/users/webdesignbakery/orgs",
      received_events_url:
        "https://api.github.com/users/webdesignbakery/received_events",
      repos_url: "https://api.github.com/users/webdesignbakery/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/webdesignbakery/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/webdesignbakery/subscriptions",
      type: "Organization",
      url: "https://api.github.com/users/webdesignbakery"
    },
    private: true,
    pulls_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/pulls{/number}",
    pushed_at: 1549664568,
    releases_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/releases{/id}",
    size: 18,
    ssh_url: "git@github.com:bartimaeus/github-actions-slack.git",
    stargazers: 0,
    stargazers_count: 0,
    stargazers_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/stargazers",
    statuses_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/statuses/{sha}",
    subscribers_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/subscribers",
    subscription_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/subscription",
    svn_url: "https://github.com/bartimaeus/github-actions-slack",
    tags_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/tags",
    teams_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/teams",
    trees_url:
      "https://api.github.com/repos/bartimaeus/github-actions-slack/git/trees{/sha}",
    updated_at: "2019-02-08T22:19:01Z",
    url: "https://github.com/bartimaeus/github-actions-slack",
    watchers: 0,
    watchers_count: 0
  },
  sender: {
    avatar_url: "https://avatars3.githubusercontent.com/u/10?v=4",
    events_url: "https://api.github.com/users/bartimaeus/events{/privacy}",
    followers_url: "https://api.github.com/users/bartimaeus/followers",
    following_url:
      "https://api.github.com/users/bartimaeus/following{/other_user}",
    gists_url: "https://api.github.com/users/bartimaeus/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/bartimaeus",
    id: 10,
    login: "bartimaeus",
    node_id: "MDQ6VXNlcjQwMzgzMg==",
    organizations_url: "https://api.github.com/users/bartimaeus/orgs",
    received_events_url:
      "https://api.github.com/users/bartimaeus/received_events",
    repos_url: "https://api.github.com/users/bartimaeus/repos",
    site_admin: false,
    starred_url:
      "https://api.github.com/users/bartimaeus/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/bartimaeus/subscriptions",
    type: "User",
    url: "https://api.github.com/users/bartimaeus"
  }
};

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
