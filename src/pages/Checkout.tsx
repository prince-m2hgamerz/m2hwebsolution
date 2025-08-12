import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Lock, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  ShoppingCart,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Shield,
  IndianRupee
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  pincode: yup.string().required('Pincode is required')
});

type FormData = yup.InferType<typeof schema>;

interface CheckoutProps {
  selectedService?: {
    title: string;
    price: number;
    description: string;
  };
}

const Checkout: React.FC<CheckoutProps> = ({ selectedService }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Default service if none selected
  const service = selectedService || location.state?.selectedService || {
    title: 'Custom Web Development',
    price: 25000,
    description: 'Professional website development with modern design and functionality'
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  // Create order on backend (mock implementation)
  const createOrder = async (amount: number) => {
    try {
      // In a real implementation, this would call your backend API
      // For demo purposes, we'll simulate the response
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
        }),
      }).catch(() => {
        // Fallback for demo - simulate backend response
        return {
          ok: true,
          json: () => Promise.resolve({
            id: `order_${Date.now()}`,
            amount: amount * 100,
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
          })
        };
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      // Return mock order for demo
      return {
        id: `order_${Date.now()}`,
        amount: amount * 100,
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
      };
    }
  };

  // Verify payment on backend (mock implementation)
  const verifyPayment = async (paymentData: any) => {
    try {
      // In a real implementation, this would verify the payment signature
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      }).catch(() => {
        // Fallback for demo
        return { ok: true, json: () => Promise.resolve({ verified: true }) };
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Payment verification failed');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      // Return success for demo
      return { verified: true };
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsProcessing(true);
    setPaymentStatus('idle');
    setErrorMessage('');

    try {
      const totalAmount = Math.round(service.price * 1.18); // Including GST

      // Create order
      const order = await createOrder(totalAmount);

      // Razorpay options
      const options = {
        key: 'rzp_test_htKfpLD3QXIdWQ', // Replace with your actual Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: 'M2H Web Solution',
        description: service.title,
        image: '/logo.png',
        order_id: order.id,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verification = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verification.verified) {
              setPaymentStatus('success');
              // Store order details in localStorage for demo
              localStorage.setItem('lastOrder', JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount: totalAmount,
                service: service.title,
                customerData: data,
                timestamp: new Date().toISOString(),
              }));
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            setPaymentStatus('error');
            setErrorMessage('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.phone,
        },
        notes: {
          address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`,
          service: service.title,
        },
        theme: {
          color: '#3B82F6',
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            setErrorMessage('Payment was cancelled by user');
          }
        },
        retry: {
          enabled: true,
          max_count: 3,
        },
        timeout: 300, // 5 minutes
        remember_customer: false,
      };

      // Check if Razorpay is loaded
      if (typeof window.Razorpay === 'undefined') {
        // Load Razorpay script dynamically
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          const razorpay = new window.Razorpay(options);
          razorpay.open();
        };
        script.onerror = () => {
          setPaymentStatus('error');
          setErrorMessage('Failed to load payment gateway. Please check your internet connection.');
        };
        document.body.appendChild(script);
      } else {
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }

    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      setErrorMessage('Payment initialization failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900 pt-20 flex items-center justify-center">
        <motion.div 
          className="max-w-md mx-auto px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card dark:glass-card-dark rounded-2xl p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for your payment. We'll get started on your project right away and contact you within 24 hours.
            </p>
            <div className="space-y-3 mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p><strong>Service:</strong> {service.title}</p>
                <p><strong>Amount:</strong> ₹{Math.round(service.price * 1.18).toLocaleString()}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="glass-card dark:glass-card-dark bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={goBack}
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Secure Checkout
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
            <Shield className="w-5 h-5 text-green-500" />
            <span>SSL Secured Payment</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div 
            className="glass-card dark:glass-card-dark rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <ShoppingCart className="w-6 h-6 mr-3 text-blue-500" />
              Order Summary
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    ₹{service.price.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <hr className="border-gray-200 dark:border-gray-700" />
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-semibold">₹{service.price.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                <span className="font-semibold">₹{Math.round(service.price * 0.18).toLocaleString()}</span>
              </div>
              
              <hr className="border-gray-200 dark:border-gray-700" />
              
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-gray-900 dark:text-white">Total</span>
                <span className="font-bold text-gray-900 dark:text-white flex items-center">
                  <IndianRupee className="w-5 h-5 mr-1" />
                  {Math.round(service.price * 1.18).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Accepted Payment Methods
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card dark:glass-card-dark p-3 rounded-lg text-center">
                  <CreditCard className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">Credit/Debit Cards</span>
                </div>
                <div className="glass-card dark:glass-card-dark p-3 rounded-lg text-center">
                  <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">UPI</span>
                </div>
                <div className="glass-card dark:glass-card-dark p-3 rounded-lg text-center">
                  <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-green-500 to-blue-500 rounded"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Net Banking</span>
                </div>
                <div className="glass-card dark:glass-card-dark p-3 rounded-lg text-center">
                  <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Wallets</span>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Secure Payment</span>
              </div>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• 256-bit SSL encryption</li>
                <li>• PCI DSS compliant</li>
                <li>• Razorpay secured</li>
                <li>• No card details stored</li>
              </ul>
            </div>
          </motion.div>

          {/* Billing Form */}
          <motion.div 
            className="glass-card dark:glass-card-dark rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-purple-500" />
              Billing Information
            </h2>

            {paymentStatus === 'error' && (
              <motion.div 
                className="mb-6 glass-card dark:glass-card-dark p-4 border border-red-200 dark:border-red-800 rounded-xl flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                  {errorMessage}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full pl-10 pr-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your complete address"
                  />
                </div>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    {...register('city')}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    State *
                  </label>
                  <input
                    {...register('state')}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="State"
                  />
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Pincode *
                  </label>
                  <input
                    {...register('pincode')}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass-card dark:glass-card-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Pincode"
                  />
                  {errors.pincode && (
                    <p className="mt-1 text-sm text-red-500">{errors.pincode.message}</p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing}
                className="w-full glass-card dark:glass-card-dark bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isProcessing ? (
                  <>
                    <motion.div 
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Pay ₹{Math.round(service.price * 1.18).toLocaleString()}</span>
                  </>
                )}
              </motion.button>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <Lock className="w-4 h-4 inline mr-1" />
                Your payment information is secure and encrypted
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;