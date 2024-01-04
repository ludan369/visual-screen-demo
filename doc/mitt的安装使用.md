# 安装

```shell
npm -i mitt
```

# 项目中使用mitt

## 在src下新建utils文件夹

```typescript
import mitt from 'mitt'

const emitter = mitt()

export default emitter
```

