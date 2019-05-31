import Taro from '@tarojs/taro';
// import defaultShareImg from '../../assets/user/default.png';
import {globalData} from "../../utils/common";

interface Option {
  title?:string,
  path?:string
}


function withShare(opts:Option) {

  // 设置默认
  const defalutPath = 'pages/index/index';
  const defalutTitle = '未来密码mm';
  // const defaultImageUrl = defaultShareImg;

  return function demoComponent(Component) {

    class WithShare extends Component {
      async componentWillMount() {
        Taro.showShareMenu({
          withShareTicket: true
        });

        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        const { userInfo } = globalData;

        let { title, path = null } = opts;

        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        if (!path) {
          path = defalutPath;
        }

        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        let sharePath = '';
        if(userInfo.id){
          sharePath = `${path}&shareFromUser=${userInfo.id}`;
        }else {
          sharePath = `${path}`;
        }

        return {
          title: title || defalutTitle,
          path: sharePath,
          // imageUrl: imageUrl || defaultImageUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return WithShare;
  };
}

export default withShare;
