import { useEffect } from 'react'

function VisitTracker() {
  useEffect(() => {
    // 生成唯一访客ID（基于时间戳和随机数）
    const generateVisitorId = () => {
      return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    }

    // 获取或创建访客ID
    let visitorId = localStorage.getItem('visitorId')
    if (!visitorId) {
      visitorId = generateVisitorId()
      localStorage.setItem('visitorId', visitorId)
    }

    // 记录本次访问
    const recordVisit = () => {
      const now = new Date()
      const visitData = {
        id: Date.now(),
        visitorId: visitorId,
        ip: '匿名IP', // 实际应用中应从后端获取真实IP
        timestamp: now.toISOString(),
        date: now.toISOString().split('T')[0],
        time: now.toLocaleTimeString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent.slice(0, 100),
      }

      // 从localStorage获取现有数据
      const existingStats = localStorage.getItem('visitStats')
      let stats = existingStats ? JSON.parse(existingStats) : {
        today: 0,
        month: 0,
        total: 0,
        details: []
      }

      // 添加新记录
      stats.details.push(visitData)
      stats.total = stats.details.length

      // 计算今日和本月统计
      const today = now.toISOString().split('T')[0]
      const currentMonth = now.toISOString().slice(0, 7)
      
      stats.today = stats.details.filter(v => v.date === today).length
      stats.month = stats.details.filter(v => v.date.startsWith(currentMonth)).length

      // 保存回localStorage
      localStorage.setItem('visitStats', JSON.stringify(stats))

      console.log('[VisitTracker] 访问已记录:', visitData)
    }

    // 记录访问
    recordVisit()

    // 监听页面变化（SPA路由切换）
    const handleRouteChange = () => {
      recordVisit()
    }

    // 使用 MutationObserver 监听URL变化
    let lastUrl = window.location.href
    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href
        handleRouteChange()
      }
    })

    observer.observe(document, { subtree: true, childList: true })

    // 清理
    return () => {
      observer.disconnect()
    }
  }, [])

  return null // 这是一个无UI的追踪组件
}

export default VisitTracker
