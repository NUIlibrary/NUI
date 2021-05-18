# NUI

## Download & Use

### Download

```shell
npm install @nuilibrary/nui --save 
```

### Use

In the main file of the project

```javascript
import NUI from '@nuilibrary/nui';
import '@nuilibrary/nui/lib/nui.css';

/* Type 1 */
createApp(App).use(NUI).mount('#app');

/* Type 2 */
const nui = new NUI({ /* Your Options */});
createApp(App).use(nui).mount('#app');
```

