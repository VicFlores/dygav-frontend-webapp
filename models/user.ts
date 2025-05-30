import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'Full name is required'],
    minLength: [3, 'Full name must be at least 3 characters'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },

  role: {
    type: String,
    enum: ['tourist', 'owner', 'admin'],
    default: 'tourist',
    required: true,
    select: false,
  },

  marketingPermissions: {
    type: Boolean,
    default: false,
  },

  acceptancePrivacyPolicies: {
    type: Boolean,
    default: false,
  },
});

const User = models.User || model('User', userSchema);

export default User;
