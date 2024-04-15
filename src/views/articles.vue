<template>
    <div class="articles">
        <div class="mainitem">
            <router-link to="/articles/journey">
                <img src="../assets/img/first.png" alt="">
                <h3>My journey</h3>
            </router-link>
            <p>See the route i took to get where i am now.</p>
        </div>
        <div class="subitems">
            <div class="experience">
                <router-link to="/articles/experience">
                    <img src="../assets/img/first.png" alt="Experience">
                    <h4>Experience</h4>
                </router-link>
                <p>See my experiences</p>
            </div>
            <div class="hobby">
                <router-link to="/articles/hobby">
                    <img src="../assets/img/first.png" alt="Hobby's">
                    <h4>Hobby's</h4>
                </router-link>
                <p>Things i like to do</p>
            </div>
            <div class="projects">
                <router-link to="/articles/projects">
                    <img src="../assets/img/first.png" alt="Projects">
                    <h4>Projects</h4>
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