const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0,1).toUpperCase()+dirName.substring(1);

if(!dirName){
  console.log('文件名称不能为空');
  console.log('示例：npm run tep test');
  process.exit(0);
}

const indexTep = `
import Taro, { Component, Config } from '@tarojs/taro';
import { 
  View,
  Text, 
} from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import Layout from '../../components/Layout';

import './${dirName}.less'

interface ${capPirName}Props {
 
}

interface ${capPirName}State {
 
}

// @connect(({})=>({}))
class ${capPirName} extends Component<${capPirName}Props,${capPirName}State > {
 
  constructor(props: ${capPirName}Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <Layout noBack={false} title='标题' app-page='page-container' layout='page'>
      <View className='${dirName}-box'>
          hello word
      </View>
    </Layout>
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


fs.mkdirSync(`./src/pages/${dirName}`);
process.chdir(`./src/pages/${dirName}`);

fs.writeFileSync(`${dirName}.tsx`, indexTep); //tsx
fs.writeFileSync(`${dirName}.less`, lessTap); // scss
process.exit(0);

