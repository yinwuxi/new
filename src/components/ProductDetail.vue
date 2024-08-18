<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <div v-if="Array.isArray(product.image)">
      <img v-for="(img, index) in product.image" :key="index" :src="img" :alt="product.name"
           :style="{ width: '200px', height: '150px', objectFit: 'contain' }"/></div>
    <div v-else>
      <img :src="product.image" :alt="product.name" :style="{ width: '200px', height: '150px', objectFit: 'cover' }" />
    </div>
    <h2>规格</h2>
    <table class="product-info">
      <tbody>
      <!-- 显示型号1的详细信息表格 -->
      <tr v-if="product.model === '型号1'">
        <td colspan="2">
          <table class="detailed-info">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号2'">
        <td colspan="2">
          <table class="detailed-info-small">
            <tbody>
            <tr v-for="(row, rowIndex) in tableDataSmall" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号3'">
        <td colspan="2">
          <table class="detailed-info-03">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData03" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号4'">
        <td colspan="2">
          <table class="detailed-info-04">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData04" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号5'">
        <td colspan="2">
          <table class="detailed-info-small">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData05" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号6'">
        <td colspan="2">
          <table class="detailed-info-small">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData06" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr v-if="product.model === '型号7'">
        <td colspan="2">
          <table class="detailed-info-07">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData07" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号8'">
        <td colspan="2">
          <table class="detailed-info-08">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData08" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号9'">
        <td colspan="2">
          <table class="detailed-info-09">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData09" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号10'">
        <td colspan="2">
          <table class="detailed-info-10">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData10" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号11'">
        <td colspan="2">
          <table class="detailed-info-11">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData11" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号12'">
        <td colspan="2">
          <table class="detailed-info-12">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData12" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr v-if="product.model === '型号13'">
        <td colspan="2">
          <table class="detailed-info-13">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData13" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号14'">
        <td colspan="2">
          <table class="detailed-info-14">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData14" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号15'">
        <td colspan="2">
          <table class="detailed-info-15">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData15" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号16'">
        <td colspan="2">
          <table class="detailed-info-16">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData16" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号17'">
        <td colspan="2">
          <table class="detailed-info-17">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData17" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="product.model === '型号18'">
        <td colspan="2">
          <table class="detailed-info-18">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData18" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <!-- For tableData19 -->
      <tr v-if="product.model === '型号19'">
        <td colspan="2">
          <table class="detailed-info-19">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData19" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData20 -->
      <tr v-if="product.model === '型号20'">
        <td colspan="2">
          <table class="detailed-info-20">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData20" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData21 -->
      <tr v-if="product.model === '型号21'">
        <td colspan="2">
          <table class="detailed-info-21">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData21" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData22 -->
      <tr v-if="product.model === '型号22'">
        <td colspan="2">
          <table class="detailed-info-22">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData22" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData23 -->
      <tr v-if="product.model === '型号23'">
        <td colspan="2">
          <table class="detailed-info-23">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData23" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData24 -->
      <tr v-if="product.model === '型号24'">
        <td colspan="2">
          <table class="detailed-info-24">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData24" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData25 -->
      <tr v-if="product.model === '型号25'">
        <td colspan="2">
          <table class="detailed-info-25">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData25" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData26 -->
      <tr v-if="product.model === '型号26'">
        <td colspan="2">
          <table class="detailed-info-26">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData26" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData27 -->
      <tr v-if="product.model === '型号27'">
        <td colspan="2">
          <table class="detailed-info-27">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData27" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData28 -->
      <tr v-if="product.model === '型号28'">
        <td colspan="2">
          <table class="detailed-info-28">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData28" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData29 -->
      <tr v-if="product.model === '型号29'">
        <td colspan="2">
          <table class="detailed-info-29">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData29" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData30 -->
      <tr v-if="product.model === '型号30'">
        <td colspan="2">
          <table class="detailed-info-30">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData30" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData31 -->
      <tr v-if="product.model === '型号31'">
        <td colspan="2">
          <table class="detailed-info-31">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData31" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- For tableData32 -->
      <tr v-if="product.model === '型号32'">
        <td colspan="2">
          <table class="detailed-info-32">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData32" :key="rowIndex">
              <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>



      </tbody>
    </table>
  </div>
  <div v-else>
    <p>加载中...</p>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null);

