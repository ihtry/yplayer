## 欢迎使用yplayer网页音乐播放器插件

一行js代码接入您的网站，无需安装,官方地址->[yplayer.try.cx](https://yplayer.try.cx)

### 开始使用

##### 下载依赖文件

```markdown
git clone https://github.com/apiboys/yplayer.git
```

#### 引入js和css文件

<!--引入css-->
<link rel="stylesheet" href="Source/Skin/yplayer.min.css">
<!--引入js-->
<script src="Source/Skin/yplayer.min.js"></script>
<!--引入音乐数据文件-->
<script src="Source/music.js"></script>
##### 修改音乐数据

- Music
  - img(封面)
  - Lrc(歌词)
  - mp3(歌曲文件)
- Skin
  - music.js(音乐数据)

```JavaScript
   var ap = new yplayer({
      element: document.getElementById('yplayer'),
      narrow: false,
      /*自动播放，默认值为false，true为开启自动播放*/
      autoplay: true,
      showlrc: true,
      /*lrc歌词显示方式,默认值为1,HTML显示方式，2为JavaScript字符串显示方式，3为lrc文件加载显示方式*/
      lrcType: 3,
      /*主题颜色*/
      theme: '#ff4400',
      /*歌曲列表默认不展开*/
      /*固定位置*/
      fixed: true,
      listFolded: true,
      /*歌曲集合列表*/
      audio: [{
          title: '歌曲名称',
          artist: '歌手名称',
          url: '', //这里是歌曲地址
          cover: '', //首页显示图片地址
          lrc: '', //歌词地址
      } ]
  });
  //   以上的文件路径必须是绝对路径，不能是相对路径
```

##### 前台调用

```html
<div id="yplayer"></div>
<!--任意地址添加id为yplayer即可-->
```

