<!--
 * @Date           : 2020-10-18 23:51:15
 * @FilePath       : /ping-space/src/pages/temp/module/m2.vue
 * @Description    : 
-->
<template>
    <div>
<div id="content"><a href="https://github.com/shelljs/shelljs" id="github-ribbon"><img alt="Fork me on GitHub" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a><h1>ShellJS - Unix shell commands for Node.js</h1>

<p><a href="https://travis-ci.org/shelljs/shelljs"><img src="https://img.shields.io/travis/shelljs/shelljs/master.svg?style=flat-square&amp;label=unix" alt="Travis" style="max-width:100%;"></a><br>
<a href="https://ci.appveyor.com/project/shelljs/shelljs/branch/master"><img src="https://img.shields.io/appveyor/ci/shelljs/shelljs/master.svg?style=flat-square&amp;label=windows" alt="AppVeyor" style="max-width:100%;"></a><br>
<a href="https://codecov.io/gh/shelljs/shelljs"><img src="https://img.shields.io/codecov/c/github/shelljs/shelljs/master.svg?style=flat-square&amp;label=coverage" alt="Codecov" style="max-width:100%;"></a><br>
<a href="https://www.npmjs.com/package/shelljs"><img src="https://img.shields.io/npm/v/shelljs.svg?style=flat-square" alt="npm version" style="max-width:100%;"></a><br>
<a href="https://www.npmjs.com/package/shelljs"><img src="https://img.shields.io/npm/dm/shelljs.svg?style=flat-square" alt="npm downloads" style="max-width:100%;"></a></p>

<p>ShellJS is a portable <strong>(Windows/Linux/macOS)</strong> implementation of Unix shell<br>
commands on top of the Node.js API. You can use it to eliminate your shell<br>
script's dependency on Unix while still keeping its familiar and powerful<br>
commands. You can also install it globally so you can run it from outside Node<br>
projects - say goodbye to those gnarly Bash scripts!</p>

<p>ShellJS is proudly tested on every node release since &lt;!-- start minVersion --&gt;<code>v6</code>&lt;!-- stop minVersion --&gt;!</p>

<p>The project is <a href="https://travis-ci.org/shelljs/shelljs">unit-tested</a> and battle-tested in projects like:</p>

<ul>
<li>
<a href="https://getfirebug.com/">Firebug</a> - Firefox's infamous debugger</li>
<li>
<a href="http://jshint.com">JSHint</a> &amp; <a href="http://eslint.org/">ESLint</a> - popular JavaScript linters</li>
<li>
<a href="http://zeptojs.com">Zepto</a> - jQuery-compatible JavaScript library for modern browsers</li>
<li>
<a href="http://yeoman.io/">Yeoman</a> - Web application stack and development tool</li>
<li>
<a href="http://deployd.com">Deployd.com</a> - Open source PaaS for quick API backend generation</li>
<li>And <a href="https://npmjs.org/browse/depended/shelljs">many more</a>.</li>
</ul>

<p>If you have feedback, suggestions, or need help, feel free to post in our <a href="https://github.com/shelljs/shelljs/issues">issue<br>
tracker</a>.</p>

<p>Think ShellJS is cool? Check out some related projects in our <a href="https://github.com/shelljs/shelljs/wiki">Wiki<br>
page</a>!</p>

<p>Upgrading from an older version? Check out our <a href="https://github.com/shelljs/shelljs/wiki/Breaking-Changes">breaking<br>
changes</a> page to see<br>
what changes to watch out for while upgrading.</p>

<h2>
<a id="command-line-use" class="anchor" href="#command-line-use" aria-hidden="true"><span class="octicon octicon-link"></span></a>Command line use</h2>

<p>If you just want cross platform UNIX commands, checkout our new project<br>
<a href="https://github.com/shelljs/shx">shelljs/shx</a>, a utility to expose <code>shelljs</code> to<br>
the command line.</p>

<p>For example:</p>

<pre><code>$ shx mkdir -p foo
$ shx touch foo/bar.txt
$ shx rm -rf foo
</code></pre>

<h2>
<a id="plugin-api" class="anchor" href="#plugin-api" aria-hidden="true"><span class="octicon octicon-link"></span></a>Plugin API</h2>

<p>ShellJS now supports third-party plugins! You can learn more about using plugins<br>
and writing your own ShellJS commands in <a href="https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins">the<br>
wiki</a>.</p>

<h2>
<a id="a-quick-note-about-the-docs" class="anchor" href="#a-quick-note-about-the-docs" aria-hidden="true"><span class="octicon octicon-link"></span></a>A quick note about the docs</h2>

<p>For documentation on all the latest features, check out our<br>
<a href="https://github.com/shelljs/shelljs">README</a>. To read docs that are consistent<br>
with the latest release, check out <a href="https://www.npmjs.com/package/shelljs">the npm<br>
page</a> or<br>
<a href="https://documentup.com/shelljs/shelljs">shelljs.org</a>.</p>

<h2>
<a id="installing" class="anchor" href="#installing" aria-hidden="true"><span class="octicon octicon-link"></span></a>Installing</h2>

<p>Via npm:</p>

<div class="highlight highlight-bash"><pre><span class="nv">$ </span>npm install <span class="o">[</span>-g<span class="o">]</span> shelljs
</pre></div>

<h2>
<a id="examples" class="anchor" href="#examples" aria-hidden="true"><span class="octicon octicon-link"></span></a>Examples</h2>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">shell</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'shelljs'</span><span class="p">);</span>

<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">shell</span><span class="p">.</span><span class="nx">which</span><span class="p">(</span><span class="s1">'git'</span><span class="p">))</span> <span class="p">{</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">echo</span><span class="p">(</span><span class="s1">'Sorry, this script requires git'</span><span class="p">);</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span>
<span class="p">}</span>

<span class="c1">// Copy files to release dir</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">rm</span><span class="p">(</span><span class="s1">'-rf'</span><span class="p">,</span> <span class="s1">'out/Release'</span><span class="p">);</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">cp</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="s1">'stuff/'</span><span class="p">,</span> <span class="s1">'out/Release'</span><span class="p">);</span>

