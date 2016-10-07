// @flow

import type {TProgram} from "./astTypes";
import type {FlowResult} from "./jsonResultTypes";
import {cmd} from "./lib/comm";

/**
 * `flow ast < fileContents`
 */
export async function astFromFileContents(
  cwd: string,
  fileContents: string
): Promise<TProgram> {
  const [res, err] = await cmd(cwd, "ast", [], [], fileContents);
  if (res == null) {
    throw new Error(err);
  }
  return res;
}

/**
 * `flow status --json`
 */
export async function status(
  cwd: string,
  root: ?string
): Promise<FlowResult> {
  const args = (root != null ? [root] : []);
  const [res, err] = await cmd(cwd, "status", [], args);

  if (res == null) {
    throw new Error(err);
  }

  return (res: FlowResult);
}

/**
 * `flow ast file.js`
 */
export async function astFromFilePath(
  cwd: string,
  filePath: string
): Promise<TProgram> {
  const [res, err] = await cmd(cwd, "ast", [], [filePath]);
  if (res == null) {
    throw new Error(err);
  }
  return res;
}

/**
 * `flow check-contents < fileContents`
 */
export async function checkContents(
  cwd: string,
  fileContents: string
): Promise<FlowResult> {
  const [res, err] = await cmd(cwd, "check-contents", [], [], fileContents);
  if (res == null) {
    throw new Error(err);
  }
  return res;
}
