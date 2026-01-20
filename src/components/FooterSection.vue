<script setup lang="ts">
import logoImage from '@/assets/logo.png'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-heading text-white">
    <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16 py-12 md:py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div class="lg:col-span-1">
          <img :src="logoImage" alt="Дамский Каприз" class="h-12 w-auto brightness-0 invert" />
          <p class="text-white/70 mt-4 text-sm leading-relaxed">
            Магазин нижнего белья и купальников для всей семьи. Качество, комфорт
            и индивидуальный подход.
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a
              href="https://wa.me/79218924860"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-medium text-sm mb-4">Навигация</h4>
          <ul class="space-y-3">
            <li v-for="(item, index) in ['Главная', 'Ассортимент', 'Преимущества', 'Контакты']" :key="index">
              <router-link
                :to="'/#' + ['home', 'assortment', 'benefits', 'contacts'][index]"
                class="text-white/70 hover:text-white transition-colors text-sm"
              >
                {{ item }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium text-sm mb-4">Категории</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/kupalniky" class="text-white/70 hover:text-white transition-colors text-sm">
                Купальники
              </router-link>
            </li>
            <li v-for="item in ['Женское бельё', 'Мужские плавки', 'Детские купальники', 'Пляжная одежда']" :key="item">
              <router-link to="/#assortment" class="text-white/70 hover:text-white transition-colors text-sm">
                {{ item }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium text-sm mb-4">Контакты</h4>
          <ul class="space-y-4 text-sm text-white/70">
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Санкт-Петербург, ул. Наличная, 49</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+79218924860" class="hover:text-white transition-colors">
                +7 (921) 892-48-60
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                Пн-Сб: 10:00-19:00
                <br />
                Вс: 10:00-17:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>{{ currentYear }} Дамский Каприз. Все права защищены.</p>
        <p class="flex items-center gap-1">
          Сделано с
          <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          в Санкт-Петербурге
        </p>
      </div>
    </div>
  </footer>
</template>
