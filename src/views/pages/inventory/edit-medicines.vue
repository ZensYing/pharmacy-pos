<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i class="icon-house"></i></span>
                                Dashboard</router-link></li>
                        <li class="breadcrumb-item" aria-current="page"><router-link :to="all_routes.medicines">Medicine List</router-link> </li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Medicine </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start row -->
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <!-- start card -->
                    <form @submit.prevent="submitForm">
                        <div class="card mb-0">
                            <div class="card-body">
                                <h4 class="mb-3 fs-18 fw-bold">Basic Information</h4>
                                <!-- start row -->
                                <div class="row row-gap-3">
                                    <div class="col-lg-12">
                                        <div class="d-flex align-items-center flex-wrap gap-3">
                                            <div
                                                class="avatar avatar-xxxl border bg-light rounded-circle flex-shrink-0 p-1">
                                                <img :src="getImageUrl('tablet-icon-1.svg')" alt="icon">
                                            </div>
                                            <div>
                                                <label class="form-label mb-1 fw-bold fs-14">Upload Store
                                                    Image</label>
                                                <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                                <div class="d-flex align-items-center gap-2">
                                                    <label
                                                        class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                        <i class="icon-refresh-ccw"></i>
                                                        <input type="file" ref="imageInput"
                                                            class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer"
                                                            @change="onImageChange">
                                                        Change Image
                                                    </label>
                                                    <a href="javascript:void(0);"
                                                        class="btn btn-icon btn-sm btn-white rounded-circle" @click="removeImage">
                                                        <i class="icon-trash-2"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Item Name <span class="text-danger">
                                                *</span></label>
                                        <input type="text" class="form-control" v-model="form.itemName">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Generic Name <span class="text-danger">
                                                *</span></label>
                                        <input type="text" class="form-control" v-model="form.genericName">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">SKU</label>
                                        <input type="text" class="form-control" v-model="form.sku">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label
                                            class="form-label d-flex align-items-center justify-content-between gap-1">Category
                                            <a href="javascript:void(0);" class="text-info d-flex align-items-center fw-medium gap-1">
                                                <i class="icon-plus"></i> Add New</a></label>
                                        <vue-select
                                            :options="categoryOptions"
                                            v-model="form.category"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-lg-12">
                                        <label class="form-label">Description</label>
                                        <textarea class="form-control rounded-3 resize-none" rows="4" v-model="form.description"></textarea>
                                    </div> <!-- end col-->
                                    <div class="col-lg-12">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="switchCheckChecked" v-model="form.prescriptionRequired">
                                            <label class="form-check-label" for="switchCheckChecked">Prescription
                                                Required</label>
                                        </div>
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-3 mt-4 pt-4 border-top fs-18 fw-bold">Pricing & Stock</h4>
                                <div class="row row-gap-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Cost Price <span class="text-danger">
                                                *</span></label>
                                        <input type="text" class="form-control" v-model="form.costPrice">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Selling Price <span class="text-danger">
                                                *</span></label>
                                        <input type="text" class="form-control" v-model="form.sellingPrice">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Stock Quantity <span class="text-danger">
                                                *</span></label>
                                        <input type="number" class="form-control" v-model="form.stockQuantity">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Stock Unit <span class="text-danger">
                                                *</span></label>
                                        <vue-select
                                            :options="stockUnitOptions"
                                            v-model="form.stockUnit"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Low Stock Alert <span class="text-danger">
                                                *</span></label>
                                        <input type="number" class="form-control" v-model="form.lowStockAlert">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Storage Condition <span class="text-danger">
                                                *</span></label>
                                        <vue-select
                                            :options="storageConditionOptions"
                                            v-model="form.storageCondition"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Reorder Quantity <span class="text-danger">
                                                *</span></label>
                                        <input type="number" class="form-control" v-model="form.reorderQuantity">
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-3 mt-4 pt-4 border-top fs-18 fw-bold">Manaufacturer</h4>
                                <!-- start row -->
                                <div class="row row-gap-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Manufacturer</label>
                                        <vue-select
                                            :options="manufacturerOptions"
                                            v-model="form.manufacturer"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Manufacture Date <span class="text-danger">
                                                *</span></label>
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueOne"  class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-days"></i>
                                            </span>
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Supplier</label>
                                        <vue-select
                                            :options="supplierOptions"
                                            v-model="form.supplier"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Batch & Expiry<span class="text-danger">
                                                *</span></label>
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueTwo"  class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-days"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->

                                <h4 class="mb-3 mt-4 pt-4 border-top fs-18 fw-bold">Batch & Expiry</h4>
                                <!-- start row -->
                                <div class="row row-gap-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Batch Number </label>
                                        <input type="text" class="form-control" v-model="form.batchNumber">
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Expiry Date <span class="text-danger">
                                                *</span></label>
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueThree"  class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-days"></i>
                                            </span>
                                        </div>
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-3 mt-4 pt-4 border-top fs-18 fw-bold">Rack Details</h4>
                                <!-- start row -->
                                <div class="row row-gap-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Rack No</label>
                                        <vue-select
                                            :options="rackNoOptions"
                                            v-model="form.rackNo"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">Bin No</label>
                                        <vue-select
                                            :options="binNoOptions"
                                            v-model="form.binNo"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-3 mt-4 pt-4 border-top fs-18 fw-bold">Tax Information</h4>
                                <!-- start row -->
                                <div class="row row-gap-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Tax Rate</label>
                                        <vue-select
                                            :options="taxRateOptions"
                                            v-model="form.taxRate"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <label class="form-label">HTS Code</label>
                                        <vue-select
                                            :options="htsCodeOptions"
                                            v-model="form.htsCode"
                                            placeholder="Select"
                                        />
                                    </div> <!-- end col-->
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-4 pt-4 border-top">
                                    <router-link :to="all_routes.medicines" class="btn btn-light d-inline-flex align-items-center gap-2"><i
                                            class="icon-x"></i>Cancel </router-link>
                                    <button type="submit" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                                            class="icon-save"></i> Save Changes </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- end card -->
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
const valueTwo = ref();
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            valueOne,
            valueTwo,
            valueThree,
            all_routes,
            imagePreview: null,
            form: {
                itemName: "Paracetamol 500",
                genericName: "Paracetamol",
                sku: "#TAB016",
                category: "Tablet",
                description: "",
                prescriptionRequired: true,
                costPrice: "$100",
                sellingPrice: "$120",
                stockQuantity: "20",
                stockUnit: "Tablet",
                lowStockAlert: "10",
                storageCondition: "Room Temperature",
                reorderQuantity: "10",
                manufacturer: "NutraCare Pharma",
                manufactureDate: "24/03/2026",
                supplier: "PrimeCare Pharma",
                batchExpiry: "29/03/2026",
                batchNumber: "BAT0017",
                expiryDate: "09/03/2027",
                rackNo: "2",
                binNo: "A2",
                taxRate: "18%",
                htsCode: "3002",
            },
            categoryOptions: [
                { label: "Select", value: "" },
                { label: "Tablet", value: "Tablet" },
                { label: "Capsule", value: "Capsule" },
                { label: "Oinment", value: "Oinment" },
                { label: "Syrup", value: "Syrup" },
            ],
            stockUnitOptions: [
                { label: "Select", value: "" },
                { label: "Tablet", value: "Tablet" },
                { label: "Capsule", value: "Capsule" },
                { label: "Bottle", value: "Bottle" },
                { label: "Strip", value: "Strip" },
            ],
            storageConditionOptions: [
                { label: "Select", value: "" },
                { label: "Room Temperature", value: "Room Temperature" },
                { label: "Cool & Dry", value: "Cool & Dry" },
                { label: "Refrigerated", value: "Refrigerated" },
            ],
            manufacturerOptions: [
                { label: "Select", value: "" },
                { label: "ABC Pharma", value: "ABC Pharma" },
                { label: "NutraCare Pharma", value: "NutraCare Pharma" },
                { label: "MedSure Pharma", value: "MedSure Pharma" },
                { label: "BioLife Labs", value: "BioLife Labs" },
                { label: "NutriPlus Labs", value: "NutriPlus Labs" },
            ],
            supplierOptions: [
                { label: "Select", value: "" },
                { label: "CareWell Agency", value: "CareWell Agency" },
                { label: "PrimeCare Pharma", value: "PrimeCare Pharma" },
                { label: "LifeLine Pharma", value: "LifeLine Pharma" },
                { label: "GreenCross Medicals", value: "GreenCross Medicals" },
                { label: "NovaCure Pharma", value: "NovaCure Pharma" },
            ],
            rackNoOptions: [
                { label: "Select", value: "" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
            ],
            binNoOptions: [
                { label: "Select", value: "" },
                { label: "A1", value: "A1" },
                { label: "A2", value: "A2" },
                { label: "A3", value: "A3" },
                { label: "A4", value: "A4" },
                { label: "A5", value: "A5" },
            ],
            taxRateOptions: [
                { label: "Select", value: "" },
                { label: "9%", value: "9%" },
                { label: "12%", value: "12%" },
                { label: "18%", value: "18%" },
            ],
            htsCodeOptions: [
                { label: "Select", value: "" },
                { label: "3004", value: "3004" },
                { label: "3002", value: "3002" },
            ],
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
        },
        onImageChange(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage() {
            this.imagePreview = null;
            if (this.$refs.imageInput) {
                this.$refs.imageInput.value = "";
            }
        },
        submitForm() {
            this.$router.push(all_routes.medicines);
        },
    },
}
</script>
