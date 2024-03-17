import { Schema, model, models } from 'mongoose';
import { AccomodationCalendarType } from '@/types';

const AccomodationCalendarSchema = new Schema<AccomodationCalendarType>({
  id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  occupiedPeriod: {
    type: Object,
  },
  unitId: {
    type: Number,
    required: true,
  },
  accommodationId: {
    type: Number,
    required: true,
  },
  accommodationName: {
    type: String,
    required: true,
  },
  cancelledDate: {
    type: String,
  },
});

const AccomodationCalendar =
  models.AccomodationCalendar ||
  model('AccomodationCalendar', AccomodationCalendarSchema);

export default AccomodationCalendar;
