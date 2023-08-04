---
category:
  - Python
tag:
  - 脚本
  - Python
  - 文件
---

# 游戏数据文件解密

::: warning
这是`Python`文档，并非`Lua`文档！
:::

> 此脚本用于解密迷你世界的各种加密数据文件   
> 使用之前请确保已经安装`Python3`并配置好环境变量  
> `Python`脚本由Four_cps协助编写

## 用到的库

```python
import zlib
import os
```

其中`zlib`库需要自行安装

## 使用方法

1. 找到`cvs`等数据文件
2. 以`十六进制`编码打开文件
3. 删除文件头前`8`个字节
4. 重命名`csv`文件为`main.csv`
5. 运行`xor.py`
6. 运行`zlib.py`
7. 输出的`_main.csv`即为解密后的文件

## `xor.py`

```python
def xor(data, key):
    key_len = len(key)
    data_len = len(data)
    key= data_len//key_len*key+key[:data_len%key_len]
    return bytearray(a^b for a, b in zip(*map(bytearray, [data, key])))
 
with open("main.csv", 'rb') as f:
    data = f.read()
 
key = b"\xd6\x02\x08\x00\xf4\xfe\xff\x3f\x01\x00\x00\x00\xd0\xca\x01\x00"
res = xor(data, key)
 
with open("main.csv.dec", 'wb') as f:
    print(res)
    f.write(res)
```

## `zlib.py`

```python
import zlib
import os

def decompress(infile, dst):
    infile = open(infile, 'rb')
    dst = open(dst, 'wb')
    decompress = zlib.decompressobj()
    data = infile.read(1024)
    while data:
        dst.write(decompress.decompress(data))
        data = infile.read(1024)
    dst.write(decompress.flush())

if __name__ == "__main__":
    for file_name in os.listdir():
        if (file_name[-3:] == "csv"):
            with open(file_name, 'rb') as in_file:
                with open(file_name+"_", 'wb') as out_file:
                    out_file.write(in_file.read()[8:])

    for file_name in os.listdir():
        if file_name[-3:] == "dec":
            decompress(file_name, "_" + file_name[:-9] + ".csv")
    
```