# VS-next-pizza 🍕  
An educational online product store designed to explore a modern tech stack and develop commercial projects.

---

## 🚀 **Project Description**  
VS-next-pizza is a fully-fledged online store for products (pizza) with rich functionality:  
1. Full-featured product filtering with server-side rendering and URL parameter storage.  
2. Displaying products and adding them to the cart.  
3. Authorization and registration via email/password, GitHub, or Google.  
4. Account verification through email confirmation.  
5. Profile editing.  
6. Product purchase using Yookassa.  
7. Displaying products in a modal window or on a separate page (Parallel Routes).  
8. Sending emails for registration, order creation, and successful payment.  
9. App deployment and database hosting on Vercel.  
10. Implementation of client-side and server-side components with real-world examples.

---

## 🛠️ **Tech Stack**  
1. **Next.js**: Parallel Routes, Group Routes, Server Actions, API.  
2. **TypeScript**.  
3. **TailwindCSS** + **ShadCN**.  
4. **Prisma** + **PostgreSQL**.  
5. **NextAuth**.  
6. **React Hook Form** + **Zod**.  
7. **Zustand**.  
8. **react-use**.  
9. **nextjs-toploader**.  
10. **react-hot-toast**.  
11. **react-insta-stories**.  
12. **lucide-react**.  
13. **Resend**.

---

## 📖 **Installation and Launch**  

### 1. Install dependencies:  
```bash
npm install
# or
yarn install
# or
pnpm install

2. Start the application:
bash
Копировать код
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 to view the app in your browser.

3. Additional commands:
Build the project:
bash
npm run build
Run in production:
bash
npm start
Work with Prisma:
bash

npm run prisma:push      # Sync database schema
npm run prisma:studio    # Open Prisma Studio interface
npm run prisma:seed      # Seed the database with test data
Linting:
bash
npm run lint

🛡️ Authentication
Authentication is implemented using NextAuth, supporting email/password as well as Google and GitHub login.
Registration confirmation via email using Resend.

🛍️ Store Features
Product Filtering: server-side rendering with URL parameters.
Cart: add and manage products.
Purchase: integration with Yookassa for payment.
Product Display: information shown in modal windows or dedicated pages.

✉️ E-Mail Notifications
Registration confirmation emails.
Order creation confirmations.
Notifications after successful payment.

🌐 Deployment
The project is deployed on Vercel with PostgreSQL for data storage.

📚 Additional Information
To learn more about Next.js, explore the following resources:

Next.js Documentation — discover features and APIs.
Next.js Interactive Tutorial.
Check out the Next.js GitHub repository.

📜 License
This project is licensed under the MIT License.
