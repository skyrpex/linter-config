<template>
    <div :css="cssClasses">Hello {{ name }}</div>
</template>

<script>
export default {
    data: () => ({
        name: "world",
        cssClasses: "heading--dark",
    }),
};
</script>