// Sample data for 6x15 table for 型号1
const tableData = ref([
  ['No', 'D', 'd', 'M', 'h', 'g'],
  ['M5*20', '20', '7', 'M5', '10', '6'],
  ['M5*20', '20', '7', 'M6', '12', '5'],
  ['M6*25', '25', '10', 'M6', '14', '10'],
  ['M8*25', '25', '10', 'M8', '15', '10'],
  ['M8*30', '30', '15', 'M8', '17', '17'],
  ['M10*30', '30', '15', 'M10', '20', '16'],
  ['M8*32', '32', '15', 'M8', '17', '20'],
  ['M10*32', '32', '15', 'M10', '20', '18'],
  ['M8*35', '35', '15', 'M8', '17', '27'],
  ['M10*35', '35', '15', 'M10', '20', '27'],
  ['M10*40', '40', '18', 'M10', '20', '39'],
  ['M12*40', '40', '18', 'M12', '25', '37'],
  ['M12*50', '50', '20', 'M12', '25', '76'],
  ['M16*50', '50', '20', 'M16', '30', '72'],
]);
const tableDataSmall = ref([
  ['No', 'L','D','D1', 'M', 'h', 'g'],
  ['M6*30', '30', '20', '14', 'M6','12','11'],
  ['M8*40', '40', '26', '17', 'M8','20','20'],
  ['M10*55', '55', '32', '20', 'M10','25','45'],
  ['M12*55', '55', '32', '20', 'M12','25','43'],
]);
const tableData03 = ref([
  [ 'L','D','d', 'I', 'M', 'g'],
  ['40', '18', '15', '12', 'M8','12'],
  ['60', '20', '18', '20', 'M8','25'],
  ['75', '25', '20', '30', 'M10','40'],
  ['100', '32', '22', '40', 'M12','75'],
]);
const tableData04 = ref([
  ['L','D','D1', 'M', 'h', 'g'],
  ['32', '18', '15','M6','12','28'],
  ['65', '23', '19','M8','15','86'],
  ['65', '23', '19','M10','16','90'],
  ['80', '26', '21','M10','18','132'],
  ['90', '28', '22','M12','18','170'],
]);
const tableData05 = ref([
  [ 'R','D','H', 'H1', 'h2', 'd','M','h','L','g'],
  ['40', '14', '35', '24', '4','10','M6','10','10 15 20 25 30','32~38'],
  ['65', '19', '45', '31', '6','14','M8','12',' 15 20 25 30 40','110~120'],
  ['80', '22', '55', '36', '8','16','M10','15',' 20 25 30 40 50','220~230'],
  ['95', '25', '65', '43', '11','19','M12','18','25 30 40 50 60','310~350'],
  ['110', '30', '75', '50','12','23','M16','20','30 40 50 60','450~500'],
]);
const tableData06 = ref([
  [ 'd','S','R', 'D', 'H', 'h','L'],
  ['12', '12', '100', '34', '38','34','65'],
  ['14', '14', '125', '40', '45','41','65'],
  ['16', '16/17', '160', '44', '55','50','85'],
]);
//2
const tableData07 = ref([
  [ 'D','D1','H', 'I', 'M','h','L', 'g'],
  ['20', '15', '12', '4', 'M5','10','10 15 20 25','8~15'],
  ['25', '20', '18', '6', 'M6','12','15 20 25 30','12~20'],
  ['32', '25', '18', '6', 'M8','15','20 25 30 40','20~32'],
  ['40', '30', '26', '10', 'M10','18','30 40 50','40~60'],
]);
const tableData08 = ref([
  [ 'D','D1','H', 'd1', 'd','h','M', 'L','g'],
  ['25', '15', '21','-', '5 m5','10', 'M5','10 15 20 25 30','15~20'],
  ['32', '19', '23','-', '6 m6','12', 'M6','15 20 25 30 40','20~30'],
  ['40', '21', '27','13', '8 m8','15', 'M8','20 25 30 40 50','30~45'],
  ['50', '25', '33','13', '10 m10','18', 'M10','25 30 40 50 60','52~75'],
  ['63', '27', '37','13', '12 m12','25', 'M12','30 40 50 60','85~130'],
]);
const tableData09 = ref([
  [ 'D','D1','H', 'd', 'h', 'M','L','g'],
  ['50', '23', '34', '8 m8', '16','M8','30 40 50','40-60'],
  ['65', '25', '38', '10 m10', '18','M10','30 40 50','68-85'],
  ['80', '33', '48', '12 m12', '25','M12','40 50 60','160-180'],
]);
const tableData10 = ref([
  [ 'D','D1','H', 'h', 'M'],
  ['25', '15', '21', '10', 'M6'],
  ['32', '19', '23', '12', 'M8'],
  ['40', '21', '27', '15', 'M10'],
]);
const tableData11 = ref([
  [ 'D','d','h','D1','d1', 'H', 'g'],
  ['63', '8', '14', '18', '3','20','60'],
  ['80', '10', '16', '22', '3','24','85'],
  ['100', '12', '18', '28', '3','28','195'],
  ['125', '12', '18', '36', '4','32','250'],
]);
const tableData12 = ref([
  [ 'L','B','H', 'I', 'D', 'd','d1','M','h','g'],
  ['70', '19', '40', '16', '12','6','2','M6','20','37'],
  ['80', '22', '45', '18', '16','8','3','M8','25','63'],
  ['90', '26', '50', '20', '18','10','3','M10','28','93'],
 ]);


