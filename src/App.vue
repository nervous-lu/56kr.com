<template>
  <div id="app">
    <header>
      <div class="header-container">
        <div class="logo-container">
          <img src="./assets/logo-modern.svg" alt="56 Logo" class="logo">
        </div>
        <nav>
          <div class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="nav-links" :class="{ 'active': isMenuOpen }">
            <router-link to="/" @click="closeMenu">首页</router-link>
            <router-link to="/news" @click="closeMenu">新闻</router-link>
            <router-link to="/about" @click="closeMenu">关于我们</router-link>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2023 56kr.com 版权所有</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen) {
        document.addEventListener('click', this.handleDocumentClick);
      } else {
        document.removeEventListener('click', this.handleDocumentClick);
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.removeEventListener('click', this.handleDocumentClick);
    },
    handleDocumentClick(event) {
      const navElement = this.$el.querySelector('nav');
      const menuToggle = this.$el.querySelector('.menu-toggle');
      if(!navElement.contains(event.target) && !menuToggle.contains(event.target)) {
        this.closeMenu();
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

header {
  padding: 1rem 0;
  background: linear-gradient(135deg, #1a2b3c 0%, #3a4b5c 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: nowrap;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.logo {
  height: 48px;
  width: auto;
}

.logo-text {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 1px;
}

footer {
  padding: 1rem;
  background: #f8f8f8;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.05);
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

nav a.router-link-exact-active {
  color: #2c7be5;
  background: rgba(44, 123, 229, 0.2);
  box-shadow: 0 6px 16px rgba(44, 123, 229, 0.25);
  transform: translateY(-1px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 0.25rem;
  background: white;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 2px 0;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    order: 1;
    margin-left: auto;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  
  .menu-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  .nav-links {
    position: fixed;
    top: 70px;
    right: 10px;
    width: 250px;
    max-height: 75vh;
    background: rgba(26, 43, 60, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    transform: translateX(120%);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 100;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    gap: 0.8rem;
    overflow-y: auto;
    border-radius: 12px;
  }
  
  .nav-links.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }
  
  .nav-links {
    pointer-events: none;
  }

  nav a {
    width: 85%;
    padding: 0.8rem;
    margin: 0.2rem 0;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
}



main {
  padding: 0;
  min-height: calc(100vh - 200px);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0 0.8rem;
    flex-wrap: wrap;
  }
  
  .logo-container {
    width: auto;
    justify-content: flex-start;
    margin-bottom: 0;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }
  
  .logo {
    height: 36px;
  }
  
  nav {
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    gap: 0;
    padding: 0;
  }
  
  .menu-toggle {
    margin-left: 1rem;
    transition: all 0.3s ease;
  }
  
  .menu-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .nav-links {
    top: 70px;
    right: 10px;
    width: 250px;
    max-height: 75vh;
    padding: 1rem 0;
    background: rgba(26, 43, 60, 0.98);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
  
  nav a {
    width: 85%;
    padding: 0.8rem;
    margin: 0.3rem 0;
    font-size: 0.95rem;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  
  nav a:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>