<script setup></script>

<template>
    <div class="container d-flex justify-content-around align-items-center">
        <div class="left col-3">
            <p class="pb-0 text-center">
                Ahmed Ejaz
            </p>
        </div>
        <div class="right col-6 d-none d-md-flex justify-content-center">
            <a href="#" class="me-4">
                About
            </a>
            <a href="#" class="me-4">
                Experience
            </a>
            <a href="#" class="me-4">
                Projects
            </a>
            <a href="#" class="">
                Contact
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        height: 17vh;
    }
    .left {
        p{
            font-size: 2rem;
            font-weight: normal;
        }
    }
    .right {
        a {
            color: #000;
            text-decoration: none;
            font-size: 1.5rem;
            border-bottom: 2px solid transparent;
            &:hover{
                color: grey;
                border-bottom: 2px solid grey;
            }
        }
    }
</style>