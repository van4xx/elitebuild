import nodemailer from 'nodemailer';

interface OrderDetails {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  deliveryAddress: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendOrderConfirmation = async (orderDetails: OrderDetails) => {
  const {
    orderNumber,
    customerName,
    customerEmail,
    totalAmount,
    items,
    deliveryAddress,
  } = orderDetails;

  const itemsList = items
    .map(
      (item) =>
        `${item.name} x ${item.quantity} = ${item.price * item.quantity} ₽`
    )
    .join('\n');

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: customerEmail,
    subject: `Заказ №${orderNumber} успешно оплачен`,
    html: `
      <h2>Спасибо за ваш заказ!</h2>
      <p>Уважаемый ${customerName},</p>
      <p>Ваш заказ №${orderNumber} успешно оплачен и принят в обработку.</p>
      
      <h3>Детали заказа:</h3>
      <pre>${itemsList}</pre>
      
      <p><strong>Итого: ${totalAmount} ₽</strong></p>
      
      <h3>Адрес доставки:</h3>
      <p>${deliveryAddress}</p>
      
      <p>Мы сообщим вам о статусе доставки дополнительно.</p>
      
      <p>С уважением,<br>Ваш магазин</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendOrderFailureNotification = async (
  orderNumber: string,
  customerEmail: string,
  error: string
) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: customerEmail,
    subject: `Проблема с оплатой заказа №${orderNumber}`,
    html: `
      <h2>Возникла проблема с оплатой</h2>
      <p>К сожалению, при оплате заказа №${orderNumber} возникла ошибка:</p>
      <p style="color: red;">${error}</p>
      <p>Пожалуйста, попробуйте оплатить заказ снова или свяжитесь с нашей службой поддержки.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}; 