<template>
    <h1 class="text-3xl">Fedora Linux</h1>
    <br>
    <div class="container">
        <div class="img">
            <img src="/linux/fedora_minimal.png" alt="My Minimal Desktop">
        </div>
        <div class="content">
            This is my minimal Desktop. <br>
            Fedora 40 with KDE 6. <br>
        </div>
        <div class="links">
            <br>
            <h2 class="text-2xl">Relative Links</h2>
            <br>
            <a href="https://fedoraproject.org/spins/kde/" target="_blank">
                <Icon name="devicon-plain:fedora" color="white" /> Fedora KDE Spin
            </a>
        </div>
    </div>
</template>

<style>
.container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 0.5fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "img content"
        "links content";
}

.img {
    grid-area: img;
}

.content {
    grid-area: content;
}

.links {
    grid-area: links;
}
</style>