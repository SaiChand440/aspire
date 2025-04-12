# Aspire App Challenge

A React Native implementation of the Aspire mobile test with cross-platform support for iOS and Android.

![Demo](https://github.com/user-attachments/assets/063961f2-9263-432d-97e6-cc92ce4ad01e)

## Tech Stack

- React Native
- TypeScript
- Redux + Redux ToolKit
- RTK Query
- Expo Router (React Navigation under the hood)
- Jest for testing
- Mock APIs using QueryFns from RTK

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd aspire
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Install iOS dependencies:
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the Application

### iOS
```bash
# Start Metro bundler
yarn start

# Run on iOS simulator
yarn ios
```

### Android
```bash
# Start Metro bundler
yarn start

# Run on Android emulator
yarn android
```

## Mock API Implementation

The application uses a mock API server implemented within the codebase. The following endpoints are available via queryfns from RTK Query:

- `GET /api/cards` - Retrieve all cards
- `POST /api/cards` - Create a new card
- `PUT /api/cards/:id/freeze` - Toggle card freeze status

Data is persisted using local storage for demonstration purposes.

## Project Structure

```
src/
├── components/      # Reusable UI components
├── screens/         # Screen components
├── redux-store/          # Redux store, actions, and reducers
|──├── CardsSlice/          # RTK Query for apis
├── sample-data/       # Inital Data
├── utils/          # Helper functions
├── models/          # TypeScript type definitions
```

## Testing

Run the test suite:
```bash
yarn test
```

The project includes:
- Unit tests for components

Further Scope: 
- Integration tests via browserStack
- Unit tests for screen level

## Form Validation

The application implements form validation for card creation with the following rules:
- Card name is required and required to have both first and last name
- Automatic generation and validation of card numbers
- Expiration date validation

## Performance Optimizations

- Implemented React.memo for pure components
- Minimized re-renders using proper React hooks usage
- Efficient state management with Redux

## Code Style

The project follows custom ESLint and Prettier configurations for consistent code formatting.

