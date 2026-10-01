<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper ms-0">

        <!-- Start Content -->
        <div class="content">

            <div class="row">
                <div class="col-lg-7">
                    <!-- start card -->
                    <form @submit.prevent="submitForm">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="mb-4">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb mb-0 p-0">
                                            <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i
                                                            class="icon-house"></i></span> Dashboard</router-link></li>
                                            <li class="breadcrumb-item active" aria-current="page">Purchase Return </li>
                                        </ol>
                                    </nav>
                                </div>
                                <router-link :to="all_routes.purchaseReturns"
                                    class="mb-4 fs-20 fw-bold d-flex align-items-center gap-2 w-fit"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-arrow-left"></i></span>Edit Purchase Return</router-link>

                                <div class="row row-gap-3 mb-4">
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Invoice Number <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="form.invoiceNumber" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Vendor Name <span class="text-danger">*</span></label>
                                            <vue-select
                                                :options="vendorNameOptions"
                                                v-model="form.vendorName"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Date <span class="text-danger">*</span></label>
                                            <div class="input-group w-auto input-group-flat">
                                                <a-date-picker  v-model="valueOne"  class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                                <span class="input-group-text">
                                                    <i class="icon-calendar-days"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Amount</label>
                                            <vue-select
                                                :options="currencyOptions"
                                                v-model="form.currency"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <span class="fs-16 fw-bold text-gray-9 mb-3 d-block">Item Details</span>

                                <div class="table-responsive table-nowrap">
                                    <table class="table mb-0 border item-table">
                                        <thead class="table-light">
                                            <tr>
                                                <th class="no-sort" style="width:220px;">Items</th>
                                                <th class="no-sort text-center">Quantity</th>
                                                <th class="no-sort text-center">Unit</th>
                                                <th class="no-sort text-center">Rate</th>
                                                <th class="no-sort text-center">Tax</th>
                                                <th class="no-sort text-center">Discount</th>
                                                <th class="no-sort text-center">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="(row, index) in items" :key="index">
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <button type="button" class="btn p-0 text-danger" @click="removeRow(index)">
                                                            <i class="icon-trash-2"></i>
                                                        </button>
                                                        <i class="icon-grip-vertical text-body"></i>
                                                        <vue-select
                                                            :options="itemOptions"
                                                            v-model="row.item"
                                                            placeholder="Select"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.quantity">
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.unit">
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.rate">
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.tax">
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.discount">
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.total">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Add New Button -->
                                <div class="text-center my-3">
                                    <button type="button" class="btn btn-primary rounded-pill px-4" @click="addRow">
                                        <i class="icon-plus me-1"></i> Add New
                                    </button>
                                </div>

                                <div class="mb-3">
                                    <textarea class="form-control rounded-3" rows="2" placeholder="Add Notes"
                                        v-model="form.notes"></textarea>
                                </div>

                                <div class="mb-3">
                                    <textarea class="form-control rounded-3" rows="2" placeholder="Terms &amp; Conditions"
                                        v-model="form.terms"></textarea>
                                </div>

                                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <a href="javascript:void(0);"
                                        class="btn btn-light d-inline-flex align-items-center gap-2">Reset </a>
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="javascript:void(0);"
                                            class="btn btn-outline-primary d-inline-flex align-items-center gap-2">Save &amp;
                                            Send</a>
                                        <button type="submit" class="btn btn-primary d-inline-flex align-items-center gap-2">Save
                                            Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- end card -->
                </div>
                <div class="col-lg-5">
                    <div class="d-flex justify-content-end align-items-center flex-wrap gap-3 pt-4 my-4">
                        <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center"><i
                                class="icon-printer me-1"></i>Print</a>
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center"><i
                                class="icon-download me-1"></i>Download</a>
                    </div>
                    <!-- invoice details -->
                    <div class="card border shadow-sm">
                        <div class="card-body p-4">

                            <!-- Invoice Header -->
                            <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4 pb-4">
                                <div>
                                    <h6 class="fw-bold mb-1">DreamsPOS</h6>
                                    <p class="text-body mb-0">15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom
                                    </p>
                                </div>
                                <div class="text-xl-end">
                                    <h4 class="fw-bold mb-2">Purchase Return</h4>
                                    <p class="mb-1">Invoice Number : <span class="fw-semibold text-dark">#POR1236</span></p>
                                    <p class="mb-1">Invoice Date: <span class="fw-semibold text-dark">18 Feb 2026</span></p>
                                    <p class="mb-0">Due Date: <span class="fw-semibold text-dark">18 Feb 2026</span>
                                    </p>
                                </div>
                            </div>

                            <!-- Billed By Section -->
                            <div class="row mb-4 pb-4 row-gap-3">
                                <div class="col-sm-6 mb-sm-0">
                                    <h6 class="fw-bold mb-2">Billed By</h6>
                                    <p class="fw-medium text-dark mb-1">DreamsPOS Pharmacy Management</p>
                                    <p class="text-body mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                    <p class="text-body mb-1">Phone : +1 54664 75945</p>
                                    <p class="text-body mb-1">Email : info@example.com</p>
                                    <p class="text-body mb-0">GST : 243E45767889</p>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="fw-bold mb-2">Billed To</h6>
                                    <p class="fw-medium text-dark mb-1">DreamsPOS Pharmacy Management</p>
                                    <p class="text-body mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                    <p class="text-body mb-1">Phone : +1 54664 75945</p>
                                    <p class="text-body mb-1">Email : info@example.com</p>
                                    <p class="text-body mb-0">GST : 243E45767889</p>
                                </div>
                            </div>

                            <!-- Item Details -->
                            <h6 class="fw-bold mb-3">Item Details</h6>
                            <div class="table-responsive mb-4">
                                <table class="table border mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="fs-12">#</th>
                                            <th class="fs-12">Item</th>
                                            <th class="fs-12">Quantity</th>
                                            <th class="fs-12">Unit</th>
                                            <th class="fs-12">Discount</th>
                                            <th class="fs-13">Tax</th>
                                            <th class="fs-12 text-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td class="fw-medium text-dark">Paracetamol 500</td>
                                            <td>3</td>
                                            <td>300</td>
                                            <td>200</td>
                                            <td>18%</td>
                                            <td class="fw-semibold text-dark text-end">$200</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td class="fw-medium text-dark">Axoxicillin</td>
                                            <td>4</td>
                                            <td>500</td>
                                            <td>300</td>
                                            <td>16%</td>
                                            <td class="fw-semibold text-dark text-end">$600</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td class="fw-medium text-dark">Cetirizine</td>
                                            <td>3</td>
                                            <td>800</td>
                                            <td>200</td>
                                            <td>24%</td>
                                            <td class="fw-semibold text-dark text-end">$500</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td class="fw-medium text-dark">Ceftriaxone</td>
                                            <td>4</td>
                                            <td>397</td>
                                            <td>300</td>
                                            <td>18%</td>
                                            <td class="fw-semibold text-dark text-end">$600</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td class="fw-medium text-dark">Amoxicillin</td>
                                            <td>3</td>
                                            <td>450</td>
                                            <td>120</td>
                                            <td>16%</td>
                                            <td class="fw-semibold text-dark text-end">$800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Notes, Terms & Totals -->
                            <div class="row row-gap-2">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <h6 class="fw-bold mb-1 fs-14">Notes</h6>
                                        <p class="text-body fs-13 mb-0">This Purchase Order is subject to the
                                            buyer's standard terms and conditions.</p>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1 fs-14">Terms &amp; Conditions</h6>
                                        <p class="text-body fs-13 mb-0">Please reference this Purchase Order Number
                                            on all invoices and correspondence.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="border rounded-3 p-3">
                                        <div class="d-flex justify-content-between mb-2">
                                            <span class="text-body fs-13">Sub Total</span>
                                            <span class="fw-bold text-dark fs-13">$900.25</span>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2">
                                            <span class="text-body fs-13">Tax</span>
                                            <span class="fw-bold text-dark fs-13">$70.00</span>
                                        </div>
                                        <div class="d-flex justify-content-between mb-2">
                                            <span class="text-body fs-13">Discount</span>
                                            <span class="fw-bold text-danger fs-13">-$26.00</span>
                                        </div>
                                        <div class="d-flex justify-content-between border-top mt-2 pt-2">
                                            <span class="fw-bold text-dark fs-16">Total</span>
                                            <span class="fw-bold text-dark fs-16">$944.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Content -->

        <!-- Start Footer -->
        <footer
            class="footer bg-white border-top px-4 py-2 d-flex align-items-center justify-content-between gap-2 flex-column flex-sm-row">
            <p class="text-dark mb-0">&copy; {{ new Date().getFullYear() }} <a href="#" class="link-primary">DreamsPOS</a>, All Rights
                Reserved</p>
            <div class="d-flex align-items-center gap-2 flex-wrap">
                <a href="#" class="link-body-emphasis">Docs</a>
                <span>/</span>
                <a href="#" class="link-body-emphasis">Support</a>
                <span>/</span>
                <a href="#" class="link-body-emphasis">License</a>
            </div>
        </footer>
        <!-- End Footer -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

