module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@reduxjs/toolkit|react-native|@react-native|immer|react-native-vector-icons)/)',
  ],
};
