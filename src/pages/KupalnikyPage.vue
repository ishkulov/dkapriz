<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const brands = [
  'Bahama', 'Ysabel Mora', 'Feba', 'Allegro', 'Emdi', 'V.O.V.A.',
  'Rosme', 'Selmark', 'Calao', 'Naturana', 'Amarea', 'BluBay',
  'Charmante', 'Milavitsa', 'David', 'Трибуна', 'Gabbiano'
]

const benefits = [
  {
    icon: 'fitting',
    title: 'Примерка перед покупкой',
    description: 'Комфортные примерочные с хорошим освещением'
  },
  {
    icon: 'consultation',
    title: 'Подбор по фигуре',
    description: 'Поможем подобрать идеальную модель под ваш тип фигуры'
  },
  {
    icon: 'expert',
    title: 'Помощь консультанта',
    description: 'Опытные специалисты всегда готовы помочь с выбором'
  },
  {
    icon: 'sizes',
    title: 'Широкий размерный ряд',
    description: 'Модели для разных типов фигуры, включая большие размеры'
  }
]

const scrollToContacts = () => {
  const contactsSection = document.getElementById('page-contacts')
  if (contactsSection) {
    contactsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen">
    <section class="pt-24 pb-16 md:pt-32 md:pb-20 bg-primary-bg">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h1 class="font-serif text-4xl md:text-5xl lg:text-[56px] font-medium text-heading leading-tight mb-6">
            Женские купальники
          </h1>
          <p class="text-body text-lg md:text-xl leading-relaxed max-w-2xl">
            Планируете отпуск у моря, поездку к солнцу или просто ищете удобный и красивый купальник для бассейна? 
            В бутике «Дамский Каприз» вы сможете подобрать женский купальник, в котором будете чувствовать себя уверенно и комфортно.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-8">
            Широкий выбор женских купальников
          </h2>
          <div class="prose prose-lg max-w-none text-body">
            <p class="mb-6 leading-relaxed">
              В нашем магазине представлен широкий ассортимент женских купальников для разных типов фигуры и стилей. 
              Мы тщательно подбираем коллекции, обращая внимание на посадку, качество пошива и актуальные модные тенденции.
            </p>
            <p class="mb-8 leading-relaxed">
              Каждый купальник создан так, чтобы подчёркивать достоинства и дарить уверенность. 
              Мы понимаем, насколько важно правильно подобрать размер — в «Дамском Капризе» представлен широкий размерный ряд, 
              включая модели для пышных форм.
            </p>
          </div>

          <h3 class="font-serif text-2xl font-medium text-heading mb-6 mt-12">
            Модели и фасоны
          </h3>
          <p class="text-body mb-6">В ассортименте вы найдёте разнообразные модели купальников:</p>
          <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Слитные купальники
            </li>
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Раздельные (бикини)
            </li>
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Триангл
            </li>
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Бандо
            </li>
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Пуш-ап
            </li>
            <li class="flex items-center gap-3 text-body">
              <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
              Модели с поддержкой
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-primary-bg">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
            Бренды купальников
          </h2>
          <p class="text-muted mb-8">
            В нашем магазине представлены проверенные бренды с качественными материалами
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="brand in brands"
              :key="brand"
              class="px-4 py-2 bg-white rounded-full text-body text-sm font-medium border border-gray-100"
            >
              {{ brand }}
            </span>
          </div>
          <p class="text-muted text-sm mt-6">
            * Ассортимент брендов может меняться в зависимости от сезона и поставок
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-12 text-center">
            Преимущества покупки в магазине
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="bg-primary-bg rounded-2xl p-6 text-center"
            >
              <div class="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <svg v-if="benefit.icon === 'fitting'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="benefit.icon === 'consultation'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <svg v-else-if="benefit.icon === 'expert'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg v-else-if="benefit.icon === 'sizes'" class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 class="font-semibold text-heading mb-2">{{ benefit.title }}</h3>
              <p class="text-muted text-sm">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="page-contacts" class="py-16 md:py-20 bg-primary-bg">
      <div class="max-w-6xl mx-auto px-4 md:px-10 lg:px-16">
        <div
          :class="[
            'transition-all duration-700 delay-400',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="bg-white rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 class="font-serif text-3xl md:text-4xl font-medium text-heading mb-4">
              Приглашаем в бутик
            </h2>
            <p class="text-body mb-8">
              Приходите в «Дамский Каприз», чтобы без спешки выбрать идеальный купальник. 
              Наслаждайтесь солнцем, морем и отдыхом с комфортом и стилем!
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+79218924860"
                class="bg-primary text-white rounded-full px-8 py-4 text-base font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
              <a
                href="https://wa.me/79218924860"
                target="_blank"
                rel="noopener noreferrer"
                class="border border-primary/30 text-body rounded-full px-8 py-4 text-base hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
            <div class="text-muted">
              <p class="font-medium text-heading mb-1">Санкт-Петербург, ул. Наличная, 49</p>
              <p>Пн - Пт: 11:00 - 20:00 | Сб - Вс: 11:00 - 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
