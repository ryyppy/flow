// @flow

import {spawn} from "child_process";

export function cmd(
  cwd: string,
  cmdName: string,
  flags: Array<[string, ?string]>,
  args: Array<string>,
  stdin?: string
): Promise<[?Object, ?string]> {
  return new Promise(function(resolve, reject) {
    let flowPath = require('flow-bin');

    let flagsList = flags == null ? [] : flags.map(([key, val]) => {
      if (val == null) {
        return '--' + key;
      } else {
        return '--' + key + '=' + val;
      }
    });

    if (cmdName !== 'ast') {
      flagsList.unshift('--json');
    }

    flagsList.unshift(cmdName);

    let child = spawn(flowPath, flagsList.concat(args), {cwd, timeout:30});
    (child.stdin: any).setEncoding('utf8');

    let stdoutData = '';
    child.stdout.on('data', chunk => stdoutData += chunk);

    let stderrData = '';
    child.stderr.on('data', chunk => stderrData += chunk);

    child.on('close', code => {
      // TODO: Not sure if we can generalize this with error codes only
      if (cmdName === 'status') {
        if (code === 2) {
        }
      }

      if (code === 0) {
        resolve([JSON.parse(stdoutData), stderrData === '' ? null : stderrData]);
      } else {
        const err = new Error(stderrData.toString());
        (err: any).code = code;

        reject(err);
      }
    });

    child.on('error', e => reject(e));

    if (stdin != null) {
      child.stdin.write(stdin);
    }
    child.stdin.end();
  });
}
