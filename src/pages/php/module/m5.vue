<template>
    <div>
               <h4>
          lumen 从零开始创建项目 step0 
       </h4>
       <pre>
           下载 PHP
把PHP 添加到系统 环境变量
下载 composer 添加环境变量



composer global require "laravel/lumen-installer"

composer create-project --prefer-dist laravel/lumen blog

添加  lumen  laravel 到环境变量 
C:\Users\Administrator\AppData\Roaming\Composer\vendor\bin

配置 PHP 支持 MySQL 
1. 在 本机 的 PHP.INI 文件 中设置 extension_dir  语言支持包的路径为绝对路径
   比如 C:\Program Files\php-7.3.6-nts-Win32-VC15-x64\ext
2. extension=php_mysqli.dll  
   extension=pdo_mysql
extension=mysqli

配置 mysql  用户授权
在 mysql 的 my.ini 文件中
default_authentication_plugin=mysql_native_password

mysql -uroot -p
 
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码'

       </pre>
       <h4>lumen 从零开始创建项目 step1</h4>
       <pre>
       速查表 https://learnku.com/docs/laravel-cheatsheet/5.8
安装   支持laravel 命令 的依赖库
lumen-generator
https://github.com/flipboxstudio/lumen-generator
composer require flipbox/lumen-generator
$app->register(Flipbox\LumenGenerator\LumenGeneratorServiceProvider::class);

生成应用安全密钥
php artisan key:generate

自动生成引入文件
composer dump-auto

查看当前 支持命令 
php artisan

生成  Eloquent 模型 并 同时生成 数据库迁移文件
php artisan make:model  Test --migration OR -m

生成 seeder  数据库 模拟文件 
php artisan make:seeder  TestTableSeeder

生成  模型工厂类 文件  // 如果不支持 需要自己手动创建
php  artisan make:factory  TestModelFactory 

编写相对应的 迁移文件 ，工厂文件，模拟文件 
模拟文件内  调用用模型工厂  批量生成数据
factory(\App\User::class, 5)->create();

根据数据表生成迁移文件
 // --database   指定数据库连接（下同）
 // --force      当处于生产环境时强制执行，不询问（下同）
 // --path       指定单独迁移文件地址
 // --pretend    把将要运行的 SQL 语句打印出来（下同）
 // --seed       Seed 任务是否需要被重新运行（下同）
php artisan migrate [--database[='....']] [--force] [--path[='....']] [--pretend] [--seed]
// 创建迁移数据库表
php artisan migrate:install [--database[="..."]]
生成/重置所有数据表
php artisan migrate[:fresh]

生成所有假数据
php artisan db:seed 

生成 控制器
php  artisan make:controller TestController  [--plain]
php artisan make:controller PostController --resource
Route::resource('tasks', 'TaskController')

生成 中间件
php artisan make:middleware LoginMiddleware

其他的 事件 队列 服务注册 邮件 监听 轮询 等等 根据 需要自己 添加
均有相应 命令 查看速查表 artisan 

对于 多数项目必须的 命令 如下
  make:controller     Create a new controller class
  make:event          Create a new event class
  make:job            Create a new job class
  make:listener       Create a new event listener class
  make:mail           Create a new email class
  make:middleware     Create a new middleware class
  make:migration      Create a new migration file
  make:model          Create a new Eloquent model class
  make:policy         Create a new policy class
  make:provider       Create a new service provider class

key:generate      Set the application key

make:command      Create a new Artisan command
make:controller   Create a new controller class
make:event        Create a new event class
make:job          Create a new job class
make:listener     Create a new event listener class
make:mail         Create a new email class
make:middleware   Create a new middleware class
make:migration    Create a new migration file
make:model        Create a new Eloquent model class
make:policy       Create a new policy class
make:provider     Create a new service provider class
make:seeder       Create a new seeder class
make:test         Create a new test class


    
       </pre>
<h4>
lumen 从零开始创建项目 step2
</h4>
<pre>
<code>
    建表 数据 填充 

Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("name");
            $table->integer('age');
            $table->string('country');
            $table->string("email");
            $table->text("description");
            $table->date("borntime");
            $table->timestamps();
        });

    Schema::create('cafes', function( Blueprint $table ){
        $table->increments('id');
        $table->string('name');
        $table->text('address');
        $table->string('city');
        $table->string('state');
        $table->string('zip');
        $table->decimal('latitude', 11, 8);
        $table->decimal('longitude', 11, 8);
        $table->timestamps();
    });

