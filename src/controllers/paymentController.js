import PaymentService from "../services/paymentService.js";

export const processPayment = async (req, res) => {
  try {
    const { amount, token } = req.body;
    const result = await PaymentService.charge(amount, token);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Payment processing failed" });
  }
};