<span class="c1">// Replace macros in each .js file</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">cd</span><span class="p">(</span><span class="s1">'lib'</span><span class="p">);</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">ls</span><span class="p">(</span><span class="s1">'*.js'</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">sed</span><span class="p">(</span><span class="s1">'-i'</span><span class="p">,</span> <span class="s1">'BUILD_VERSION'</span><span class="p">,</span> <span class="s1">'v0.1.2'</span><span class="p">,</span> <span class="nx">file</span><span class="p">);</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">sed</span><span class="p">(</span><span class="s1">'-i'</span><span class="p">,</span> <span class="sr">/^.*REMOVE_THIS_LINE.*$/</span><span class="p">,</span> <span class="s1">''</span><span class="p">,</span> <span class="nx">file</span><span class="p">);</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">sed</span><span class="p">(</span><span class="s1">'-i'</span><span class="p">,</span> <span class="sr">/.*REPLACE_LINE_WITH_MACRO.*\n/</span><span class="p">,</span> <span class="nx">shell</span><span class="p">.</span><span class="nx">cat</span><span class="p">(</span><span class="s1">'macro.js'</span><span class="p">),</span> <span class="nx">file</span><span class="p">);</span>
<span class="p">});</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">cd</span><span class="p">(</span><span class="s1">'..'</span><span class="p">);</span>

<span class="c1">// Run external tool synchronously</span>
<span class="k">if</span> <span class="p">(</span><span class="nx">shell</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="s1">'git commit -am "Auto-commit"'</span><span class="p">).</span><span class="nx">code</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">echo</span><span class="p">(</span><span class="s1">'Error: Git commit failed'</span><span class="p">);</span>
  <span class="nx">shell</span><span class="p">.</span><span class="nx">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span>
<span class="p">}</span>
</pre></div>

<h2>
<a id="exclude-options" class="anchor" href="#exclude-options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Exclude options</h2>

<p>If you need to pass a parameter that looks like an option, you can do so like:</p>

<div class="highlight highlight-js"><pre><span class="nx">shell</span><span class="p">.</span><span class="nx">grep</span><span class="p">(</span><span class="s1">'--'</span><span class="p">,</span> <span class="s1">'-v'</span><span class="p">,</span> <span class="s1">'path/to/file'</span><span class="p">);</span> <span class="c1">// Search for "-v", no grep options</span>

<span class="nx">shell</span><span class="p">.</span><span class="nx">cp</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="s1">'-dir'</span><span class="p">,</span> <span class="s1">'outdir'</span><span class="p">);</span> <span class="c1">// If already using an option, you're done</span>
</pre></div>

<h2>
<a id="global-vs-local" class="anchor" href="#global-vs-local" aria-hidden="true"><span class="octicon octicon-link"></span></a>Global vs. Local</h2>

<p>We no longer recommend using a global-import for ShellJS (i.e.<br>
<code>require('shelljs/global')</code>). While still supported for convenience, this<br>
pollutes the global namespace, and should therefore only be used with caution.</p>

<p>Instead, we recommend a local import (standard for npm packages):</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">shell</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'shelljs'</span><span class="p">);</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">echo</span><span class="p">(</span><span class="s1">'hello world'</span><span class="p">);</span>
</pre></div>



<h2>
<a id="command-reference" class="anchor" href="#command-reference" aria-hidden="true"><span class="octicon octicon-link"></span></a>Command reference</h2>

<p>All commands run synchronously, unless otherwise stated.<br>
All commands accept standard bash globbing characters (<code>*</code>, <code>?</code>, etc.),<br>
compatible with the <a href="https://github.com/isaacs/node-glob">node <code>glob</code> module</a>.</p>

<p>For less-commonly used commands and features, please check out our <a href="https://github.com/shelljs/shelljs/wiki">wiki<br>
page</a>.</p>

<h3>
<a id="catoptions-file--file-" class="anchor" href="#catoptions-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>cat([options,] file [, file ...])</h3>

