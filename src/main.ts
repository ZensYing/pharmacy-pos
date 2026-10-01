import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Antd from 'ant-design-vue';
import Vue3Select from 'vue3-select-component'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "ant-design-vue/dist/reset.css";
import "@/assets/icons/lucide/lucide.css"
import '@/assets/scss/main.scss'

// ---------- Layouts Components ---------- //

import LayoutsHeader from '@/views/layouts/layouts-header.vue';
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue';
import PosHeader from '@/views/layouts/pos-header.vue';

// ---------- Modal Components ---------- //

import MedicinesModal from '@/components/modal/medicines-modal.vue';
import CategoriesModal from '@/components/modal/categories-modal.vue';
import UnitsModal from '@/components/modal/units-modal.vue';
import RacksModal from '@/components/modal/racks-modal.vue';
import ManufacturersModal from '@/components/modal/manufacturers-modal.vue';
import DoctorsModal from '@/components/modal/doctors-modal.vue';
import DoctorsListModal from '@/components/modal/doctors-list-modal.vue';
import PurchasesModal from '@/components/modal/purchases-modal.vue';
import VendorsModal from '@/components/modal/vendors-modal.vue';
import VendorsListModal from '@/components/modal/vendors-list-modal.vue';
import StockAdjustmentModal from '@/components/modal/stock-adjustment-modal.vue';
import StockTransferModal from '@/components/modal/stock-transfer-modal.vue';
import LowStockModal from '@/components/modal/low-stock-modal.vue';
import CustomersModal from '@/components/modal/customers-modal.vue';
import PaymentsModal from '@/components/modal/payments-modal.vue';
import PosModal from './components/modal/pos-modal.vue';
import PurchasesOrderModal from './components/modal/purchases-order-modal.vue';
import PurchasesReturnsModal from './components/modal/purchases-returns-modal.vue';


const app = createApp(App)

// ---------- Layouts Components ---------- //

app.component('layouts-header', LayoutsHeader)
app.component('layouts-sidebar', LayoutsSidebar)
app.component('pos-header', PosHeader)


// ---------- Modal Components ---------- //

app.component('medicines-modal', MedicinesModal)
app.component('categories-modal', CategoriesModal)
app.component('units-modal', UnitsModal)
app.component('racks-modal', RacksModal)
app.component('manufacturers-modal', ManufacturersModal)
app.component('doctors-modal', DoctorsModal)
app.component('doctors-list-modal', DoctorsListModal)
app.component('purchases-modal', PurchasesModal)
app.component('vendors-modal', VendorsModal)
app.component('vendors-list-modal', VendorsListModal)
app.component('stock-adjustment-modal', StockAdjustmentModal)
app.component('stock-transfer-modal', StockTransferModal)
app.component('low-stock-modal', LowStockModal)
app.component('customers-modal', CustomersModal)
app.component('payments-modal', PaymentsModal)
app.component('pos-modal', PosModal)
app.component('purchases-order-modal', PurchasesOrderModal)
app.component('purchases-returns-modal', PurchasesReturnsModal)

app.use(Antd)
app.use(VueApexCharts)
app.component('vue-select', Vue3Select);
app.use(router).mount('#app'); 
