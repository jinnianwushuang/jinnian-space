/*
 * @Date           : 2021-05-05 01:25:38
 * @FilePath       : /jinnian-space/job/1.js
 * @Description    : 
 */

const fs= require("fs")
let arr=[
  "global-modifying-module.d.ts.md",
  "global-plugin.d.ts.md",
  "global.d.ts.md",
  "module-class.d.ts.md",
  "module-function.d.ts.md",
  "module-plugin.d.ts.md",
  "module.d.ts.md",
    
    ]
     

    //  import MainComponent from "../md/demo2.md";


    function  formart_line(name,i){
        let name1=''

        name1=name.trim()
       
        name1='com'+ name1.replace(/\W/g,'')
        name1=name1.substring(0,name1.length-2)

        return {
            key: 'MainComponent'+(i+1),
            index:i,

            str: 'import MainComponent'+(i+1)+' from "../md/templates/'+name+'"'
        } 


    }
    let all_components= []
    let all_line = []
    arr.map((x,i)=>{
        let obj= formart_line(x,i)

        all_components.push(obj.key)
        all_line .push(obj.str)

    })

    let final_str= ''
 


    final_str='\n'

    fs.writeFile('all.txt', '\n', 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });


      all_line.map(x=>{
        final_str+=x+'\n'

        
      })


      final_str+='\n\n\n\n\n\n\n\n\n'
   


      all_components.map(x=>{
        final_str+=x+',\n'
   

      })

      final_str+=' \n\n\n\n\n\n\n\n\n\n'
 

      // all_components.map((x,i)=>{
       
      //     let str = `{ label: "${i+1}" ,value: "m${i+1}"},\n`
      //     final_str+= str
      //   fs.appendFile('all.txt',str, 'utf8', (err) => {
      //       if (err) throw err;
      //       // console.log('The file has been saved!');
      //     });

      // })

      final_str+='\n\n\n\n\n\n\n\n\n\n'
      let dd=''

      // <q-markdown :src="MainComponent" />

      arr.map((x,i)=>{
        final_str+=`<q-markdown :src="MainComponent${i+1}" />\n`
      })


      fs.appendFile('all.txt',final_str, 'utf8', (err) => {
        if (err) throw err;
        // console.log('The file has been saved!');
      });