<h3>
<a id="catoptions-file_array" class="anchor" href="#catoptions-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>cat([options,] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-n</code>: number all output lines</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">cat</span><span class="p">(</span><span class="s1">'file*.txt'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">cat</span><span class="p">(</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">cat</span><span class="p">([</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">]);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Returns a <a href="#shellstringstr">ShellString</a> containing the given file, or a<br>
concatenated string containing the files if more than one file is given (a<br>
new line character is introduced between each file).</p>

<h3>
<a id="cddir" class="anchor" href="#cddir" aria-hidden="true"><span class="octicon octicon-link"></span></a>cd([dir])</h3>

<p>Changes to directory <code>dir</code> for the duration of the script. Changes to home<br>
directory if no argument is supplied. Returns a<br>
<a href="#shellstringstr">ShellString</a> to indicate success or failure.</p>

<h3>
<a id="chmodoptions-octal_mode--octal_string-file" class="anchor" href="#chmodoptions-octal_mode--octal_string-file" aria-hidden="true"><span class="octicon octicon-link"></span></a>chmod([options,] octal_mode || octal_string, file)</h3>

<h3>
<a id="chmodoptions-symbolic_mode-file" class="anchor" href="#chmodoptions-symbolic_mode-file" aria-hidden="true"><span class="octicon octicon-link"></span></a>chmod([options,] symbolic_mode, file)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-v</code>: output a diagnostic for every file processed</li>
<li>
<code>-c</code>: like verbose, but report only when a change is made</li>
<li>
<code>-R</code>: change files and directories recursively</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">chmod</span><span class="p">(</span><span class="mi">755</span><span class="p">,</span> <span class="s1">'/Users/brandon'</span><span class="p">);</span>
<span class="nx">chmod</span><span class="p">(</span><span class="s1">'755'</span><span class="p">,</span> <span class="s1">'/Users/brandon'</span><span class="p">);</span> <span class="c1">// same as above</span>
<span class="nx">chmod</span><span class="p">(</span><span class="s1">'u+x'</span><span class="p">,</span> <span class="s1">'/Users/brandon'</span><span class="p">);</span>
<span class="nx">chmod</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="s1">'a-w'</span><span class="p">,</span> <span class="s1">'/Users/brandon'</span><span class="p">);</span>
</pre></div>

<p>Alters the permissions of a file or directory by either specifying the<br>
absolute permissions in octal form or expressing the changes in symbols.<br>
This command tries to mimic the POSIX behavior as much as possible.<br>
Notable exceptions:</p>

<ul>
<li>In symbolic modes, <code>a-r</code> and <code>-r</code> are identical.  No consideration is
given to the <code>umask</code>.</li>
<li>There is no "quiet" option, since default behavior is to run silent.</li>
</ul>

<p>Returns a <a href="#shellstringstr">ShellString</a> indicating success or failure.</p>

<h3>
<a id="cpoptions-source--source--dest" class="anchor" href="#cpoptions-source--source--dest" aria-hidden="true"><span class="octicon octicon-link"></span></a>cp([options,] source [, source ...], dest)</h3>

<h3>
<a id="cpoptions-source_array-dest" class="anchor" href="#cpoptions-source_array-dest" aria-hidden="true"><span class="octicon octicon-link"></span></a>cp([options,] source_array, dest)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-f</code>: force (default behavior)</li>
<li>
<code>-n</code>: no-clobber</li>
<li>
<code>-u</code>: only copy if <code>source</code> is newer than <code>dest</code>
</li>
<li>
<code>-r</code>, <code>-R</code>: recursive</li>
<li>
<code>-L</code>: follow symlinks</li>
<li>
<code>-P</code>: don't follow symlinks</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">cp</span><span class="p">(</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'dir1'</span><span class="p">);</span>
<span class="nx">cp</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="s1">'path/to/dir/'</span><span class="p">,</span> <span class="s1">'~/newCopy/'</span><span class="p">);</span>
<span class="nx">cp</span><span class="p">(</span><span class="s1">'-Rf'</span><span class="p">,</span> <span class="s1">'/tmp/*'</span><span class="p">,</span> <span class="s1">'/usr/local/*'</span><span class="p">,</span> <span class="s1">'/home/tmp'</span><span class="p">);</span>
<span class="nx">cp</span><span class="p">(</span><span class="s1">'-Rf'</span><span class="p">,</span> <span class="p">[</span><span class="s1">'/tmp/*'</span><span class="p">,</span> <span class="s1">'/usr/local/*'</span><span class="p">],</span> <span class="s1">'/home/tmp'</span><span class="p">);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Copies files. Returns a <a href="#shellstringstr">ShellString</a> indicating success<br>
or failure.</p>

<h3>
<a id="pushdoptions-dir---n--n" class="anchor" href="#pushdoptions-dir---n--n" aria-hidden="true"><span class="octicon octicon-link"></span></a>pushd([options,] [dir | '-N' | '+N'])</h3>

<p>Available options:</p>

<ul>
<li>
<code>-n</code>: Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.</li>
<li>
<code>-q</code>: Suppresses output to the console.</li>
</ul>

<p>Arguments:</p>

<ul>
<li>
<code>dir</code>: Sets the current working directory to the top of the stack, then executes the equivalent of <code>cd dir</code>.</li>
<li>
<code>+N</code>: Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.</li>
<li>
<code>-N</code>: Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="c1">// process.cwd() === '/usr'</span>
<span class="nx">pushd</span><span class="p">(</span><span class="s1">'/etc'</span><span class="p">);</span> <span class="c1">// Returns /etc /usr</span>
<span class="nx">pushd</span><span class="p">(</span><span class="s1">'+1'</span><span class="p">);</span>   <span class="c1">// Returns /usr /etc</span>
</pre></div>

<p>Save the current directory on the top of the directory stack and then <code>cd</code> to <code>dir</code>. With no arguments, <code>pushd</code> exchanges the top two directories. Returns an array of paths in the stack.</p>

<h3>
<a id="popdoptions--n--n" class="anchor" href="#popdoptions--n--n" aria-hidden="true"><span class="octicon octicon-link"></span></a>popd([options,] ['-N' | '+N'])</h3>

<p>Available options:</p>

<ul>
<li>
<code>-n</code>: Suppress the normal directory change when removing directories from the stack, so that only the stack is manipulated.</li>
<li>
<code>-q</code>: Supresses output to the console.</li>
</ul>

<p>Arguments:</p>

<ul>
<li>
<code>+N</code>: Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.</li>
<li>
<code>-N</code>: Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">echo</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">());</span> <span class="c1">// '/usr'</span>
<span class="nx">pushd</span><span class="p">(</span><span class="s1">'/etc'</span><span class="p">);</span>       <span class="c1">// '/etc /usr'</span>
<span class="nx">echo</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">());</span> <span class="c1">// '/etc'</span>
<span class="nx">popd</span><span class="p">();</span>              <span class="c1">// '/usr'</span>
<span class="nx">echo</span><span class="p">(</span><span class="nx">process</span><span class="p">.</span><span class="nx">cwd</span><span class="p">());</span> <span class="c1">// '/usr'</span>
</pre></div>

<p>When no arguments are given, <code>popd</code> removes the top directory from the stack and performs a <code>cd</code> to the new top directory. The elements are numbered from 0, starting at the first directory listed with dirs (i.e., <code>popd</code> is equivalent to <code>popd +0</code>). Returns an array of paths in the stack.</p>

<h3>
<a id="dirsoptions--n---n" class="anchor" href="#dirsoptions--n---n" aria-hidden="true"><span class="octicon octicon-link"></span></a>dirs([options | '+N' | '-N'])</h3>

<p>Available options:</p>

<ul>
<li>
<code>-c</code>: Clears the directory stack by deleting all of the elements.</li>
<li>
<code>-q</code>: Supresses output to the console.</li>
</ul>

<p>Arguments:</p>

<ul>
<li>
<code>+N</code>: Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.</li>
<li>
<code>-N</code>: Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.</li>
</ul>

<p>Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if <code>+N</code> or <code>-N</code> was specified.</p>

<p>See also: <code>pushd</code>, <code>popd</code></p>

<h3>
<a id="echooptions-string--string-" class="anchor" href="#echooptions-string--string-" aria-hidden="true"><span class="octicon octicon-link"></span></a>echo([options,] string [, string ...])</h3>

<p>Available options:</p>

<ul>
<li>
<code>-e</code>: interpret backslash escapes (default)</li>
<li>
<code>-n</code>: remove trailing newline from output</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">echo</span><span class="p">(</span><span class="s1">'hello world'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">echo</span><span class="p">(</span><span class="s1">'hello world'</span><span class="p">);</span>
<span class="nx">echo</span><span class="p">(</span><span class="s1">'-n'</span><span class="p">,</span> <span class="s1">'no newline at end'</span><span class="p">);</span>
</pre></div>

<p>Prints <code>string</code> to stdout, and returns a <a href="#shellstringstr">ShellString</a>.</p>

<h3>
<a id="execcommand--options--callback" class="anchor" href="#execcommand--options--callback" aria-hidden="true"><span class="octicon octicon-link"></span></a>exec(command [, options] [, callback])</h3>

<p>Available options:</p>