//3
const tableData13 = ref([
  [ 'D', 'd', 'h', 'D1', 'd1', 'H', 'L', 'g' ],
  [ '80', '10', '16', '22', '3', '32', '32', '100' ],
  [ '100', '12', '18', '28', '3', '36', '12', '160' ]
]);
const tableData14 = ref([
  [ 'D', 'd', 'h', 'D1', 'H', 'B', 'L', 'g' ],
  [ '100', '12', '18', '36', '28', '14', '50', '320' ],
  [ '125', '12', '18', '46', '32', '16', '65', '450' ],
  [ '160', '16', '20', '48', '38', '18', '80', '650' ],
  [ '200', '18', '25', '55', '44', '20', '80', '1200' ],
  [ '250', '22', '28', '65', '52', '25', '100', '1650' ]
]);
const tableData15 = ref([
  [ 'D', 'd', 'h', 'H', 'B', 'L', 'g' ],
  [ '160', '15', '16', '20', '50', '18', '65' ],
  [ '200', '18', '20', '25', '57', '20', '80' ],
  [ '250', '22', '25', '28', '65', '30', '100' ]
]);
const tableData16 = ref([
  [ 'D', 'D1', 'H', 'h', 'h1', 'L', 'B', 'g' ],
  [ '80', '18', '36', '24', '10', '32', '12', '180' ],
  [ '100', '25', '40', '27', '10', '50', '14', '205' ],
  [ '125', '30', '45', '30', '12', '65', '18', '300' ],
  [ '140', '32', '47', '31', '14', '65', '20', '480' ],
  [ '160', '34', '50', '34', '16', '80', '22', '540' ],
  [ '200', '39', '55', '37', '17', '80', '24', '880' ],
  [ '250', '44', '65', '40', '18', '100', '30', '1550' ],
  [ '320', '54', '75', '44', '20', '100', '35', '2660' ]
]);
const tableData17 = ref([
  [ 'D', 'd', 'D1', 'H', 'h', 'B', 'L', 'g' ],
  [ '100', '12', '39', '41', '22', '26', '50', '350' ],
  [ '125', '12', '46', '44', '22', '30', '65', '580' ],
  [ '140', '163', '50', '54', '24', '32', '80', '780' ],
  [ '200', '18', '60', '56', '29', '34', '80', '1250' ]
]);
const tableData18 = ref([
  [ 'D', 'd', 'D1', 'H', 'h', 'L', 'B', 'g' ],
  [ '100', '10 12', '25', '40', '18', '50', '18', '180' ],
  [ '125', '12 14', '30', '42', '18', '65', '20', '210' ],
  [ '160', '15 16', '40', '46', '25', '80', '23', '380' ],
  [ '200', '18 20', '50', '54', '30', '90', '26', '560' ],
  [ '250', '22 25', '60', '70', '35', '100', '32', '900' ]
]);

const tableData19 = ref([
  [ 'A', 'L', 'H', 'D', 'B', 'M' ],
  [ '90', '107', '45', '26', '17', 'M6' ],
  [ '120', '140', '60', '30', '20', 'M8' ],
  [ '160', '180', '60', '30', '20', 'M8' ],
  [ '180', '200', '60', '30', '20', 'M8' ],
  [ '200', '220', '60', '30', '20', 'M8' ],
  [ '240', '260', '60', '30', '20', 'M8' ],
  [ '320', '340', '60', '30', '20', 'M8' ],
  [ '400', '424', '62', '33', '22', 'M8' ]
]);

const tableData20 = ref([
  [ 'A', 'L', 'H', 'D', 'B', 'd', 'd1', 'h', 'g' ],
  [ '90', '110', '36', '20', '6', '6.5', '10.5', '6', '26' ],
  [ '120', '140', '40', '26', '7', '8.5', '13.5', '7', '50' ],
  [ '150', '170', '45', '27', '7', '8.5', '13.5', '8', '60' ],
  [ '180', '200', '50', '28', '8', '8.5', '13.5', '9', '80' ]
]);

