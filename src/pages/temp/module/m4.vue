<!--
 * @Date           : 2020-10-19 00:35:27
 * @FilePath       : /ping-space/src/pages/temp/module/m4.vue
 * @Description    : 
-->
<template>
    <div>
        <pre>
        <code>

npm downloads
ShellJS is a portable (Windows/Linux/macOS) implementation of Unix shell
commands on top of the Node.js API. You can use it to eliminate your shell
script's dependency on Unix while still keeping its familiar and powerful
commands. You can also install it globally so you can run it from outside Node
projects - say goodbye to those gnarly Bash scripts!

ShellJS is proudly tested on every node release since <!-- start minVersion -->v6<!-- stop minVersion -->!

The project is unit-tested and battle-tested in projects like:

Firebug - Firefox's infamous debugger
JSHint & ESLint - popular JavaScript linters
Zepto - jQuery-compatible JavaScript library for modern browsers
Yeoman - Web application stack and development tool
Deployd.com - Open source PaaS for quick API backend generation
And many more.
If you have feedback, suggestions, or need help, feel free to post in our issue
tracker.

Think ShellJS is cool? Check out some related projects in our Wiki
page!

Upgrading from an older version? Check out our breaking
changes page to see
what changes to watch out for while upgrading.

Command line use
If you just want cross platform UNIX commands, checkout our new project
shelljs/shx, a utility to expose shelljs to
the command line.

For example:

$ shx mkdir -p foo
$ shx touch foo/bar.txt
$ shx rm -rf foo
Plugin API
ShellJS now supports third-party plugins! You can learn more about using plugins
and writing your own ShellJS commands in the
wiki.

A quick note about the docs
For documentation on all the latest features, check out our
README. To read docs that are consistent
with the latest release, check out the npm
page or
shelljs.org.

Installing
Via npm:

$ npm install [-g] shelljs
Examples
var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');

// Replace macros in each .js file
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}
Exclude options
If you need to pass a parameter that looks like an option, you can do so like:

shell.grep('--', '-v', 'path/to/file'); // Search for "-v", no grep options

shell.cp('-R', '-dir', 'outdir'); // If already using an option, you're done
Global vs. Local
We no longer recommend using a global-import for ShellJS (i.e.
require('shelljs/global')). While still supported for convenience, this
pollutes the global namespace, and should therefore only be used with caution.

Instead, we recommend a local import (standard for npm packages):

var shell = require('shelljs');
shell.echo('hello world');
Command reference
All commands run synchronously, unless otherwise stated.
All commands accept standard bash globbing characters (*, ?, etc.),
compatible with the node glob module.

For less-commonly used commands and features, please check out our wiki
page.

cat([options,] file [, file ...])
cat([options,] file_array)
Available options:

-n: number all output lines
Examples:

var str = cat('file*.txt');
var str = cat('file1', 'file2');
var str = cat(['file1', 'file2']); // same as above
Returns a ShellString containing the given file, or a
concatenated string containing the files if more than one file is given (a
new line character is introduced between each file).

cd([dir])
Changes to directory dir for the duration of the script. Changes to home
directory if no argument is supplied. Returns a
ShellString to indicate success or failure.

chmod([options,] octal_mode || octal_string, file)
chmod([options,] symbolic_mode, file)
Available options:

-v: output a diagnostic for every file processed
-c: like verbose, but report only when a change is made
-R: change files and directories recursively

        </code>

        </pre>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>