(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"1b62":function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return $})),t("4de4"),t("c975");var a=t("448a"),r=t.n(a),o=["/第1阶段-运维基本功（升级7.6版本）/01运维概述与Linux系统安装.pdf","/第1阶段-运维基本功（升级7.6版本）/02Linux基础命令.pdf"],i="linux/heima-Linux云计算",s={name:"Container",data:function(){return{prefix:i,book_options:o,book_options_all:[],show:!0,book:o[0],src:""}},created:function(){this.book_options_all=r()(this.book_options),this.src=this.$utils.compute_book_src(this.prefix+this.book)},watch:{book:function(e,n){e&&this.change_book()}},methods:{change_book:function(){console.log("this.book",this.book),this.src=this.$utils.compute_book_src(this.prefix+this.book)},filterFn:function(e,n){var t=this;n(""!==e?function(){var n=e.toLowerCase();t.book_options=t.book_options_all.filter((function(e){return e.toLowerCase().indexOf(n)>-1}))}:function(){t.book_options=t.book_options_all})}}},l=t("ded3"),c=t.n(l),u=t("2f62"),p={data:function(){return{tab:"",tab_level:1,is_active:!1}},computed:c()({},Object(u["c"])(["get_current_selected_right_menu"])),created:function(){this.is_active=!0,this.fix_right_menu_config()},watch:{tab:function(){this.tab||this.fix_right_menu_config()},get_current_selected_right_menu:function(e,n){this.tab=this.get_current_selected_right_menu["t"+this.tab_level]}},methods:c()(c()({},Object(u["b"])(["set_right_menu_fix_config"])),{},{fix_right_menu_config:function(){this.set_right_menu_fix_config({tl:this.tab_level,tabs:this.tabs||[],tv:this.tab||this.tabs[0]["value"]})}}),beforeDestroy:function(){this.is_active=!1}},m=(t("99af"),t("d81d"),t("fb6a"),t("a434"),t("07ac"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-my-md q-mx-sm"},[t("div",{staticClass:"q-mb-md row q-gutter-x-md q-gutter-y-sm"},[t("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:e.topic_options_filtered},on:{filter:e.filterFn,"filter-abort":e.abortFilterFn,input:e.handle_topic_change},scopedSlots:e._u([{key:"before",fn:function(){return[e._v("\n        主题\n      ")]},proxy:!0}]),model:{value:e.topic,callback:function(n){e.topic=n},expression:"topic"}}),t("q-select",{staticStyle:{width:"300px"},attrs:{dense:"",filled:"",options:e.column_options},on:{input:e.handle_column_change},scopedSlots:e._u([{key:"before",fn:function(){return[e._v("\n        列数\n      ")]},proxy:!0}]),model:{value:e.column,callback:function(n){e.column=n},expression:"column"}})],1),t("q-markup-table",{attrs:{dense:""}},[t("thead",[t("tr",[t("th",{staticClass:"text-left text-weight-bolder  ",attrs:{colspan:e.column}},[e._v("\n          "+e._s(e.table_title?e.table_title+"------":"")+"当前词条数量："+e._s(e.word_total)+"\n        ")])])]),t("tbody",[e._l(e.table_data,(function(n,a){return[e.compute_if_show(n)?t("tr",{key:a,class:e.compute_topic_options_style(n)},e._l(e.column,(function(a){return t("td",{key:a,staticClass:"text-left"},[e._v("\n            "+e._s(n[a-1])+"\n          ")])})),0):e._e()]}))],2)])],1)}),d=[],_=(t("caad"),t("a9e3"),t("2532"),{data:function(){return{topic:"全部",column:2,topic_options_filtered:[],topic_options_all:[]}},props:{table_title:{type:String,default:""},word_total:{type:Number,default:0},topic_options:{type:Array,default:function(){return[]}},column_options:{type:Array,default:function(){return[]}},table_data:{type:Array,default:function(){return[]}},show_empty_line:!1},watch:{topic_options:function(e,n){this.init_topic_options_related()},column_options:function(e,n){this.init_column()}},created:function(){this.init_topic_options_related(),this.init_column(),this.handle_column_change(),this.handle_topic_change()},methods:{init_topic_options_related:function(){this.topic_options_all=r()(this.topic_options),this.topic_options_filtered=r()(this.topic_options)},filterFn:function(e,n,t){var a=this;console.log("this.topic_options_all",this.topic_options_all),setTimeout((function(){n((function(){if(""===e)a.topic_options_filtered=r()(a.topic_options_all);else{var n=e.toLowerCase();a.topic_options_filtered=a.topic_options_all.filter((function(e){return e.toLowerCase().indexOf(n)>-1}))}a.$forceUpdate()}),(function(n){""!==e&&n.options.length>0&&(n.setOptionIndex(-1),n.moveOptionSelection(1,!0))}))}),300)},abortFilterFn:function(){},handle_column_change:function(){this.$emit("handle_column_change",this.column)},handle_topic_change:function(){this.$emit("handle_topic_change",this.topic)},init_column:function(){var e=this.$q.platform.is.desktop,n=window.innerWidth;n=e?n-200:n-100,n=n<370?370:n,console.log("ww",n);var t=Math.ceil(n/350);t=t<1?1:t,n<400&&(t=1),t=t>8?8:t,this.column=t},compute_topic_options_style:function(e){var n="",t=1==e.length&&this.topic_options.includes(e[0]);return n=t?"bg-teal-4":"",n},compute_if_show:function(e){if(this.show_empty_line)return!0;var n=e.filter((function(e){return e}));return n.length>0}}}),h=_,f=t("2877"),b=Object(f["a"])(h,m,d,!1,null,"4e74a874",null),g=b.exports,v={components:{excelTable:g},data:function(){return{workSheetsFromFile:[[{data:[]}]],table_title:"",column:8,word_total:0,table_data:[],table_data_all:[],column_options:[1,2,3,4,5,6,7,8],exclude_topic_options:!0,show_empty_line:!1,topic:"",topic_options:[]}},created:function(){this.init_workSheetsFromFile()},methods:{init_workSheetsFromFile:function(){},handle_column_change:function(e){this.column=e,this.init_data()},handle_topic_change:function(e){this.topic=e,console.log("this.topic----",this.topic),this.compute_table_data_show_and_word_total()},rebuild_arr_reduce_empty_line:function(e){var n=[[""]];return e.map((function(e){var t=e.filter((function(e){return e})),a=t.length;if(a)n.push(e);else{var r=n[n.length-1].filter((function(e){return e})).length,o=n[n.length-1].length;o>0&&r>0&&n.push([""])}})),n},init_data:function(){var e=this;console.log("workSheetsFromFile --------",this.workSheetsFromFile);var n=[],t={},a=[];this.workSheetsFromFile.map((function(e){n=n.concat(e["data"])}));var o=this.$lodash.cloneDeep(n[0].filter((function(e){return e})));o.map((function(e,n){t["key_"+n]={title:e,words_raw:[]}})),this.exclude_topic_options&&n.splice(0,1),n.map((function(e,n){e.map((function(e,n){t["key_"+n]["words_raw"].push(e)}))})),console.log("final_obj------------",t);var i=Object.values(t);i.map((function(n,t){a.push([n["title"]]),a=a.concat(e.$lodash.chunk(n["words_raw"],e.column)),a=a.concat([[""]])})),this.topic_options=["全部"].concat(r()(o)),this.table_data_all=this.rebuild_arr_reduce_empty_line(a),this.compute_table_data_show_and_word_total(),console.log("  this.table_data_all   ",this.table_data_all)},compute_table_data_show_and_word_total:function(){var e=[],n=[],t=0;if(n=this.$lodash.cloneDeep(this.table_data_all),console.log(" table_data--------",n),"全部"==this.topic)e=n;else{var a=this.topic_options.indexOf(this.topic),r=a==this.topic_options.length-1,o=r?"":this.topic_options[a+1],i=this.find_topic_index(this.topic),s=o?this.find_topic_index(o):n.length;e=n.slice(i,s)}e.map((function(e){var n=e.filter((function(e){return e})).length;t+=n})),this.word_total=t,this.table_data=e},find_topic_index:function(e){for(var n=0,t=0;t<this.table_data_all.length;t++){var a=this.table_data_all[t];if(1==a.length&&a[0]&&a[0]==e){n=t;break}}return n}}},$=(t("ac1f"),t("1276"),{data:function(){return{tab:"",MainComponent:"",img_prefix:"./img/linux/heima-Linux云计算/讲义/"}},methods:{extendMarkdown:function(e){var n=this;console.log(e.renderer.rules);var t=e.renderer.rules.html_block;e.renderer.rules.html_block=function(e,a,r,o,i){var s=e[a];if(console.log("1"),s.content.includes("<img")){console.log("token-- ",s);var l="";l=s.content;var c=l.split('src="'),u=c[0]+' src="'+n.img_prefix+c[1];s.content=u}return s.attrSet("class","q-markdown--token  "),t(e,a,r,o,i)},e.renderer.rules.image=function(e,t,a,r,o){var i=e[t];console.log("3"),i.attrSet("class","q-markdown--image"),console.log("token--- "+t+"-----",i);var s=i.attrGet("src");return console.log(s),i.attrSet("src",n.img_prefix+s),o.renderToken(e,t,a)}}}})},f4eb:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t(""+e.tab,{tag:"component"})],1)},r=[],o=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("    数据库相关：\n填充器 seeder\n迁移文件 migration\n模型工厂 factory    Faker 类库 \n数据库配置\nhttps://laravelacademy.org/post/19520.html#toc_1\n两个官网文档\nhttps://laravelacademy.org/laravel-docs-5_8\nhttps://learnku.com/docs/lumen/5.7\n\nphp artisan  命令 \n对于 laravel 原生支持的指令 但是 lumen 不支持 安装这个依赖包 \nlumen-generator\nhttps://github.com/flipboxstudio/lumen-generator\n\n速查表\nhttps://learnku.com/docs/laravel-cheatsheet/5.8\n\n")])])}],s={},l=s,c=t("2877"),u=Object(c["a"])(l,o,i,!1,null,"38331fa6",null),p=u.exports,m=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("       laravel artisan命令\n       https://laravelacademy.org/laravel-docs-5_8\nhttps://learnku.com/docs/lumen/5.7\n流程： 创建model -m 生成数据库迁移文件migration\n配置数据库迁移文件 \n配置 数据库模拟文件 seeds\n\n\n添加加载依赖项\ncomposer require laravel/socialite\n自动生成引入文件\ncomposer dump-auto\n\nphp artisan make:controller TaskController\n// restful 风格\nphp artisan make:controller PostController --resource\nRoute::resource('tasks', 'TaskController')\n//隐式控制器\n// Route::controller('foods','FoodsController');\n// restful 风格\n// Route::resource('foods','FoodsController');\n\nphp artisan make:middleware LoginMiddleware\n数据库迁移\nphp artisan make:migration goods\nphp artisan migrate \nphp artisan migrate:refresh\n模拟数据 \nphp artisan make:seeder UsersTableSeeder\nphp artisan db:seed --class=UsersTableSeeder\nphp artisan db:seed\n迁移加上模拟数据\nphp artisan migrate --seed \nphp artisan migrate:refresh --seed\n\ndebugbar 安装\ncomposer require barryvdh/laravel-debugbar\n在 config/app.php 里面的providers添加\nBarryvdh\\Debugbar\\ServiceProvider::class\n\neloquent\norm 数据库操作模型  \nconfig/database.php\n$app->withEloquent();\nhttps://laravelacademy.org/post/19531.html\n\n创建数据库交互模型文件\nphp artisan make:model Model/Order\nphp artisan make:model Order -m  //自动建立一个对应数据库迁移文件\n模型限定规则\n模型对应的数据库表名规则：单复数关系 User=>Users  或者 Users=>Users   lay=>laies\n主键id  \n\nmodel文件非默认规则(打破潜规则)：对应更改：\npublic $table=\"user\"; \npublic $primaryKey =\"cid\";\npublic $timestamps =false;\n\n\n\n\n\n\n\n\n\n   ")])])}],_={},h=_,f=Object(c["a"])(h,m,d,!1,null,"d53ec848",null),b=f.exports,g=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},v=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",[e._v("            laravel  seeder 填充器\n            参考页面\nhttps://laravelacademy.org/post/9694.html\n模拟数据 \nphp artisan make:seeder UsersTableSeeder\nphp artisan db:seed --class=UsersTableSeeder\nphp artisan db:seed 一次 运行填充所有\n\nseeder  文件 的 run  方法 内容 可以如下 生成数据\n\n第一种方法\nDB::table('users')->insert([\n        'name' => str_random(10),\n        'email' => str_random(10).'@gmail.com',\n        'password' => bcrypt('secret'),\n    ]);\n\n第二种\n        $arr=[];\n\n        for($i=0;$i<100;$i++){\n            $tmp=[];\n            $tmp['country']=str_random(20);\n            $tmp['name']=str_random(10);\n            $arr[]=$tmp;\n        }\n\n        DB::table('tests')->insert($arr);\n\n第三种\nfactory(\\App\\User::class, 5)->create();\n        ")]),t("pre",[e._v("            数据库操作\n\n            参考 \nhttps://laravelacademy.org/post/19520.html#toc_1\n增删改查\nhttps://laravelacademy.org/post/9697.html#toc_0\n\nhttps://laravelacademy.org/post/9698.html\n\n首先 config/database.php 或者 lumen  的 bootstarp/app.php 开启门面 开启 eloqument\n参考 \n\n$users = DB::connection('read')->select(...);\n$users = DB::table('users')->get();\n$name = '学院君';\n$users = DB::table('users')->where('name', $name)->get();\n$user = DB::table('users')->where('name', $name)->first();\n$user = DB::table('users')->select('id', 'name', 'email')->where('name', $name)->first();\n        ")])])}],$={},k=$,w=Object(c["a"])(k,g,v,!1,null,"7fbd6105",null),y=w.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h4",[e._v("web.php")]),t("pre",[e._v("<?php\n\n/*\n|--------------------------------------------------------------------------\n| Web Routes\n|--------------------------------------------------------------------------\n|\n| Here is where you can register web routes for your application. These\n| routes are loaded by the RouteServiceProvider within a group which\n| contains the \"web\" middleware group. Now create something great!\n|\n*/\n\nRoute::get('/', function () {\n    return view('welcome');\n});\n\n// Route::get('/','WelcomeController@index');\n//这段代码的含义是将针对 / 路由的 GET 请求传递给 App\\Http\\Controllers\\WelcomeController 控制器的 index 方法进行处理。\n// Route::get('uesr/{id}',function($id){\n//     return '用户id: '.$id;\n// });\n// 为路由参数指定正则匹配规则：\n// Route::get('page/{id}', function ($id) {\n//     return '页面ID: ' . $id;\n// })->where('id', '[0-9]+');\n\n// Route::get('page/{name}', function ($name) {\n//     return '页面名称: ' . $name;\n// })->where('name', '[A-Za-z]+');\n\n// Route::get('page/{id}/{slug}', function ($id, $slug) {\n//     return $id . ':' . $slug;\n// })->where(['id' => '[0-9]+', 'slug' => '[A-Za-z]+']);\n\n//https://laravelacademy.org/post/9611.html\n// 路由命名\n// Route::get('user/{id?}', function ($id = 1) {\n//     return \"用户ID: \" . $id;\n// })->name('user.profile');\n\n\n  <a href=\""+e._s(e.url("/"))+'">\n <a href="'+e._s(e.route("user.profile",[!1]))+'">\n <a href="'+e._s(e.route("user.profile",[100]))+"\">\n\n// 输出：http://blog.test/user/100\n\nRoute::get('/task','TaskController@home');\nRoute::resource('post','PostController');\n// 可以通过 Artisan 命令 php artisan route:list 查看应用的所有路由：\n        ")])])},C=[],q={},S=q,R=Object(c["a"])(S,x,C,!1,null,"becc5444",null),F=R.exports,T=function(){var e=this;return e.$createElement,e._self._c,e._m(0)},A=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h4",[e._v("\n          lumen 从零开始创建项目 step0 \n       ")]),t("pre",[e._v("           下载 PHP\n把PHP 添加到系统 环境变量\n下载 composer 添加环境变量\n\n\n\ncomposer global require \"laravel/lumen-installer\"\n\ncomposer create-project --prefer-dist laravel/lumen blog\n\n添加  lumen  laravel 到环境变量 \nC:\\Users\\Administrator\\AppData\\Roaming\\Composer\\vendor\\bin\n\n配置 PHP 支持 MySQL \n1. 在 本机 的 PHP.INI 文件 中设置 extension_dir  语言支持包的路径为绝对路径\n   比如 C:\\Program Files\\php-7.3.6-nts-Win32-VC15-x64\\ext\n2. extension=php_mysqli.dll  \n   extension=pdo_mysql\nextension=mysqli\n\n配置 mysql  用户授权\n在 mysql 的 my.ini 文件中\ndefault_authentication_plugin=mysql_native_password\n\nmysql -uroot -p\n \nuse mysql;\nALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码'\n\n       ")]),t("h4",[e._v("lumen 从零开始创建项目 step1")]),t("pre",[e._v("       速查表 https://learnku.com/docs/laravel-cheatsheet/5.8\n安装   支持laravel 命令 的依赖库\nlumen-generator\nhttps://github.com/flipboxstudio/lumen-generator\ncomposer require flipbox/lumen-generator\n$app->register(Flipbox\\LumenGenerator\\LumenGeneratorServiceProvider::class);\n\n生成应用安全密钥\nphp artisan key:generate\n\n自动生成引入文件\ncomposer dump-auto\n\n查看当前 支持命令 \nphp artisan\n\n生成  Eloquent 模型 并 同时生成 数据库迁移文件\nphp artisan make:model  Test --migration OR -m\n\n生成 seeder  数据库 模拟文件 \nphp artisan make:seeder  TestTableSeeder\n\n生成  模型工厂类 文件  // 如果不支持 需要自己手动创建\nphp  artisan make:factory  TestModelFactory \n\n编写相对应的 迁移文件 ，工厂文件，模拟文件 \n模拟文件内  调用用模型工厂  批量生成数据\nfactory(\\App\\User::class, 5)->create();\n\n根据数据表生成迁移文件\n // --database   指定数据库连接（下同）\n // --force      当处于生产环境时强制执行，不询问（下同）\n // --path       指定单独迁移文件地址\n // --pretend    把将要运行的 SQL 语句打印出来（下同）\n // --seed       Seed 任务是否需要被重新运行（下同）\nphp artisan migrate [--database[='....']] [--force] [--path[='....']] [--pretend] [--seed]\n// 创建迁移数据库表\nphp artisan migrate:install [--database[=\"...\"]]\n生成/重置所有数据表\nphp artisan migrate[:fresh]\n\n生成所有假数据\nphp artisan db:seed \n\n生成 控制器\nphp  artisan make:controller TestController  [--plain]\nphp artisan make:controller PostController --resource\nRoute::resource('tasks', 'TaskController')\n\n生成 中间件\nphp artisan make:middleware LoginMiddleware\n\n其他的 事件 队列 服务注册 邮件 监听 轮询 等等 根据 需要自己 添加\n均有相应 命令 查看速查表 artisan \n\n对于 多数项目必须的 命令 如下\n  make:controller     Create a new controller class\n  make:event          Create a new event class\n  make:job            Create a new job class\n  make:listener       Create a new event listener class\n  make:mail           Create a new email class\n  make:middleware     Create a new middleware class\n  make:migration      Create a new migration file\n  make:model          Create a new Eloquent model class\n  make:policy         Create a new policy class\n  make:provider       Create a new service provider class\n\nkey:generate      Set the application key\n\nmake:command      Create a new Artisan command\nmake:controller   Create a new controller class\nmake:event        Create a new event class\nmake:job          Create a new job class\nmake:listener     Create a new event listener class\nmake:mail         Create a new email class\nmake:middleware   Create a new middleware class\nmake:migration    Create a new migration file\nmake:model        Create a new Eloquent model class\nmake:policy       Create a new policy class\nmake:provider     Create a new service provider class\nmake:seeder       Create a new seeder class\nmake:test         Create a new test class\n\n\n    \n       ")]),t("h4",[e._v("\nlumen 从零开始创建项目 step2\n")]),t("pre",[t("code",[e._v("\n    建表 数据 填充 \n\nSchema::create('users', function (Blueprint $table) {\n            $table->bigIncrements('id');\n            $table->string(\"name\");\n            $table->integer('age');\n            $table->string('country');\n            $table->string(\"email\");\n            $table->text(\"description\");\n            $table->date(\"borntime\");\n            $table->timestamps();\n        });\n\n    Schema::create('cafes', function( Blueprint $table ){\n        $table->increments('id');\n        $table->string('name');\n        $table->text('address');\n        $table->string('city');\n        $table->string('state');\n        $table->string('zip');\n        $table->decimal('latitude', 11, 8);\n        $table->decimal('longitude', 11, 8);\n        $table->timestamps();\n    });\n\n'password' => bcrypt('vienblog'),\n\n        Schema::create('admin_users', function(Blueprint $table)\n        {\n            $table->increments('id')->comment('ID');\n            $table->string('username')->unique('users_username_unique')->comment('用户名');\n            $table->string('email')->unique('users_email_unique')->comment('邮件');\n            $table->string('mobile', 11)->nullable()->comment('手机号码');\n            $table->smallInteger('sex')->default(1)->comment('性别');\n            $table->string('password', 60)->comment('密码');\n            $table->string('remember_token', 100)->nullable()->comment('TOKEN');\n            $table->timestamps();\n        });\n    }\n\n\n$factory->define(App\\User::class, function (Faker\\Generator $faker) {\n    return [\n\n        'name' => $faker->name,\n        \"age\" => $faker ->age,\n        \"country\" => $faker ->country,\n        'email' => $faker->email,\n        'description' => $faker->realText($maxNbChars = 200, $indexSize = 1),\n        \"borntime\" => $faker->dateTime($max = 'now', $timezone = null),\n    ];\n});\n\n\n    public function run()\n    {\n        //\n        factory(\\App\\User::class, 100)->create();\n    }\n\n    public function run()\n    {\n        \\DB::table('admin_users')->delete();\n        \\DB::table('admin_users')->insert(array (\n            0 => \n                array (\n                    'id'                =>  1,\n                    'username'          =>  'admin',\n                    'email'             =>  'admin@admin.com',\n                    'mobile'            =>  '18888888888',\n                    'sex'               =>  1,\n                    'password'          =>  '$2y$10$0nZ2IJJQzkuwTUvmsxVCYOAFw09sGceAk5b9p.AQ.h7I0YEj975rO', //f123456\n                    'remember_token'    =>  '',\n                    'created_at'        =>  date('Y-m-d H:i:s',time()),\n                    'updated_at'        =>  date('Y-m-d H:i:s',time()),\n                ),\n            )\n        );\n    }\n}\n\n\n\n\n    public function up()\n    {\n        Schema::create('blog_articles', function (Blueprint $table) {\n            $table->increments('id');\n            $table->string('slug')->unique();\n            $table->string('title', 255)->default('')->comment('title');\n            $table->string('keywords')->default('')->comment('keywords');\n            $table->string('description', 255)->default('')->comment('description');\n            $table->longText('markdown')->nullable()->comment('markdown content');\n            $table->integer('user_id')->default(0)->comment('author id');\n            $table->integer('cate_id')->default(0)->comment('category id');\n            $table->integer('comment_count')->default(0)->comment('comment count');\n            $table->integer('read_count')->default(0)->comment('read count');\n            $table->tinyInteger('status')->default(1)->comment('status: 1-public;0-private');\n            $table->integer('sort')->default(0)->comment('sort');\n            $table->tinyInteger('is_top')->default(0)->comment('sticky to top');\n            $table->integer('updated_at');\n            $table->integer('created_at');\n            $table->integer('deleted_at')->nullable();\n            $table->index('title');\n            $table->index('cate_id');\n            $table->index('user_id');\n            $table->index('created_at');\n        });\n    }\n")]),e._v("\n")]),t("h4",[e._v("\nlumen 从零开始创建项目 step3\n")]),t("pre",[e._v("    "),t("code",[e._v("\n        资源类 给返回的数据变形封装， 取出自己需要的  \nhttps://laravelacademy.org/post/19536.html\n\nprotected $hidden = ['password'];\nprotected $visible = ['first_name', 'last_name'];\nreturn $user->makeVisible('attribute')->toArray();\nreturn $user->makeHidden('attribute')->toArray();\nreturn $user->append('is_admin')->toArray();\n\nreturn $user->setAppends(['is_admin'])->toArray();\nprotected $casts = [\n    'birthday' => 'date:Y-m-d',\n    'joined_at' => 'datetime:Y-m-d H:00',\n];\n\nphp artisan make:resource UserCollection\n\nuse App\\User;\nuse App\\Http\\Resources\\UserCollection;\n\nRoute::get('/users', function () {\n    return new UserCollection(User::paginate());\n});\n\n<?php\n\nnamespace App\\Http\\Resources;\n\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\n\nclass User extends JsonResource\n{\n    /**\n     * Transform the resource into an array.\n     *\n     * @param  \\Illuminate\\Http\\Request\n     * @return array\n     */\n    public function toArray($request)\n    {\n        return [\n            'id' => $this->id,\n        ];\n    }\n\n    /**\n     * Customize the outgoing response for the resource.\n     *\n     * @param  \\Illuminate\\Http\\Request\n     * @param  \\Illuminate\\Http\\Response\n     * @return void\n     */\n    public function withResponse($request, $response)\n    {\n        $response->header('X-Value', 'True');\n    }\n}\n    ")]),e._v("\n")]),t("h4",[e._v("\nlumen 从零开始创建项目 step4\n")]),t("pre",[e._v("   获取  get 请求参数 \n一种 是 路径里面的参数   \n/aaa/{id}   =====> $id\n\n另一种 \n/aaa/vvv?aa=33   =====> $route=$request->route(); $route[2]['url参数'];\n\npost  请求的 获取参数  和文档一样 \n$request->input();\n\n\n \n")])])}],E={},O=E,U=Object(c["a"])(O,T,A,!1,null,"c504bc72",null),j=U.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},D=[],H={},B=H,L=Object(c["a"])(B,I,D,!1,null,"165d6ed2",null),P=L.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},z=[],J={},Y=J,G=Object(c["a"])(Y,M,z,!1,null,"272d53da",null),N=G.exports,W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    1\n")])},Q=[],V={},Z=V,K=Object(c["a"])(Z,W,Q,!1,null,"7b158558",null),X=K.exports,ee=t("1b62"),ne={mixins:[ee["c"]],components:{m1:p,m2:b,m3:y,m4:F,m5:j,m6:P,m7:N,m8:X},data:function(){return{tab:"m1",tab_level:1,tabs:[{label:"g",value:"m1"},{label:"基本",value:"m2"},{label:"基本",value:"m3"},{label:"基本",value:"m4"},{label:"基本",value:"m5"},{label:"基本",value:"m6"},{label:"基本",value:"m7"},{label:"基本",value:"m8"}]}}},te=ne,ae=Object(c["a"])(te,a,r,!1,null,"7f7d1ad5",null);n["default"]=ae.exports}}]);