const tableData21 = ref([
  [ 'A', 'L', 'H', 'D', 'B', 'd', 'd1', 'h', 'g' ],
  [ '120', '140', '40', '24', '12', '9', '14', '10', '55' ],
  [ '135', '165', '45', '26', '15', '9XL4', '14X19', '10', '70' ],
  [ '160', '185', '47', '29', '18', '9', '14', '10', '85' ]
]);

const tableData22 = ref([
  [ 'A', 'L', 'H', 'D', 'B', 'd', 'd1', 'h', 'g' ],
  [ '132', '155', '55', '30', '18', '8', '14', '10', '9.5' ],
  [ '215', '255', '60', '35', '20', '8', '14', '10', '12.5' ]
]);

const tableData23 = ref([
  [ 'A', 'L', 'H', 'd', 'h', 'd1', 'B' ],
  [ '212', '270', '55', '9', '10', '13.5', '20' ],
  [ '180', '226', '50', '7', '5', '13.5', '19' ],
  [ '165', '195', '48', '7', '5', '13.5', '17' ]
]);

const tableData24 = ref([
  [ 'A', 'L', 'H', 'd', 'D', 'h' ],
  [ '132', '160', '50', '7', '26', '15' ],
  [ '160', '190', '55', '9', '27', '15' ],
  [ '180', '210', '55', '9', '28', '15' ]
]);

const tableData25 = ref([
  [ 'A', 'L', 'H', 'B', 'D', 'd', 'h', 'h1' ],
  [ '100', '190', '75', '15', '30', '6', '70', '30' ]
]);

const tableData26 = ref([
  [ 'A', 'L', 'H', 'D', 'B', 'd', 'd1', 'h', 'g' ],
  [ '132', '190', '55', '26', '15', '7', '14', '8', '70' ],
  [ '160', '210', '60', '29', '18', '9', '16', '8', '85' ]
]);

const tableData27 = ref([
  [ 'A', 'L', 'D', 'B', 'H', 'h', 'd' ],
  [ '235', '262', '32', '20', '53', '14', 'M8' ]
]);

const tableData28 = ref([
  [ 'B', 'A', 'L', 'g' ],
  [ '25', '300-1000', '357-1057', '400-800' ],
  [ '32', '150-300', '190-340' ]
]);

const tableData29 = ref([
  [ 'B', 'A', 'L', 'd', 'g' ],
  [ '22', '150-250', '185-285', '8', '120-230' ]
]);

const tableData30 = ref([
  [ 'B', 'A', 'L', 'd', 'g' ],
  [ '22', '150-250', '185-285', '8', '120-230' ]
]);

const tableData31 = ref([
  [ 'B', 'A', 'L', 'd', 'g' ],
  [ '32', '200-500', '224-724', '8.5', '200-400' ]
]);

const tableData32 = ref([
  [ 'B', 'A', 'L', 'g' ],
  [ '20*30', '250-700', '270-520', '150-300' ]
]);

