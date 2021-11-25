<template>
    <div class="container">
        <sidebar-l></sidebar-l>
        <main class="main">
            <h1 class="zero-tasks"> Задачи отсутствуют</h1>
        </main>
    </div>
</template>

<script>
import SidebarL from '../components/SidebarL.vue';
export default {
    components: {
        SidebarL
    }
};
</script>

<style lang="scss">
.container {
    margin: 150px auto;
    width: 746px;
    height: 529px;
    display: grid;
    grid-template-columns: 200px 546px;
}
.main {
    height: 100%;
}
.zero-tasks {
    font-size: 32px;
    color: #C9D1D3;
    font-family: Montserrat;
    font-weight: bold;
    margin: 234px 0 0 103px;
}
</style>
