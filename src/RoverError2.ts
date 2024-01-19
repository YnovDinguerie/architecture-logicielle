export class RoverError {

    public message: string | null
    public statusCode: number | null

    constructor(message: string | null, statusCode: number | null) {
        this.message = message
        this.statusCode = statusCode
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
