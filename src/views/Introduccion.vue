<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-color-1.p-3.mb-5(data-aos='fade-right')
      .row.justify-content-center.mb-0a.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/1.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-0 Este componente formativo brinda las herramientas esenciales para analizar soluciones energéticas desde una perspectiva técnica, económica y ambiental. A lo largo del contenido, el aprendiz aprenderá a identificar y cuantificar los impactos ambientales asociados a los recursos utilizados, evaluar la eficiencia de diferentes tecnologías y determinar su viabilidad financiera. También se presentan los principios básicos de las energías renovables y la forma en que su potencial depende de las características del territorio. Además, se introduce la estimación de la reducción de emisiones de Gases de Efecto Invernadero - GEI como criterio clave para seleccionar alternativas sostenibles. Con estos conocimientos, el aprendiz estará en capacidad de realizar un diagnóstico fundamentado que servirá como base para la construcción del Plan de Gestión Sostenible Energética (PGSE).


    .row.justify-content-center.align-items-center(data-aos='fade-right')         
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8aMSJHO4R_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Análisis de viabilidad, eficiencia y cuantificación de impactos en procesos energético-Introducción


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
