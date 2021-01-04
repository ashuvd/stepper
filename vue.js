// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг,
      completed: false,
      steps: [
        {id: 1, title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {id: 2, title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {id: 3, title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {id: 4, title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {id: 5, title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ]
    }
  },
  created() {
    this.minStepIndex = 0;
    this.maxStepIndex = this.steps.length - 1;
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.minStepIndex;
      }
    },
    reset() {
      // начать заново
      this.activeIndex = 0;
      this.completed = false;
    },
    nextOfFinish(finish) {
      // кнопка вперед или закончить
      if (finish) {
        this.completed = true;
      } else {
        if (this.activeIndex < this.maxStepIndex) {
          this.activeIndex++;
        } else {
          this.activeIndex = this.maxStepIndex;
        }
      }
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx;
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    activeStep() {
      return this.steps[this.activeIndex];
    },
    // 2. выключена ли кнопка назад
    isPrevButtonDisabled() {
      return this.activeIndex === this.minStepIndex;
    },
    // 3. находимся ли мы на последнем шаге
    isLastStep() {
      return this.activeIndex === this.maxStepIndex;
    }
  }
}

Vue.createApp(App).mount('#app')
