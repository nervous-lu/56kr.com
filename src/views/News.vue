<template>
  <div class="news">
    <section class="hero-banner">
      <div class="banner-content">
        <h1>科技金融资讯</h1>
        <p class="subtitle">最新、最专业的行业资讯和分析报告</p>
      </div>
    </section>
    <h1 class="page-title">新闻中心</h1>
    
    <div class="news-grid">
      <div class="news-card" v-for="item in newsItems" :key="item.id" @mouseenter="hoverCard(item.id)" @mouseleave="resetCard">
        <div class="card-image" :style="{ backgroundImage: 'url(' + item.image + ')' }">
          <span class="category-tag" :style="{ background: item.categoryColor }">{{ item.category }}</span>
        </div>
        <div class="card-content">
          <p class="date">{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p class="summary">{{ item.summary }}</p>
          <router-link :to="`/news/${item.id}`" class="read-more">阅读全文 →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      activeCard: null,
      newsItems: [
        {
          id: 1,
          title: '科技金融新趋势：2023年行业展望',
          date: '2023-06-15',
          summary: '近期科技金融领域出现了一些新的发展趋势，包括去中心化金融的普及、AI在风险管理中的应用等...',
          category: '行业分析',
          categoryColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 2,
          title: '区块链技术在供应链金融中的创新应用',
          date: '2023-06-10',
          summary: '区块链技术在金融领域的应用越来越广泛，特别是在供应链金融方面带来了革命性的变化...',
          category: '技术创新',
          categoryColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 3,
          title: '人工智能如何重塑投资分析行业',
          date: '2023-06-05',
          summary: '人工智能技术正在改变传统的投资分析方式，从基本面分析到量化交易都产生了深远影响...',
          category: '深度报道',
          categoryColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 4,
          title: '央行数字货币全球发展现状与未来',
          date: '2023-05-28',
          summary: '全球各国央行数字货币研发进展不一，中国数字人民币试点已进入新阶段...',
          category: '政策解读',
          categoryColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 5,
          title: '金融科技初创企业融资趋势分析',
          date: '2023-05-20',
          summary: '2023年第一季度金融科技领域投融资数据显示，支付和区块链仍是投资热点...',
          category: '投融资',
          categoryColor: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
          image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]
    }
  },
  methods: {
    hoverCard(id) {
      this.activeCard = id;
    },
    resetCard() {
      this.activeCard = null;
    }
  }
}
</script>

<style scoped>
.news {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.page-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: #2c3e50;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.news-card, .news-item {
  padding: 30px;
  margin-bottom: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.news-card:hover, .news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.category-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 10px;
  color: white;
  font-size: 0.8rem;
  border-radius: 20px;
  font-weight: bold;
}

.card-content {
  padding: 25px;
}

date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.news-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.summary {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: #35495e;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .hero-banner {
    height: 300px;
  }
  
  .banner-content h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .news-card {
    padding: 20px;
  }
  
  .card-image {
    height: 150px;
  }
  
  .page-title {
    font-size: 2rem;
  }

  .news {
    padding: 30px 15px;
  }
}
</style>