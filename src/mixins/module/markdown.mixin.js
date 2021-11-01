

export default {
  data() {
    return {
        tab:'',
      MainComponent:'',
      img_prefix:'./img/linux/heima-Linux云计算/讲义/'
    };
  },

  methods: {
    extendMarkdown(md) {
      console.log(md.renderer.rules);
      // 对应形式：   <img src="media\block03.jpg" style="width:960px" />
      const defaultRender = md.renderer.rules.html_block;
      md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        console.log("1");
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
    }
  }
};
