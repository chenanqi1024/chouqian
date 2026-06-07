// index.ts
const fortunes = [
  {
    level: '上上签',
    keyword: '破晓',
    symbol: '☼',
    message: '好运正在赶来的路上，今天适合大胆迈出第一步。',
    advice: '宜：尝试新鲜事',
    luckyColor: '晨曦金',
  },
  {
    level: '上签',
    keyword: '重逢',
    symbol: '☽',
    message: '平凡的小事里藏着惊喜，留心身边温柔的瞬间。',
    advice: '宜：联系老朋友',
    luckyColor: '月光银',
  },
  {
    level: '中上签',
    keyword: '生长',
    symbol: '✧',
    message: '今天的努力不会白费，慢一点也依然在向前。',
    advice: '宜：专注完成一件事',
    luckyColor: '松石绿',
  },
  {
    level: '中签',
    keyword: '静观',
    symbol: '◇',
    message: '保持自己的节奏，答案会在行动中慢慢清晰。',
    advice: '宜：整理思绪',
    luckyColor: '星夜蓝',
  },
  {
    level: '小吉',
    keyword: '灵感',
    symbol: '✦',
    message: '会有一点小幸运落在你身上，记得接住它。',
    advice: '宜：奖励自己',
    luckyColor: '雾霭紫',
  },
  {
    level: '大吉',
    keyword: '闪耀',
    symbol: '✺',
    message: '今日能量满格，心里期待的事情会有好消息。',
    advice: '宜：勇敢表达',
    luckyColor: '琥珀橙',
  },
]

Component({
  data: {
    hasDrawn: false,
    isDrawing: false,
    level: '',
    keyword: '静候启示',
    symbol: '☾',
    message: '让心安静片刻，翻开属于你的今日指引',
    advice: '',
    luckyColor: '未揭晓',
    buttonText: '抽一张牌',
  },

  methods: {
    drawFortune() {
      if (this.data.isDrawing) {
        return
      }

      this.setData({
        hasDrawn: false,
        isDrawing: true,
        level: '',
        keyword: '感应星辰',
        symbol: '✦',
        message: '正在聆听宇宙的回响...',
        advice: '',
        luckyColor: '感应中',
        buttonText: '正在占卜',
      })

      wx.vibrateShort({ type: 'light' })

      setTimeout(() => {
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

        this.setData({
          hasDrawn: true,
          isDrawing: false,
          level: fortune.level,
          keyword: fortune.keyword,
          symbol: fortune.symbol,
          message: fortune.message,
          advice: fortune.advice,
          luckyColor: fortune.luckyColor,
          buttonText: '重新抽牌',
        })
      }, 480)
    },
  },
})
