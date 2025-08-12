# m2hwebsolution

## Razorpay Integration Setup

### For Development:
1. Replace the test key `rzp_test_9WaeLb4ndt8osh` in `src/pages/Checkout.tsx` with your actual Razorpay test key
2. The current implementation uses mock API endpoints for demo purposes

### For Production:
1. Implement proper backend API endpoints:
   - `/api/create-order` - Create Razorpay order
   - `/api/verify-payment` - Verify payment signature
2. Replace test key with live Razorpay key
3. Add proper error handling and logging
4. Implement webhook handling for payment status updates

### Environment Variables:
Create a `.env` file with:
```
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Security Notes:
- Never expose your Razorpay key secret on the frontend
- Always verify payments on the backend
- Use HTTPS in production
- Implement proper CORS policies