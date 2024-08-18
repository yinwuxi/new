<template>
  <div>
    <h1>{{ categoryName }}</h1>
    <!-- 使用 flex 布局使商品项横向排列 -->
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-item">
        <!-- 商品链接 -->
        <router-link :to="{ path: '/product/' + product.id }" class="product-link">
          <!-- 商品图片 -->
          <img :src="`/src/assets/${product.image}`" :alt="product.name" class="product-image" />
          <!-- 商品名称 -->
          <div class="product-name">{{ product.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryName = route.params.categoryName;
const products = ref([]);

onMounted(() => {
  // 模拟数据：实际使用时可以替换为 API 调用或从本地加载数据
  const allProducts = [
    {id: '1', name: '手柄球(SBB)', category: '手柄', image: '手柄类/SBB.jpg'},
    {id: '2', name: '椭圆手柄套(STT)', category: '手柄', image: '手柄类/STT.jpg'},
    {id: '3', name: '长手柄套(SCT)', category: '手柄', image: '手柄类/SCT.jpg'},
    {id: '4', name: '转动长手柄(SCZ)', category: '手柄', image: '手柄类/SCZ.jpg'},
    {id: '5', name: '可调位紧定手柄(SKK)', category: '手柄', image: '手柄类/SKK.jpg'},
    {id: '6', name: '摇手柄(SZY)', category: '手柄', image: '手柄类/SZY.jpg'},

    {id: '7', name: '直纹把手(BZW)', category: '把手', image: '把手类/BZW.jpg'},
    {id: '8', name: '五角形把手(BWJ)', category: '把手', image: '把手类/BWJ.jpg'},
    {id: '9', name: '波纹把手(BBW)', category: '把手', image: '把手类/BBW.jpg'},
    {id: '10', name: '十字把手(BSZ)', category: '把手', image: '把手类/BSZ.jpg'},
    {id: '11', name: '小波纹把手(BXP)', category: '把手', image: '把手类/BXP.jpg'},
    {id: '12', name: 'T形把手(BTK)', category: '把手', image: '把手类/BTK.jpg'},

    {id: '13', name: '小手轮(LXL)', category: '手轮', image: '手轮类/LXL.jpg'},
    {id: '14', name: '背波纹手轮(LBB)', category: '手轮', image: '手轮类/LBB.jpg'},
    {id: '15', name: '圆轮缘手轮(LYL)', category: '手轮', image: '手轮类/LYL.jpg'},
    {id: '16', name: '圆轮手轮(LYS)', category: '手轮', image: '手轮类/LYS.jpg'},
    {id: '17', name: '内波纹手轮(LNB)', category: '手轮', image: '手轮类/LNB.jpg'},
    {id: '18', name: '可折双幅条手轮(TSF)', category: '手轮', image: '手轮类/TSF.jpg'},

    {id: '19', name: '椭圆拉手(TTY)', category: '拉手', image: '拉手类/TTY.jpg'},
    {id: '20', name: '方形拉手(TFX)', category: '拉手', image: '拉手类/TFX.jpg'},
    {id: '21', name: '拉手(TFB)', category: '拉手', image: '拉手类/TFB.jpg'},
    {id: '22', name: '圆形拉手(TYX)', category: '拉手', image: '拉手类/TYX.jpg'},
    {id: '23', name: '拉手(TZX)', category: '拉手', image: '拉手类/TZX.jpg'},
    {id: '24', name: '拉手(TBY)', category: '拉手', image: '拉手类/TBY.jpg'},
    {id: '25', name: '折叠拉手(TZD)', category: '拉手', image: '拉手类/TZD.jpg'},
    {id: '26', name: '拉手(TYG)', category: '拉手', image: '拉手类/TYG.jpg'},
    {id: '27', name: '拉手(TCM)', category: '拉手', image: '拉手类/TCM.jpg'},
    {id: '28', name: '长拉手(TCL)', category: '拉手', image: '拉手类/TCL.jpg'},
    {id: '29', name: '拉手(TXC)', category: '拉手', image: '拉手类/TXC.jpg'},
    {id: '30', name: '拉手(TXL)', category: '拉手', image: '拉手类/TXL.jpg'},
    {id: '31', name: '员形长拉手(TYC)', category: '拉手', image: '拉手类/TYC.jpg'},
    {id: '32', name: '方形长拉手(TFC)', category: '拉手', image: '拉手类/TFC.jpg'},

    {id: '33', name: '01', category: '机械配件', image: '机械配件/01.jpg'},
    {id: '34', name: '02', category: '机械配件', image: '机械配件/02.jpg'},
    {id: '35', name: '03', category: '机械配件', image: '机械配件/03.jpg'},
    {id: '36', name: '04', category: '机械配件', image: '机械配件/04.jpg'},
    {id: '37', name: '05', category: '机械配件', image: '机械配件/05.jpg'},
    {id: '38', name: '06', category: '机械配件', image: '机械配件/06.jpg'},
    {id: '39', name: '07', category: '机械配件', image: '机械配件/07.jpg'},
    {id: '40', name: '08', category: '机械配件', image: '机械配件/08.jpg'},
    {id: '41', name: '09', category: '机械配件', image: '机械配件/09.jpg'},
    {id: '42', name: '10', category: '机械配件', image: '机械配件/10.jpg'},
    {id: '43', name: '11', category: '机械配件', image: '机械配件/11.jpg'},
    {id: '44', name: '12', category: '机械配件', image: '机械配件/12.jpg'},
    {id: '45', name: '13', category: '机械配件', image: '机械配件/13.jpg'},
    {id: '46', name: '14', category: '机械配件', image: '机械配件/14.jpg'},
    {id: '47', name: '15', category: '机械配件', image: '机械配件/15.jpg'},
    // 添加更多商品数据
  ];
  products.value = allProducts.filter(product => product.category === categoryName);
});
</script>

<style scoped>
/* 商品容器 */
.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* 商品间距 */
}

/* 单个商品项 */
.product-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  text-align: center;
}

/* 商品链接 */
.product-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* 商品图片 */
.product-image {
  width: 100%;
  height: auto;
}

/* 商品名称 */
.product-name {
  padding: 8px;
  font-size: 16px;
}
</style>