onMounted(() => {
  const allProducts = [
    {
      id: '1',
      name: '手柄球(SBB)',
      image: [
        '/src/assets/手柄类/SBB.jpg',
        '/src/assets/手柄类/1.jpg'
      ],
      model: '型号1',
    },
    {
      id: '2',
      name: '椭圆手柄套(STT)',
      image: [
        '/src/assets/手柄类/STT.jpg',
        '/src/assets/手柄类/2.jpg'
      ],
      model: '型号2',
    },
    {
      id: '3',
      name: '长手柄套(SCT)',
      image: [
        '/src/assets/手柄类/SCT.jpg',
        '/src/assets/手柄类/3.jpg'
      ],
      model: '型号3',
    },
    {
      id: '4',
      name: '转动长手柄(SCZ)',
      image: [
        '/src/assets/手柄类/SCZ.jpg',
        '/src/assets/手柄类/4.jpg'
      ],
      model: '型号4',
    },
    {
      id: '5',
      name: '可调位紧定手柄(SKK)',
      image: [
        '/src/assets/手柄类/SKK.jpg',
        '/src/assets/手柄类/5.jpg'
      ],
      model: '型号5',
    },
    {
      id: '6',
      name: '摇手柄(SZY)',
      image: [
        '/src/assets/手柄类/SZY.jpg',
        '/src/assets/手柄类/6.jpg'
      ],
      model: '型号6',
    },
    {
      id: '7',
      name: '直纹把手(BZW)',
      image: [
        '/src/assets/把手类/BZW.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号7',
    },
    {
      id: '8',
      name: '五角形把手(BWJ)',
      image: [
        '/src/assets/把手类/BWJ.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号8',
    },
    {
      id: '9',
      name: '波纹把手(BBW)',
      image: [
        '/src/assets/把手类/BBW.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号9',
    },
    {
      id: '10',
      name: '十字把手(BSZ)',
      image: [
        '/src/assets/把手类/BSZ.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号10',
    },
    {
      id: '11',
      name: '小波纹把手(BXP)',
      image: [
        '/src/assets/把手类/BXP.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号11',
    },
    {
      id: '12',
      name: 'T形把手(BTK)',
      image: [
        '/src/assets/把手类/BTK.jpg',
        '/src/assets/把手类/01.jpg',
        '/src/assets/把手类/02.jpg',
        '/src/assets/把手类/03.jpg'
      ],
      model: '型号12',
    },
    {
      id: '13',
      name: '小手轮(LXL)',
      image: [
        '/src/assets/手轮类/LXL.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号13',
    },
    {
      id: '14',
      name: '背波纹手轮(LBB)',
      image: [
        '/src/assets/手轮类/LBB.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号14',
    },
    {
      id: '15',
      name: '圆轮缘手轮(LYL)',
      image: [
        '/src/assets/手轮类/LYL.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号15',
    },
    {
      id: '16',
      name: '圆轮手轮(LYS)',
      image: [
        '/src/assets/手轮类/LYS.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号16',
    },
    {
      id: '17',
      name: '内波纹手轮(LNB)',
      image: [
        '/src/assets/手轮类/LNB.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号17',
    },
    {
      id: '18',
      name: '可折双幅条手轮(TSF)',
      image: [
        '/src/assets/手轮类/TSF.jpg',
        '/src/assets/手轮类/1.jpg',
        '/src/assets/手轮类/2.jpg'
      ],
      model: '型号18',
    },
    {
      id: '19',
      name: '椭圆拉手(TTY)',
      image: [
        '/src/assets/拉手类/TTY.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号19',
    },
    {
      id: '20',
      name: '方形拉手(TFX)',
      image: [
        '/src/assets/拉手类/TFX.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号20',
    },
    {
      id: '21',
      name: '拉手(TFB)',
      image: [
        '/src/assets/拉手类/TFB.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号21',
    },
    {
      id: '22',
      name: '圆形拉手(TYX)',
      image: [
        '/src/assets/拉手类/TYX.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号22',
    },
    {
      id: '23',
      name: '拉手(TZX)',
      image: [
        '/src/assets/拉手类/TZX.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号23',
    },
    {
      id: '24',
      name: '拉手(TBY)',
      image: [
        '/src/assets/拉手类/TBY.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号24',
    },
    {
      id: '25',
      name: '折叠拉手(TZD)',
      image: [
        '/src/assets/拉手类/TZD.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号25',
    },
    {
      id: '26',
      name: '拉手(TYG)',
      image: [
        '/src/assets/拉手类/TYG.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号26',
    },
    {
      id: '27',
      name: '拉手(TCM)',
      image: [
        '/src/assets/拉手类/TCM.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg'
      ],
      model: '型号27',
    },

    {
      id: '28',
      name: '长拉手(TCL)',
      image: [
        '/src/assets/拉手类/TCL.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg',      ],
      model: '型号28',
    },
    {
      id: '29',
      name: '拉手(TXC)',
      image: [
        '/public/拉手类/TXC.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg',      ],
      model: '型号29',
    },
    {
      id: '30',
      name: '拉手(TXL)',
      image: [
        '/public/拉手类/TXL.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg',        ],
      model: '型号30',
    },
    {
      id: '31',
      name: '员形长拉手(TYC)',
      image: [
        '/public/拉手类/TYC.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg',        ],
      model: '型号31',
    },
    {
      id: '32',
      name: '方形长拉手(TFC)',
      image: [
        '/public/拉手类/TFC.jpg',
        '/src/assets/拉手类/1.jpg',
        '/src/assets/拉手类/2.jpg',
        '/src/assets/拉手类/3.jpg',      ],
      model: '型号32',
    },
  ];
  const productId = route.params.productId;
  product.value = allProducts.find(p => p.id === productId);
});
</script>

<style scoped>
.product-image {
  max-width: 100%;
  height: auto;
}

.product-info {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: left;
}

.product-info td {
  padding: 8px;
  border: 1px solid #ddd;
}

.product-info tr:nth-child(even) {
  background-color: #f9f9f9;
}

.product-info td:first-child {
  font-weight: bold;
}

.product-info ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

/* 详细信息表格样式 */
.detailed-info, .detailed-info-small {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.detailed-info td, .detailed-info-small td {
  padding: 4px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
}

.detailed-info tr:nth-child(even), .detailed-info-small tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
