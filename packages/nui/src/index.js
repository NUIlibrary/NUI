import './styles/index.styl';
import install from './install'
import setCSSVar from './styles/setCSSVar.js'

class NUI {
    constructor(options) {
        this.options = options;
        this.setCSSVar = setCSSVar;
        this.setCSSVar(options);
    }
    // 通过实例化类的方式，将通过该方法挂载
    install = install;
    // 直接调用类的方式，将通过该静态方法挂载
    static install = install;
}

export default NUI;
