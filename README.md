# Tomato

Tomato is a full-stack food delivery application designed to enhance the experience of ordering food online. It provides features for both end-users and administrators, ensuring a seamless and efficient workflow.

## Features
### User Features
- **Authentication**: Users can sign up and log in securely.
- **Browse and Order**: Explore the food catalog and place orders.
- **Payment Integration**: Make payments using [Stripe](https://stripe.com/).

### Admin Features
- **Food Management**:
  - Add new food items.
  - Edit existing food details.
  - Delete food items.
- **Order Tracking**:
  - Monitor delivery progress.
  - Check payment status.

## Built With
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Getting Started
### Prerequisites
To run this project locally, you need:
- Node.js installed.
- A MongoDB instance.
- A Stripe account for payment integration.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tomato.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tomato
   ```
3. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   cd client
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root and provide the following:
   ```env
   MONGO_URI=your-mongodb-connection-string
   STRIPE_SECRET_KEY=your-stripe-secret-key
   JWT_SECRET=your-jwt-secret
   ```
5. Run the development servers:
   - Backend:
     ```bash
     npm run dev
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

### Deployment
1. Deploy the frontend to platforms like Netlify or Vercel.
2. Deploy the backend to platforms like Heroku or AWS.
3. Ensure the environment variables are configured appropriately in production.

## Usage
### For Users
1. Sign up or log in.
2. Browse through the food items and select your favorite dishes.
3. Proceed to checkout and pay securely via Stripe.

### For Admins
1. Log in with admin credentials.
2. Manage food items and track orders.
3. Monitor payments and delivery statuses.

## Acknowledgments
- Payment integration powered by [Stripe](https://stripe.com/).
- Inspired by modern food delivery services.

## Contact
Feel free to reach out for questions or contributions:
- Email: chidochashegerald@gmail.com
- GitHub: [chidozhou](https://github.com/chidozhou)

---

Thank you for exploring Tomato!