</template>

<script>
import { ref } from "vue";
const valueOne = ref();
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            valueOne,
            all_routes,
            form: {
                invoiceNumber: "#INV21236",
                vendorName: "NovaCure Pharma",
                date: "18/03/2026",
                currency: "USD",
                notes: "",
                terms: "",
            },
            vendorNameOptions: [
                { label: "Select", value: "" },
                { label: "MedLife Distributors", value: "MedLife Distributors" },
                { label: "NovaCure Pharma", value: "NovaCure Pharma" },
                { label: "CareWell Agency", value: "CareWell Agency" },
                { label: "Zenith Distributors", value: "Zenith Distributors" },
                { label: "LifeLine Pharma", value: "LifeLine Pharma" },
            ],
            currencyOptions: [
                { label: "USD", value: "USD" },
                { label: "INR", value: "INR" },
                { label: "EUR", value: "EUR" },
                { label: "GBP", value: "GBP" },
            ],
            itemOptions: [
                { label: "Select", value: "" },
                { label: "Paracetamol", value: "Paracetamol" },
                { label: "Amoxicillin", value: "Amoxicillin" },
                { label: "Cetirizine", value: "Cetirizine" },
                { label: "Ceftriaxone", value: "Ceftriaxone" },
                { label: "Ibuprofen", value: "Ibuprofen" },
                { label: "Azithromycin", value: "Azithromycin" },
                { label: "Ciprofloxacin", value: "Ciprofloxacin" },
            ],
            items: [
                { item: "Paracetamol", quantity: "3", unit: "300", rate: "$180", tax: "18%", discount: "200", total: "$200" },
                { item: "Axoxicillin", quantity: "4", unit: "500", rate: "$560", tax: "16%", discount: "300", total: "$600" },
                { item: "Cetirizine", quantity: "3", unit: "800", rate: "$130", tax: "24%", discount: "200", total: "$500" },
                { item: "Ceftriaxone", quantity: "4", unit: "397", rate: "$456", tax: "18%", discount: "300", total: "$600" },
                { item: "Amoxicillin", quantity: "3", unit: "450", rate: "$767", tax: "16%", discount: "120", total: "$800" },
            ],
        }
    },
    methods: {
        addRow() {
            this.items.push({ item: "", quantity: "", unit: "", rate: "", tax: "", discount: "", total: "" });
        },
        removeRow(index) {
            this.items.splice(index, 1);
        },
        submitForm() {
            this.$router.push(all_routes.purchaseReturns);
        },
    },
}
</script>
