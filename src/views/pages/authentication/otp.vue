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
                                        <div class="mb-4">
                                            <h2 class="mb-2">Enter OTP</h2>
                                            <p class="mb-0">Enter OTP Sent to the Registered Email ID</p>
                                        </div>

                                        <div class="otp-input">
                                            <div class="digit-group d-flex align-items-center mb-4">
                                                <input type="text"
                                                    class="rounded w-50 text-center fs-14 fw-medium me-3"
                                                    :class="{ active: digits[0] }"
                                                    ref="digit1" v-model="digits[0]" maxlength="1"
                                                    @input="onInput(0, $event)" @keydown="onKeydown(0, $event)">
                                                <input type="text"
                                                    class="rounded w-50 text-center fs-14 fw-medium me-3"
                                                    :class="{ active: digits[1] }"
                                                    ref="digit2" v-model="digits[1]" maxlength="1"
                                                    @input="onInput(1, $event)" @keydown="onKeydown(1, $event)">
                                                <input type="text"
                                                    class="rounded w-50 text-center fs-14 fw-medium me-3"
                                                    :class="{ active: digits[2] }"
                                                    ref="digit3" v-model="digits[2]" maxlength="1"
                                                    @input="onInput(2, $event)" @keydown="onKeydown(2, $event)">
                                                <input type="text" class="rounded w-50 text-center fs-14 fw-medium"
                                                    :class="{ active: digits[3] }"
                                                    ref="digit4" v-model="digits[3]" maxlength="1"
                                                    @input="onInput(3, $event)" @keydown="onKeydown(3, $event)">
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-4">
                                                <div class="text-center">
                                                    <span
                                                        class="badge badge-soft-danger mb-0 text-danger">{{ formattedTimer }}</span>
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);" class="text-dark" @click="resendOtp">Resend OTP</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <button type="submit" class="btn btn-primary-gradient w-100">Verify <i
                                                    class="icon-arrow-right ms-2"></i></button>
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
            digits: ['', '', '', ''],
            timer: 120,
            timerInterval: null,
        }
    },
    computed: {
        formattedTimer() {
            const minutes = Math.floor(this.timer / 60).toString().padStart(2, '0');
            const seconds = (this.timer % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        },
    },
    methods: {
        submitForm() {
            this.$router.push(all_routes.resetPassword);
        },
        onInput(index, event) {
            const value = event.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(-1);
            this.digits[index] = value;
            if (value && index < 3) {
                this.$refs[`digit${index + 2}`].focus();
            }
        },
        onKeydown(index, event) {
            if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
                this.$refs[`digit${index}`].focus();
            }
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                } else {
                    clearInterval(this.timerInterval);
                }
            }, 1000);
        },
        resendOtp() {
            this.digits = ['', '', '', ''];
            this.timer = 120;
            clearInterval(this.timerInterval);
            this.startTimer();
            this.$refs.digit1.focus();
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
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        clearInterval(this.timerInterval);
    },
}
</script>
