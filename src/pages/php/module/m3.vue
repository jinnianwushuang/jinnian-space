<template>
    <div>
        <pre>
            laravel  seeder 填充器
            参考页面
https://laravelacademy.org/post/9694.html
模拟数据 
php artisan make:seeder UsersTableSeeder
php artisan db:seed --class=UsersTableSeeder
php artisan db:seed 一次 运行填充所有

seeder  文件 的 run  方法 内容 可以如下 生成数据

第一种方法
DB::table('users')->insert([
        'name' => str_random(10),
        'email' => str_random(10).'@gmail.com',
        'password' => bcrypt('secret'),
    ]);

第二种
        $arr=[];

        for($i=0;$i&lt;100;$i++){
            $tmp=[];
            $tmp['country']=str_random(20);
            $tmp['name']=str_random(10);
            $arr[]=$tmp;
        }

        DB::table('tests')->insert($arr);

第三种
factory(\App\User::class, 5)->create();
        </pre>
        <pre>
            数据库操作

            参考 
https://laravelacademy.org/post/19520.html#toc_1
增删改查
https://laravelacademy.org/post/9697.html#toc_0

https://laravelacademy.org/post/9698.html

首先 config/database.php 或者 lumen  的 bootstarp/app.php 开启门面 开启 eloqument
参考 

$users = DB::connection('read')->select(...);
$users = DB::table('users')->get();
$name = '学院君';
$users = DB::table('users')->where('name', $name)->get();
$user = DB::table('users')->where('name', $name)->first();
$user = DB::table('users')->select('id', 'name', 'email')->where('name', $name)->first();
        </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>