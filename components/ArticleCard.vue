<template>
    <nuxt-ui-card>
        <nuxt-ui-card-header>
            <nuxt-ui-card-title>{{ title }}</nuxt-ui-card-title>
        </nuxt-ui-card-header>
        <nuxt-ui-card-content>
            <p>{{ description }}</p>
        </nuxt-ui-card-content>
        <nuxt-ui-card-footer>
            <nuxt-ui-link :to="link">Read more</nuxt-ui-link>
        </nuxt-ui-card-footer>
    </nuxt-ui-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped>
/* Add some basic styling if needed */
</style>