'password' => bcrypt('vienblog'),

        Schema::create('admin_users', function(Blueprint $table)
        {
            $table->increments('id')->comment('ID');
            $table->string('username')->unique('users_username_unique')->comment('用户名');
            $table->string('email')->unique('users_email_unique')->comment('邮件');
            $table->string('mobile', 11)->nullable()->comment('手机号码');
            $table->smallInteger('sex')->default(1)->comment('性别');
            $table->string('password', 60)->comment('密码');
            $table->string('remember_token', 100)->nullable()->comment('TOKEN');
            $table->timestamps();
        });
    }


$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [

        'name' => $faker->name,
        "age" => $faker ->age,
        "country" => $faker ->country,
        'email' => $faker->email,
        'description' => $faker->realText($maxNbChars = 200, $indexSize = 1),
        "borntime" => $faker->dateTime($max = 'now', $timezone = null),
    ];
});


    public function run()
    {
        //
        factory(\App\User::class, 100)->create();
    }

    public function run()
    {
        \DB::table('admin_users')->delete();
        \DB::table('admin_users')->insert(array (
            0 => 
                array (
                    'id'                =>  1,
                    'username'          =>  'admin',
                    'email'             =>  'admin@admin.com',
                    'mobile'            =>  '18888888888',
                    'sex'               =>  1,
                    'password'          =>  '$2y$10$0nZ2IJJQzkuwTUvmsxVCYOAFw09sGceAk5b9p.AQ.h7I0YEj975rO', //f123456
                    'remember_token'    =>  '',
                    'created_at'        =>  date('Y-m-d H:i:s',time()),
                    'updated_at'        =>  date('Y-m-d H:i:s',time()),
                ),
            )
        );
    }
}




    public function up()
    {
        Schema::create('blog_articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->unique();
            $table->string('title', 255)->default('')->comment('title');
            $table->string('keywords')->default('')->comment('keywords');
            $table->string('description', 255)->default('')->comment('description');
            $table->longText('markdown')->nullable()->comment('markdown content');
            $table->integer('user_id')->default(0)->comment('author id');
            $table->integer('cate_id')->default(0)->comment('category id');
            $table->integer('comment_count')->default(0)->comment('comment count');
            $table->integer('read_count')->default(0)->comment('read count');
            $table->tinyInteger('status')->default(1)->comment('status: 1-public;0-private');
            $table->integer('sort')->default(0)->comment('sort');
            $table->tinyInteger('is_top')->default(0)->comment('sticky to top');
            $table->integer('updated_at');
            $table->integer('created_at');
            $table->integer('deleted_at')->nullable();
            $table->index('title');
            $table->index('cate_id');
            $table->index('user_id');
            $table->index('created_at');
        });
    }
</code>
</pre>
<h4>
lumen 从零开始创建项目 step3
</h4>
<pre>
    <code>
        资源类 给返回的数据变形封装， 取出自己需要的  
https://laravelacademy.org/post/19536.html

protected $hidden = ['password'];
protected $visible = ['first_name', 'last_name'];
return $user->makeVisible('attribute')->toArray();
return $user->makeHidden('attribute')->toArray();
return $user->append('is_admin')->toArray();

return $user->setAppends(['is_admin'])->toArray();
protected $casts = [
    'birthday' => 'date:Y-m-d',
    'joined_at' => 'datetime:Y-m-d H:00',
];

php artisan make:resource UserCollection

use App\User;
use App\Http\Resources\UserCollection;

Route::get('/users', function () {
    return new UserCollection(User::paginate());
});

&lt;?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
        ];
    }

    /**
     * Customize the outgoing response for the resource.
     *
     * @param  \Illuminate\Http\Request
     * @param  \Illuminate\Http\Response
     * @return void
     */
    public function withResponse($request, $response)
    {
        $response->header('X-Value', 'True');
    }
}
    </code>
</pre>
<h4>
lumen 从零开始创建项目 step4
</h4>
<pre>
   获取  get 请求参数 
一种 是 路径里面的参数   
/aaa/{id}   =====> $id

另一种 
/aaa/vvv?aa=33   =====> $route=$request->route(); $route[2]['url参数'];

post  请求的 获取参数  和文档一样 
$request->input();


 
</pre>
 

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>