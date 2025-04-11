import fs from "fs"
const commitMsgFile = process.argv[2]
const commitMsg = fs.readFileSync(commitMsgFile, "utf8").trim()

// Conventional Commits pattern
const pattern = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z-]+\))?: .+/

if (!pattern.test(commitMsg)) {
  console.error("\x1b[31mError: Commit message does not follow Conventional Commits format!\x1b[0m")
  console.error("\x1b[33mExpected format: type(scope): message\x1b[0m")
  console.error("\x1b[33mExample: feat(button): add new color option\x1b[0m")
  console.error("\x1b[33mValid types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert\x1b[0m")
  process.exit(1)
}

console.log("\x1b[32mCommit message format is valid! ✓\x1b[0m")
