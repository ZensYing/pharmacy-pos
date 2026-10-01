import { createRouter, createWebHistory } from 'vue-router'
import { all_routes } from './all_routes.js'

const routes = [
  {
    path: '/',
    name: 'sign-in',
    component: () => import('@/views/pages/authentication/sign-in.vue'),
    meta: { title: 'Login | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.signUp,
    name: 'sign-up',
    component: () => import('@/views/pages/authentication/sign-up.vue'),
    meta: { title: 'Sign Up | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.forgotPassword,
    name: 'forgot-password',
    component: () => import('@/views/pages/authentication/forgot-password.vue'),
    meta: { title: 'Forgot Password | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.otp,
    name: 'otp',
    component: () => import('@/views/pages/authentication/otp.vue'),
    meta: { title: 'OTP | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.resetPassword,
    name: 'reset-password',
    component: () => import('@/views/pages/authentication/reset-password.vue'),
    meta: { title: 'Reset Password | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.dashboard,
    name: 'dashboard',
    component: () => import('@/views/pages/main/dashboard.vue'),
    meta: { title: 'Dashboard | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.medicines,
    name: 'medicines',
    component: () => import('@/views/pages/inventory/medicines.vue'),
    meta: { title: 'Medicines | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.addMedicines,
    name: 'add-medicines',
    component: () => import('@/views/pages/inventory/add-medicines.vue'),
    meta: { title: 'Add Medicine | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.editMedicines,
    name: 'edit-medicines',
    component: () => import('@/views/pages/inventory/edit-medicines.vue'),
    meta: { title: 'Edit Medicine | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.categories,
    name: 'categories',
    component: () => import('@/views/pages/inventory/categories.vue'),
    meta: { title: 'Categories | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.units,
    name: 'units',
    component: () => import('@/views/pages/inventory/units.vue'),
    meta: { title: 'Units | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.racks,
    name: 'racks',
    component: () => import('@/views/pages/inventory/racks.vue'),
    meta: { title: 'Racks | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.manufacturers,
    name: 'manufacturers',
    component: () => import('@/views/pages/inventory/manufacturers.vue'),
    meta: { title: 'Manufacturers | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.manufacturersList,
    name: 'manufacturers-list',
    component: () => import('@/views/pages/inventory/manufacturers-list.vue'),
    meta: { title: 'Manufacturers List | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.batchManagement,
    name: 'batch-management',
    component: () => import('@/views/pages/inventory/batch-management.vue'),
    meta: { title: 'Batch Management | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.stockAdjustment,
    name: 'stock-adjustment',
    component: () => import('@/views/pages/inventory/stock-adjustment.vue'),
    meta: { title: 'Stock Adjustment | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.stockTransfer,
    name: 'stock-transfer',
    component: () => import('@/views/pages/inventory/stock-transfer.vue'),
    meta: { title: 'Stock Transfer | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.expiryTracking,
    name: 'expiry-tracking',
    component: () => import('@/views/pages/inventory/expiry-tracking.vue'),
    meta: { title: 'Expiry Tracking | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.lowStock,
    name: 'low-stock',
    component: () => import('@/views/pages/inventory/low-stock.vue'),
    meta: { title: 'Low Stock | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.inventoryLogs,
    name: 'inventory-logs',
    component: () => import('@/views/pages/inventory/inventory-logs.vue'),
    meta: { title: 'Inventory Logs | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.prescriptions,
    name: 'prescriptions',
    component: () => import('@/views/pages/prescriptions/prescriptions.vue'),
    meta: { title: 'Prescriptions | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.addPrescription,
    name: 'add-prescription',
    component: () => import('@/views/pages/prescriptions/add-prescription.vue'),
    meta: { title: 'Add Prescription | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.editPrescription,
    name: 'edit-prescription',
    component: () => import('@/views/pages/prescriptions/edit-prescription.vue'),
    meta: { title: 'Edit Prescription | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.prescriptionVerification,
    name: 'prescription-verification',
    component: () => import('@/views/pages/prescriptions/prescription-verification.vue'),
    meta: { title: 'Prescription Verification | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.doctors,
    name: 'doctors',
    component: () => import('@/views/pages/prescriptions/doctors.vue'),
    meta: { title: 'Doctors | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.doctorsList,
    name: 'doctors-list',
    component: () => import('@/views/pages/prescriptions/doctors-list.vue'),
    meta: { title: 'Doctors List | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.purchases,
    name: 'purchases',
    component: () => import('@/views/pages/purchases/purchases.vue'),
    meta: { title: 'Purchases | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.purchaseOrders,
    name: 'purchase-orders',
    component: () => import('@/views/pages/purchases/purchase-orders.vue'),
    meta: { title: 'Purchase Orders | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.addPurchaseOrders,
    name: 'add-purchase-order',
    component: () => import('@/views/pages/purchases/add-purchase-order.vue'),
    meta: { title: 'Add Purchase Order | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.editPurchaseOrders,
    name: 'edit-purchase-order',
    component: () => import('@/views/pages/purchases/edit-purchase-order.vue'),
    meta: { title: 'Edit Purchase Order | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.purchaseReturns,
    name: 'purchase-returns',
    component: () => import('@/views/pages/purchases/purchase-returns.vue'),
    meta: { title: 'Purchase Returns | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.addPurchaseReturns,
    name: 'add-purchase-returns',
    component: () => import('@/views/pages/purchases/add-purchase-returns.vue'),
    meta: { title: 'Add Purchase Returns | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.editPurchaseReturns,
    name: 'edit-purchase-returns',
    component: () => import('@/views/pages/purchases/edit-purchase-returns.vue'),
    meta: { title: 'Edit Purchase Returns | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.vendors,
    name: 'vendors',
    component: () => import('@/views/pages/purchases/vendors.vue'),
    meta: { title: 'Vendors | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.vendorsList,
    name: 'vendors-list',
    component: () => import('@/views/pages/purchases/vendors-list.vue'),
    meta: { title: 'Vendors List | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.vendorPayments,
    name: 'vendor-payments',
    component: () => import('@/views/pages/purchases/vendor-payments.vue'),
    meta: { title: 'Vendor Payments | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.salesReports,
    name: 'sales-reports',
    component: () => import('@/views/pages/reports/sales-reports.vue'),
    meta: { title: 'Sales Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.purchaseReports,
    name: 'purchase-reports',
    component: () => import('@/views/pages/reports/purchase-reports.vue'),
    meta: { title: 'Purchase Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.inventoryReports,
    name: 'inventory-reports',
    component: () => import('@/views/pages/reports/inventory-reports.vue'),
    meta: { title: 'Inventory Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.expiryReports,
    name: 'expiry-reports',
    component: () => import('@/views/pages/reports/expiry-reports.vue'),
    meta: { title: 'Expiry Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.profitLossReports,
    name: 'profit-loss-reports',
    component: () => import('@/views/pages/reports/profit-loss-reports.vue'),
    meta: { title: 'Profit & Loss Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.taxReports,
    name: 'tax-reports',
    component: () => import('@/views/pages/reports/tax-reports.vue'),
    meta: { title: 'Tax Reports | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.stockValuation,
    name: 'stock-valuation',
    component: () => import('@/views/pages/reports/stock-valuation.vue'),
    meta: { title: 'Stock Valuation | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.stockAging,
    name: 'stock-aging',
    component: () => import('@/views/pages/reports/stock-aging.vue'),
    meta: { title: 'Stock Aging | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.customerOutstanding,
    name: 'customer-outstanding',
    component: () => import('@/views/pages/reports/customer-outstanding.vue'),
    meta: { title: 'Customer Outstanding | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.vendorOutstanding,
    name: 'vendor-outstanding',
    component: () => import('@/views/pages/reports/vendor-outstanding.vue'),
    meta: { title: 'Vendor Outstanding | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.pos,
    name: 'pos',
    component: () => import('@/views/pages/sales/pos.vue'),
    meta: { title: 'POS | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.posEmpty,
    name: 'pos-empty',
    component: () => import('@/views/pages/sales/pos-empty.vue'),
    meta: { title: 'POS Empty | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.salesReturn,
    name: 'sales-return',
    component: () => import('@/views/pages/sales/sales-return.vue'),
    meta: { title: 'Sales Return | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.addSalesReturn,
    name: 'add-sales-return',
    component: () => import('@/views/pages/sales/add-sales-return.vue'),
    meta: { title: 'Add Sales Return | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.editSalesReturn,
    name: 'edit-sales-return',
    component: () => import('@/views/pages/sales/edit-sales-return.vue'),
    meta: { title: 'Edit Sales Return | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.customers,
    name: 'customers',
    component: () => import('@/views/pages/sales/customers.vue'),
    meta: { title: 'Customers | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.customersList,
    name: 'customers-list',
    component: () => import('@/views/pages/sales/customers-list.vue'),
    meta: { title: 'Customers List | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.invoices,
    name: 'invoices',
    component: () => import('@/views/pages/sales/invoices.vue'),
    meta: { title: 'Invoices | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.payments,
    name: 'payments',
    component: () => import('@/views/pages/sales/payments.vue'),
    meta: { title: 'Payments | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.businessSettings,
    name: 'business-settings',
    component: () => import('@/views/pages/settings/business/business-settings.vue'),
    meta: { title: 'Business Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.profileSettings,
    name: 'profile-settings',
    component: () => import('@/views/pages/settings/business/profile-settings.vue'),
    meta: { title: 'Profile Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.localizationSettings,
    name: 'localization-settings',
    component: () => import('@/views/pages/settings/business/localization-settings.vue'),
    meta: { title: 'Localization Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.branchesSettings,
    name: 'branches-settings',
    component: () => import('@/views/pages/settings/business/branches-settings.vue'),
    meta: { title: 'Branches Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.notificationsSettings,
    name: 'notifications-settings',
    component: () => import('@/views/pages/settings/business/notifications-settings.vue'),
    meta: { title: 'Notifications Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.backupSettings,
    name: 'backup-settings',
    component: () => import('@/views/pages/settings/backup-settings.vue'),
    meta: { title: 'Backup Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.connectedApps,
    name: 'connected-apps',
    component: () => import('@/views/pages/settings/connected-apps.vue'),
    meta: { title: 'Connected Apps | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: all_routes.invoiceSettings,
    name: 'invoice-settings',
    component: () => import('@/views/pages/settings/invoice-settings.vue'),
    meta: { title: 'Invoice Settings | Pharmacy POS - Bootstrap 5 Admin Dashboard' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: all_routes.dashboard
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta.title || "Pharmacy POS - Bootstrap 5 Admin Dashboard";
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;