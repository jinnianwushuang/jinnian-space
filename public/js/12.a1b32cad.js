(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"1b62":function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return d})),t("4de4"),t("c975");var a=t("448a"),r=t.n(a),s=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],o="linux/heima-Linux云计算",i={name:"Container",data:function(){return{prefix:o,book_options:s,book_options_all:[],show:!0,book:s[0],src:""}},created:function(){this.book_options_all=r()(this.book_options),this.src=this.$utils.compute_book_src(this.prefix+this.book)},watch:{book:function(e,n){e&&this.change_book()}},methods:{change_book:function(){console.log("this.book",this.book),this.src=this.$utils.compute_book_src(this.prefix+this.book)},filterFn:function(e,n){var t=this;n(""!==e?function(){var n=e.toLowerCase();t.book_options=t.book_options_all.filter((function(e){return e.toLowerCase().indexOf(n)>-1}))}:function(){t.book_options=t.book_options_all})}}},l=t("ded3"),u=t.n(l),c=t("2f62"),m={data:function(){return{tab:"",tab_level:1,is_active:!1}},computed:u()({},Object(c["c"])(["get_current_selected_right_menu"])),created:function(){this.is_active=!0,this.fix_right_menu_config()},watch:{tab:function(){this.tab||this.fix_right_menu_config()},get_current_selected_right_menu:function(e,n){this.tab=this.get_current_selected_right_menu["t"+this.tab_level]}},methods:u()(u()({},Object(c["b"])(["set_right_menu_fix_config"])),{},{fix_right_menu_config:function(){this.set_right_menu_fix_config({tl:this.tab_level,tabs:this.tabs||[],tv:this.tab||this.tabs[0]["value"]})}}),beforeDestroy:function(){this.is_active=!1}},d=(t("99af"),t("caad"),t("d81d"),t("a434"),t("07ac"),t("2532"),{data:function(){return{workSheetsFromFile:[[{data:[]}]],table_title:"",column:8,word_total:0,table_data:[],thead_data:[],column_options:[2,3,4,5,6,7,8],exclude_thead_data:!0,show_empty_line:!1}},created:function(){this.init_workSheetsFromFile(),this.init_column(),this.init_data()},methods:{init_workSheetsFromFile:function(){},init_column:function(){var e=this.$q.platform.is.desktop,n=window.innerWidth;n=e?n-200:n,n=n<370?370:n,console.log("ww",n);var t=Math.ceil(n/350);t=1==t?2:t,t=t>8?8:t,this.column=t},compute_thead_data_style:function(e){var n="",t=1==e.length&&this.thead_data.includes(e[0]);return n=t?"bg-teal-4":"",n},handle_column_change:function(){this.init_data()},compute_if_show:function(e){if(this.show_empty_line)return!0;var n=e.filter((function(e){return e}));return n.length>0},rebuild_arr_reduce_empty_line:function(e){var n=[[""]];return e.map((function(e){var t=e.filter((function(e){return e})),a=t.length;if(a)n.push(e);else{var r=n[n.length-1].filter((function(e){return e})).length,s=n[n.length-1].length;s>0&&r>0&&n.push([""])}})),n},init_data:function(){var e=this;console.log("workSheetsFromFile --------",this.workSheetsFromFile);var n=[],t=0,a={},r=[];this.workSheetsFromFile.map((function(e){n=n.concat(e["data"])})),n.map((function(e){var n=e.filter((function(e){return e})).length;t+=n}));var s=this.$lodash.cloneDeep(n[0].filter((function(e){return e})));s.map((function(e,n){a["key_"+n]={title:e,words_raw:[]}})),this.exclude_thead_data&&n.splice(0,1),n.map((function(e,n){e.map((function(e,n){a["key_"+n]["words_raw"].push(e)}))})),console.log("final_obj------------",a);var o=Object.values(a);o.map((function(n,t){r.push([n["title"]]),r=r.concat(e.$lodash.chunk(n["words_raw"],e.column)),r=r.concat([[""]])})),this.thead_data=s,this.table_data=this.rebuild_arr_reduce_empty_line(r),this.word_total=t,console.log("  this.table_data  ",this.table_data)}}})},f4eb:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t(""+e.tab,{tag:"component"})],1)},r=[],s=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    数据库相关：\n填充器 seeder\n迁移文件 migration\n模型工厂 factory    Faker 类库 \n数据库配置\nhttps://laravelacademy.org/post/19520.html#toc_1\n两个官网文档\nhttps://laravelacademy.org/laravel-docs-5_8\nhttps://learnku.com/docs/lumen/5.7\n\nphp artisan  命令 \n对于 laravel 原生支持的指令 但是 lumen 不支持 安装这个依赖包 \nlumen-generator\nhttps://github.com/flipboxstudio/lumen-generator\n\n速查表\nhttps://learnku.com/docs/laravel-cheatsheet/5.8\n\n")])])}],i={},l=i,u=t("2877"),c=Object(u["a"])(l,s,o,!1,null,"38331fa6",null),m=c.exports,d=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("       laravel artisan命令\n       https://laravelacademy.org/laravel-docs-5_8\nhttps://learnku.com/docs/lumen/5.7\n流程： 创建model -m 生成数据库迁移文件migration\n配置数据库迁移文件 \n配置 数据库模拟文件 seeds\n\n\n添加加载依赖项\ncomposer require laravel/socialite\n自动生成引入文件\ncomposer dump-auto\n\nphp artisan make:controller TaskController\n// restful 风格\nphp artisan make:controller PostController --resource\nRoute::resource('tasks', 'TaskController')\n//隐式控制器\n// Route::controller('foods','FoodsController');\n// restful 风格\n// Route::resource('foods','FoodsController');\n\nphp artisan make:middleware LoginMiddleware\n数据库迁移\nphp artisan make:migration goods\nphp artisan migrate \nphp artisan migrate:refresh\n模拟数据 \nphp artisan make:seeder UsersTableSeeder\nphp artisan db:seed --class=UsersTableSeeder\nphp artisan db:seed\n迁移加上模拟数据\nphp artisan migrate --seed \nphp artisan migrate:refresh --seed\n\ndebugbar 安装\ncomposer require barryvdh/laravel-debugbar\n在 config/app.php 里面的providers添加\nBarryvdh\\Debugbar\\ServiceProvider::class\n\neloquent\norm 数据库操作模型  \nconfig/database.php\n$app->withEloquent();\nhttps://laravelacademy.org/post/19531.html\n\n创建数据库交互模型文件\nphp artisan make:model Model/Order\nphp artisan make:model Order -m  //自动建立一个对应数据库迁移文件\n模型限定规则\n模型对应的数据库表名规则：单复数关系 User=>Users  或者 Users=>Users   lay=>laies\n主键id  \n\nmodel文件非默认规则(打破潜规则)：对应更改：\npublic $table=\"user\"; \npublic $primaryKey =\"cid\";\npublic $timestamps =false;\n\n\n\n\n\n\n\n\n\n   ")])])}],h={},b=h,_=Object(u["a"])(b,d,p,!1,null,"d53ec848",null),f=_.exports,g=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},$=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("            laravel  seeder 填充器\n            参考页面\nhttps://laravelacademy.org/post/9694.html\n模拟数据 \nphp artisan make:seeder UsersTableSeeder\nphp artisan db:seed --class=UsersTableSeeder\nphp artisan db:seed 一次 运行填充所有\n\nseeder  文件 的 run  方法 内容 可以如下 生成数据\n\n第一种方法\nDB::table('users')->insert([\n        'name' => str_random(10),\n        'email' => str_random(10).'@gmail.com',\n        'password' => bcrypt('secret'),\n    ]);\n\n第二种\n        $arr=[];\n\n        for($i=0;$i<100;$i++){\n            $tmp=[];\n            $tmp['country']=str_random(20);\n            $tmp['name']=str_random(10);\n            $arr[]=$tmp;\n        }\n\n        DB::table('tests')->insert($arr);\n\n第三种\nfactory(\\App\\User::class, 5)->create();\n        ")]),t("pre",[e._v("            数据库操作\n\n            参考 \nhttps://laravelacademy.org/post/19520.html#toc_1\n增删改查\nhttps://laravelacademy.org/post/9697.html#toc_0\n\nhttps://laravelacademy.org/post/9698.html\n\n首先 config/database.php 或者 lumen  的 bootstarp/app.php 开启门面 开启 eloqument\n参考 \n\n$users = DB::connection('read')->select(...);\n$users = DB::table('users')->get();\n$name = '学院君';\n$users = DB::table('users')->where('name', $name)->get();\n$user = DB::table('users')->where('name', $name)->first();\n$user = DB::table('users')->select('id', 'name', 'email')->where('name', $name)->first();\n        ")])])}],v={},k=v,w=Object(u["a"])(k,g,$,!1,null,"7fbd6105",null),y=w.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h4",[e._v("web.php")]),t("pre",[e._v("<?php\n\n/*\n|--------------------------------------------------------------------------\n| Web Routes\n|--------------------------------------------------------------------------\n|\n| Here is where you can register web routes for your application. These\n| routes are loaded by the RouteServiceProvider within a group which\n| contains the \"web\" middleware group. Now create something great!\n|\n*/\n\nRoute::get('/', function () {\n    return view('welcome');\n});\n\n// Route::get('/','WelcomeController@index');\n//这段代码的含义是将针对 / 路由的 GET 请求传递给 App\\Http\\Controllers\\WelcomeController 控制器的 index 方法进行处理。\n// Route::get('uesr/{id}',function($id){\n//     return '用户id: '.$id;\n// });\n// 为路由参数指定正则匹配规则：\n// Route::get('page/{id}', function ($id) {\n//     return '页面ID: ' . $id;\n// })->where('id', '[0-9]+');\n\n// Route::get('page/{name}', function ($name) {\n//     return '页面名称: ' . $name;\n// })->where('name', '[A-Za-z]+');\n\n// Route::get('page/{id}/{slug}', function ($id, $slug) {\n//     return $id . ':' . $slug;\n// })->where(['id' => '[0-9]+', 'slug' => '[A-Za-z]+']);\n\n//https://laravelacademy.org/post/9611.html\n// 路由命名\n// Route::get('user/{id?}', function ($id = 1) {\n//     return \"用户ID: \" . $id;\n// })->name('user.profile');\n\n\n  <a href=\""+e._s(e.url("/"))+'">\n <a href="'+e._s(e.route("user.profile",[!1]))+'">\n <a href="'+e._s(e.route("user.profile",[100]))+"\">\n\n// 输出：http://blog.test/user/100\n\nRoute::get('/task','TaskController@home');\nRoute::resource('post','PostController');\n// 可以通过 Artisan 命令 php artisan route:list 查看应用的所有路由：\n        ")])])},C=[],q={},R=q,T=Object(u["a"])(R,x,C,!1,null,"becc5444",null),A=T.exports,E=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},S=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h4",[e._v("\n          lumen 从零开始创建项目 step0 \n       ")]),t("pre",[e._v("           下载 PHP\n把PHP 添加到系统 环境变量\n下载 composer 添加环境变量\n\n\n\ncomposer global require \"laravel/lumen-installer\"\n\ncomposer create-project --prefer-dist laravel/lumen blog\n\n添加  lumen  laravel 到环境变量 \nC:\\Users\\Administrator\\AppData\\Roaming\\Composer\\vendor\\bin\n\n配置 PHP 支持 MySQL \n1. 在 本机 的 PHP.INI 文件 中设置 extension_dir  语言支持包的路径为绝对路径\n   比如 C:\\Program Files\\php-7.3.6-nts-Win32-VC15-x64\\ext\n2. extension=php_mysqli.dll  \n   extension=pdo_mysql\nextension=mysqli\n\n配置 mysql  用户授权\n在 mysql 的 my.ini 文件中\ndefault_authentication_plugin=mysql_native_password\n\nmysql -uroot -p\n \nuse mysql;\nALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码'\n\n       ")]),t("h4",[e._v("lumen 从零开始创建项目 step1")]),t("pre",[e._v("       速查表 https://learnku.com/docs/laravel-cheatsheet/5.8\n安装   支持laravel 命令 的依赖库\nlumen-generator\nhttps://github.com/flipboxstudio/lumen-generator\ncomposer require flipbox/lumen-generator\n$app->register(Flipbox\\LumenGenerator\\LumenGeneratorServiceProvider::class);\n\n生成应用安全密钥\nphp artisan key:generate\n\n自动生成引入文件\ncomposer dump-auto\n\n查看当前 支持命令 \nphp artisan\n\n生成  Eloquent 模型 并 同时生成 数据库迁移文件\nphp artisan make:model  Test --migration OR -m\n\n生成 seeder  数据库 模拟文件 \nphp artisan make:seeder  TestTableSeeder\n\n生成  模型工厂类 文件  // 如果不支持 需要自己手动创建\nphp  artisan make:factory  TestModelFactory \n\n编写相对应的 迁移文件 ，工厂文件，模拟文件 \n模拟文件内  调用用模型工厂  批量生成数据\nfactory(\\App\\User::class, 5)->create();\n\n根据数据表生成迁移文件\n // --database   指定数据库连接（下同）\n // --force      当处于生产环境时强制执行，不询问（下同）\n // --path       指定单独迁移文件地址\n // --pretend    把将要运行的 SQL 语句打印出来（下同）\n // --seed       Seed 任务是否需要被重新运行（下同）\nphp artisan migrate [--database[='....']] [--force] [--path[='....']] [--pretend] [--seed]\n// 创建迁移数据库表\nphp artisan migrate:install [--database[=\"...\"]]\n生成/重置所有数据表\nphp artisan migrate[:fresh]\n\n生成所有假数据\nphp artisan db:seed \n\n生成 控制器\nphp  artisan make:controller TestController  [--plain]\nphp artisan make:controller PostController --resource\nRoute::resource('tasks', 'TaskController')\n\n生成 中间件\nphp artisan make:middleware LoginMiddleware\n\n其他的 事件 队列 服务注册 邮件 监听 轮询 等等 根据 需要自己 添加\n均有相应 命令 查看速查表 artisan \n\n对于 多数项目必须的 命令 如下\n  make:controller     Create a new controller class\n  make:event          Create a new event class\n  make:job            Create a new job class\n  make:listener       Create a new event listener class\n  make:mail           Create a new email class\n  make:middleware     Create a new middleware class\n  make:migration      Create a new migration file\n  make:model          Create a new Eloquent model class\n  make:policy         Create a new policy class\n  make:provider       Create a new service provider class\n\nkey:generate      Set the application key\n\nmake:command      Create a new Artisan command\nmake:controller   Create a new controller class\nmake:event        Create a new event class\nmake:job          Create a new job class\nmake:listener     Create a new event listener class\nmake:mail         Create a new email class\nmake:middleware   Create a new middleware class\nmake:migration    Create a new migration file\nmake:model        Create a new Eloquent model class\nmake:policy       Create a new policy class\nmake:provider     Create a new service provider class\nmake:seeder       Create a new seeder class\nmake:test         Create a new test class\n\n\n    \n       ")]),t("h4",[e._v("\nlumen 从零开始创建项目 step2\n")]),t("pre",[t("code",[e._v("\n    建表 数据 填充 \n\nSchema::create('users', function (Blueprint $table) {\n            $table->bigIncrements('id');\n            $table->string(\"name\");\n            $table->integer('age');\n            $table->string('country');\n            $table->string(\"email\");\n            $table->text(\"description\");\n            $table->date(\"borntime\");\n            $table->timestamps();\n        });\n\n    Schema::create('cafes', function( Blueprint $table ){\n        $table->increments('id');\n        $table->string('name');\n        $table->text('address');\n        $table->string('city');\n        $table->string('state');\n        $table->string('zip');\n        $table->decimal('latitude', 11, 8);\n        $table->decimal('longitude', 11, 8);\n        $table->timestamps();\n    });\n\n'password' => bcrypt('vienblog'),\n\n        Schema::create('admin_users', function(Blueprint $table)\n        {\n            $table->increments('id')->comment('ID');\n            $table->string('username')->unique('users_username_unique')->comment('用户名');\n            $table->string('email')->unique('users_email_unique')->comment('邮件');\n            $table->string('mobile', 11)->nullable()->comment('手机号码');\n            $table->smallInteger('sex')->default(1)->comment('性别');\n            $table->string('password', 60)->comment('密码');\n            $table->string('remember_token', 100)->nullable()->comment('TOKEN');\n            $table->timestamps();\n        });\n    }\n\n\n$factory->define(App\\User::class, function (Faker\\Generator $faker) {\n    return [\n\n        'name' => $faker->name,\n        \"age\" => $faker ->age,\n        \"country\" => $faker ->country,\n        'email' => $faker->email,\n        'description' => $faker->realText($maxNbChars = 200, $indexSize = 1),\n        \"borntime\" => $faker->dateTime($max = 'now', $timezone = null),\n    ];\n});\n\n\n    public function run()\n    {\n        //\n        factory(\\App\\User::class, 100)->create();\n    }\n\n    public function run()\n    {\n        \\DB::table('admin_users')->delete();\n        \\DB::table('admin_users')->insert(array (\n            0 => \n                array (\n                    'id'                =>  1,\n                    'username'          =>  'admin',\n                    'email'             =>  'admin@admin.com',\n                    'mobile'            =>  '18888888888',\n                    'sex'               =>  1,\n                    'password'          =>  '$2y$10$0nZ2IJJQzkuwTUvmsxVCYOAFw09sGceAk5b9p.AQ.h7I0YEj975rO', //f123456\n                    'remember_token'    =>  '',\n                    'created_at'        =>  date('Y-m-d H:i:s',time()),\n                    'updated_at'        =>  date('Y-m-d H:i:s',time()),\n                ),\n            )\n        );\n    }\n}\n\n\n\n\n    public function up()\n    {\n        Schema::create('blog_articles', function (Blueprint $table) {\n            $table->increments('id');\n            $table->string('slug')->unique();\n            $table->string('title', 255)->default('')->comment('title');\n            $table->string('keywords')->default('')->comment('keywords');\n            $table->string('description', 255)->default('')->comment('description');\n            $table->longText('markdown')->nullable()->comment('markdown content');\n            $table->integer('user_id')->default(0)->comment('author id');\n            $table->integer('cate_id')->default(0)->comment('category id');\n            $table->integer('comment_count')->default(0)->comment('comment count');\n            $table->integer('read_count')->default(0)->comment('read count');\n            $table->tinyInteger('status')->default(1)->comment('status: 1-public;0-private');\n            $table->integer('sort')->default(0)->comment('sort');\n            $table->tinyInteger('is_top')->default(0)->comment('sticky to top');\n            $table->integer('updated_at');\n            $table->integer('created_at');\n            $table->integer('deleted_at')->nullable();\n            $table->index('title');\n            $table->index('cate_id');\n            $table->index('user_id');\n            $table->index('created_at');\n        });\n    }\n")]),e._v("\n")]),t("h4",[e._v("\nlumen 从零开始创建项目 step3\n")]),t("pre",[e._v("    "),t("code",[e._v("\n        资源类 给返回的数据变形封装， 取出自己需要的  \nhttps://laravelacademy.org/post/19536.html\n\nprotected $hidden = ['password'];\nprotected $visible = ['first_name', 'last_name'];\nreturn $user->makeVisible('attribute')->toArray();\nreturn $user->makeHidden('attribute')->toArray();\nreturn $user->append('is_admin')->toArray();\n\nreturn $user->setAppends(['is_admin'])->toArray();\nprotected $casts = [\n    'birthday' => 'date:Y-m-d',\n    'joined_at' => 'datetime:Y-m-d H:00',\n];\n\nphp artisan make:resource UserCollection\n\nuse App\\User;\nuse App\\Http\\Resources\\UserCollection;\n\nRoute::get('/users', function () {\n    return new UserCollection(User::paginate());\n});\n\n<?php\n\nnamespace App\\Http\\Resources;\n\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\n\nclass User extends JsonResource\n{\n    /**\n     * Transform the resource into an array.\n     *\n     * @param  \\Illuminate\\Http\\Request\n     * @return array\n     */\n    public function toArray($request)\n    {\n        return [\n            'id' => $this->id,\n        ];\n    }\n\n    /**\n     * Customize the outgoing response for the resource.\n     *\n     * @param  \\Illuminate\\Http\\Request\n     * @param  \\Illuminate\\Http\\Response\n     * @return void\n     */\n    public function withResponse($request, $response)\n    {\n        $response->header('X-Value', 'True');\n    }\n}\n    ")]),e._v("\n")]),t("h4",[e._v("\nlumen 从零开始创建项目 step4\n")]),t("pre",[e._v("   获取  get 请求参数 \n一种 是 路径里面的参数   \n/aaa/{id}   =====> $id\n\n另一种 \n/aaa/vvv?aa=33   =====> $route=$request->route(); $route[2]['url参数'];\n\npost  请求的 获取参数  和文档一样 \n$request->input();\n\n\n \n")])])}],F={},U=F,j=Object(u["a"])(U,E,S,!1,null,"c504bc72",null),I=j.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},D=[],H={},B=H,P=Object(u["a"])(B,O,D,!1,null,"165d6ed2",null),L=P.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},J=[],Y={},M=Y,W=Object(u["a"])(M,z,J,!1,null,"272d53da",null),G=W.exports,N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},Q=[],V={},Z=V,K=Object(u["a"])(Z,N,Q,!1,null,"7b158558",null),X=K.exports,ee=t("1b62"),ne={mixins:[ee["b"]],components:{m1:m,m2:f,m3:y,m4:A,m5:I,m6:L,m7:G,m8:X},data:function(){return{tab:"m1",tab_level:1,tabs:[{label:"g",value:"m1"},{label:"基本",value:"m2"},{label:"基本",value:"m3"},{label:"基本",value:"m4"},{label:"基本",value:"m5"},{label:"基本",value:"m6"},{label:"基本",value:"m7"},{label:"基本",value:"m8"}]}}},te=ne,ae=Object(u["a"])(te,a,r,!1,null,"7f7d1ad5",null);n["default"]=ae.exports}}]);