<ul>
<li>
<code>async</code>: Asynchronous execution. If a callback is provided, it will be set to
<code>true</code>, regardless of the passed value (default: <code>false</code>).</li>
<li>
<code>fatal</code>: Exit upon error (default: <code>false</code>).</li>
<li>
<code>silent</code>: Do not echo program output to console (default: <code>false</code>).</li>
<li>
<code>encoding</code>: Character encoding to use. Affects the values returned to stdout and stderr, and
what is written to stdout and stderr when not in silent mode (default: <code>'utf8'</code>).</li>
<li>and any option available to Node.js's
<a href="https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback"><code>child_process.exec()</code></a>
</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">version</span> <span class="o">=</span> <span class="nx">exec</span><span class="p">(</span><span class="s1">'node --version'</span><span class="p">,</span> <span class="p">{</span><span class="nx">silent</span><span class="o">:</span><span class="kc">true</span><span class="p">}).</span><span class="nx">stdout</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">exec</span><span class="p">(</span><span class="s1">'some_long_running_process'</span><span class="p">,</span> <span class="p">{</span><span class="nx">async</span><span class="o">:</span><span class="kc">true</span><span class="p">});</span>
<span class="nx">child</span><span class="p">.</span><span class="nx">stdout</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">'data'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
  <span class="cm">/* ... do something with data ... */</span>
<span class="p">});</span>

<span class="nx">exec</span><span class="p">(</span><span class="s1">'some_long_running_process'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">stdout</span><span class="p">,</span> <span class="nx">stderr</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">'Exit code:'</span><span class="p">,</span> <span class="nx">code</span><span class="p">);</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">'Program output:'</span><span class="p">,</span> <span class="nx">stdout</span><span class="p">);</span>
  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">'Program stderr:'</span><span class="p">,</span> <span class="nx">stderr</span><span class="p">);</span>
<span class="p">});</span>
</pre></div>

<p>Executes the given <code>command</code> <em>synchronously</em>, unless otherwise specified.<br>
When in synchronous mode, this returns a <a href="#shellstringstr">ShellString</a>.<br>
Otherwise, this returns the child process object, and the <code>callback</code><br>
receives the arguments <code>(code, stdout, stderr)</code>.</p>

<p>Not seeing the behavior you want? <code>exec()</code> runs everything through <code>sh</code><br>
by default (or <code>cmd.exe</code> on Windows), which differs from <code>bash</code>. If you<br>
need bash-specific behavior, try out the <code>{shell: 'path/to/bash'}</code> option.</p>

<p><strong>Security note:</strong> as <code>shell.exec()</code> executes an arbitrary string in the<br>
system shell, it is <strong>critical</strong> to properly sanitize user input to avoid<br>
<strong>command injection</strong>. For more context, consult the <a href="https://github.com/shelljs/shelljs/wiki/Security-guidelines">Security<br>
Guidelines</a>.</p>

<h3>
<a id="findpath--path-" class="anchor" href="#findpath--path-" aria-hidden="true"><span class="octicon octicon-link"></span></a>find(path [, path ...])</h3>

