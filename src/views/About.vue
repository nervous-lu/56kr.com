<template>
  <div class="about">
    <!-- 大气的Banner区域 -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>关于我们</h1>
        <p class="subtitle">专业、创新、值得信赖的科技金融平台</p>
      </div>
    </section>
    
    <!-- 公司信息卡片 -->
    <section class="company-info">
      <div class="info-card">
        <h2>公司简介</h2>
        <p>56kr是一家专注于科技金融领域的资讯平台，致力于为用户提供最新、最专业的行业资讯和分析报告。</p>
        <p>我们汇聚了行业顶尖的分析师团队，通过深度研究和数据分析，为用户提供有价值的投资决策参考。</p>
      </div>
    </section>
    
    <!-- 联系方式卡片 -->
    <section class="contact">
      <h2 class="section-title">联系我们</h2>
      <div class="contact-cards">
        <div class="contact-card" v-for="(item, index) in contactItems" :key="index">
          <div class="card-icon">
            <span>{{ item.icon }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      contactItems: [
        {
          icon: '✉️',
          title: '邮箱',
          content: 'contact@56kr.com'
        },
        {
          icon: '📞',
          title: '电话',
          content: '400-123-4567'
        },
        {
          icon: '📍',
          title: '地址',
          content: '北京市海淀区中关村南大街5号'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Banner样式 */
.hero-banner {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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

/* 公司信息卡片 */
.company-info {
  padding: 80px 0;
  background: #f9f9f9;
}

.info-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.info-card h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2c3e50;
}

.info-card p {
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

/* 联系方式卡片 */
.contact {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  color: #2c3e50;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-card {
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.contact-card p {
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
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
  
  .info-card {
    padding: 20px 15px;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .contact-card {
    padding: 20px;
  }
}
</style>