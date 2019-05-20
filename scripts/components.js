const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0,1).toUpperCase()+dirName.substring(1);


if(!dirName){
  console.log('文件名称不能为空');
  console.log('示例：npm run com test');
  process.exit(0);
}

const indexTep = `
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text, 
} from '@tarojs/components';

import './index.less'

interface ${capPirName}Props {
 
}

interface ${capPirName}State {
 
}


class ${capPirName} extends Component<${capPirName}Props,${capPirName}State > {
 
  constructor(props: ${capPirName}Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='${dirName}-box'>
          hello word
      </View>
    )
  }
}

export default ${capPirName}

`


// less 文件
const lessTap = `
.${dirName}-box{
  width:100%;
}
`


fs.mkdirSync(`./src/components/${dirName}`);
process.chdir(`./src/components/${dirName}`);

fs.writeFileSync(`index.tsx`, indexTep); //tsx
fs.writeFileSync(`index.less`, lessTap); // scss
process.exit(0);

