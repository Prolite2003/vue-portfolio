<template>
    <div class="articles">
        <div class="mainitem">
            <div class="journey">
                <router-link to="/articles/journey">
                    <img src="../assets/img/first.png" alt="">
                </router-link>
                <router-link to="/articles/journey">
                    <h2>My journey</h2>
                </router-link>
                <p>See the route i took to get where i am now.</p>
            </div>
        </div>
        <div class="subitems">
            <div class="experience">
                <router-link to="/articles/experience">
                    <img src="../assets/img/first.png" alt="Experience">
                </router-link>
                <router-link to="/articles/experience">
                    <h2>Experience</h2>
                </router-link>
                <p>See my experiences</p>
            </div>
            <div class="hobby">
                <router-link to="/articles/hobby">
                    <img src="../assets/img/first.png" alt="Hobby's">
                </router-link>
                <router-link to="/articles/hobby">
                    <h2>Hobby's</h2>
                </router-link>
                <p>Things i like to do</p>
            </div>
            <div class="projects">
                <router-link to="/articles/projects">
                    <img src="../assets/img/first.png" alt="Projects">
                </router-link>
                <router-link to="/articles/projects">
                    <h2>Projects</h2>
                </router-link>
                <p>My projects</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>