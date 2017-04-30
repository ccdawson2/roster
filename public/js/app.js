angular.module('app', ['ngRoute', 'ngAnimate', 'weeklyScheduler', 'weeklySchedulerI18N'])

  .config(['weeklySchedulerLocaleServiceProvider', function (localeServiceProvider) {
    localeServiceProvider.configure({
      doys: {'es-es': 4},
      lang: {'es-es': {month: 'Mes', weekNb: 'número de la semana', addNew: 'Añadir'}},
      localeLocationPattern: 'libs/angular-i18n/angular-locale_{{locale}}.js'
    });
  }]);