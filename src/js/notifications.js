const notifications = {
  onOverflowRespose() {
    PNotify.notice({
      title: 'Список совпадений переполнен',
      text: 'Введите более специфичный запрос',
    });
  },
  onNotFound() {
    PNotify.info({
      title: 'По вашему запросу ничего не найдено',
      text:
        'Проверьте пожалуйста правильность ввода страны и повторите попытку',
    });
  },
  onError() {
    PNotify.error({
      title: 'Произошла ошибка запроса',
      text: 'Повторите пожалуйста запрос снова',
    });
  },
};

export default notifications;
