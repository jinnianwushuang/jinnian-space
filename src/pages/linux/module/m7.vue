<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/linux/module/m7.vue
 * @Description    : 
-->
 
 <template>
  <div class="">
    <q-markdown :extend="extendMarkdown" :src="MainComponent" />
  </div>
</template>
<script>
import MainComponent from "../md/linux-进程检测与控制.md";
export default {
  data() {
    return {
      MainComponent,
      img_prefix:'./img/linux/heima-Linux云计算/进程检测与控制/'
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
          let str2 =
            arr[0] + ' src="'+this.img_prefix + arr[1];
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
        token.attrSet("src", this.img_prefix + raw_src);
        return self.renderToken(tokens, idx, options);
      };
    }
  }
};
</script>
<style lang="scss" scoped></style>
