# Portfolio Project

This is a personal portfolio website built with React and Tailwind CSS. It showcases various sections including About, Skills, Projects, and Contact. The project is designed to provide a clean, modern, and responsive user interface to present professional information and work samples effectively.

## Features

- **Responsive Design:** The layout adapts seamlessly to different screen sizes, ensuring a great user experience on desktops, tablets, and mobile devices.
- **Contact Form:** Integrated with EmailJS to allow visitors to send messages directly from the website. Includes a spam prevention feature that limits users to sending one message per day per device.
- **Interactive Components:** Includes sections such as About, Skills, Projects, and Contact with smooth navigation and interactive elements.
- **Modern UI:** Utilizes Tailwind CSS for styling and Lucide React icons for visual enhancements.
- **Toast Notifications:** Provides user feedback on form submission status using react-toastify.

## Technologies Used

- React
- Tailwind CSS
- EmailJS
- React Toastify
- Lucide React Icons
- Vite (for development and build tooling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Swapiano-Studio/novacode-portofolio
   cd portofolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure EmailJS:

   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Create an email service and email template.
   - Obtain your Service ID, Template ID, and User/Public Key.
   - Update the `src/component/ContactSection.jsx` file with your EmailJS credentials.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite) to view the website.

## Usage

- Navigate through the portfolio sections using the navigation bar.
- Use the contact form to send messages. Note that you can only send one message per day per device to prevent spam.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact via the email provided in the Contact section of the website.
# novacode-portofolio
