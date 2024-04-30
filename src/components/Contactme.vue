<script setup>
let contact1 = [
    {
        iconClass: 'fa-solid fa-envelope',
        text: 'ahm.ejaz791@gmail.com',
        link: 'mailto:ahm.ejaz791@gmail.com'
    },
    {
        iconClass: 'fa-brands fa-linkedin-in',
        text: 'Ahmed Ejaz',
        link: 'https://www.linkedin.com/in/ahmed-ejaz-4a016a19a/'
    },
];
let contact2 = [
    {
        iconClass: 'fa-brands fa-whatsapp',
        text: '+923369196005',
        link: 'https://wa.me/+923369196005'
    },
    {
        iconClass: 'fa-brands fa-github',
        text: 'Ahmed Ejaz',
        link: 'https://github.com/AhmedEjaz-os'
    },
];
</script>

<template>
    <div class="container contact-me-section d-flex flex-column align-items-center" id="contact-me">
        <p class="text-center mb-0 pb-0 contact-me-section-title">Get in Touch</p>
        <h1 class="text-center contact-me-section-description">Contact Me</h1>
        <div class="contact-card p-3 mt-5">
            <div class="d-flex justify-content-between align-items-center">
                <div v-for="(item) in contact1" class="contact-card-entry">
                    <a :href="item.link" target="_blank">
                        <span class="me-3"><i :class="item.iconClass"></i></span>{{ item.text }}
                    </a>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <div v-for="(item) in contact2" class="contact-card-entry">
                    <a :href="item.link" target="_blank">
                        <span class="me-3"><i :class="item.iconClass"></i></span>{{ item.text }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-me-section {
    margin-top: 17vh;

    &-title {
        font-size: 16px;
        color: rgb(85, 85, 85);
    }

    &-description {
        font-size: 3rem;
        color: #000;
        font-weight: bold;
    }

    .contact-card {
        border: rgb(53, 53, 53) 0.1rem solid;
        border-radius: 30px;
        max-width: 550px;
        width: 100%;

        &-entry {
            a {
                color: #000;
                font-size: larger;
                text-decoration: none;

                span {
                    border-radius: 50%;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #000;
                    width: 40px;
                    height: 40px;

                    i {
                        font-size: 24px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>