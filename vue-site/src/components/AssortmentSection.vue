<script setup lang="ts">
import swimwearImg from '@/assets/swimwear_category_photo.png'
import lingerieImg from "@/assets/women's_lingerie_category.png"
import mensImg from "@/assets/men's_swimwear_category.png"
import kidsImg from "@/assets/children's_swimwear_category.png"
import poolImg from '@/assets/pool_accessories_category.png'
import beachImg from '@/assets/beach_clothing_category.png'

const categories = [
  { id: '1', name: 'Купальники', image: swimwearImg },
  { id: '2', name: 'Женское бельё', image: lingerieImg },
  { id: '3', name: 'Мужские плавки и шорты', image: mensImg },
  { id: '4', name: 'Детские купальники', image: kidsImg },
  { id: '5', name: 'Для бассейна', image: poolImg },
  { id: '6', name: 'Пляжная одежда', image: beachImg },
]
</script>

<template>
  <section id="assortment" class="py-16 md:py-20 lg:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="text-center mb-12">
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
          Ассортимент
        </h2>
        <p class="text-muted text-base md:text-lg max-w-2xl mx-auto">
          В нашем магазине представлен широкий выбор качественного белья и купальников
          для женщин, мужчин и детей
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="category in categories" :key="category.id" class="group">
          <div class="aspect-square overflow-hidden rounded-2xl bg-primary-light mb-4">
            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-center text-lg font-semibold text-heading">
            {{ category.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
