<template>
  <!-- ========================
    Start Page Content
  ========================= -->

    <div class="container-fuild">

        <!-- Start Content -->
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">

            <!-- start row -->
            <div class="row g-2">

                <div class="col-lg-8 col-md-12 col-sm-12 p-3">

                    <!-- start row -->
                    <div
                        class="row justify-content-center align-items-center overflow-auto flex-wrap auth-vh vh-100 position-relative py-5">

                        <div class="col-xl-6 col-lg-10 col-md-8 col-sm-10 mx-auto">
                            <form @submit.prevent="submitForm">

                                <div class="d-flex text-center justify-content-center auth-content">
                                    <div class="auth-logo">
                                        <router-link :to="all_routes.dashboard"><img src="@/assets/img/logo-dark.svg" class="img-fluid" alt="Logo"></router-link>
                                    </div>

                                    <div>
                                        <div class="mb-2">
                                            <h2 class="mb-2">Forgot Password</h2>
                                            <p class="mb-0">Please enter your email address to receive a
                                                verification link.</p>
                                        </div>

                                        <div class="mb-4 text-start">
                                            <label class="form-label">Email Address<span class="text-danger">
                                                    *</span></label>
                                            <div class="input-group input-group-flat w-100">
                                                <input type="email" class="form-control" v-model="email"
                                                    placeholder="Enter Email address">
                                                <span class="input-group-text">
                                                    <i class="icon-mail"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <button type="submit" class="btn btn-primary-gradient w-100">Send Email
                                                <i class="icon-arrow-right ms-2"></i></button>
                                        </div>

                                        <div class="text-center mt-4">
                                            <p class="fw-normal mb-0 text-gray-9">Back to
                                                <router-link :to="all_routes.signIn" class="link-primary"> Sign In</router-link>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div> <!-- end col -->

                    </div>
                    <!-- end row -->

                </div> <!-- end col -->

                <div class="col-lg-4 p-0">
                    <div
                        class="position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 ps-0">
                        <div class="w-100 position-relative h-100 z-1 overflow-hidden">
                            <img src="@/assets/img/authentication/authentication-bg-02.png"
                                class="img-fluid position-absolute bottom-0 end-0 auth-bg-01 w-100" alt="bg">
                            <img src="@/assets/img/authentication/authentication-bg-01.png"
                                class="img-fluid position-absolute top-0 end-0 auth-bg-02 w-100" alt="bg">
                            <div
                                class="px-4 h-100 d-flex flex-column align-items-center justify-content-center auth-wrap">
                                <div class="text-center z-2">
                                    <h1 class="text-white mb-2 px-xl-3">Smart Pharmacy Control Panel</h1>
                                    <p class="text-white mb-0">Get real time insights into sales performance, stock
                                        levels, prescriptions, and staff efficiency with intelligent analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col -->

            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->

    </div>

  <!-- ========================
    End Page Content
  ========================= -->
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            all_routes,
            email: '',
        }
    },
    methods: {
        submitForm() {
            this.$router.push(all_routes.otp);
        },
    },
    setup() {
        onMounted(() => {
            document.body.classList.add("bg-white");
        });
        onBeforeUnmount(() => {
            document.body.classList.remove("bg-white");
        });
    },
}
</script>
