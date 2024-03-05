import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import zh from './zh';

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    en,
    zh,
  },
});
