<template>
  <div class="container">
    <h1>衡水京玉机械配件厂</h1>
    <!-- 商品类别容器 -->
    <div class="categories">
      <div v-for="category in categories" :key="category.name" class="category-item">
        <router-link :to="{ path: '/category/' + category.name }" class="category-link">
          <!-- 类别图片 -->
          <img :src="category.image" :alt="category.name" class="category-image" />
          <!-- 类别名称 -->
          <div class="category-name">{{ category.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {name: '手柄', image: 'src/assets/手柄.jpg'},
  {name: '把手', image: 'src/assets/把手.jpg'},
  {name: '手轮', image: 'src/assets/手轮.jpg'},
  {name: '拉手', image: 'src/assets/拉手.jpg'},
  {name: '机械配件', image: 'src/assets/机械配件.jpg'}
];
</script>

<style scoped>
/* 页面容器 */
.container {
  padding: 20px;
  text-align: center;
}

/* 商品类别容器 */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* 单个类别项 */
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  width: 200px;
}

/* 类别图片 */
.category-image {
  width: 200px; /* 设定固定宽度 */
  height: 200px; /* 设定固定高度 */
  object-fit: cover; /* 确保图片按比例裁剪以适应容器 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 类别名称 */
.category-name {
  margin-top: 10px;
  font-size: 20px; /* 增大字体 */
  font-weight: bold;
  color: #333;
}

/* 去除下划线 */
.category-link {
  text-decoration: none;
}
</style>
