export class FilePutInput {
    base64: string;
  
    constructor(initialValues: Partial<FilePutInput> = {}) {
      if (initialValues) {
        for (const key in initialValues) {
          if (initialValues.hasOwnProperty(key)) {
            this[key] = initialValues[key];
          }
        }
      }
    }
  }
  