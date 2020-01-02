<template>
    <div>

        <pre>
     git  关联本地分支到 Github 项目主干并第一次提交代码的示例       
cd blog
git init
git remote add origin https://github.com/nonfu/laravel-tutorial-code
git add .
git commit -m '新建一个Laravel项目'
git branch --set-upstream-to=origin/master master
git pull origin master --allow-unrelated-histories
git push 
        </pre>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>