# Vertical Motion | Elevator Engineering

A sample, single-page Persian website introducing an elevator services company, built with HTML, CSS, and Vanilla JavaScript.

## Getting Started

1. Extract the project folder from the ZIP archive.
2. Open the `Elevator-Website` folder in Visual Studio Code.
3. Open `index.html` in your browser. For a better development experience, you can use the Live Server extension.

No backend, database, package installation, or build process is required.

## Project Structure

- `index.html`: Contains all single-page website content.
- `css/variables.css`: Defines colors, typography, spacing, and other design tokens.
- `css/style.css`: Contains the main styles.
- `css/components.css`: Defines shared UI component styles and rules.
- `css/responsive.css`: Contains styles for small and medium screen sizes.
- `js/theme.js`: Handles light and dark theme switching.
- `js/main.js`: Manages the mobile navigation menu and section reveal animations.

## Customizing Colors

To customize the color palette, edit the values in `css/variables.css` under the `:root` and `html[data-theme="dark"]` selectors. Component colors are derived from these variables.

## Sample Content

The name "Arman", images, project descriptions, and current contact details are sample content only. Replace them with the company's actual information before publishing:

- Landline and mobile phone numbers in the footer.
- Sample email address: `info@example.com`
- Company address and Google Maps destination.
- Sample project images and descriptions.

## Images and Fonts

Images are loaded from Unsplash URLs, and the Vazirmatn font is loaded through Google Fonts. An internet connection is therefore required to access these external resources.

For a fully self-contained deployment, download the images into the `img` folder and update their paths in the HTML file.

## Notes

- The `tel:` link opens the device's calling application with the phone number prefilled.
- The `mailto:` link opens the user's email application with the recipient address prefilled. No subject or message body is included.
- The map link currently points to a sample location in Tehran and should be updated with the company's exact address.
- The project does not include any forms, data collection, company-side data storage, or backend functionality.