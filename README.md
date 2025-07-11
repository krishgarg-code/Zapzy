# Zayora E-Commerce

Zayora is a luxury clothing brand for men, women, and kids. This modern, fully responsive e-commerce web app is built with React and Vite, featuring a clean design, seamless shopping experience, and robust authentication.

## Features
- Responsive design for all devices (mobile, tablet, desktop)
- Product categories: Men, Women, Kids
- Product search, sort, and filtering
- Shopping cart with add/remove functionality
- User authentication (Sign In/Sign Up) via Clerk
- Newsletter subscription and exclusive offers
- Modern navigation with hamburger menu on mobile
- Trendy collections, product details, and more

## Folder Structure
```
Zapzy-main/
├── public/                  # Static assets (e.g., vite.svg)
├── src/
│   ├── App.jsx              # Main app component and routing
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   ├── Context/
│   │   └── ShopContext.jsx  # Global state management (cart, products)
│   ├── Components/
│   │   ├── assets/          # Images, icons, and product data
│   │   ├── BackButton/      # Back navigation button
│   │   ├── Breadcrum/      # Breadcrumb navigation
│   │   ├── CartItems/      # Cart item display and controls
│   │   ├── DescriptionBox/ # Product description section
│   │   ├── Footer/         # Footer with social links
│   │   ├── Hero/           # Hero/banner section
│   │   ├── item/           # Product card component
│   │   ├── navbar/         # Responsive navigation bar
│   │   ├── Newcollections/ # Trendy collections grid
│   │   ├── Newsletter/     # Newsletter signup form
│   │   ├── offers/         # Offers and promotions
│   │   ├── popular/        # Popular products grid
│   │   ├── ProductDisplay/ # Product detail view
│   │   ├── RelatedProducts/# Related products section
│   ├── Pages/
│   │   ├── Cart.jsx        # Cart page
│   │   ├── Product.jsx     # Product detail page
│   │   ├── Shop.jsx        # Home/shop page
│   │   ├── ShopCategory.jsx# Category page (Men, Women, Kids)
│   │   ├── SignIn.jsx      # Sign in page
│   │   ├── SignUp.jsx      # Sign up page
│   │   └── CSS/            # Page-specific CSS
│   │       ├── LoginSignup.css
│   │       └── ShopCategory.css
├── package.json            # Project metadata and scripts
├── vite.config.js          # Vite configuration
├── Vercel.json             # Vercel deployment config
├── README.md               # Project documentation
└── ...
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Responsive Design
- All major components (Footer, New Collections, Newsletter, Navbar, etc.) are fully responsive.
- Mobile layouts use grid/flex, smaller fonts, and touch-friendly controls.
- CSS is modular and imported per component for maintainability.

## Customization
- Update product data and images in `src/Components/assets/`.
- Adjust styles in each component's CSS file for branding.

## License
This project is for educational and demonstration purposes.
