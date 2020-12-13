<template>
    <gmapMap
    :center="{lat:location.lat, lng:location.long}"
    :zoom="7"
    style="width: 1000px; height: 300px"
    >
    <gmapMarker
        :clickable="true"
        :draggable="true"
    />
    </gmapMap>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'MapContainer',
  props: ["location"]
}
</script>


<style scoped>

</style>
