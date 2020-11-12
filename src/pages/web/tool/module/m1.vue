<template>
    <div>
  <h1>git</h1>
<h2>git工作流程</h2>
<h3>工作流程</h3>
<h2>git常用操作命令</h2>
<h3>git创建仓库</h3>
<ul>
<li><p>git init</p>
</li>
<li><p>git clone</p>
<p>格式：</p>
<p>git clonerepo [directory]</p>
<p>参数说明：</p>
<p>repo:Git 仓库。</p>
<p>directory:本地目录。</p>
</li>
</ul>
<h3>git基本操作</h3>
<ul>
<li><p>获取与创建项目命令</p>
<ul>
<li>git init</li>
<li>git clone</li>
</ul>
</li>
<li><p>基本快照</p>
<ul>
<li><p>git add</p>
<p>git add 命令可将该文件添加到缓存</p>
</li>
<li><p>git status</p>
<p>git status 以查看在你上次提交之后是否有修改。</p>
</li>
<li><p>git diff</p>
<p>执行 git diff 来查看执行 git status 的结果的详细信息。</p>
<p>&nbsp;</p>
<p>尚未缓存的改动：git diff</p>
<p>查看已缓存的改动： git diff --cached</p>
<p>查看已缓存的与未缓存的所有改动：git diff HEAD</p>
<p>显示摘要而非整个 diff：git diff --stat</p>
</li>
<li><p>git commit</p>
<p>使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。</p>
<p>&nbsp;</p>
<p>注意：常用格式:</p>
<p>git commit -m  &quot;content&quot;</p>
</li>
<li><p>git reset HEAD</p>
<p>git reset HEAD 命令用于取消已缓存的内容。</p>
</li>
<li><p>git rm</p>
<p>如果只是简单地从工作目录中手工删除文件，运行 git status 时就会在 Changes not staged for commit 的提示。</p>
<p>&nbsp;</p>
<p>要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除，然后提交。</p>
<p>git rm file</p>
<p>&nbsp;</p>
<p>如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f</p>
<p>git rm -f file</p>
<p>&nbsp;</p>
<p>如果把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 --cached 选项即可</p>
<p>git rm --cached file</p>
</li>
</ul>
</li>
</ul>
<h3>git 分支管理</h3>
<ul>
<li><p>列出分支</p>
<ul>
<li>git branch</li>
</ul>
</li>
<li><p>切换分支</p>
<ul>
<li>git checkout</li>
</ul>
</li>
<li><p>创建分支</p>
<ul>
<li><p>git checkout -b (branchname)</p>
<p>我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。</p>
</li>
</ul>
</li>
<li><p>删除分支</p>
<ul>
<li>git branch -d (branchname)</li>
</ul>
</li>
<li><p>合并分支</p>
<ul>
<li>git merge</li>
</ul>
</li>
<li><p>合并冲突</p>
</li>
</ul>
<h3>git查看提交历史</h3>
<ul>
<li><p>git log</p>
<p>用 --oneline 选项来查看历史记录的简洁的版本。
$ git log --oneline
用 --graph 选项，查看历史中什么时候出现了分支、合并。
git log --oneline --graph
你也可以用 &#39;--reverse&#39;参数来逆向显示所有日志
git log --reverse --oneline
指定用户的提交日志可以使用命令：git log --author 
git log --author=Linus --oneline -5
如果你要指定日期，可以执行几个选项：--since 和 --before，但是你也可以用 --until 和 --after
$ git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges</p>
</li>
</ul>
<h2>Git</h2>
<h3>Git 设置</h3>
<ul>
<li><p>配置 user.name 和 user.email</p>
<ul>
<li><p>命令</p>
<ul>
<li>git config --global user.name &#39;theon&#39;</li>
<li>git config --global user.email &#39;xien.xiaohongshu.com&#39;</li>
</ul>
</li>
<li><p>config 的三个作用域</p>
<ul>
<li>--local 只对某个仓库有效</li>
<li>--global 对当前用户的所有仓库有效</li>
<li>--system 对系统所有登陆的用户有效</li>
</ul>
</li>
<li><p>显示 config 的配置，加 --list</p>
<ul>
<li>git config --list --local</li>
<li>git config --list --global</li>
<li>git config --list --system</li>
</ul>
</li>
</ul>
</li>
<li><p>.git 文件解析</p>
<ul>
<li><p>HEAD</p>
<ul>
<li><p>ref: refs/heads/master</p>
<ul>
<li>引用 ：本地仓库 正处于哪个分支 </li>
</ul>
</li>
<li><p>不跟任何的分支挂钩 如果处于分离头指针的状态，指向最近的一次 commit</p>
</li>
</ul>
</li>
<li><p>config </p>
<ul>
<li>当前工作路径下的 配置信息</li>
</ul>
</li>
<li><p>refs</p>
<ul>
<li><p>heads</p>
<ul>
<li>落脚于某次 commit</li>
</ul>
</li>
<li><p>tags (标签/里程碑)</p>
<ul>
<li>使用场景： 记录重要信息 比如 1.0 发版</li>
</ul>
</li>
</ul>
</li>
<li><p>其他命令</p>
<ul>
<li><p>查看 git文件的 类型，使用参数 -t</p>
<ul>
<li>git cat-file -t  80565b73e7d2f0a2b5b9667c0b34</li>
</ul>
</li>
<li><p>查看  git 文件的内容 参数 -p</p>
<ul>
<li>git cat-file -p  xxxxcommit_hash</li>
</ul>
</li>
<li><p>查看 文件夹中是否有内容</p>
<ul>
<li>find .git/objects -type f</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>git 图形化界面</p>
<ul>
<li><p>查看所有分支的log</p>
<ul>
<li>gitk --all</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>基础</h3>
<ul>
<li><p>建立 git 仓库</p>
<ul>
<li><p>把已有本地项目纳入 git 管理</p>
<ul>
<li><p>cd 文件夹</p>
<ul>
<li>git init</li>
</ul>
</li>
</ul>
</li>
<li><p>新建 使用 git 来管理的项目</p>
<ul>
<li><p>cd 文件夹</p>
<ul>
<li><p>git init  my_project </p>
<ul>
<li>cd my_project</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>提交</p>
<ul>
<li><p>添加到暂存区</p>
<ul>
<li><p>添加 已经被git跟踪的文件</p>
<ul>
<li>git add -u</li>
</ul>
</li>
<li><p>添加 指定文件 </p>
<ul>
<li>git  add styles/style.css</li>
</ul>
</li>
</ul>
</li>
<li><p>从暂存区删除</p>
<ul>
<li>git rm readme</li>
</ul>
</li>
<li><p>把工作区的内容 直接创建到 版本历史库里面</p>
<ul>
<li>git commit -am&#39;Add test&#39;</li>
</ul>
</li>
<li><p>清理 当前暂存区的 所有变更</p>
<ul>
<li>git reset --hard</li>
</ul>
</li>
<li><p>重命名文件</p>
<ul>
<li>git mv readme readme.md</li>
</ul>
</li>
<li><p>修改 commit 提交信息</p>
<ul>
<li><p>修改最近的一次提交的信息 </p>
<ul>
<li>git commit --amend</li>
</ul>
</li>
<li><p>修改任意提交的信息( 变基 )</p>
<ul>
<li><p>git rebase -i commitId (要选择 想更改的这次commit 的父亲级 commitId，作为 commitId)</p>
</li>
<li><p>commit 对应的文件  以及文件内容 不会发生变化</p>
<ul>
<li>tree中的 blob 是没有发生变化的</li>
</ul>
</li>
<li><p>r ,rewrite</p>
<ul>
<li>修改某一次的提交记录</li>
</ul>
</li>
<li><p>s, squash</p>
<ul>
<li>修改 提交信息 并且合并到上一次提交</li>
</ul>
</li>
<li><p>ommit 次数不够用时，可以复制 一次父亲级 commitId 放到交互式界面 第一行,让别的记录往里面融合</p>
<ul>
<li>git rebase --continue</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>查看 版本演变历史</p>
<ul>
<li><p>提交记录</p>
<ul>
<li><p>查看当前分支的历史</p>
<ul>
<li>git log</li>
</ul>
</li>
<li><p>简洁版 一行显示的 </p>
<ul>
<li>git log --oneline</li>
<li>git log --oneline --all</li>
</ul>
</li>
<li><p>最近的 n 次提交记录</p>
<ul>
<li>git log -n4 --oneline</li>
<li>git  log --oneline --all -n4</li>
</ul>
</li>
<li><p>查看所有分支的历史</p>
<ul>
<li>git log --all</li>
<li>git log --all --graph</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>比较 diff</p>
<ul>
<li><p>比较具体的两次 commit</p>
<ul>
<li>git diff commithash1  commitxxxhash2</li>
</ul>
</li>
<li><p>比较暂存区和上一次提交状态（HEAD）  之间的区别</p>
<ul>
<li>git diff --cached</li>
</ul>
</li>
<li><p>比较的是 工作区和暂存区的区别</p>
<ul>
<li><p>git diff</p>
<ul>
<li>git diff -- readme.md </li>
</ul>
</li>
</ul>
</li>
<li><p>指代 commit</p>
<ul>
<li><p>git diff HEAD HEAD^</p>
<ul>
<li>比较上次提交 和 上上次提交的差异</li>
</ul>
</li>
<li><p>git diff HEAD HEAD^^</p>
<ul>
<li>比较上次提交  和 上上上次提交的差异</li>
</ul>
</li>
</ul>
</li>
<li><p>比较两个分支之间的区别</p>
<ul>
<li><p>git diff  master temp</p>
</li>
<li><p>git diff master temp -- index.html</p>
</li>
<li><p>git diff ce9a7907 d7d5dbd -- index.html </p>
<ul>
<li>对不同分支上的不同 commit 的提交 做比较</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>变更</p>
<ul>
<li><p>reset</p>
<ul>
<li><p>改暂存区</p>
<ul>
<li><p>把暂存区 恢复成 HEAD</p>
<ul>
<li><p>git reset HEAD</p>
<ul>
<li>git diff --cached</li>
</ul>
</li>
<li><p>git reset HEAD -- readme.md index.html</p>
</li>
</ul>
</li>
<li><p>恢复到某一次 commit</p>
<ul>
<li>git reset --hard commitId</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>checkout</p>
<ul>
<li><p>改工作区</p>
<ul>
<li><p>把工作区内容 恢复成  暂存区</p>
<ul>
<li>git checkout -- index.html</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>临时存储</p>
<ul>
<li><p>存储</p>
<ul>
<li>git stash</li>
</ul>
</li>
<li><p>从 存储 中取出放到工作区 + 存储信息保留 可以反复使用</p>
<ul>
<li>git stash apply</li>
</ul>
</li>
<li><p>从 存储 中取出放到工作区 + 存储信息出栈  无法找到原有的记录</p>
<ul>
<li>git stash pop</li>
</ul>
</li>
<li><p>git stash list</p>
<ul>
<li>查看 堆栈</li>
</ul>
</li>
</ul>
</li>
<li><p>hash 值长短问题</p>
<ul>
<li>只要 hash 值足够说明唯一性，即可</li>
</ul>
</li>
<li><p>删除文件</p>
<ul>
<li><p>git rm readme.md</p>
<ul>
<li>把文件 从工作区删除 并在暂存区 也删除</li>
</ul>
</li>
</ul>
</li>
<li><p>.gitignore</p>
<ul>
<li><p>abc</p>
<ul>
<li>文件名是 abc 和 abc 文件夹下的内容  都不放入 git版本库</li>
</ul>
</li>
<li><p>abc/</p>
<ul>
<li>git 只管理 abc 文件夹下的文件</li>
</ul>
</li>
</ul>
</li>
<li><p>git 仓库的备份</p>
<ul>
<li><p>传输协议</p>
<ul>
<li><p>本地协议</p>
<ul>
<li><p>哑协议</p>
<ul>
<li>/path/to/repo.git</li>
</ul>
</li>
<li><p>智能协议</p>
<ul>
<li>file:///path/to/repo.git</li>
</ul>
</li>
</ul>
</li>
<li><p>http / https</p>
<ul>
<li><a href='http://git-server.com:port/path/to/repo.git' target='_blank' class='url'>http://git-server.com:port/path/to/repo.git</a></li>
</ul>
</li>
<li><p>ssh 协议</p>
<ul>
<li><a href='mailto:user@git-server.com' target='_blank' class='url'>user@git-server.com</a>:path/to/repo.git</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>分支操作</h3>
<ul>
<li><p>查看本地分支</p>
<ul>
<li>git branch -v</li>
</ul>
</li>
<li><p>分离头指针(detached HEAD)</p>
<ul>
<li>即当前变更 未跟任何的分支挂钩</li>
<li>切换到别的分支时，若不与某个分支挂钩，可能会被 git 当成辣鸡清除</li>
</ul>
</li>
<li><p>删除分支</p>
<ul>
<li>git branch -D db6964b</li>
</ul>
</li>
</ul>
<h2>Git流程梳理与理解 </h2>
<h3>Git的四个区域</h3>
<ul>
<li><p>工作区</p>
<ul>
<li>本地电脑存放项目文件的地方，比如learnGitProject文件夹；</li>
</ul>
</li>
<li><p>暂存区（Index/Stage）</p>
<ul>
<li>在使用git管理项目文件的时候，其本地的项目文件会多出一个.git的文件夹，将这个.git文件夹称之为版本库。其中.git文件夹中包含了两个部分，一个是暂存区（Index或者Stage）,顾名思义就是暂时存放文件的地方，通常使用add命令将工作区的文件添加到暂存区里；</li>
</ul>
</li>
<li><p>本地仓库</p>
<ul>
<li>.git文件夹里还包括git自动创建的master分支，并且将HEAD指针指向master分支。使用commit命令可以将暂存区中的文件添加到本地仓库中；</li>
</ul>
</li>
<li><p>远程仓库</p>
<ul>
<li>不是在本地仓库中，项目代码在远程git服务器上，比如项目放在github上，就是一个远程仓库，通常使用clone命令将远程仓库拷贝到本地仓库中，开发后推送到远程仓库中即可；</li>
</ul>
</li>
</ul>
<h3>git工作区、暂存区和版本库</h3>
<ul>
<li><p>图示</p>
<ul>
<li><p>工作区</p>
<p>工作区：就是你在电脑里能看到的目录。</p>
</li>
<li><p>暂存区</p>
<p>暂存区：英文叫stage, 或index。一般存放在 &quot;.git目录下&quot; 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</p>
</li>
<li><p>版本库</p>
<p>版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。</p>
</li>
<li><p>子主题 4</p>
</li>
</ul>
</li>
</ul>
<h3>Git常用操作命令</h3>
<ul>
<li><p>工作区上的操作命令</p>
<ul>
<li><p>新建仓库</p>
<ul>
<li><p>（1）将工作区中的项目文件使用git进行管理，即创建一个新的本地仓库：git init；</p>
</li>
<li><p>（2）从远程git仓库复制项目：git clone  url </p>
<ul>
<li>克隆项目时如果想定义新的项目名，可以在clone命令后指定新的项目名：git clone git://github.com/wasd/example.git mygit</li>
</ul>
</li>
</ul>
</li>
<li><p>提交</p>
<ul>
<li><p>（1）提交工作区所有文件到暂存区</p>
<ul>
<li>git add .</li>
</ul>
</li>
<li><p>（2）提交工作区中指定文件到暂存区</p>
<ul>
<li>git add  file1   file2  ...</li>
</ul>
</li>
<li><p>（3）提交工作区中某个文件夹中所有文件到暂存区</p>
<ul>
<li>git add [dir]</li>
</ul>
</li>
</ul>
</li>
<li><p>撤销</p>
<ul>
<li><p>（1）删除工作区文件，并且也从暂存区删除对应文件的记录</p>
<ul>
<li>git rm  file1 file2 </li>
</ul>
</li>
<li><p>（2）从暂存区中删除文件，但是工作区依然还有该文件</p>
<ul>
<li>git rm --cached file</li>
</ul>
</li>
<li><p>（3）取消暂存区已经暂存的文件</p>
<ul>
<li>git reset HEAD file...</li>
</ul>
</li>
<li><p>（4）撤销上一次对文件的操作</p>
<ul>
<li>git checkout --file。要确定上一次对文件的修改不再需要，如果想保留上一次的修改以备以后继续工作，可以使用stashing和分支来处理</li>
</ul>
</li>
</ul>
</li>
<li><p>更新文件</p>
<ul>
<li><p>重命名文件，并将已改名文件提交到暂存区</p>
<ul>
<li>git mv [file-original] [file-renamed]</li>
</ul>
</li>
</ul>
</li>
<li><p>查新信息</p>
<ul>
<li><p>（1）查询当前工作区所有文件的状态</p>
<ul>
<li>git status</li>
</ul>
</li>
<li><p>（2）比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容：git diff；指定文件在工作区和暂存区上差异比较</p>
<ul>
<li>git diff [file-name]</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>暂存区上的操作命令</p>
<ul>
<li><p>提交文件到版本库</p>
<ul>
<li><p>（1）将暂存区中的文件提交到本地仓库中，即打上新版本</p>
<ul>
<li>git commit -m &quot;commit_info&quot;</li>
</ul>
</li>
<li><p>（2）将所有已经使用git管理过的文件暂存后一并提交，跳过add到暂存区的过程</p>
<ul>
<li>git commit -a -m &quot;commit_info&quot;</li>
</ul>
</li>
<li><p>（3）提交文件时，发现漏掉几个文件，或者注释写错了，可以撤销上一次提交</p>
<ul>
<li>git commit --amend</li>
</ul>
</li>
</ul>
</li>
<li><p>查看信息</p>
<ul>
<li><p>（1）比较暂存区与上一版本的差异</p>
<ul>
<li>git diff --cached</li>
</ul>
</li>
<li><p>（2）指定文件在暂存区和本地仓库的不同</p>
<ul>
<li>git diff [file-name] --cached</li>
</ul>
</li>
<li><p>（3）查看提交历史</p>
<ul>
<li>git log；参数-p展开每次提交的内容差异，用-2显示最近的两次更新，如git log -p -2;</li>
</ul>
</li>
</ul>
</li>
<li><p>分支管理</p>
<ul>
<li><p>创建与合并分支</p>
<ul>
<li><p>（1）查看分支</p>
<ul>
<li>git branch</li>
</ul>
</li>
<li><p>（2）创建分支</p>
<ul>
<li>git branch [name]</li>
</ul>
</li>
<li><p>（3）切换分支</p>
<ul>
<li>git checkout [name]</li>
</ul>
</li>
<li><p>（4）创建+切换分支</p>
<ul>
<li>git checkout -b [name]</li>
</ul>
</li>
<li><p>（5）合并某分支到当前分支</p>
<ul>
<li>git merge [name]</li>
</ul>
</li>
<li><p>（6）删除分支</p>
<ul>
<li>git branch -d [name]</li>
</ul>
</li>
</ul>
</li>
<li><p>解决冲突</p>
<ul>
<li>当一个分支与另一个分支有冲突时，如使用merge语句进行合并，那么则需要手动解决冲突，git status也可以告诉我们冲突的文件，Git用&lt;&lt;&lt;&lt;&lt;&lt;&lt;，=======，&gt;&gt;&gt;&gt;&gt;&gt;&gt;标记出不同分支的内容，我们修改如下后提交：$ git add readme.txt 
$ git commit -m &quot;conflict fixed&quot;，最后，删除feature1分支：$ git branch -d feature1</li>
</ul>
</li>
<li><p>BUG分支</p>
<ul>
<li>修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；</li>
<li>当手头工作没有完成时，先把工作现场git stash一下，然后去修复bug，修复后，再git stash pop，回到工作现场。</li>
</ul>
</li>
<li><p>Feature分支</p>
<ul>
<li>开发一个新feature，最好新建一个分支；</li>
<li>如果要丢弃一个没有被合并过的分支，可以通过git branch -D [name]强行删除。</li>
</ul>
</li>
<li><p>多人协作</p>
<ul>
<li><p>（1）首先，可以试图用git push origin [branch-name]推送自己的修改；</p>
</li>
<li><p>（2）如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；</p>
</li>
<li><p>（3）如果合并有冲突，则解决冲突，并在本地提交；</p>
</li>
<li><p>（4）没有冲突或者解决掉冲突后，再用git push origin [branch-name]推送就能成功！</p>
</li>
<li><p>如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to [branch-name] origin/[branch-name]。</p>
</li>
<li><p>小结</p>
<ul>
<li>查看远程库信息，使用git remote -v；</li>
<li>本地新建的分支如果不推送到远程，对其他人就是不可见的；</li>
<li>从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；</li>
<li>在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；</li>
<li>建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；</li>
<li>从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。</li>
</ul>
</li>
<li><p>示例</p>
<ul>
<li>【成员一： 初始仓库操作】</li>
<li>【成员一： 建立dev分支操作】</li>
<li>【成员二：改动dev分支操作】</li>
<li>【成员一：之后再改动dev分支】</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>复杂分支操作</p>
<ul>
<li><p>（1）把远程分支合并到当前分支</p>
<ul>
<li>git merge [remote-name]/[branch-name]，如git merge origin/serverfix；</li>
<li>如果是单线的历史分支不存在任何需要解决的分歧，只是简单的将HEAD指针前移，所以这种合并过程可以称为快进（Fast forward），而如果是历史分支是分叉的，会以当前分叉的两个分支作为两个祖先，创建新的提交对象；如果在合并分支时，遇到合并冲突需要人工解决后，再才能提交；</li>
</ul>
</li>
<li><p>（2）在远程分支的基础上创建新的本地分支</p>
<ul>
<li>git checkout -b [branch-name] [remote-name]/[branch-name]，如git checkout -b serverfix origin/serverfix;</li>
</ul>
</li>
<li><p>（3）从远程分支checkout出来的本地分支，称之为跟踪分支。</p>
<ul>
<li>在跟踪分支上向远程分支上推送内容：git push。该命令会自动判断应该向远程仓库中的哪个分支推送数据</li>
<li>在跟踪分支上合并远程分支：git pull</li>
</ul>
</li>
<li><p>（4）将一个分支里提交的改变移到基底分支上重放一遍</p>
<ul>
<li>git rebase [rebase-branch] [branch-name]，如git rebase master server；将特性分支server提交的改变在基底分支master上重演一遍；使用rebase操作最大的好处是像在单个分支上操作的，提交的修改历史也是一根线；</li>
<li>如果想把基于一个特性分支上的另一个特性分支变基到其他分支上，可以使用--onto操作：git rebase --onto [rebase-branch]  [feature branch] [sub-feature-branch]，如git rebase --onto master server client；</li>
<li>使用rebase操作应该遵循的原则是：一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行rebase操作；</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>本地仓库上的操作</p>
<ul>
<li><p>查看本地仓库关联的远程仓库</p>
<ul>
<li>git remote -v</li>
<li>在克隆完每个远程仓库后，远程仓库默认为origin;加上-v的参数后，会显示远程仓库的url地址；</li>
</ul>
</li>
<li><p>为本地仓库添加远程关联仓库，一般会取一个简短的别名</p>
<ul>
<li><p>git remote add [remote-name] [url]，比如：git remote add example git://github.com/example/example.git;</p>
<ul>
<li>不过一般都起 origin</li>
</ul>
</li>
<li><p>了便于管理，Git要求每个远程主机都必须指定一个主机名。git remote命令就用于管理主机名。</p>
</li>
</ul>
</li>
<li><p>将本地仓库某分支推送到远程仓库上</p>
<ul>
<li><p>git push [remote-name] [branch-name]，如git push origin master</p>
<ul>
<li>git push -u origin master第一次从本地仓库推送空的远程仓库时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。</li>
</ul>
</li>
<li><p>如果想将本地分支推送到远程仓库的不同名分支</p>
<ul>
<li>git push  remote-name   local-branch : remote-branch ，如git push origin serverfix:awesomebranch</li>
</ul>
</li>
<li><p>如果想删除远程分支</p>
<ul>
<li>git push [romote-name] : remote-branch ，如git push origin :serverfix。这里省略了本地分支，也就相当于将空白内容推送给远程分支，就等于删掉了远程分支。</li>
</ul>
</li>
</ul>
</li>
<li><p>从远程仓库中抓取本地仓库中没有的更新</p>
<ul>
<li>git fetch [remote-name]，如git fetch origin</li>
<li>使用fetch只是将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。（只更新了commit id，git fetch命令通常用来查看其他人的进程，因为它取回的代码对你本地的开发代码没有影响。）如果设置了某个分支关联到远程仓库的某个分支的话，可以使用git pull来拉去远程分支的数据，然后将远端分支自动合并到本地仓库中的当前分支；</li>
</ul>
</li>
<li><p>查看远程仓库的详细信息</p>
<ul>
<li>git remote show origin</li>
</ul>
</li>
<li><p>版本回退</p>
<ul>
<li><p>在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。</p>
<ul>
<li>git reset --hard HEAD^</li>
</ul>
</li>
<li><p>回到未来</p>
<ul>
<li>git reset --hard 1094a （可使用git reflog来查看commit ID）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>忽略文件.gitignore</h3>
<ul>
<li>一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。</li>
</ul>
<p><em>XMind: ZEN - Trial Version</em></p>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
</style>