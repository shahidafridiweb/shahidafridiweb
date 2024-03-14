const fs=require('fs');
const path=require('path');

const dirPath = path.join(__dirname,'files');
console.warn(dirPath); 
for(i=0;i<3;i++){
    fs.writeFileSync(dirPath+`/File${i}.txt`,`File data ${i}`)
}


// fs.writeFileSync('newFile.txt','Here Im adding text');
