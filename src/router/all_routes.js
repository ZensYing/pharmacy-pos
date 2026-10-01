export const all_routes = {

  // Dashboard pages

  dashboard: '/index',

  // Inventory

  medicines: '/medicines',
  addMedicines: '/add-medicines',
  editMedicines: '/edit-medicines',
  categories: '/categories',
  units: '/units',
  racks: '/racks',
  batchManagement: '/batch-management',
  manufacturers: '/manufacturers',
  manufacturersList: '/manufacturers-list',
  stockAdjustment: '/stock-adjustment',
  stockTransfer: '/stock-transfer',
  expiryTracking: '/expiry-tracking',
  lowStock: '/low-stock',
  inventoryLogs: '/inventory-logs',

  // Sales

  pos: '/pos',
  posEmpty: '/pos-empty',
  salesReturn: '/sales-return',
  addSalesReturn: '/add-sales-return',
  editSalesReturn: '/edit-sales-return',
  customers: '/customers',
  customersList: '/customers-list',
  invoices: '/invoices',
  payments: '/payments',

  // Purchases

  purchases: '/purchases',
  purchaseOrders: '/purchase-orders',
  addPurchaseOrders: '/add-purchase-order',
  editPurchaseOrders: '/edit-purchase-order',
  purchaseReturns: '/purchase-returns',
  addPurchaseReturns: '/add-purchase-returns',
  editPurchaseReturns: '/edit-purchase-returns',
  vendors: '/vendors',
  vendorsList: '/vendors-list',
  vendorPayments: '/vendor-payments',
  
  // Prescriptions

  prescriptions: '/prescriptions',
  addPrescription: '/add-prescription',
  editPrescription: '/edit-prescription',
  prescriptionVerification: '/prescription-verification',
  doctors: '/doctors',
  doctorsList: '/doctors-list',

  // Reports

  salesReports: '/sales-reports',
  purchaseReports: '/purchase-reports',
  inventoryReports: '/inventory-reports',
  expiryReports: '/expiry-reports',
  profitLossReports: '/profit-loss-reports',
  taxReports: '/tax-reports',
  stockValuation: '/stock-valuation',
  stockAging: '/stock-aging',
  customerOutstanding: '/customer-outstanding',
  vendorOutstanding: '/vendor-outstanding',


  // Settings

  businessSettings: '/business-settings',
  profileSettings: '/profile-settings',
  localizationSettings: '/localization-settings',
  branchesSettings: '/branches-settings',
  notificationsSettings: '/notifications-settings',
  invoiceSettings: '/invoice-settings',
  connectedApps: '/connected-apps',
  backupSettings: '/backup-settings',

  // Authentication

  signIn: '/',
  signUp: '/sign-up',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  otp: '/otp',


};
