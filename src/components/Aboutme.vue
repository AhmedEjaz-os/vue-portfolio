<script setup></script>

<template>
    <div class="container about-me" id="about-me">
        <p class="text-center mb-0 pb-0">Get To Know More</p>
        <h1 class="text-center">About Me</h1>
        <div class="d-flex flex-column flex-lg-row left-right-parent">
            <div class="left">
                <div class="about-me-picture d-flex justify-content-center">
                    <img src="/src/assets/img/section2.jpg" alt="about-me-logo">
                </div>
            </div>
            <div class="right d-flex flex-column align-items-center d-lg-block">
                <div class="d-flex">
                    <div class="experience-card py-3 px-5">
                        <img class="mb-2" src="/src/assets/img/icons/experience.png" alt="experience-ico">
                        <p class="experience-card-title mb-0">Experience</p>
                        <p class="mb-0">4+ years</p>
                        <p class="mb-0">Frontend Developer</p>
                    </div>
                    <div class="experience-card experience-card-margin py-3 px-5">
                        <img class="mb-2" src="/src/assets/img/icons/education.png" alt="education-ico">
                        <p class="experience-card-title mb-0">Education</p>
                        <p class="mb-0">B.Sc. Bachelors Degree</p>
                        <p class="text-white mb-0">B.Sc. Bachelors Degree</p>
                    </div>
                </div>
                <p class="mt-3">
                    Hi, I am a Frontend Web Developer with 4+ Years of experience working with Angular, React, Next, and
                    VueJS. I am here to help you create awsome websites, fix your bugs, update the dependencies, and
                    design your components. A complete package that has a working experience of Angular Material,
                    Material UI, Bootstrap, and TailwindCSS. Let's connect and talk more about your project and with
                    wasting any time lets start working.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-me {
    margin-top: 17vh;

    p {
        font-size: 16px;
        color: rgb(85, 85, 85);
    }

    h1 {
        font-size: 3rem;
        color: #000;
        font-weight: bold;
    }

    .left-right-parent {
        margin-top: 17vh;
    }

    .left {
        max-width: 100%;

        .about-me-picture {
            width: 400px;
            height: 400px;
            border-radius: 30px;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .right {
        max-width: 100%;
        margin-top: 1rem;

        div.d-flex {
            grid-gap: 1rem;
        }

        .experience-card {
            border: rgb(53, 53, 53) 0.1rem solid;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
            }

            &-title {
                color: #000;
                font-size: 1.17em;
                font-weight: 600;
                text-align: center;
            }

            &-margin {
                margin-right: 0px;
            }
        }
    }
}

@media (min-width: 992px) {
    .about-me {
        .left-right-parent {
            justify-content: center;
        }

        .left {
            max-width: 50%;

            .about-me-picture {
                margin-right: 0px;
            }
        }

        .right {
            max-width: 50%;
            margin-top: 0px;
            margin-left: 3rem;

            div.d-flex {
                grid-gap: unset;
            }

            .experience-card {
                &-margin {
                    margin-left: 1rem;
                }
            }
        }
    }
}
</style>