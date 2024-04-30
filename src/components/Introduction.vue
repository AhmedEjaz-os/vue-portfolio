<script setup>
import cv from '../assets/resume/cv.pdf';
</script>

<template>
    <div class="section1 container d-flex flex-column flex-lg-row">
        <div class="left col-12 col-lg-6">
            <div class="profile-picture d-flex justify-content-center align-items-center">
                <img src="/src/assets/img/section1.jpg" alt="logo img">
            </div>
        </div>
        <div class="right col-12 col-lg-6">
            <p class="text-center pb-0 mb-0">Hello, I'm</p>
            <h1 class="text-center">Ahmed Ejaz</h1>
            <h3 class="text-center">Frontend Developer</h3>
            <div>
                <a :href="cv" target="_blank" rel="noreferrer" class="btn btn-color-2 p-3">Download CV</a>
                <a href="#contact-me" class="btn btn-color-1 ms-3 p-3">Contact Info</a>
            </div>
            <div class="d-flex mt-3 justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/ahmed-ejaz-4a016a19a/" target="_blank"
                    class="links d-flex justify-content-center align-items-center text-decoration-none">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/AhmedEjaz-os" target="_blank"
                    class="ms-3 d-flex justify-content-center links align-items-center text-decoration-none">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section1 {
    margin-top: 17vh;
}

.profile-picture {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-color: #dee1da;

    img {
        padding-left: 28px;
    }
}

.left {
    .profile-picture {
        margin-left: auto;
        margin-right: auto;
    }
}

.right {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    p {
        font-weight: 600;
        color: rgb(85, 85, 85);
    }

    h1 {
        font-size: 3rem;
        color: #000;
    }

    h3 {
        color: rgb(85, 85, 85);
        font-size: 1.75rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    div {
        .links {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            background-color: #000;

            i {
                color: #fff;
                font-size: 20px;
            }
        }
    }
}

@media (min-width: 992px) {
    .left {
        .profile-picture {
            margin-right: 0px;
        }
    }

    .right {
        margin-left: 3rem;
        margin-top: auto;
        margin-bottom: auto;
    }
}
</style>