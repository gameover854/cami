<template>
    <div class="wrapper">
        <h1>{{ countDown }}</h1>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            countDown: '',
            distance: 0
        }
    },
    methods: {
        count(birthday) {
            var now = new Date().getTime();
            var born = new Date(birthday).getTime();
            var distance = this.distance = born - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.countDown = days + " ngày " + hours + " giờ "
                + minutes + " phút " + seconds + " giây ";
        }
    },
    mounted: function () {
        this.count('11/10/2023');
        setInterval(() => {
            this.count('11/10/2023')
        }, 1000)
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url('/img/cat.jpg');
    background-size: cover;
}
</style>