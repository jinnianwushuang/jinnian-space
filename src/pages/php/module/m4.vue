<template>
    <div>
        <h4>web.php</h4>
        <pre>
&lt;?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/','WelcomeController@index');
//这段代码的含义是将针对 / 路由的 GET 请求传递给 App\Http\Controllers\WelcomeController 控制器的 index 方法进行处理。
// Route::get('uesr/{id}',function($id){
//     return '用户id: '.$id;
// });
// 为路由参数指定正则匹配规则：
// Route::get('page/{id}', function ($id) {
//     return '页面ID: ' . $id;
// })->where('id', '[0-9]+');

// Route::get('page/{name}', function ($name) {
//     return '页面名称: ' . $name;
// })->where('name', '[A-Za-z]+');

// Route::get('page/{id}/{slug}', function ($id, $slug) {
//     return $id . ':' . $slug;
// })->where(['id' => '[0-9]+', 'slug' => '[A-Za-z]+']);

//https://laravelacademy.org/post/9611.html
// 路由命名
// Route::get('user/{id?}', function ($id = 1) {
//     return "用户ID: " . $id;
// })->name('user.profile');


  &lt;a href=&quot;{{ url(&#x27;/&#x27;) }}&quot;&gt;
 &lt;a href=&quot;{{ route(&#x27;user.profile&#x27;, [  &#x27;id&#x27;  &gt; 100]) }}&quot;&gt;
 &lt;a href=&quot;{{ route(&#x27;user.profile&#x27;, [100]) }}&quot;&gt;

// 输出：http://blog.test/user/100

Route::get('/task','TaskController@home');
Route::resource('post','PostController');
// 可以通过 Artisan 命令 php artisan route:list 查看应用的所有路由：
        </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>