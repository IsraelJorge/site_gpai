import moment from 'moment';

export function formateDate(date: string | undefined) {
  if (typeof date === 'undefined') return '';

  return moment(date).format('DD/MM/YYYY');
}
