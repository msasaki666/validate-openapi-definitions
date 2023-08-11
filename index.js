const core = require('@actions/core');
const exec = require('@actions/exec');

const parseArg = (arg) => {
  const trimed = arg.trim();
  if (trimed === "") [];

  return trimed.split(/\s+/);
}

try {
  const args = parseArg(core.getInput("args"));
  exec.exec("npx",
    [
      "@redocly/cli",
      "lint",
      ...args,
    ])
} catch (error) {
  core.setFailed(error.message);
}
