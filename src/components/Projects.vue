<script setup>
let projects = [
    {
        imgSrc: '/src/assets/img/projects/project1.jpg',
        title: 'Parslabs',
        githubLink: 'https://github.com/MuhammadZainEjaz/ElenaPortfolio',
        liveDemoLink: ''
    },
    {
        imgSrc: '/src/assets/img/projects/project2.png',
        title: 'Qualified Teachers',
        githubLink: 'https://github.com/Caphas/QUALIFIED-TEACHERS',
        liveDemoLink: 'https://dev.kesso.uk/'
    },
    {
        imgSrc: '/src/assets/img/projects/project3.png',
        title: 'Angular Version Update',
        githubLink: 'https://github.com/AhmedEjaz-os/mathfe',
        liveDemoLink: 'https://allgifted.com/'
    },
    {
        imgSrc: '/src/assets/img/projects/project4.jpg',
        title: 'Landing Page',
        githubLink: 'https://github.com/AhmedEjaz-os/upwork-angular-mockup-landing-page',
        liveDemoLink: ''
    },
    {
        imgSrc: '/src/assets/img/projects/project5.png',
        title: 'Angular Developer at Techtonex',
        githubLink: '',
        liveDemoLink: 'https://techtonex.com/our-work/'
    },
];
</script>

<template>
    <div class="container projects-section" id="projects">
        <p class="text-center mb-0 pb-0 projects-section-title">Browse My Recent</p>
        <h1 class="text-center projects-section-description">Projects</h1>
        <div class="d-flex flex-wrap project-card-parent gap-2">
            <div v-for="(item) in projects" class="project-card d-flex flex-column justify-content-center p-4">
                <img class="project-card-img mx-auto" :src="item.imgSrc" alt="project-img">
                <h3 class="project-card-title mx-auto text-center mt-5 mb-4">{{ item.title }}</h3>
                <div class="project-card-button-container d-flex flex-row justify-content-center">
                    <a :href="item.githubLink" v-if="item.githubLink"
                        class="project-card-button btn btn-color-2">Github</a>
                    <a :href="item.githubLink" v-if="!item.githubLink" title="Github Link Not Available"
                        aria-disabled="true" class="project-card-button btn btn-color-2 link-disabled">Github</a>
                    <a :href="item.liveDemoLink" v-if="item.liveDemoLink"
                        class="project-card-button btn btn-color-2 ms-3">Live Demo</a>
                    <a :href="item.liveDemoLink" v-if="!item.liveDemoLink" title="Live Demo Link Not Available"
                        class="project-card-button btn btn-color-2 ms-3 link-disabled" aria-disabled="true">Live
                        Demo</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.projects-section {
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

    .project-card {
        background-color: #fafafa;
        border: rgb(53, 53, 53) 0.1rem solid;
        border-radius: 30px;
        max-width: 320px;
        width: 100%;
        justify-content: center;

        &-title {
            font-size: 1.75rem;
            font-weight: 600;
        }

        &-img {
            width: 100%;
            max-height: 260px;
            min-height: 260px;
            object-fit: cover;
            border-radius: 30px;
            border: rgb(53, 53, 53) 0.1rem solid;
        }

        &-button {
            width: 100%;
            height: 50px;
        }

        &-parent {
            justify-content: center;
        }
    }
}

@media (min-width: 992px) {
    .projects-section {
        .project-card {
            max-width: 32%;
        }
    }
}
</style>