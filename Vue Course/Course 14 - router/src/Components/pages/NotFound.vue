<template>
    <div>
        <h2>Page not found! Maybe view our <router-link to="/teams">Teams</router-link>
        </h2>

    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
}

div {
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
    padding: 200px;
}

div h2 {
    color: white;
    font-weight: bold;
    text-align: center;
}

a {
    color: red;
}
</style>