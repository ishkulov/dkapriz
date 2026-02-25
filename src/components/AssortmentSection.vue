<script setup lang="ts">
import { RouterLink } from 'vue-router'

import swimwearImg from '@/assets/swimwear_category_photo.png?w=450;665;896&format=webp;avif&as=metadata'
import lingerieImg from "@/assets/women's_lingerie_category.png?w=450;665;896&format=webp;avif&as=metadata"
import mensImg from "@/assets/men's_swimwear_category.png?w=450;665;896&format=webp;avif&as=metadata"
import kidsImg from "@/assets/children's_swimwear_category.png?w=450;665;896&format=webp;avif&as=metadata"
import poolImg from '@/assets/pool_accessories_category.png?w=450;665;896&format=webp;avif&as=metadata'
import beachImg from '@/assets/beach_clothing_category.png?w=450;665;896&format=webp;avif&as=metadata'

const categories = [
  { id: '1', name: 'Купальники женские', image: swimwearImg, link: '/kupalniki/' },
  { id: '2', name: 'Нижнее бельё', image: lingerieImg, link: '/nizhnee-bele/' },
  { id: '3', name: 'Мужские плавки и шорты', image: mensImg, link: '/plavki-i-shorty/' },
  { id: '4', name: 'Детские купальники', image: kidsImg, link: null },
  { id: '5', name: 'Для бассейна', image: poolImg, link: null },
  { id: '6', name: 'Пляжная одежда', image: beachImg, link: null },
]
</script>

<template>
  <section id="assortment" class="py-16 md:py-20 lg:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
      <div class="text-center mb-12">
        <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
          Ассортимент магазина
        </h2>
        <p class="text-muted text-base md:text-lg max-w-2xl mx-auto">
          В нашем магазине представлен широкий выбор качественного белья и купальников
          для женщин, мужчин и детей
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="category.link || '#'"
          :class="[
            'group block',
            category.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'
          ]"
        >
          <div class="aspect-square overflow-hidden rounded-2xl bg-primary-light mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              :src="category.image.find(i => i.width === 665 && i.format === 'webp')?.src"
              :srcset="category.image.map(i => `${i.src} ${i.width}w`).join(', ')"
              sizes="(max-width: 768px) 100vw, 665px"
              :alt="category.name"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 class="text-center text-lg font-semibold text-heading group-hover:text-primary transition-colors">
            {{ category.name }}
          </h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
