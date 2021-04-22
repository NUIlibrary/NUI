import './styles/index.styl';
import install from './install'

class NUI {
    constructor(options) {
        this.options = options;
    }
    // 通过实例化类的方式，将通过该方法挂载
    install = install;
    // 直接调用类的方式，将通过该静态方法挂载
    static install = install;
}

export default NUI;
