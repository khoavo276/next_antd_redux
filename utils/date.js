import moment from 'moment';

export function convertTimestampToDate(timestamp) {
  return timestamp ? moment.unix(timestamp).toDate() : null;
}
