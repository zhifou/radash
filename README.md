# Radash中文文档
## 安装
```
npm install radash
```

## 开始

### 欢迎来到2020年代

Radash将是你不可或缺的下一个库。首先，它功能强大。凭借这些强大的功能，你可以获得稳定的类型和零依赖。如果你能带着一点信心尝试这些功能，我毫不怀疑你会爱上它。

### 特色功能

来吧，先试试水。这里有一些我们再也无法离开的功能。希望你也会发现它们很有用。

#### try
_.try 函数抽象了 try/catch 的逻辑分支，并提供了一个类似于 error first callback 的响应。

```ts
const [err, response] = await _.try(api.gods.create)({ name: 'Ra' })
if (err) {
  throw new Error('Your god is weak and could not be created')
}
```

#### range
_.range 函数返回一个可用于迭代的生成器。这意味着你永远都不需要再写 for (let i) 循环了——而且你也不应该写了。

```ts
for (const i of _.range(0, 4)) {
  console.log(i) // 0, 1, 2, 3, 4
}

for (const i of _.range(10, 20, 2)) {
  console.log(i) // 10, 12, 14, 16, 18, 20
}
```

#### select
_.select 函数同时接收映射函数和过滤函数，并在单次迭代中一起运行它们。你再也不需要写 reduce 函数来进行映射和过滤了，而且为了性能考虑，你也不想将它们分开实现。

```ts
const superPoweredGodsFromEgypt = _.select(
  gods, 
  g => ({ ...g, power: g.power * g.power }), 
  g => g.culture === 'egypt'
)
```

#### defer
_.defer 函数允许你在运行异步函数时注册函数以进行清理。它类似于 try/finally 结构，但你可以在特定时间注册 finally 块。

```ts
await _.defer(async (defer) => {
  await api.builds.updateStatus('in-progress')
  defer((err) => {
    api.builds.updateStatus(err ? 'failed' : 'success')
  })

  fs.mkdir('build')
  defer(() => {
    fs.unlink('build')
  })

  await build()
})
```

#### objectify
_.objectify 函数可帮助你一步将列表转换为对象。通常，我们要么分两步进行此操作，要么编写一个 reduce 函数。

```ts
const godsByCulture = _.objectify(gods, g => g.name, g => g.culture)
```

## 爱与不爱

### Lodash

Lodash 非常出色。在 JavaScript 仍在逐步成熟之时，Lodash 提供了在原生 JavaScript 中难以轻松实现的功能。那是上一个十年。在这十年里，需求已经不同了。Radash 的目标是提供你需要的强大功能，而不是运行时现在提供的功能，并通过易于阅读和理解的优质类型和源代码来实现这一点。

#### 拒绝

Radash 不提供 _.map 或 _.filter 函数。在可选链和空值合并操作符出现之前，它们确实很有帮助。但现在，我们真的不再需要它们了。

在过去的十年里，整个 JavaScript 社区，尤其是 TypeScript 社区，越来越接近一些关键价值观：确定性是好的，多态性是不好的，强类型是至关重要的。Lodash 的一部分魅力在于，它允许你将不同类型的参数传递给函数，并根据类型获得不同的行为。例如，_.map 函数可以接受一个集合或对象，并对其进行映射。但 Radash 不提供这种多态行为。

对此，我表示遗憾，但并不抱歉。