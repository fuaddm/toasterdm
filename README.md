![image alt text](https://raw.githubusercontent.com/fuaddm/toasterdm/main/photo.png)

# Toaster Notification System

A customizable and easy-to-use toast notification system for React applications.

## Features

- **Multiple Notification Types**: Supports success, error, warning, info, and waiting notifications.
- **Customizable Positioning**: Control where toasts appear on the screen.
- **Automatic Dismissal**: Toasts can automatically disappear after a specified duration.
- **Customizable Styles**: Easily customize the appearance and animations of toasts.

## Installation

To install the package, use npm or yarn:

```bash
npm install toasterdm
```

## Usage

### Importing the Components

Import the `Toaster` component and `toastFD` functions into your React component:

```jsx
import { Toaster, toastFD } from "toasterdm";
```

### Displaying Toasts

You can create and manage toasts using the `toastFD` methods. Here are the available methods:

- `success(msg: string, milliseconds?: number)`: Displays a success toast.
- `info(msg: string, milliseconds?: number)`: Displays an info toast.
- `warning(msg: string, milliseconds?: number)`: Displays a warning toast.
- `error(msg: string, milliseconds?: number)`: Displays an error toast.
- `waiting(msg: string)`: Displays a waiting toast.

```jsx
toastFD.success("This is a success message!", 3000);
toastFD.error("This is an error message!", 5000);
```

#### Rendering the Toaster

Include the `Toaster` component in your application's root component or wherever you'd like to render the toasts:

```jsx
function App() {
  return (
    <div>
      <Toaster position="topCenter" />
      {/* Your other components */}
    </div>
  );
}
```

#### Customizing Position

The `position` prop for the `Toaster` component can be one of the following:

- `"topLeft"`
- `"topCenter"`
- `"topRight"`
- `"bottomLeft"`
- `"bottomCenter"`
- `"bottomRight"`

### Styling

The package comes with built-in CSS styles for the toasts. You can override these styles by customizing the CSS classes:

- `.toasterWrapperFD`
- `.toasterFD`
- `.toasterFDLine`
- `.toasterFDSecondLine`

### `waiting` Method

The `waiting` method is used to display a toast indicating a waiting or loading state. This method returns an ID that can be used to update or remove the toast later. The toast will remain visible until it is manually updated or cleared.

#### Syntax

```jsx
const id = toastFD.waiting(message: string);
```

#### Parameters

- **`message`** (`string`): The text to be displayed in the toast.

#### Returns

- **`id`** (`string`): A unique identifier for the toast, which can be used with other `toastFD` methods to update or remove the toast.

#### Example

To display a waiting toast and later update it, use the following code:

```jsx
const id = toastFD.waiting("Loading, please wait...");

// Later, update the waiting toast to a success toast
toastFD.success("Data loaded successfully!", 3000, id);
```
