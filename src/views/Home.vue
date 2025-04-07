<template>
  <div class="home">
    <!-- 大气的Banner区域 -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>科技金融前沿资讯</h1>
        <p class="subtitle">专业、深度、前瞻性的科技金融分析平台</p>
        <router-link to="/news" class="cta-button">探索更多</router-link>
      </div>
    </section>
    
    <!-- 精选内容区域 -->
    <section class="featured-section">
      <h2 class="section-title">精选内容</h2>
      <div class="featured-grid">
        <div class="featured-card" v-for="(item, index) in featuredItems" :key="index" @mouseenter="hoverCard(index)" @mouseleave="resetCard">
          <div class="card-inner" :class="{ 'is-flipped': activeIndex === index }">
            <div class="card-front" :style="{ background: item.color }">
              <div class="card-icon">
                <img v-if="item.svgIcon" :src="item.svgIcon" alt="图标" class="svg-icon">
                <span v-else class="emoji-icon">{{ item.icon }}</span>
              </div>
              <h3>{{ item.title }}</h3>
            </div>
            <div class="card-back">
              <p>{{ item.description }}</p>
              <router-link :to="item.link" class="card-link">查看详情 →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 特色栏目 -->
    <section class="special-columns">
      <h2 class="section-title">特色栏目</h2>
      <div class="columns-container">
        <div class="column-item" v-for="column in columns" :key="column.id">
          <div class="column-icon" :style="{ background: column.color }">
            <img v-if="column.svgIcon" :src="column.svgIcon" alt="图标" class="svg-icon">
            <span v-else class="emoji-icon">{{ column.icon }}</span>
          </div>
          <h3>{{ column.title }}</h3>
          <p>{{ column.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeIndex: null,
      featuredItems: [
        {
          title: '行业分析',
          description: '深度解读科技金融行业发展趋势',
          link: '/news/category/industry',
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          icon: '📊',
          svgIcon: require('@/assets/industry-icon.svg')
        },
        {
          title: '投资策略',
          description: '科技领域投资机会与风险分析',
          link: '/news/category/investment',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          icon: '💰',
          svgIcon: require('@/assets/investment-icon.svg')
        },
        {
          title: '技术创新',
          description: '前沿科技在金融领域的应用',
          link: '/news/category/tech',
          color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          icon: '⚙️',
          svgIcon: require('@/assets/tech-icon.svg')
        }
      ],
      columns: [
        {
          id: 1,
          icon: '📊',
          title: '数据报告',
          description: '权威数据与研究报告',
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          svgIcon: require('@/assets/data-icon.svg')
        },
        {
          id: 2,
          icon: '🎙️',
          title: '专家访谈',
          description: '行业领袖深度对话',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          svgIcon: require('@/assets/interview-icon.svg')
        },
        {
          id: 3,
          icon: '📈',
          title: '市场观察',
          description: '实时市场动态分析',
          color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          svgIcon: require('@/assets/market-icon.svg')
        }
      ]
    }
  },
  methods: {
    hoverCard(index) {
      this.activeIndex = index;
    },
    resetCard() {
      this.activeIndex = null;
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Banner样式 */
.hero-banner {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.banner-content {
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.banner-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #2c7be5 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: linear-gradient(135deg, #5a6fd1 0%, #6a4299 100%);
  transform: translateY(-2px);
}

/* 精选内容区域 */
.featured-section {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 50px;
  color: #2c3e50;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #2c7be5 0%, #764ba2 100%);
  margin: 15px auto 0;
  border-radius: 2px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 0;
  padding: 0;
}

.featured-card {
  perspective: 1000px;
  height: 300px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card-icon {
  margin-bottom: 20px;
  font-size: 3rem;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin: 0 auto 20px;
}

.emoji-icon {
  font-size: 2.5rem;
}

.svg-icon {
  width: 40px;
  height: 40px;
}

.card-front h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-front {
  color: white;
}

.card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.card-front h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.card-back {
  background: white;
  transform: rotateY(180deg);
}

.card-back p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.card-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border: 2px solid #667eea;
  border-radius: 30px;
}

.card-link:hover {
  color: white;
  background: #667eea;
  transform: translateX(5px);
}

/* 特色栏目 */
.special-columns {
  padding: 50px 20px;
  background: #f9f9f9;
}

.columns-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0;
}

.column-item {
  text-align: center;
  padding: 50px 30px;
  border-radius: 16px;
  background: white;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border: none;
  position: relative;
  overflow: hidden;
}

.column-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.column-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.column-icon {
  font-size: 3.5rem;
  margin-bottom: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.column-icon span {
  transition: transform 0.3s ease;
}

.column-item:hover .column-icon {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.column-item:hover .column-icon span {
  transform: scale(1.1);
}

.column-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #2c3e50;
  font-weight: 600;
}

.column-item p {
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-banner {
    height: 400px;
    background-attachment: scroll;
  }
  
  .card-icon {
    font-size: 2rem;
  }
  
  .card-front h3 {
    font-size: 1.2rem;
  }
  
  .banner-content h1 {
    font-size: 2.2rem;
    margin-bottom: 15px;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  .featured-section {
    padding: 30px 10px;
  }
  
  .special-columns {
    padding: 30px 10px;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
  }
  
  .featured-card {
    height: 220px;
    margin: 0;
  }
  
  .card-front h3 {
    font-size: 1.5rem;
  }
  
  .card-back p {
    font-size: 0.9rem;
  }
  
  .columns-container {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
  }
  
  .column-item {
    padding: 25px 15px;
  }
  
  .column-icon {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
  
  .column-item h3 {
    font-size: 1.3rem;
  }
  
  .column-item p {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 25px;
  }
}
</style>