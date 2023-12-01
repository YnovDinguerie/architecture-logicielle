export default {
    "testEnvironment": "node",
    "extensionsToTreatAsEsm": [".jsx", ".ts", ".tsx"],
    "preset": 'ts-jest',
    "transform": {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    }
}

