

export default {
  data() {
    return {
      relative_path:'',//相对路径  //例如  '/books/java/maven/'
        tab:'',
        tabs:[],
      MainComponent:'',
      img_prefix:'./img/linux/heima-Linux云计算/讲义/'
    };
  },
  // watch: {
  //   tab(newValue, oldValue) {
  //     this. MainComponent=all_components[this.tab]
  //       this. compute_img_prefix()
     
  //   }
  // },
  methods: {
    extendMarkdown(md) {
      console.log(md.renderer.rules);
      // 对应形式：   <img src="media\block03.jpg" style="width:960px" />
      const defaultRender = md.renderer.rules.html_block;
      md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        console.log("1");
        console.log('md.renderer.rules.html_block  ',token);
        if (token.content.includes("<img")) {
          console.log("token-- ", token);
          let str = '';
          str = token.content;
          let arr = str.split('src="');
          let str2 = ''
          let raw_src = arr[1]
         
            arr[0] + ' src="'+this.img_prefix + arr[1];

            if(raw_src.includes('http')){
              str2 =  arr[0] + ' src="'+raw_src
            }else{
              str2 =   arr[0] + ' src="'+this.img_prefix + raw_src ;
            }

          token.content = str2;
        }
        token.attrSet("class", "q-markdown--token  ");
        return defaultRender(tokens, idx, options, env, self);
      };
      // 对应形式：  ![](img\图片2.png)
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        // console.log('tokens--- ',tokens);
        const token = tokens[idx];
        console.log("3");
        token.attrSet("class", "q-markdown--image");
        console.log("token--- " + idx + "-----", token);
        // 改变 图片路径 增加前缀 拼接
        let raw_src = token.attrGet("src");
        console.log(raw_src);
        if( raw_src .includes('http')){
          token.attrSet("src",  raw_src);
        }else{
          token.attrSet("src", this.img_prefix + raw_src);
        }
       
        return self.renderToken(tokens, idx, options);
      };

      //  link_open: ƒ (tokens, idx, options, env, self)
      // 此方法废除
      md.renderer.rules.link_open_2 = (tokens, idx, options, env, self) => {
  //  console.log('tokens--- md.renderer.rules.link_open ',token);
        const token = tokens[idx];
        console.log('tokens--- md.renderer.rules.link_open ',token);
        console.log("4");
        let  raw_href = decodeURIComponent(token.attrGet('href')).trim() 
        console.log("raw_href-",  raw_href );
        // 源码下载:aaa.zip
        let is_yuanma_download= raw_href.startsWith("源码下载:")
        console.log(' is_yuanma_download=-----', is_yuanma_download);


        if(is_yuanma_download){
          //是源码下载
          let real_href= this.img_prefix + raw_href.split("源码下载:")[1]
          token.attrSet("href",  real_href);
          return self.renderToken(tokens, idx, options);
        }
        // 对应标题
       
        let is_title= raw_href.startsWith("#")
        if(is_title){
          // token
          token.content= raw_href.replaceAll('#','')
          token.tag ="p"
          // token.attrSet("href",  '');
          token.attrs=[]
          // ['class', 'q-markdown--token  ']

          // attrs: Array(1)
          // 0: (2) ['class', 'q-markdown--token  ']
          // block: true
          // children: null
          // content: "<!--\n * @Date           : 2021-04-27 00:23:17\n * @FilePath       : /jinnian-space/src/pages/java/module/basics/md/day07-面向对象.md\n * @Description    : \n-->\n"
          // hidden: false
          // info: ""
          // level: 0
          // map: (2) [0, 5]
          // markup: ""
          // meta: null
          // nesting: 0
          // tag: ""
          // type: "html_block"
          token.type= "html_block"

          return defaultRender(tokens, idx, options, env, self);
        }

        return self.renderToken(tokens, idx, options);


      }





    },
    compute_img_prefix(){
      if(this. MainComponent ){
        let tab_obj=  this.tabs.find(x=>x['value']==this.tab)
        if(tab_obj&&tab_obj['modules_obj']){
          let  relative_path = this. relative_path

 this.img_prefix = '.'+ relative_path  + (tab_obj['modules_obj']['relative_folder'] ||'')
        }else{
         this.img_prefix = '.'+  relative_path
  
        }


      }
    }
  },

};
