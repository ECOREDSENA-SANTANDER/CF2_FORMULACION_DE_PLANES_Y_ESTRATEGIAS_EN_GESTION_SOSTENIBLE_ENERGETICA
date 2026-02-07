<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos y diagnóstico de la eficiencia energética
     
      Separador
      #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.1. Análisis de viabilidad económica de tecnologías eficientes
    
      
      
      Separador
      #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.2.Cuantificación de impactos y reducción de GEI
      
      
      Separador
      #t_1_3.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.3. Principios y tipologías de energías renovables
      
      
      Separador
      #t_1_4.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.4. Evaluación crítica del ciclo de vida en la generación renovable
      
      
      Separador
      #t_1_5.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.5. Justificación de estrategias de economía circular para componentes de generación renovable

  </template>

<script>
export default {
  name: 'Tema1',
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