<h3>
<a id="findpath_array" class="anchor" href="#findpath_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>find(path_array)</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">find</span><span class="p">(</span><span class="s1">'src'</span><span class="p">,</span> <span class="s1">'lib'</span><span class="p">);</span>
<span class="nx">find</span><span class="p">([</span><span class="s1">'src'</span><span class="p">,</span> <span class="s1">'lib'</span><span class="p">]);</span> <span class="c1">// same as above</span>
<span class="nx">find</span><span class="p">(</span><span class="s1">'.'</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">file</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\.js$/</span><span class="p">);</span> <span class="p">});</span>
</pre></div>

<p>Returns a <a href="#shellstringstr">ShellString</a> (with array-like properties) of all<br>
files (however deep) in the given paths.</p>

<p>The main difference from <code>ls('-R', path)</code> is that the resulting file names<br>
include the base directories (e.g., <code>lib/resources/file1</code> instead of just <code>file1</code>).</p>

<h3>
<a id="grepoptions-regex_filter-file--file-" class="anchor" href="#grepoptions-regex_filter-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>grep([options,] regex_filter, file [, file ...])</h3>

<h3>
<a id="grepoptions-regex_filter-file_array" class="anchor" href="#grepoptions-regex_filter-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>grep([options,] regex_filter, file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-v</code>: Invert <code>regex_filter</code> (only print non-matching lines).</li>
<li>
<code>-l</code>: Print only filenames of matching files.</li>
<li>
<code>-i</code>: Ignore case.</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">grep</span><span class="p">(</span><span class="s1">'-v'</span><span class="p">,</span> <span class="s1">'GLOBAL_VARIABLE'</span><span class="p">,</span> <span class="s1">'*.js'</span><span class="p">);</span>
<span class="nx">grep</span><span class="p">(</span><span class="s1">'GLOBAL_VARIABLE'</span><span class="p">,</span> <span class="s1">'*.js'</span><span class="p">);</span>
</pre></div>

<p>Reads input string from given files and returns a<br>
<a href="#shellstringstr">ShellString</a> containing all lines of the @ file that match<br>
the given <code>regex_filter</code>.</p>

<h3>
<a id="head-n-num-file--file-" class="anchor" href="#head-n-num-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>head([{'-n': &lt;num&gt;},] file [, file ...])</h3>

<h3>
<a id="head-n-num-file_array" class="anchor" href="#head-n-num-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>head([{'-n': &lt;num&gt;},] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-n &lt;num&gt;</code>: Show the first <code>&lt;num&gt;</code> lines of the files</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">head</span><span class="p">({</span><span class="s1">'-n'</span><span class="o">:</span> <span class="mi">1</span><span class="p">},</span> <span class="s1">'file*.txt'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">head</span><span class="p">(</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">head</span><span class="p">([</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">]);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Read the start of a <code>file</code>. Returns a <a href="#shellstringstr">ShellString</a>.</p>

<h3>
<a id="lnoptions-source-dest" class="anchor" href="#lnoptions-source-dest" aria-hidden="true"><span class="octicon octicon-link"></span></a>ln([options,] source, dest)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-s</code>: symlink</li>
<li>
<code>-f</code>: force</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">ln</span><span class="p">(</span><span class="s1">'file'</span><span class="p">,</span> <span class="s1">'newlink'</span><span class="p">);</span>
<span class="nx">ln</span><span class="p">(</span><span class="s1">'-sf'</span><span class="p">,</span> <span class="s1">'file'</span><span class="p">,</span> <span class="s1">'existing'</span><span class="p">);</span>
</pre></div>

<p>Links <code>source</code> to <code>dest</code>. Use <code>-f</code> to force the link, should <code>dest</code> already<br>
exist. Returns a <a href="#shellstringstr">ShellString</a> indicating success or<br>
failure.</p>

<h3>
<a id="lsoptions-path-" class="anchor" href="#lsoptions-path-" aria-hidden="true"><span class="octicon octicon-link"></span></a>ls([options,] [path, ...])</h3>

<h3>
<a id="lsoptions-path_array" class="anchor" href="#lsoptions-path_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>ls([options,] path_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-R</code>: recursive</li>
<li>
<code>-A</code>: all files (include files beginning with <code>.</code>, except for <code>.</code> and <code>..</code>)</li>
<li>
<code>-L</code>: follow symlinks</li>
<li>
<code>-d</code>: list directories themselves, not their contents</li>
<li>
<code>-l</code>: list objects representing each file, each with fields containing <code>ls
    -l</code> output fields. See
    <a href="https://nodejs.org/api/fs.html#fs_class_fs_stats"><code>fs.Stats</code></a>
    for more info</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">ls</span><span class="p">(</span><span class="s1">'projs/*.js'</span><span class="p">);</span>
<span class="nx">ls</span><span class="p">(</span><span class="s1">'projs/**/*.js'</span><span class="p">);</span> <span class="c1">// Find all js files recursively in projs</span>
<span class="nx">ls</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="s1">'/users/me'</span><span class="p">,</span> <span class="s1">'/tmp'</span><span class="p">);</span>
<span class="nx">ls</span><span class="p">(</span><span class="s1">'-R'</span><span class="p">,</span> <span class="p">[</span><span class="s1">'/users/me'</span><span class="p">,</span> <span class="s1">'/tmp'</span><span class="p">]);</span> <span class="c1">// same as above</span>
<span class="nx">ls</span><span class="p">(</span><span class="s1">'-l'</span><span class="p">,</span> <span class="s1">'file.txt'</span><span class="p">);</span> <span class="c1">// { name: 'file.txt', mode: 33188, nlink: 1, ...}</span>
</pre></div>

<p>Returns a <a href="#shellstringstr">ShellString</a> (with array-like properties) of all<br>
the files in the given <code>path</code>, or files in the current directory if no<br>
<code>path</code> is  provided.</p>

<h3>
<a id="mkdiroptions-dir--dir-" class="anchor" href="#mkdiroptions-dir--dir-" aria-hidden="true"><span class="octicon octicon-link"></span></a>mkdir([options,] dir [, dir ...])</h3>

<h3>
<a id="mkdiroptions-dir_array" class="anchor" href="#mkdiroptions-dir_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>mkdir([options,] dir_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-p</code>: full path (and create intermediate directories, if necessary)</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">mkdir</span><span class="p">(</span><span class="s1">'-p'</span><span class="p">,</span> <span class="s1">'/tmp/a/b/c/d'</span><span class="p">,</span> <span class="s1">'/tmp/e/f/g'</span><span class="p">);</span>
<span class="nx">mkdir</span><span class="p">(</span><span class="s1">'-p'</span><span class="p">,</span> <span class="p">[</span><span class="s1">'/tmp/a/b/c/d'</span><span class="p">,</span> <span class="s1">'/tmp/e/f/g'</span><span class="p">]);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Creates directories. Returns a <a href="#shellstringstr">ShellString</a> indicating<br>
success or failure.</p>

<h3>
<a id="mvoptions--source--source--dest" class="anchor" href="#mvoptions--source--source--dest" aria-hidden="true"><span class="octicon octicon-link"></span></a>mv([options ,] source [, source ...], dest')</h3>

<h3>
<a id="mvoptions--source_array-dest" class="anchor" href="#mvoptions--source_array-dest" aria-hidden="true"><span class="octicon octicon-link"></span></a>mv([options ,] source_array, dest')</h3>

<p>Available options:</p>

<ul>
<li>
<code>-f</code>: force (default behavior)</li>
<li>
<code>-n</code>: no-clobber</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">mv</span><span class="p">(</span><span class="s1">'-n'</span><span class="p">,</span> <span class="s1">'file'</span><span class="p">,</span> <span class="s1">'dir/'</span><span class="p">);</span>
<span class="nx">mv</span><span class="p">(</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">,</span> <span class="s1">'dir/'</span><span class="p">);</span>
<span class="nx">mv</span><span class="p">([</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">],</span> <span class="s1">'dir/'</span><span class="p">);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Moves <code>source</code> file(s) to <code>dest</code>. Returns a <a href="#shellstringstr">ShellString</a><br>
indicating success or failure.</p>

<h3>
<a id="pwd" class="anchor" href="#pwd" aria-hidden="true"><span class="octicon octicon-link"></span></a>pwd()</h3>

<p>Returns the current directory as a <a href="#shellstringstr">ShellString</a>.</p>

<h3>
<a id="rmoptions-file--file-" class="anchor" href="#rmoptions-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>rm([options,] file [, file ...])</h3>

<h3>
<a id="rmoptions-file_array" class="anchor" href="#rmoptions-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>rm([options,] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-f</code>: force</li>
<li>
<code>-r, -R</code>: recursive</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">rm</span><span class="p">(</span><span class="s1">'-rf'</span><span class="p">,</span> <span class="s1">'/tmp/*'</span><span class="p">);</span>
<span class="nx">rm</span><span class="p">(</span><span class="s1">'some_file.txt'</span><span class="p">,</span> <span class="s1">'another_file.txt'</span><span class="p">);</span>
<span class="nx">rm</span><span class="p">([</span><span class="s1">'some_file.txt'</span><span class="p">,</span> <span class="s1">'another_file.txt'</span><span class="p">]);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Removes files. Returns a <a href="#shellstringstr">ShellString</a> indicating success<br>
or failure.</p>

<h3>
<a id="sedoptions-search_regex-replacement-file--file-" class="anchor" href="#sedoptions-search_regex-replacement-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>sed([options,] search_regex, replacement, file [, file ...])</h3>

<h3>
<a id="sedoptions-search_regex-replacement-file_array" class="anchor" href="#sedoptions-search_regex-replacement-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>sed([options,] search_regex, replacement, file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-i</code>: Replace contents of <code>file</code> in-place. <em>Note that no backups will be created!</em>
</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">sed</span><span class="p">(</span><span class="s1">'-i'</span><span class="p">,</span> <span class="s1">'PROGRAM_VERSION'</span><span class="p">,</span> <span class="s1">'v0.1.3'</span><span class="p">,</span> <span class="s1">'source.js'</span><span class="p">);</span>
</pre></div>

<p>Reads an input string from <code>file</code>s, line by line, and performs a JavaScript <code>replace()</code> on<br>
each of the lines from the input string using the given <code>search_regex</code> and <code>replacement</code> string or<br>
function. Returns the new <a href="#shellstringstr">ShellString</a> after replacement.</p>

<p>Note:</p>

<p>Like unix <code>sed</code>, ShellJS <code>sed</code> supports capture groups. Capture groups are specified<br>
using the <code>$n</code> syntax:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">sed</span><span class="p">(</span><span class="sr">/(\w+)\s(\w+)/</span><span class="p">,</span> <span class="s1">'$2, $1'</span><span class="p">,</span> <span class="s1">'file.txt'</span><span class="p">);</span>
</pre></div>

<p>Also, like unix <code>sed</code>, ShellJS <code>sed</code> runs replacements on each line from the input file<br>
(split by '\n') separately, so <code>search_regex</code>es that span more than one line (or inlclude '\n')<br>
will not match anything and nothing will be replaced.</p>

<h3>
<a id="setoptions" class="anchor" href="#setoptions" aria-hidden="true"><span class="octicon octicon-link"></span></a>set(options)</h3>

<p>Available options:</p>

<ul>
<li>
<code>+/-e</code>: exit upon error (<code>config.fatal</code>)</li>
<li>
<code>+/-v</code>: verbose: show all commands (<code>config.verbose</code>)</li>
<li>
<code>+/-f</code>: disable filename expansion (globbing)</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">set</span><span class="p">(</span><span class="s1">'-e'</span><span class="p">);</span> <span class="c1">// exit upon first error</span>
<span class="nx">set</span><span class="p">(</span><span class="s1">'+e'</span><span class="p">);</span> <span class="c1">// this undoes a "set('-e')"</span>
</pre></div>

<p>Sets global configuration variables.</p>

<h3>
<a id="sortoptions-file--file-" class="anchor" href="#sortoptions-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>sort([options,] file [, file ...])</h3>

<h3>
<a id="sortoptions-file_array" class="anchor" href="#sortoptions-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>sort([options,] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-r</code>: Reverse the results</li>
<li>
<code>-n</code>: Compare according to numerical value</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">sort</span><span class="p">(</span><span class="s1">'foo.txt'</span><span class="p">,</span> <span class="s1">'bar.txt'</span><span class="p">);</span>
<span class="nx">sort</span><span class="p">(</span><span class="s1">'-r'</span><span class="p">,</span> <span class="s1">'foo.txt'</span><span class="p">);</span>
</pre></div>

<p>Return the contents of the <code>file</code>s, sorted line-by-line as a<br>
<a href="#shellstringstr">ShellString</a>. Sorting multiple files mixes their content<br>
(just as unix <code>sort</code> does).</p>

<h3>
<a id="tail-n-num-file--file-" class="anchor" href="#tail-n-num-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>tail([{'-n': &lt;num&gt;},] file [, file ...])</h3>

<h3>
<a id="tail-n-num-file_array" class="anchor" href="#tail-n-num-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>tail([{'-n': &lt;num&gt;},] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-n &lt;num&gt;</code>: Show the last <code>&lt;num&gt;</code> lines of <code>file</code>s</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">tail</span><span class="p">({</span><span class="s1">'-n'</span><span class="o">:</span> <span class="mi">1</span><span class="p">},</span> <span class="s1">'file*.txt'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">tail</span><span class="p">(</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">tail</span><span class="p">([</span><span class="s1">'file1'</span><span class="p">,</span> <span class="s1">'file2'</span><span class="p">]);</span> <span class="c1">// same as above</span>
</pre></div>

<p>Read the end of a <code>file</code>. Returns a <a href="#shellstringstr">ShellString</a>.</p>

<h3>
<a id="tempdir" class="anchor" href="#tempdir" aria-hidden="true"><span class="octicon octicon-link"></span></a>tempdir()</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">tmp</span> <span class="o">=</span> <span class="nx">tempdir</span><span class="p">();</span> <span class="c1">// "/tmp" for most *nix platforms</span>
</pre></div>

<p>Searches and returns string containing a writeable, platform-dependent temporary directory.<br>
Follows Python's <a href="https://docs.python.org/library/tempfile.html#tempfile.tempdir">tempfile algorithm</a>.</p>

<h3>
<a id="testexpression" class="anchor" href="#testexpression" aria-hidden="true"><span class="octicon octicon-link"></span></a>test(expression)</h3>

<p>Available expression primaries:</p>

<ul>
<li>
<code>'-b', 'path'</code>: true if path is a block device</li>
<li>
<code>'-c', 'path'</code>: true if path is a character device</li>
<li>
<code>'-d', 'path'</code>: true if path is a directory</li>
<li>
<code>'-e', 'path'</code>: true if path exists</li>
<li>
<code>'-f', 'path'</code>: true if path is a regular file</li>
<li>
<code>'-L', 'path'</code>: true if path is a symbolic link</li>
<li>
<code>'-p', 'path'</code>: true if path is a pipe (FIFO)</li>
<li>
<code>'-S', 'path'</code>: true if path is a socket</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="k">if</span> <span class="p">(</span><span class="nx">test</span><span class="p">(</span><span class="s1">'-d'</span><span class="p">,</span> <span class="nx">path</span><span class="p">))</span> <span class="p">{</span> <span class="cm">/* do something with dir */</span> <span class="p">};</span>
<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">test</span><span class="p">(</span><span class="s1">'-f'</span><span class="p">,</span> <span class="nx">path</span><span class="p">))</span> <span class="k">continue</span><span class="p">;</span> <span class="c1">// skip if it's a regular file</span>
</pre></div>

<p>Evaluates <code>expression</code> using the available primaries and returns<br>
corresponding boolean value.</p>

<h3>
<a id="shellstringprototypetofile" class="anchor" href="#shellstringprototypetofile" aria-hidden="true"><span class="octicon octicon-link"></span></a>ShellString.prototype.to(file)</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">cat</span><span class="p">(</span><span class="s1">'input.txt'</span><span class="p">).</span><span class="nx">to</span><span class="p">(</span><span class="s1">'output.txt'</span><span class="p">);</span>
</pre></div>

<p>Analogous to the redirection operator <code>&gt;</code> in Unix, but works with<br>
<code>ShellStrings</code> (such as those returned by <code>cat</code>, <code>grep</code>, etc.). <em>Like Unix<br>
redirections, <code>to()</code> will overwrite any existing file!</em> Returns the same<br>
<a href="#shellstringstr">ShellString</a> this operated on, to support chaining.</p>

<h3>
<a id="shellstringprototypetoendfile" class="anchor" href="#shellstringprototypetoendfile" aria-hidden="true"><span class="octicon octicon-link"></span></a>ShellString.prototype.toEnd(file)</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">cat</span><span class="p">(</span><span class="s1">'input.txt'</span><span class="p">).</span><span class="nx">toEnd</span><span class="p">(</span><span class="s1">'output.txt'</span><span class="p">);</span>
</pre></div>

<p>Analogous to the redirect-and-append operator <code>&gt;&gt;</code> in Unix, but works with<br>
<code>ShellStrings</code> (such as those returned by <code>cat</code>, <code>grep</code>, etc.). Returns the<br>
same <a href="#shellstringstr">ShellString</a> this operated on, to support chaining.</p>

<h3>
<a id="touchoptions-file--file-" class="anchor" href="#touchoptions-file--file-" aria-hidden="true"><span class="octicon octicon-link"></span></a>touch([options,] file [, file ...])</h3>

<h3>
<a id="touchoptions-file_array" class="anchor" href="#touchoptions-file_array" aria-hidden="true"><span class="octicon octicon-link"></span></a>touch([options,] file_array)</h3>

<p>Available options:</p>

<ul>
<li>
<code>-a</code>: Change only the access time</li>
<li>
<code>-c</code>: Do not create any files</li>
<li>
<code>-m</code>: Change only the modification time</li>
<li>
<code>{'-d': someDate}</code>, <code>{date: someDate}</code>: Use <code>someDate</code> (instance of
<code>Date</code>) instead of current time</li>
<li>
<code>{'-r': file}</code>, <code>{reference: file}</code>: Use <code>file</code>'s times instead of current
time</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">touch</span><span class="p">(</span><span class="s1">'source.js'</span><span class="p">);</span>
<span class="nx">touch</span><span class="p">(</span><span class="s1">'-c'</span><span class="p">,</span> <span class="s1">'path/to/file.js'</span><span class="p">);</span>
<span class="nx">touch</span><span class="p">({</span> <span class="s1">'-r'</span><span class="o">:</span> <span class="s1">'referenceFile.txt'</span> <span class="p">},</span> <span class="s1">'path/to/file.js'</span><span class="p">);</span>
<span class="nx">touch</span><span class="p">({</span> <span class="nx">date</span><span class="o">:</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="s1">'December 17, 1995 03:24:00'</span><span class="p">)</span> <span class="p">},</span> <span class="s1">'path/to/file.js'</span><span class="p">);</span>
</pre></div>

<p>Update the access and modification times of each file to the current time.<br>
A file argument that does not exist is created empty, unless <code>-c</code> is supplied.<br>
This is a partial implementation of<br>
<a href="https://linux.die.net/man/1/touch"><code>touch(1)</code></a>. Returns a<br>
<a href="#shellstringstr">ShellString</a> indicating success or failure.</p>

<h3>
<a id="uniqoptions-input-output" class="anchor" href="#uniqoptions-input-output" aria-hidden="true"><span class="octicon octicon-link"></span></a>uniq([options,] [input, [output]])</h3>

<p>Available options:</p>

<ul>
<li>
<code>-i</code>: Ignore case while comparing</li>
<li>
<code>-c</code>: Prefix lines by the number of occurrences</li>
<li>
<code>-d</code>: Only print duplicate lines, one for each group of identical lines</li>
</ul>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">uniq</span><span class="p">(</span><span class="s1">'foo.txt'</span><span class="p">);</span>
<span class="nx">uniq</span><span class="p">(</span><span class="s1">'-i'</span><span class="p">,</span> <span class="s1">'foo.txt'</span><span class="p">);</span>
<span class="nx">uniq</span><span class="p">(</span><span class="s1">'-cd'</span><span class="p">,</span> <span class="s1">'foo.txt'</span><span class="p">,</span> <span class="s1">'bar.txt'</span><span class="p">);</span>
</pre></div>

<p>Filter adjacent matching lines from <code>input</code>. Returns a<br>
<a href="#shellstringstr">ShellString</a>.</p>

<h3>
<a id="whichcommand" class="anchor" href="#whichcommand" aria-hidden="true"><span class="octicon octicon-link"></span></a>which(command)</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">nodeExec</span> <span class="o">=</span> <span class="nx">which</span><span class="p">(</span><span class="s1">'node'</span><span class="p">);</span>
</pre></div>

<p>Searches for <code>command</code> in the system's <code>PATH</code>. On Windows, this uses the<br>
<code>PATHEXT</code> variable to append the extension if it's not already executable.<br>
Returns a <a href="#shellstringstr">ShellString</a> containing the absolute path to<br>
<code>command</code>.</p>

<h3>
<a id="exitcode" class="anchor" href="#exitcode" aria-hidden="true"><span class="octicon octicon-link"></span></a>exit(code)</h3>

<p>Exits the current process with the given exit <code>code</code>.</p>

<h3>
<a id="error" class="anchor" href="#error" aria-hidden="true"><span class="octicon octicon-link"></span></a>error()</h3>

<p>Tests if error occurred in the last command. Returns a truthy value if an<br>
error returned, or a falsy value otherwise.</p>

<p><strong>Note</strong>: do not rely on the<br>
return value to be an error message. If you need the last error message, use<br>
the <code>.stderr</code> attribute from the last command's return value instead.</p>

<h3>
<a id="shellstringstr" class="anchor" href="#shellstringstr" aria-hidden="true"><span class="octicon octicon-link"></span></a>ShellString(str)</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">foo</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ShellString</span><span class="p">(</span><span class="s1">'hello world'</span><span class="p">);</span>
</pre></div>

<p>This is a dedicated type returned by most ShellJS methods, which wraps a<br>
string (or array) value. This has all the string (or array) methods, but<br>
also exposes extra methods: <a href="#shellstringprototypetofile"><code>.to()</code></a>,<br>
<a href="#shellstringprototypetoendfile"><code>.toEnd()</code></a>, and all the pipe-able methods<br>
(ex. <code>.cat()</code>, <code>.grep()</code>, etc.). This can be easily converted into a string<br>
by calling <code>.toString()</code>.</p>

<p>This type also exposes the corresponding command's stdout, stderr, and<br>
return status code via the <code>.stdout</code> (string), <code>.stderr</code> (string), and<br>
<code>.code</code> (number) properties respectively.</p>

<h3>
<a id="envvar_name" class="anchor" href="#envvar_name" aria-hidden="true"><span class="octicon octicon-link"></span></a>env['VAR_NAME']</h3>

<p>Object containing environment variables (both getter and setter). Shortcut<br>
to <code>process.env</code>.</p>

<h3>
<a id="pipes" class="anchor" href="#pipes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Pipes</h3>

<p>Examples:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">grep</span><span class="p">(</span><span class="s1">'foo'</span><span class="p">,</span> <span class="s1">'file1.txt'</span><span class="p">,</span> <span class="s1">'file2.txt'</span><span class="p">).</span><span class="nx">sed</span><span class="p">(</span><span class="sr">/o/g</span><span class="p">,</span> <span class="s1">'a'</span><span class="p">).</span><span class="nx">to</span><span class="p">(</span><span class="s1">'output.txt'</span><span class="p">);</span>
<span class="nx">echo</span><span class="p">(</span><span class="s1">'files with o\'s in the name:\n'</span> <span class="o">+</span> <span class="nx">ls</span><span class="p">().</span><span class="nx">grep</span><span class="p">(</span><span class="s1">'o'</span><span class="p">));</span>
<span class="nx">cat</span><span class="p">(</span><span class="s1">'test.js'</span><span class="p">).</span><span class="nx">exec</span><span class="p">(</span><span class="s1">'node'</span><span class="p">);</span> <span class="c1">// pipe to exec() call</span>
</pre></div>

<p>Commands can send their output to another command in a pipe-like fashion.<br>
<code>sed</code>, <code>grep</code>, <code>cat</code>, <code>exec</code>, <code>to</code>, and <code>toEnd</code> can appear on the right-hand<br>
side of a pipe. Pipes can be chained.</p>

<h2>
<a id="configuration" class="anchor" href="#configuration" aria-hidden="true"><span class="octicon octicon-link"></span></a>Configuration</h2>

<h3>
<a id="configsilent" class="anchor" href="#configsilent" aria-hidden="true"><span class="octicon octicon-link"></span></a>config.silent</h3>

<p>Example:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">sh</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'shelljs'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">silentState</span> <span class="o">=</span> <span class="nx">sh</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">silent</span><span class="p">;</span> <span class="c1">// save old silent state</span>
<span class="nx">sh</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">silent</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<span class="cm">/* ... */</span>
<span class="nx">sh</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">silent</span> <span class="o">=</span> <span class="nx">silentState</span><span class="p">;</span> <span class="c1">// restore old silent state</span>
</pre></div>

<p>Suppresses all command output if <code>true</code>, except for <code>echo()</code> calls.<br>
Default is <code>false</code>.</p>

<h3>
<a id="configfatal" class="anchor" href="#configfatal" aria-hidden="true"><span class="octicon octicon-link"></span></a>config.fatal</h3>

<p>Example:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">require</span><span class="p">(</span><span class="s1">'shelljs/global'</span><span class="p">);</span>
<span class="nx">config</span><span class="p">.</span><span class="nx">fatal</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// or set('-e');</span>
<span class="nx">cp</span><span class="p">(</span><span class="s1">'this_file_does_not_exist'</span><span class="p">,</span> <span class="s1">'/dev/null'</span><span class="p">);</span> <span class="c1">// throws Error here</span>
<span class="cm">/* more commands... */</span>
</pre></div>

<p>If <code>true</code>, the script will throw a Javascript error when any shell.js<br>
command encounters an error. Default is <code>false</code>. This is analogous to<br>
Bash's <code>set -e</code>.</p>

<h3>
<a id="configverbose" class="anchor" href="#configverbose" aria-hidden="true"><span class="octicon octicon-link"></span></a>config.verbose</h3>

<p>Example:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">config</span><span class="p">.</span><span class="nx">verbose</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// or set('-v');</span>
<span class="nx">cd</span><span class="p">(</span><span class="s1">'dir/'</span><span class="p">);</span>
<span class="nx">rm</span><span class="p">(</span><span class="s1">'-rf'</span><span class="p">,</span> <span class="s1">'foo.txt'</span><span class="p">,</span> <span class="s1">'bar.txt'</span><span class="p">);</span>
<span class="nx">exec</span><span class="p">(</span><span class="s1">'echo hello'</span><span class="p">);</span>
</pre></div>

<p>Will print each command as follows:</p>

<pre><code>cd dir/
rm -rf foo.txt bar.txt
exec echo hello
</code></pre>

<h3>
<a id="configgloboptions" class="anchor" href="#configgloboptions" aria-hidden="true"><span class="octicon octicon-link"></span></a>config.globOptions</h3>

<p>Example:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">config</span><span class="p">.</span><span class="nx">globOptions</span> <span class="o">=</span> <span class="p">{</span><span class="nx">nodir</span><span class="o">:</span> <span class="kc">true</span><span class="p">};</span>
</pre></div>

<p>Use this value for calls to <code>glob.sync()</code> instead of the default options.</p>

<h3>
<a id="configreset" class="anchor" href="#configreset" aria-hidden="true"><span class="octicon octicon-link"></span></a>config.reset()</h3>

<p>Example:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">shell</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'shelljs'</span><span class="p">);</span>
<span class="c1">// Make changes to shell.config, and do stuff...</span>
<span class="cm">/* ... */</span>
<span class="nx">shell</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span> <span class="c1">// reset to original state</span>
<span class="c1">// Do more stuff, but with original settings</span>
<span class="cm">/* ... */</span>
</pre></div>

<p>Reset <code>shell.config</code> to the defaults:</p>

<div class="highlight highlight-javascript"><pre><span class="p">{</span>
  <span class="nx">fatal</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="nx">globOptions</span><span class="o">:</span> <span class="p">{},</span>
  <span class="nx">maxdepth</span><span class="o">:</span> <span class="mi">255</span><span class="p">,</span>
  <span class="nx">noglob</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="nx">silent</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="nx">verbose</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
<span class="p">}</span>
</pre></div>

<h2>
<a id="team" class="anchor" href="#team" aria-hidden="true"><span class="octicon octicon-link"></span></a>Team</h2>

<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/nfischer"><img src="https://avatars.githubusercontent.com/u/5801521?s=130" alt="Nate Fischer" style="max-width:100%;"></a></th>
<th align="center"><a href="https://github.com/freitagbr"><img src="https://avatars1.githubusercontent.com/u/5988055?v=3&amp;s=130" alt="Brandon Freitag" style="max-width:100%;"></a></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a href="https://github.com/nfischer">Nate Fischer</a></td>
<td align="center"><a href="https://github.com/freitagbr">Brandon Freitag</a></td>
</tr>
</tbody>
</table></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>