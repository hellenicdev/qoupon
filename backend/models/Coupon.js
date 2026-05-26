const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  store: { type: String, required: true, trim: true },
  code: { type: String, required: true, trim: true },
  discount: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'General' },
  url: { type: String, default: '' },
  image: { type: String, default: '' },
  expiryDate: { type: Date, default: null },
  status: {
    type: String,
    enum: ['active', 'expired', 'pending'],
    default: 'active'
  },
  clicks: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  submittedBy: { type: String, default: 'admin' }
}, { timestamps: true });

couponSchema.index({ status: 1, category: 1 });
couponSchema.index({ store: 'text', description: 'text' });

module.exports = mongoose.model('Coupon', couponSchema);
