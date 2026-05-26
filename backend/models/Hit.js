const mongoose = require('mongoose');

const hitSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['pageview', 'click', 'submission'],
    required: true
  },
  couponId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', default: null },
  page: { type: String, default: '' },
  ip: { type: String, default: '' },
  userAgent: { type: String, default: '' },
  referrer: { type: String, default: '' }
}, { timestamps: true });

hitSchema.index({ createdAt: -1 });
hitSchema.index({ type: 1, createdAt: -1 });

module.exports = mongoose.model('Hit', hitSchema);
