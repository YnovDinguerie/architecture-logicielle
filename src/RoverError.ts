export class RoverError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// try {
//   // Something that may throw an error
//   throw new AppError('This is a custom error message', 500);
// } catch (error) {
//   if (error instanceof RoverError) {
//     console.error(`Error: ${error.message}`);
//     console.error(`Status Code: ${error.statusCode}`);
//   } else {
//     console.error(`Unexpected error: ${error}`);
//   }
// }
