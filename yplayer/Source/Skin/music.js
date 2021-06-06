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
          title: '纪念',
          artist: '雷雨心',
          url: 'Source/Music/mp3/miss.mp3', //这里是歌曲地址
          cover: 'Source/Music/img/miss.png', //首页显示图片地址
          lrc: 'Source/Music/lrc/miss.lrc', //歌词地址
      }]
  });
  //   以上的文件路径必须是绝对路径，不能是相对路径