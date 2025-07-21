# Examples for Google CCaaS Web SDK (v3)

This repository includes a selection of example implementations of the Google CCaaS Web SDK v3. Full documentation for the web SDK can be found in the (Google CCaaS documentation)[https://cloud.google.com/contact-center/ccai-platform/docs/web-sdk-v3-guide].

## Run dev server

To run the development server, follow these steps:

Node.js version 20 or greater is required. 

1. Install all the requirements:

   ```
   npm install
   ```

2. Copy `.env.example` to `.env`:

   ```
   cp .env.example .env
   ```

   Update `.env` file with correct values:
   
   - **CCAAS_TENANT=**: Should be set to the hostname of your CCaaS tenant without the https:// or the trailing /, for example myccaas-1234.uc1.ccaiplatform.com
   - **COMPANY_ID=**: This is the Company ID that can be found by signing into your CCaaS portal and navigating to Developer Settings -> Company Key & Secret Code -> Company Key.
   - **COMPANY_SECRET=**: This is the Company ID that can be found by signing into your CCaaS portal and navigating to Developer Settings -> Company Key & Secret Code -> Company Secret Code.

   Note: You can optionally add the ***`PORT=`*** value to the `.env` file to specify an alternative port number, otherwise the default port `3000` will be used.
    
3. Start dev server:

    ```
    npm start
    ```
    
## Available demos

### Basic demo

`basic.html` includes a demonstration of basic usage of the CCaaS web SDK. It provides an example of how to invoke the SDK to start a basic chat conversaion.

### Custom widget name

`custom-name.html` provides a demonstration on how to customize the name of the SDK widget. In this example, the widget name is set to `__NAME__` which is then displayed in the heading of the chat widget upon launching.

### Event listener

`event-listeners.html` is an example of how to listen for web SDK events. In this example we listen for the `ready`, `visible` and `chat.message` events. When they occur we generate a console log entry.

### Menu key

`menu-key.html` is an example of how to set the intial menu that the chat should start with. 

### Accent color

`accent-color.html` provides the ability to change the accent color of the widget.

### CSS variables

`css-variables.html` is an example of how to set specific CSS values within the web SDK widget.

### Unsigned custom data

`unsigned-custom-data.html` demonstrates how to pass data into the web SDK. These values are provided through the custom data object and are unsigned. This does not typically include PII.

### Signed custom data

`signed-custom-data.html` provides an example of how to pass data into the web SDK that is signed. These values are passed in custom data and typically contain sensative information.

### Chat transfer

`external-chatbot-transfer.html` see how to seamlessly transfer users from an external chatbot environment to the widget for live agent assistance or specialized support.



