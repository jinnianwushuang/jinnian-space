###
 # @Date           : 2021-01-30 04:20:16
 # @FilePath       : /jinnian-space/src/pages/linux/rname.sh
 # @Description    : 
### 
#!/bin/bash
# mkdir ./img2
for file in `ls ./img/`;do
        echo $file
        mv "./img/$file"  "./img2/$file.png"
done