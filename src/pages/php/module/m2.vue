<template>
    <div>
   <pre>
       laravel artisan命令
       https://laravelacademy.org/laravel-docs-5_8
https://learnku.com/docs/lumen/5.7
流程： 创建model -m 生成数据库迁移文件migration
配置数据库迁移文件 
配置 数据库模拟文件 seeds


添加加载依赖项
composer require laravel/socialite
自动生成引入文件
composer dump-auto

php artisan make:controller TaskController
// restful 风格
php artisan make:controller PostController --resource
Route::resource('tasks', 'TaskController')
//隐式控制器
// Route::controller('foods','FoodsController');
// restful 风格
// Route::resource('foods','FoodsController');

php artisan make:middleware LoginMiddleware
数据库迁移
php artisan make:migration goods
php artisan migrate 
php artisan migrate:refresh
模拟数据 
php artisan make:seeder UsersTableSeeder
php artisan db:seed --class=UsersTableSeeder
php artisan db:seed
迁移加上模拟数据
php artisan migrate --seed 
php artisan migrate:refresh --seed

debugbar 安装
composer require barryvdh/laravel-debugbar
在 config/app.php 里面的providers添加
Barryvdh\Debugbar\ServiceProvider::class

eloquent
orm 数据库操作模型  
config/database.php
$app->withEloquent();
https://laravelacademy.org/post/19531.html

创建数据库交互模型文件
php artisan make:model Model/Order
php artisan make:model Order -m  //自动建立一个对应数据库迁移文件
模型限定规则
模型对应的数据库表名规则：单复数关系 User=>Users  或者 Users=>Users   lay=>laies
主键id  

model文件非默认规则(打破潜规则)：对应更改：
public $table="user"; 
public $primaryKey ="cid";
public $timestamps =false;









   </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>