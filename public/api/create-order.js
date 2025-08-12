// Mock API endpoint for creating Razorpay orders
// In production, this should be implemented on your backend server

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'INR', receipt } = req.body;

  if (!amount || !receipt) {
    return res.status(400).json({ error: 'Amount and receipt are required' });
  }

  // Mock order creation response
  const order = {
    id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    entity: 'order',
    amount: amount,
    amount_paid: 0,
    amount_due: amount,
    currency: currency,
    receipt: receipt,
    offer_id: null,
    status: 'created',
    attempts: 0,
    notes: {},
    created_at: Math.floor(Date.now() / 1000)
  };

  res.status(200).json(order);
}