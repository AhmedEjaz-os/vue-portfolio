<script setup>
let skillFront = [
    {
        skill: 'HTML5',
        level: 'Experienced',
    },
    {
        skill: 'CSS3',
        level: 'Experienced',
    },
    {
        skill: 'SCSS',
        level: 'Experienced',
    },
    {
        skill: 'JS',
        level: 'Experienced',
    },
    {
        skill: 'JQuery',
        level: 'Intermediate',
    },
    {
        skill: 'Angular JS',
        level: 'Experienced',
    },
    {
        skill: 'React JS',
        level: 'Experienced',
    },
    {
        skill: 'Next JS',
        level: 'Experienced',
    },
    {
        skill: 'Vue JS',
        level: 'Intermediate',
    }
];

let skillStyles = [
    {
        skill: 'Bootstrap',
        level: 'Experienced'
    },
    {
        skill: 'Angular Material',
        level: 'Experienced'
    },
    {
        skill: 'Material UI',
        level: 'Experienced'
    },
    {
        skill: 'TailwindCSS',
        level: 'Experienced'
    }
];
</script>

<template>
    <div class="container experience-section col-12">
        <p class="text-center mb-0 pb-0 experience-section-title">Explore My</p>
        <h1 class="text-center experience-section-description">Experience</h1>
        <div class="d-flex experience-section-card-parent">
            <div class="experience-section-card py-3 px-5 col-6 me-3">
                <p class="experience-section-card-title text-center">Frontend Development</p>
                <div class="d-flex flex-wrap">
                    <div v-for="(item) in skillFront"
                        class="experience-section-card-skill col-6 d-flex align-items-start mb-4">
                        <img src="/src/assets/img/icons/checkmark.png" alt="skill-logo" />
                        <div class="d-flex flex-column ms-4">
                            <p class="experience-section-card-skill-title mb-0">{{ item.skill }}</p>
                            <p class="experience-section-card-skill-des mb-0">{{ item.level }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="experience-section-card py-3 px-5 col-6 ms-3">
                <p class="experience-section-card-title text-center">Frontend Development</p>
                <div class="d-flex flex-wrap">
                    <div v-for="(item) in skillStyles"
                        class="experience-section-card-skill col-6 d-flex align-items-start mb-4">
                        <img src="/src/assets/img/icons/checkmark.png" alt="skill-logo" />
                        <div class="d-flex flex-column ms-4">
                            <p class="experience-section-card-skill-title mb-0">{{ item.skill }}</p>
                            <p class="experience-section-card-skill-des mb-0">{{ item.level }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.experience-section {
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

    &-card {
        border: rgb(53, 53, 53) 0.1rem solid;
        border-radius: 30px;

        &-title {
            color: rgb(85, 85, 85);
            font-weight: 600;
            font-size: 1.75rem;
            margin-bottom: 3rem;
        }

        &-skill {
            img {
                width: 32px;
                height: 32px;
            }

            &-title {
                color: #000;
                font-size: 1.17em;
                font-weight: 600;
            }

            &-des {
                color: rgb(85, 85, 85);
                font-size: 1.17em;
            }
        }

        &-parent {
            margin-top: 3rem;
        }
    }

}
</style>